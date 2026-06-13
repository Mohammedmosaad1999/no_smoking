"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Award,
  Bell,
  Globe,
  MessageCircle,
  Smartphone,
  Sparkles,
  TrendingUp,
  Wallet,
} from "lucide-react";
import {
  healthImprovements,
  milestones,
  progressContent,
  pt,
} from "@/lib/progress-content";
import { at, getSeverityFromScore } from "@/lib/assessment-content";
import type { Locale } from "@/lib/i18n";
import {
  getAssessmentResult,
  getDaysSinceQuit,
  getHealthEvaluations,
  getMoneySaved,
  getNotificationsEnabled,
  getUserProfile,
  saveHealthEvaluation,
  setNotificationsEnabled,
  type UserProfile,
} from "@/lib/user-storage";

type ProgressDashboardProps = {
  locale: Locale;
};

function getCurrentMilestone(days: number) {
  let current = milestones[0];
  for (const m of milestones) {
    if (days >= m.days) current = m;
  }
  return current;
}

function getNextMilestone(days: number) {
  return milestones.find((m) => m.days > days) ?? null;
}

export function ProgressDashboard({ locale }: ProgressDashboardProps) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [assessmentScore, setAssessmentScore] = useState<number | null>(null);
  const [evaluations, setEvaluations] = useState<
    Record<string, "yes" | "no" | null>
  >({});
  const [notifications, setNotifications] = useState(false);

  useEffect(() => {
    setProfile(getUserProfile());
    const assessment = getAssessmentResult();
    setAssessmentScore(assessment?.score ?? null);
    setEvaluations(getHealthEvaluations());
    setNotifications(getNotificationsEnabled());
  }, []);

  if (!profile) {
    return (
      <div className="card-premium mx-auto max-w-xl p-6 text-center sm:p-10">
        <p className="text-slate-700">{pt(progressContent.noProfile, locale)}</p>
        <Link href={`/${locale}/campaign/signup`} className="btn-primary mt-6 w-full sm:w-auto">
          {pt(progressContent.signupLink, locale)}
        </Link>
      </div>
    );
  }

  const days = getDaysSinceQuit(profile.quitDate);
  const currentBadge = getCurrentMilestone(days);
  const nextBadge = getNextMilestone(days);
  const cigarettes = Number(profile.cigarettesPerDay) || 0;
  const cost = Number(profile.costPerCigarette) || 0;
  const saved = getMoneySaved(cigarettes, cost, days);
  const wouldHaveSpent = cigarettes * cost;

  function handleEvaluation(id: string, value: "yes" | "no") {
    saveHealthEvaluation(id, value);
    setEvaluations((prev) => ({ ...prev, [id]: value }));
  }

  function toggleNotifications() {
    const next = !notifications;
    setNotifications(next);
    setNotificationsEnabled(next);
  }

  const notificationItems = [
    { icon: Smartphone, text: progressContent.notifications.phone },
    { icon: MessageCircle, text: progressContent.notifications.messages },
    { icon: Globe, text: progressContent.notifications.access },
    { icon: Sparkles, text: progressContent.notifications.motivational },
  ];

  return (
    <div className="space-y-6 sm:space-y-7">
      {assessmentScore !== null && (
        <div className="card-premium flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-sm font-bold text-slate-500">
              {locale === "en" ? "Your addiction assessment" : "تقييم إدمانك"}
            </p>
            <p className="mt-1 text-xl font-extrabold text-teal-950 sm:text-2xl">
              {at(getSeverityFromScore(assessmentScore).label, locale)}
              <span className="ms-2 text-base font-bold text-slate-400 sm:text-lg">
                ({assessmentScore}/17)
              </span>
            </p>
          </div>
          <Link
            href={`/${locale}/campaign/assessment`}
            className="btn-secondary w-full text-base sm:w-auto"
          >
            {locale === "en" ? "View details" : "عرض التفاصيل"}
          </Link>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
        <div className="card-premium p-5 text-center sm:p-6">
          <TrendingUp className="mx-auto mb-3 h-6 w-6 text-teal-600" />
          <p className="text-sm font-semibold text-slate-500">
            {pt(progressContent.streak, locale)}
          </p>
          <p className="mt-2 text-4xl font-extrabold text-teal-700 sm:text-5xl">{days}</p>
        </div>

        <div className="card-premium p-5 text-center sm:p-6">
          <Award className="mx-auto mb-3 h-6 w-6" style={{ color: currentBadge.color }} />
          <p className="text-sm font-semibold text-slate-500">
            {pt(progressContent.currentBadge, locale)}
          </p>
          <p
            className="mt-2 text-xl font-extrabold sm:text-2xl"
            style={{ color: currentBadge.color }}
          >
            {pt(currentBadge.badge, locale)}
          </p>
        </div>

        <div className="card-premium p-5 text-center sm:p-6">
          <Wallet className="mx-auto mb-3 h-6 w-6 text-emerald-600" />
          <p className="text-sm font-semibold text-slate-500">
            {pt(progressContent.moneySaved, locale)}
          </p>
          <p className="mt-2 text-2xl font-extrabold text-emerald-700 sm:text-3xl">
            {saved.toLocaleString(undefined, { maximumFractionDigits: 0 })}{" "}
            {locale === "ar" ? "ج.م" : "EGP"}
          </p>
        </div>
      </div>

      {nextBadge && (
        <div className="rounded-2xl border border-teal-200/60 bg-teal-50/50 px-6 py-4">
          <p className="text-sm font-medium text-teal-800">
            <span className="font-bold">
              {pt(progressContent.nextMilestone, locale)}:
            </span>{" "}
            {pt(nextBadge.badge, locale)} — {nextBadge.days - days}{" "}
            {pt(progressContent.daysToGo, locale)}
          </p>
        </div>
      )}

      <div className="card-premium p-6">
        <h3 className="font-bold text-slate-800">
          {locale === "en" ? "Money Comparison" : "مقارنة المال"}
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-red-50 p-5 ring-1 ring-red-100">
            <p className="text-sm font-medium text-red-700">
              {pt(progressContent.moneyBefore, locale)} (
              {locale === "en" ? "per day" : "يومياً"})
            </p>
            <p className="mt-1 text-2xl font-extrabold text-red-900">
              {wouldHaveSpent.toLocaleString()}{" "}
              {locale === "ar" ? "ج.م" : "EGP"}
            </p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-5 ring-1 ring-emerald-100">
            <p className="text-sm font-medium text-emerald-700">
              {pt(progressContent.moneyAfter, locale)}
            </p>
            <p className="mt-1 text-2xl font-extrabold text-emerald-900">
              {saved.toLocaleString()} {locale === "ar" ? "ج.م" : "EGP"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {milestones.map((m) => (
          <span
            key={m.days}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
              days >= m.days
                ? "bg-teal-100 text-teal-800 ring-1 ring-teal-200"
                : "bg-slate-100 text-slate-400"
            }`}
          >
            <Award className="h-3 w-3" />
            {m.days}d — {pt(m.badge, locale)}
          </span>
        ))}
      </div>

      <div>
        <h2 className="mb-4 text-xl font-extrabold text-teal-950 sm:mb-6 sm:text-2xl">
          {pt(progressContent.healthTitle, locale)}
        </h2>

        <div className="space-y-3 lg:hidden">
          {healthImprovements.flatMap((group) =>
            group.improvements.map((item, idx) => {
              const evalId = `${group.id}-${idx}`;
              const evalValue = evaluations[evalId];
              return (
                <div key={evalId} className="card-premium p-4 sm:p-5">
                  {idx === 0 && (
                    <p className="text-xs font-bold uppercase tracking-wide text-teal-600">
                      {pt(group.timeframe, locale)}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-slate-800 sm:text-base">
                    {pt(item, locale)}
                  </p>
                  <p className="mt-3 text-xs font-semibold text-slate-500">
                    {pt(progressContent.feelingQuestion, locale)}
                  </p>
                  <div className="mt-2 flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleEvaluation(evalId, "yes")}
                      className={`flex-1 rounded-lg px-3 py-2 text-xs font-bold transition sm:flex-none sm:px-3.5 sm:py-1.5 ${
                        evalValue === "yes"
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-emerald-50"
                      }`}
                    >
                      {pt(progressContent.yes, locale)}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleEvaluation(evalId, "no")}
                      className={`flex-1 rounded-lg px-3 py-2 text-xs font-bold transition sm:flex-none sm:px-3.5 sm:py-1.5 ${
                        evalValue === "no"
                          ? "bg-red-600 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-red-50"
                      }`}
                    >
                      {pt(progressContent.no, locale)}
                    </button>
                  </div>
                </div>
              );
            }),
          )}
        </div>

        <div className="card-premium hidden overflow-hidden lg:block">
          <div className="overflow-x-auto">
            <table className="w-full text-start">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/80">
                  <th className="px-5 py-4 text-sm font-bold text-slate-700">
                    {locale === "en" ? "Timeframe" : "الإطار الزمني"}
                  </th>
                  <th className="px-5 py-4 text-sm font-bold text-slate-700">
                    {locale === "en" ? "Improvement" : "التحسن"}
                  </th>
                  <th className="px-5 py-4 text-sm font-bold text-slate-700">
                    {pt(progressContent.feelingQuestion, locale)}
                  </th>
                </tr>
              </thead>
              <tbody>
                {healthImprovements.flatMap((group) =>
                  group.improvements.map((item, idx) => {
                    const evalId = `${group.id}-${idx}`;
                    const evalValue = evaluations[evalId];
                    return (
                      <tr
                        key={evalId}
                        className="border-b border-slate-50 transition hover:bg-teal-50/30"
                      >
                        <td className="px-5 py-4 text-sm font-medium text-slate-500">
                          {idx === 0 ? pt(group.timeframe, locale) : ""}
                        </td>
                        <td className="px-5 py-4 text-sm text-slate-800">
                          {pt(item, locale)}
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => handleEvaluation(evalId, "yes")}
                              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition ${
                                evalValue === "yes"
                                  ? "bg-emerald-600 text-white"
                                  : "bg-slate-100 text-slate-600 hover:bg-emerald-50"
                              }`}
                            >
                              {pt(progressContent.yes, locale)}
                            </button>
                            <button
                              type="button"
                              onClick={() => handleEvaluation(evalId, "no")}
                              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition ${
                                evalValue === "no"
                                  ? "bg-red-600 text-white"
                                  : "bg-slate-100 text-slate-600 hover:bg-red-50"
                              }`}
                            >
                              {pt(progressContent.no, locale)}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  }),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card-premium border-teal-100 bg-gradient-to-br from-teal-50/50 to-white p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
            <Bell className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-teal-950">
              {pt(progressContent.notifications.title, locale)}
            </h2>
            <p className="text-sm text-slate-600">
              {pt(progressContent.notifications.subtitle, locale)}
            </p>
          </div>
        </div>

        <label className="mt-6 flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={notifications}
            onChange={toggleNotifications}
            className="h-5 w-5 rounded border-teal-300 text-teal-600 focus:ring-teal-500"
          />
          <span className="font-semibold text-slate-700">
            {pt(progressContent.notifications.enable, locale)}
          </span>
        </label>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {notificationItems.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.text.en}
                className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm text-slate-600 ring-1 ring-slate-100"
              >
                <Icon className="h-4 w-4 shrink-0 text-teal-600" />
                {pt(item.text, locale)}
              </li>
            );
          })}
        </ul>

        {notifications && (
          <div className="mt-5 space-y-3">
            {progressContent.notifications.sampleMessages.map((msg, i) => (
              <div
                key={i}
                className="rounded-xl border border-teal-100 bg-white px-5 py-4 text-sm text-slate-700 shadow-sm"
              >
                {pt(msg, locale)}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
