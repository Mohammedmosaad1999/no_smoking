"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  calculateSmokingCosts,
  CIGARETTES_PER_PACK,
  DEFAULT_PACK_PRICE,
  formatEgp,
  formatNumber,
} from "@/lib/calculator";
import { campaignContent, ct } from "@/lib/campaign-content";
import type { Locale } from "@/types";
import { getUserProfile, saveUserProfile } from "@/services/user-storage";

type DamageCalculatorProps = {
  locale: Locale;
};

function clampValue(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export function DamageCalculator({ locale }: DamageCalculatorProps) {
  const [cigarettes, setCigarettes] = useState(20);
  const [packPrice, setPackPrice] = useState(DEFAULT_PACK_PRICE);

  useEffect(() => {
    const profile = getUserProfile();
    if (profile?.cigarettesPerDay) {
      setCigarettes(Number(profile.cigarettesPerDay) || 20);
    }
    if (profile?.costPerCigarette) {
      const perCig =
        Number(profile.costPerCigarette) || DEFAULT_PACK_PRICE / CIGARETTES_PER_PACK;
      setPackPrice(perCig * CIGARETTES_PER_PACK);
    }
  }, []);

  useEffect(() => {
    const profile = getUserProfile();
    if (!profile) return;

    saveUserProfile({
      ...profile,
      cigarettesPerDay: String(cigarettes),
      costPerCigarette: String(packPrice / CIGARETTES_PER_PACK),
    });
  }, [cigarettes, packPrice]);

  const pricePerCigarette = packPrice / CIGARETTES_PER_PACK;
  const costs = calculateSmokingCosts(cigarettes, pricePerCigarette);

  const resultStats = [
    { value: costs.daily, label: ct(campaignContent.calculator.perDay, locale) },
    { value: costs.monthly, label: ct(campaignContent.calculator.perMonth, locale) },
    { value: costs.yearly, label: ct(campaignContent.calculator.perYear, locale) },
    {
      value: costs.cigarettesPerYear,
      label: ct(campaignContent.calculator.cigarettesYear, locale),
      isCount: true,
    },
  ];

  const cigarettesProgress = `${((cigarettes - 1) / 59) * 100}%`;
  const packProgress = `${((packPrice - 20) / 480) * 100}%`;

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch lg:gap-8">
        <div className="calc-inputs-card">
          <div className="space-y-7">
            <div>
              <label className="calc-field-label" htmlFor="cigarettes-slider">
                {ct(campaignContent.calculator.cigarettesLabel, locale)}
              </label>
              <div className="mt-3 flex items-center gap-3 rtl:flex-row-reverse">
                <input
                  id="cigarettes-slider"
                  type="range"
                  min={1}
                  max={60}
                  value={cigarettes}
                  onChange={(e) => setCigarettes(Number(e.target.value))}
                  style={{ "--slider-progress": cigarettesProgress } as React.CSSProperties}
                  className="calc-slider min-w-0 flex-1"
                />
                <input
                  type="number"
                  min={1}
                  max={60}
                  value={cigarettes}
                  onChange={(e) =>
                    setCigarettes(clampValue(Number(e.target.value), 1, 60))
                  }
                  className="calc-value-input"
                  aria-label={ct(campaignContent.calculator.cigarettesLabel, locale)}
                />
              </div>
            </div>

            <div>
              <label className="calc-field-label" htmlFor="pack-slider">
                {ct(campaignContent.calculator.packLabel, locale)}
              </label>
              <div className="mt-3 flex items-center gap-2 rtl:flex-row-reverse sm:gap-3">
                <input
                  id="pack-slider"
                  type="range"
                  min={20}
                  max={500}
                  step={5}
                  value={packPrice}
                  onChange={(e) => setPackPrice(Number(e.target.value))}
                  style={{ "--slider-progress": packProgress } as React.CSSProperties}
                  className="calc-slider min-w-0 flex-1"
                />
                <div className="flex shrink-0 items-center gap-1.5">
                  <input
                    type="number"
                    min={20}
                    max={500}
                    step={5}
                    value={packPrice}
                    onChange={(e) =>
                      setPackPrice(clampValue(Number(e.target.value), 20, 500))
                    }
                    className="calc-value-input calc-value-input-wide"
                    aria-label={ct(campaignContent.calculator.packLabel, locale)}
                  />
                  <span className="text-xs font-bold text-[#1a4338]">
                    {locale === "ar" ? "جنيه" : "EGP"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="calc-saved-note mt-7">
            {ct(campaignContent.calculator.savedNote, locale)}
          </p>
        </div>

        <div className="calc-results-card">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {resultStats.map((stat) => (
              <div key={stat.label} className="calc-stat-tile">
                <p className="calc-stat-value">
                  {stat.isCount
                    ? formatNumber(stat.value)
                    : formatEgp(stat.value, locale)}
                </p>
                <p className="calc-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="calc-highlight mt-5">
            <p className="calc-stat-value">{formatEgp(costs.fiveYears, locale)}</p>
            <p className="calc-stat-label mt-1.5">
              {ct(campaignContent.calculator.fiveYears, locale)}
            </p>
          </div>
        </div>
      </div>

      <div className="action-row">
        <Link href={`/${locale}/campaign/treatment`} className="btn-primary">
          {ct(campaignContent.calculator.nextTreatment, locale)}
          <ArrowRight
            className={`h-5 w-5 ${locale === "ar" ? "rotate-180" : ""}`}
          />
        </Link>
        <Link href={`/${locale}/campaign/progress`} className="btn-secondary">
          {ct(campaignContent.calculator.nextProgress, locale)}
        </Link>
      </div>
    </div>
  );
}
