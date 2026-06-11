"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, ClipboardList } from "lucide-react";
import {
  assessmentContent,
  at,
  getCigaretteBandPoints,
  getSeverityFromScore,
} from "@/lib/assessment-content";
import type { Locale } from "@/lib/i18n";
import {
  getAssessmentResult,
  getUserProfile,
  saveAssessmentResult,
} from "@/lib/user-storage";

type AddictionAssessmentProps = {
  locale: Locale;
};

export function AddictionAssessment({ locale }: AddictionAssessmentProps) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const saved = getAssessmentResult();
    if (saved) {
      setAnswers(saved.answers);
      setScore(saved.score);
      setShowResult(true);
      return;
    }

    const profile = getUserProfile();
    if (profile?.cigarettesPerDay) {
      const count = Number(profile.cigarettesPerDay);
      if (count > 0) {
        setAnswers((prev) => ({
          ...prev,
          "cigarettes-per-day": getCigaretteBandPoints(count),
        }));
      }
    }
  }, []);

  function selectAnswer(questionId: string, points: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: points }));
    setShowResult(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const total = Object.values(answers).reduce((sum, v) => sum + v, 0);
    setScore(total);
    saveAssessmentResult({ score: total, answers });
    setShowResult(true);
  }

  const allAnswered =
    assessmentContent.questions.every((q) => answers[q.id] !== undefined);

  const severity = getSeverityFromScore(score);

  if (showResult && allAnswered) {
    return (
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="card-premium overflow-hidden">
          <div className="bg-gradient-to-br from-teal-700 to-emerald-800 px-6 py-8 text-white sm:px-10">
            <CheckCircle2 className="mb-3 h-10 w-10" />
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              {at(assessmentContent.resultTitle, locale)}
            </h2>
          </div>

          <div className="space-y-6 p-6 sm:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-6 text-center ring-1 ring-slate-200">
                <p className="text-base font-bold text-slate-500">
                  {at(assessmentContent.yourScore, locale)}
                </p>
                <p className="mt-2 text-5xl font-extrabold text-teal-700">
                  {score}
                  <span className="text-2xl text-slate-400"> / 17</span>
                </p>
              </div>
              <div
                className={`rounded-2xl border-2 p-6 text-center ${severity.color}`}
              >
                <p className="text-base font-bold opacity-80">
                  {at(assessmentContent.severity, locale)}
                </p>
                <p className="mt-2 text-3xl font-extrabold">
                  {at(severity.label, locale)}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-teal-50 p-6 ring-1 ring-teal-100">
              <p className="font-extrabold text-teal-900">
                {at(assessmentContent.recommendation, locale)}
              </p>
              <p className="mt-3 text-lg leading-relaxed text-slate-700">
                {at(severity.interpretation, locale)}
              </p>
            </div>

            <button
              type="button"
              onClick={() => router.push(`/${locale}/campaign/importance`)}
              className="btn-primary w-full py-4 text-lg"
            >
              {at(assessmentContent.continue, locale)}
              <ArrowRight
                className={`h-5 w-5 ${locale === "ar" ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>

        <ScoringTable locale={locale} highlightScore={score} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <form onSubmit={handleSubmit} className="card-premium overflow-hidden">
        <div className="border-b border-teal-100 bg-teal-50/50 px-6 py-6 sm:px-10">
          <div className="flex items-center gap-3">
            <ClipboardList className="h-8 w-8 text-teal-700" />
            <div>
              <p className="font-bold text-teal-700">
                {at(assessmentContent.step, locale)}
              </p>
              <h2 className="text-xl font-extrabold text-teal-950 sm:text-2xl">
                {at(assessmentContent.title, locale)}
              </h2>
            </div>
          </div>
          <p className="mt-3 text-lg text-slate-600">
            {at(assessmentContent.subtitle, locale)}
          </p>
        </div>

        <div className="space-y-8 p-6 sm:p-10">
          {assessmentContent.questions.map((q, index) => (
            <fieldset key={q.id}>
              <legend className="mb-4 text-lg font-extrabold text-slate-800">
                {index + 1}. {at(q.question, locale)}
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {q.options.map((opt) => {
                  const selected = answers[q.id] === opt.points;
                  return (
                    <label
                      key={opt.label.en}
                      className={`flex cursor-pointer items-center rounded-xl border-2 px-4 py-4 text-base font-bold transition ${
                        selected
                          ? "border-teal-600 bg-teal-50 text-teal-900"
                          : "border-slate-200 bg-white text-slate-700 hover:border-teal-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        checked={selected}
                        onChange={() => selectAnswer(q.id, opt.points)}
                        className="sr-only"
                        required
                      />
                      {at(opt.label, locale)}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}

          <button
            type="submit"
            disabled={!allAnswered}
            className="btn-primary w-full py-4 text-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {at(assessmentContent.submit, locale)}
          </button>
        </div>
      </form>

      <ScoringTable locale={locale} />
    </div>
  );
}

function ScoringTable({
  locale,
  highlightScore,
}: {
  locale: Locale;
  highlightScore?: number;
}) {
  return (
    <div className="card-premium overflow-hidden">
      <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
        <h3 className="text-lg font-extrabold text-slate-800">
          {at(assessmentContent.scoringTitle, locale)}
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-start">
          <thead>
            <tr className="border-b border-slate-100 bg-white">
              <th className="px-6 py-4 text-base font-extrabold text-slate-700">
                {locale === "en" ? "Total Score" : "المجموع"}
              </th>
              <th className="px-6 py-4 text-base font-extrabold text-slate-700">
                {locale === "en" ? "Addiction Severity" : "شدة الإدمان"}
              </th>
            </tr>
          </thead>
          <tbody>
            {assessmentContent.scoringTable.map((row) => {
              const [min, max] = row.range.split("–").map(Number);
              const isActive =
                highlightScore !== undefined &&
                highlightScore >= min &&
                highlightScore <= max;
              return (
                <tr
                  key={row.range}
                  className={`border-b border-slate-50 ${
                    isActive ? "bg-teal-50 font-bold" : ""
                  }`}
                >
                  <td className="px-6 py-4 text-base text-slate-700">
                    {row.range}
                  </td>
                  <td className="px-6 py-4 text-base text-slate-800">
                    {at(row.label, locale)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
