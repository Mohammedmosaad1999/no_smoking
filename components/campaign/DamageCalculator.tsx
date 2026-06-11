"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Cigarette,
  Coins,
  PiggyBank,
  TrendingDown,
} from "lucide-react";
import {
  calculateSmokingCosts,
  DEFAULT_CIGARETTE_PRICE,
  formatEgp,
} from "@/lib/calculator";
import { campaignContent, ct } from "@/lib/campaign-content";
import type { Locale } from "@/lib/i18n";
import { getUserProfile } from "@/lib/user-storage";

type DamageCalculatorProps = {
  locale: Locale;
};

export function DamageCalculator({ locale }: DamageCalculatorProps) {
  const [cigarettes, setCigarettes] = useState(20);
  const [cost, setCost] = useState(DEFAULT_CIGARETTE_PRICE);

  useEffect(() => {
    const profile = getUserProfile();
    if (profile) {
      if (profile.cigarettesPerDay) {
        setCigarettes(Number(profile.cigarettesPerDay) || 20);
      }
      if (profile.costPerCigarette) {
        setCost(Number(profile.costPerCigarette) || DEFAULT_CIGARETTE_PRICE);
      }
    }
  }, []);

  const costs = calculateSmokingCosts(cigarettes, cost);

  const costStats = [
    {
      label: ct(campaignContent.calculator.dailyCost, locale),
      value: formatEgp(costs.daily, locale),
      icon: Coins,
      bg: "bg-amber-50 border-amber-200 text-amber-900",
    },
    {
      label: ct(campaignContent.calculator.monthlyCost, locale),
      value: formatEgp(costs.monthly, locale),
      icon: Calculator,
      bg: "bg-orange-50 border-orange-200 text-orange-900",
    },
    {
      label: ct(campaignContent.calculator.yearlyCost, locale),
      value: formatEgp(costs.yearly, locale),
      icon: Coins,
      bg: "bg-red-50 border-red-200 text-red-900",
    },
    {
      label: ct(campaignContent.calculator.tenYearsCost, locale),
      value: formatEgp(costs.tenYears, locale),
      icon: Cigarette,
      bg: "bg-rose-50 border-rose-200 text-rose-900",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-10">
      <div className="card-premium p-6 sm:p-8">
        <p className="text-base font-bold text-teal-700">
          {ct(campaignContent.calculator.priceNote, locale)}
        </p>
        <p className="mt-2 text-lg text-slate-600">
          {ct(campaignContent.calculator.example, locale)}
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="input-label flex items-center gap-2">
              <Cigarette className="h-5 w-5 text-teal-600" />
              {ct(campaignContent.calculator.cigarettesLabel, locale)}
            </span>
            <input
              type="number"
              min={1}
              value={cigarettes}
              onChange={(e) => setCigarettes(Number(e.target.value) || 0)}
              className="input-field text-xl font-bold"
            />
          </label>

          <label className="block">
            <span className="input-label flex items-center gap-2">
              <Coins className="h-5 w-5 text-teal-600" />
              {ct(campaignContent.calculator.costLabel, locale)}
            </span>
            <input
              type="number"
              min={1}
              step={0.5}
              value={cost}
              onChange={(e) => setCost(Number(e.target.value) || DEFAULT_CIGARETTE_PRICE)}
              className="input-field text-xl font-bold"
            />
          </label>
        </div>
      </div>

      <div>
        <h3 className="mb-5 text-xl font-extrabold text-slate-800">
          {locale === "en" ? "What smoking costs you" : "التدخين بيكلفك كام؟"}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {costStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`stat-card border-2 ${stat.bg}`}
              >
                <Icon className="mx-auto h-7 w-7 opacity-80" />
                <p className="stat-label mt-2">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card-premium overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-6 py-5 sm:px-8">
          <h3 className="flex items-center gap-2 text-xl font-extrabold text-white">
            <PiggyBank className="h-6 w-6" />
            {ct(campaignContent.calculator.savingsTitle, locale)}
          </h3>
        </div>

        <div className="grid gap-0 sm:grid-cols-2">
          <div className="border-b border-slate-100 p-6 sm:border-b-0 sm:border-e sm:p-8">
            <div className="flex items-center gap-2 text-lg font-extrabold text-emerald-700">
              <TrendingDown className="h-5 w-5" />
              {ct(campaignContent.calculator.saveIfQuit, locale)}
            </div>
            <div className="mt-5 space-y-4">
              <div className="rounded-xl bg-emerald-50 p-4">
                <p className="text-base font-semibold text-emerald-800">
                  {ct(campaignContent.calculator.perYear, locale)}
                </p>
                <p className="mt-1 text-2xl font-extrabold text-emerald-700">
                  {formatEgp(costs.saveIfQuitYearly, locale)}
                </p>
              </div>
              <div className="rounded-xl bg-emerald-50/60 p-4">
                <p className="text-base font-semibold text-emerald-800">
                  {ct(campaignContent.calculator.perMonth, locale)}
                </p>
                <p className="mt-1 text-xl font-extrabold text-emerald-700">
                  {formatEgp(costs.saveIfQuitMonthly, locale)}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 text-lg font-extrabold text-teal-700">
              <TrendingDown className="h-5 w-5" />
              {ct(campaignContent.calculator.saveIfHalf, locale)}
            </div>
            <div className="mt-5 space-y-4">
              <div className="rounded-xl bg-teal-50 p-4">
                <p className="text-base font-semibold text-teal-800">
                  {ct(campaignContent.calculator.perYear, locale)}
                </p>
                <p className="mt-1 text-2xl font-extrabold text-teal-700">
                  {formatEgp(costs.saveIfHalfYearly, locale)}
                </p>
              </div>
              <div className="rounded-xl bg-teal-50/60 p-4">
                <p className="text-base font-semibold text-teal-800">
                  {ct(campaignContent.calculator.perMonth, locale)}
                </p>
                <p className="mt-1 text-xl font-extrabold text-teal-700">
                  {formatEgp(costs.saveIfHalfMonthly, locale)}
                </p>
              </div>
            </div>
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
