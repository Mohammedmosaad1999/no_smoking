import type { Locale } from "./i18n";

type Bilingual = Record<Locale, string>;

export type AssessmentOption = {
  label: Bilingual;
  points: number;
};

export type AssessmentQuestion = {
  id: string;
  question: Bilingual;
  options: AssessmentOption[];
};

export const assessmentContent = {
  title: {
    en: "Nicotine Dependence Assessment",
    ar: "تقييم الاعتماد على النيكوتين",
  },
  subtitle: {
    en: "Answer these questions to understand your addiction level and get personalized guidance.",
    ar: "أجب على هذه الأسئلة لفهم مستوى إدمانك والحصول على توجيه مناسب.",
  },
  step: {
    en: "Step 2 of the campaign",
    ar: "الخطوة 2 من الحملة",
  },
  submit: { en: "See My Result", ar: "اعرض نتيجتي" },
  continue: { en: "Continue to Campaign", ar: "متابعة للحملة" },
  yourScore: { en: "Your Total Score", ar: "مجموع درجاتك" },
  severity: { en: "Addiction Severity", ar: "شدة الإدمان" },
  scoringTitle: { en: "Scoring Guide", ar: "دليل التقييم" },
  resultTitle: { en: "Your Assessment Result", ar: "نتيجة تقييمك" },
  recommendation: { en: "What this means for you", ar: "ماذا يعني هذا بالنسبة لك" },
  questions: [
    {
      id: "first-cigarette",
      question: {
        en: "How soon after waking do you smoke your first cigarette?",
        ar: "بعد كم من الاستيقاظ تدخن أول سيجارة؟",
      },
      options: [
        { label: { en: "Within 5 minutes", ar: "خلال 5 دقائق" }, points: 3 },
        { label: { en: "6–30 minutes", ar: "6–30 دقيقة" }, points: 2 },
        { label: { en: "31–60 minutes", ar: "31–60 دقيقة" }, points: 1 },
        { label: { en: "After 60 minutes", ar: "بعد 60 دقيقة" }, points: 0 },
      ],
    },
    {
      id: "forbidden-places",
      question: {
        en: "Do you find it difficult to refrain from smoking in places where it is forbidden?",
        ar: "هل تجد صعوبة في الامتناع عن التدخين في الأماكن الممنوعة؟",
      },
      options: [
        { label: { en: "Yes", ar: "نعم" }, points: 1 },
        { label: { en: "No", ar: "لا" }, points: 0 },
      ],
    },
    {
      id: "hardest-cigarette",
      question: {
        en: "Which cigarette would you hate most to give up?",
        ar: "أي سيجارة تكره أكثر أن تتخلى عنها؟",
      },
      options: [
        { label: { en: "The first one in the morning", ar: "أول واحدة في الصباح" }, points: 1 },
        { label: { en: "Any other", ar: "أي سيجارة أخرى" }, points: 0 },
      ],
    },
    {
      id: "cigarettes-per-day",
      question: {
        en: "How many cigarettes do you smoke per day?",
        ar: "كم سيجارة تدخن يومياً؟",
      },
      options: [
        { label: { en: "10 or less", ar: "10 أو أقل" }, points: 0 },
        { label: { en: "11–20", ar: "11–20" }, points: 1 },
        { label: { en: "21–30", ar: "21–30" }, points: 2 },
        { label: { en: "31 or more", ar: "31 أو أكثر" }, points: 3 },
      ],
    },
    {
      id: "morning-more",
      question: {
        en: "Do you smoke more during the first hours after waking than during the rest of the day?",
        ar: "هل تدخن أكثر في الساعات الأولى بعد الاستيقاظ؟",
      },
      options: [
        { label: { en: "Yes", ar: "نعم" }, points: 1 },
        { label: { en: "No", ar: "لا" }, points: 0 },
      ],
    },
    {
      id: "smoke-when-ill",
      question: {
        en: "Do you smoke even when you are so ill that you stay in bed most of the day?",
        ar: "هل تدخن حتى عندما تكون مريضاً وتبقى في الفراش؟",
      },
      options: [
        { label: { en: "Yes", ar: "نعم" }, points: 1 },
        { label: { en: "No", ar: "لا" }, points: 0 },
      ],
    },
    {
      id: "cravings",
      question: {
        en: "How strong are your cravings for cigarettes?",
        ar: "ما مدى قوة رغبتك الشديدة في التدخين؟",
      },
      options: [
        { label: { en: "None or mild", ar: "لا توجد أو خفيفة" }, points: 0 },
        { label: { en: "Moderate", ar: "متوسطة" }, points: 1 },
        { label: { en: "Strong", ar: "قوية" }, points: 2 },
        { label: { en: "Very strong", ar: "قوية جداً" }, points: 3 },
      ],
    },
    {
      id: "quit-attempts",
      question: {
        en: "How many times have you tried to quit and failed?",
        ar: "كم مرة حاولت الإقلاع وفشلت؟",
      },
      options: [
        { label: { en: "Never tried", ar: "لم أحاول" }, points: 0 },
        { label: { en: "1–2 times", ar: "1–2 مرة" }, points: 1 },
        { label: { en: "3 or more times", ar: "3 مرات أو أكثر" }, points: 2 },
      ],
    },
    {
      id: "unwanted-smoking",
      question: {
        en: "Do you smoke even when you don't really want to?",
        ar: "هل تدخن حتى عندما لا تريد ذلك حقاً؟",
      },
      options: [
        { label: { en: "Never", ar: "أبداً" }, points: 0 },
        { label: { en: "Sometimes", ar: "أحياناً" }, points: 1 },
        { label: { en: "Often", ar: "كثيراً" }, points: 2 },
      ],
    },
  ] as AssessmentQuestion[],
  severityLevels: [
    {
      min: 0,
      max: 3,
      label: { en: "Very Mild", ar: "خفيف جداً" },
      interpretation: {
        en: "Smoking is more habit-driven than dependence-driven.",
        ar: "التدخين أكثر عادةً من اعتماد حقيقي على النيكوتين.",
      },
      color: "bg-emerald-100 text-emerald-800 border-emerald-200",
    },
    {
      min: 4,
      max: 6,
      label: { en: "Mild", ar: "خفيف" },
      interpretation: {
        en: "Smoking is more habit-driven than dependence-driven.",
        ar: "التدخين غالباً عادة أكثر من إدمان، لكن يبدأ الاعتماد في التكون.",
      },
      color: "bg-teal-100 text-teal-800 border-teal-200",
    },
    {
      min: 7,
      max: 10,
      label: { en: "Moderate", ar: "متوسط" },
      interpretation: {
        en: "Noticeable physical and psychological dependence.",
        ar: "اعتماد جسدي ونفسي ملحوظ على النيكوتين.",
      },
      color: "bg-amber-100 text-amber-900 border-amber-200",
    },
    {
      min: 11,
      max: 14,
      label: { en: "Severe", ar: "شديد" },
      interpretation: {
        en: "Strong nicotine dependence with frequent cravings.",
        ar: "اعتماد قوي على النيكوتين مع رغبة شديدة متكررة.",
      },
      color: "bg-orange-100 text-orange-900 border-orange-200",
    },
    {
      min: 15,
      max: 17,
      label: { en: "Very Severe", ar: "شديد جداً" },
      interpretation: {
        en: "High risk of withdrawal symptoms and difficulty quitting without structured support.",
        ar: "خطر عالٍ لأعراض الانسحاب وصعوبة الإقلاع بدون دعم منظم.",
      },
      color: "bg-red-100 text-red-900 border-red-200",
    },
  ],
  scoringTable: [
    { range: "0–3", label: { en: "Very Mild", ar: "خفيف جداً" } },
    { range: "4–6", label: { en: "Mild", ar: "خفيف" } },
    { range: "7–10", label: { en: "Moderate", ar: "متوسط" } },
    { range: "11–14", label: { en: "Severe", ar: "شديد" } },
    { range: "15–17", label: { en: "Very Severe", ar: "شديد جداً" } },
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
