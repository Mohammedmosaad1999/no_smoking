import type { Locale, Bilingual, AssessmentQuestion } from "@/types";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

export const assessmentContent = {
  title: {
    en: en.assessmentContent.title,
    ar: ar.assessmentContent.title,
  },
  subtitle: {
    en: en.assessmentContent.subtitle,
    ar: ar.assessmentContent.subtitle,
  },
  step: {
    en: en.assessmentContent.step,
    ar: ar.assessmentContent.step,
  },
  submit: { en: en.assessmentContent.submit, ar: ar.assessmentContent.submit },
  continue: { en: en.assessmentContent.continue, ar: ar.assessmentContent.continue },
  yourScore: { en: en.assessmentContent.yourScore, ar: ar.assessmentContent.yourScore },
  severity: { en: en.assessmentContent.severity, ar: ar.assessmentContent.severity },
  scoringTitle: { en: en.assessmentContent.scoringTitle, ar: ar.assessmentContent.scoringTitle },
  resultTitle: { en: en.assessmentContent.resultTitle, ar: ar.assessmentContent.resultTitle },
  recommendation: { en: en.assessmentContent.recommendation, ar: ar.assessmentContent.recommendation },
  questions: [
    {
      id: "first-cigarette",
      question: {
        en: en.assessmentContent.questions.firstCigarette.question,
        ar: ar.assessmentContent.questions.firstCigarette.question,
      },
      options: [
        { label: { en: en.assessmentContent.questions.firstCigarette.options[0], ar: ar.assessmentContent.questions.firstCigarette.options[0] }, points: 3 },
        { label: { en: en.assessmentContent.questions.firstCigarette.options[1], ar: ar.assessmentContent.questions.firstCigarette.options[1] }, points: 2 },
        { label: { en: en.assessmentContent.questions.firstCigarette.options[2], ar: ar.assessmentContent.questions.firstCigarette.options[2] }, points: 1 },
        { label: { en: en.assessmentContent.questions.firstCigarette.options[3], ar: ar.assessmentContent.questions.firstCigarette.options[3] }, points: 0 },
      ],
    },
    {
      id: "forbidden-places",
      question: {
        en: en.assessmentContent.questions.forbiddenPlaces.question,
        ar: ar.assessmentContent.questions.forbiddenPlaces.question,
      },
      options: [
        { label: { en: en.assessmentContent.questions.forbiddenPlaces.options[0], ar: ar.assessmentContent.questions.forbiddenPlaces.options[0] }, points: 1 },
        { label: { en: en.assessmentContent.questions.forbiddenPlaces.options[1], ar: ar.assessmentContent.questions.forbiddenPlaces.options[1] }, points: 0 },
      ],
    },
    {
      id: "hardest-cigarette",
      question: {
        en: en.assessmentContent.questions.hardestCigarette.question,
        ar: ar.assessmentContent.questions.hardestCigarette.question,
      },
      options: [
        { label: { en: en.assessmentContent.questions.hardestCigarette.options[0], ar: ar.assessmentContent.questions.hardestCigarette.options[0] }, points: 1 },
        { label: { en: en.assessmentContent.questions.hardestCigarette.options[1], ar: ar.assessmentContent.questions.hardestCigarette.options[1] }, points: 0 },
      ],
    },
    {
      id: "cigarettes-per-day",
      question: {
        en: en.assessmentContent.questions.cigarettesPerDay.question,
        ar: ar.assessmentContent.questions.cigarettesPerDay.question,
      },
      options: [
        { label: { en: en.assessmentContent.questions.cigarettesPerDay.options[0], ar: ar.assessmentContent.questions.cigarettesPerDay.options[0] }, points: 0 },
        { label: { en: en.assessmentContent.questions.cigarettesPerDay.options[1], ar: ar.assessmentContent.questions.cigarettesPerDay.options[1] }, points: 1 },
        { label: { en: en.assessmentContent.questions.cigarettesPerDay.options[2], ar: ar.assessmentContent.questions.cigarettesPerDay.options[2] }, points: 2 },
        { label: { en: en.assessmentContent.questions.cigarettesPerDay.options[3], ar: ar.assessmentContent.questions.cigarettesPerDay.options[3] }, points: 3 },
      ],
    },
    {
      id: "morning-more",
      question: {
        en: en.assessmentContent.questions.morningMore.question,
        ar: ar.assessmentContent.questions.morningMore.question,
      },
      options: [
        { label: { en: en.assessmentContent.questions.morningMore.options[0], ar: ar.assessmentContent.questions.morningMore.options[0] }, points: 1 },
        { label: { en: en.assessmentContent.questions.morningMore.options[1], ar: ar.assessmentContent.questions.morningMore.options[1] }, points: 0 },
      ],
    },
    {
      id: "smoke-when-ill",
      question: {
        en: en.assessmentContent.questions.smokeWhenIll.question,
        ar: ar.assessmentContent.questions.smokeWhenIll.question,
      },
      options: [
        { label: { en: en.assessmentContent.questions.smokeWhenIll.options[0], ar: ar.assessmentContent.questions.smokeWhenIll.options[0] }, points: 1 },
        { label: { en: en.assessmentContent.questions.smokeWhenIll.options[1], ar: ar.assessmentContent.questions.smokeWhenIll.options[1] }, points: 0 },
      ],
    },
    {
      id: "cravings",
      question: {
        en: en.assessmentContent.questions.cravings.question,
        ar: ar.assessmentContent.questions.cravings.question,
      },
      options: [
        { label: { en: en.assessmentContent.questions.cravings.options[0], ar: ar.assessmentContent.questions.cravings.options[0] }, points: 0 },
        { label: { en: en.assessmentContent.questions.cravings.options[1], ar: ar.assessmentContent.questions.cravings.options[1] }, points: 1 },
        { label: { en: en.assessmentContent.questions.cravings.options[2], ar: ar.assessmentContent.questions.cravings.options[2] }, points: 2 },
        { label: { en: en.assessmentContent.questions.cravings.options[3], ar: ar.assessmentContent.questions.cravings.options[3] }, points: 3 },
      ],
    },
    {
      id: "quit-attempts",
      question: {
        en: en.assessmentContent.questions.quitAttempts.question,
        ar: ar.assessmentContent.questions.quitAttempts.question,
      },
      options: [
        { label: { en: en.assessmentContent.questions.quitAttempts.options[0], ar: ar.assessmentContent.questions.quitAttempts.options[0] }, points: 0 },
        { label: { en: en.assessmentContent.questions.quitAttempts.options[1], ar: ar.assessmentContent.questions.quitAttempts.options[1] }, points: 1 },
        { label: { en: en.assessmentContent.questions.quitAttempts.options[2], ar: ar.assessmentContent.questions.quitAttempts.options[2] }, points: 2 },
      ],
    },
    {
      id: "unwanted-smoking",
      question: {
        en: en.assessmentContent.questions.unwantedSmoking.question,
        ar: ar.assessmentContent.questions.unwantedSmoking.question,
      },
      options: [
        { label: { en: en.assessmentContent.questions.unwantedSmoking.options[0], ar: ar.assessmentContent.questions.unwantedSmoking.options[0] }, points: 0 },
        { label: { en: en.assessmentContent.questions.unwantedSmoking.options[1], ar: ar.assessmentContent.questions.unwantedSmoking.options[1] }, points: 1 },
        { label: { en: en.assessmentContent.questions.unwantedSmoking.options[2], ar: ar.assessmentContent.questions.unwantedSmoking.options[2] }, points: 2 },
      ],
    },
  ] as AssessmentQuestion[],
  severityLevels: [
    {
      min: 0,
      max: 3,
      label: { en: en.assessmentContent.severityLevels.veryMild.label, ar: ar.assessmentContent.severityLevels.veryMild.label },
      interpretation: {
        en: en.assessmentContent.severityLevels.veryMild.interpretation,
        ar: ar.assessmentContent.severityLevels.veryMild.interpretation,
      },
      color: "bg-emerald-100 text-emerald-800 border-emerald-200",
    },
    {
      min: 4,
      max: 6,
      label: { en: en.assessmentContent.severityLevels.mild.label, ar: ar.assessmentContent.severityLevels.mild.label },
      interpretation: {
        en: en.assessmentContent.severityLevels.mild.interpretation,
        ar: ar.assessmentContent.severityLevels.mild.interpretation,
      },
      color: "bg-teal-100 text-teal-800 border-teal-200",
    },
    {
      min: 7,
      max: 10,
      label: { en: en.assessmentContent.severityLevels.moderate.label, ar: ar.assessmentContent.severityLevels.moderate.label },
      interpretation: {
        en: en.assessmentContent.severityLevels.moderate.interpretation,
        ar: ar.assessmentContent.severityLevels.moderate.interpretation,
      },
      color: "bg-amber-100 text-amber-900 border-amber-200",
    },
    {
      min: 11,
      max: 14,
      label: { en: en.assessmentContent.severityLevels.severe.label, ar: ar.assessmentContent.severityLevels.severe.label },
      interpretation: {
        en: en.assessmentContent.severityLevels.severe.interpretation,
        ar: ar.assessmentContent.severityLevels.severe.interpretation,
      },
      color: "bg-orange-100 text-orange-900 border-orange-200",
    },
    {
      min: 15,
      max: 17,
      label: { en: en.assessmentContent.severityLevels.verySevere.label, ar: ar.assessmentContent.severityLevels.verySevere.label },
      interpretation: {
        en: en.assessmentContent.severityLevels.verySevere.interpretation,
        ar: ar.assessmentContent.severityLevels.verySevere.interpretation,
      },
      color: "bg-red-100 text-red-900 border-red-200",
    },
  ],
  scoringTable: [
    { range: "0–3", label: { en: en.assessmentContent.scoringTable.veryMild, ar: ar.assessmentContent.scoringTable.veryMild } },
    { range: "4–6", label: { en: en.assessmentContent.scoringTable.mild, ar: ar.assessmentContent.scoringTable.mild } },
    { range: "7–10", label: { en: en.assessmentContent.scoringTable.moderate, ar: ar.assessmentContent.scoringTable.moderate } },
    { range: "11–14", label: { en: en.assessmentContent.scoringTable.severe, ar: ar.assessmentContent.scoringTable.severe } },
    { range: "15–17", label: { en: en.assessmentContent.scoringTable.verySevere, ar: ar.assessmentContent.scoringTable.verySevere } },
  ],
} as const;

export function at(record: Bilingual, locale: Locale): string {
  return record[locale];
}

export function getSeverityFromScore(score: number) {
  return (
    assessmentContent.severityLevels.find(
      (level) => score >= level.min && score <= level.max
    ) ?? assessmentContent.severityLevels[0]
  );
}

export function getCigaretteBandPoints(count: number): number {
  if (count <= 10) return 0;
  if (count <= 20) return 1;
  if (count <= 30) return 2;
  return 3;
}
