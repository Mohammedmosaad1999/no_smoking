import type { Locale } from "./i18n";

type Bilingual = Record<Locale, string>;

export type Milestone = {
  days: number;
  badge: Bilingual;
  color: string;
};

export const milestones: Milestone[] = [
  { days: 1, badge: { en: "Bronze", ar: "برونزي" }, color: "#cd7f32" },
  { days: 3, badge: { en: "Silver", ar: "فضي" }, color: "#c0c0c0" },
  { days: 7, badge: { en: "Gold", ar: "ذهبي" }, color: "#ffd700" },
  { days: 30, badge: { en: "Diamond", ar: "ماسي" }, color: "#b9f2ff" },
  { days: 90, badge: { en: "Platinum", ar: "بلاتيني" }, color: "#e5e4e2" },
  { days: 180, badge: { en: "Champion", ar: "بطل" }, color: "#50c878" },
  { days: 365, badge: { en: "Conqueror", ar: "فاتح" }, color: "#4169e1" },
  { days: 730, badge: { en: "Master", ar: "خبير" }, color: "#9932cc" },
  { days: 1095, badge: { en: "Reclaimer", ar: "مستعيد" }, color: "#008080" },
];

export type HealthImprovement = {
  id: string;
  timeframe: Bilingual;
  improvements: Bilingual[];
};

export const healthImprovements: HealthImprovement[] = [
  {
    id: "20min",
    timeframe: { en: "After 20 Minutes", ar: "بعد 20 دقيقة" },
    improvements: [
      {
        en: "Heart rate begins to return to normal",
        ar: "يبدأ معدل ضربات القلب في العودة إلى طبيعته",
      },
      {
        en: "Blood pressure starts to decrease",
        ar: "يبدأ ضغط الدم في الانخفاض",
      },
      {
        en: "Blood circulation improves",
        ar: "يتحسن الدورة الدموية",
      },
    ],
  },
  {
    id: "8-12h",
    timeframe: { en: "After 8–12 Hours", ar: "بعد 8–12 ساعة" },
    improvements: [
      {
        en: "Carbon monoxide levels in the blood drop",
        ar: "تنخفض مستويات أول أكسيد الكربون في الدم",
      },
      {
        en: "Oxygen levels return closer to normal",
        ar: "تعود مستويات الأكسجين إلى طبيعتها",
      },
      {
        en: "The body starts removing toxic gases from cigarettes",
        ar: "يبدأ الجسم في إزالة الغازات السامة من السجائر",
      },
    ],
  },
  {
    id: "1day",
    timeframe: { en: "After 24 Hours (1 Day)", ar: "بعد 24 ساعة (يوم واحد)" },
    improvements: [
      {
        en: "Risk of heart attack begins to decrease",
        ar: "يبدأ خطر الإصابة بنوبة قلبية في الانخفاض",
      },
      {
        en: "Nicotine starts leaving the body",
        ar: "يبدأ النيكوتين في مغادرة الجسم",
      },
      {
        en: "Lungs begin clearing mucus and smoke debris",
        ar: "تبدأ الرئتان في تنظيف المخاط وبقايا الدخان",
      },
    ],
  },
  {
    id: "2days",
    timeframe: { en: "After 48 Hours (2 Days)", ar: "بعد 48 ساعة (يومان)" },
    improvements: [
      {
        en: "Sense of taste improves",
        ar: "يتحسن حاسة التذوق",
      },
      {
        en: "Sense of smell becomes stronger",
        ar: "تصبح حاسة الشم أقوى",
      },
      {
        en: "Nerve endings begin to recover",
        ar: "تبدأ النهايات العصبية في التعافي",
      },
    ],
  },
  {
    id: "2weeks-3months",
    timeframe: {
      en: "After 2 Weeks to 3 Months",
      ar: "بعد أسبوعين إلى 3 أشهر",
    },
    improvements: [
      {
        en: "Blood circulation improves significantly",
        ar: "تتحسن الدورة الدموية بشكل كبير",
      },
      {
        en: "Lung function increases",
        ar: "تزداد وظائف الرئة",
      },
      {
        en: "Walking and exercise become easier",
        ar: "يصبح المشي والتمرين أسهل",
      },
      {
        en: "Coughing and shortness of breath decrease",
        ar: "يقل السعال وضيق التنفس",
      },
    ],
  },
  {
    id: "1-9months",
    timeframe: { en: "After 1 to 9 Months", ar: "بعد 1 إلى 9 أشهر" },
    improvements: [
      {
        en: "Cilia in the lungs recover and work better",
        ar: "تتعافى الأهداب في الرئتين وتعمل بشكل أفضل",
      },
      {
        en: "Risk of infections decreases",
        ar: "ينخفض خطر الإصابة بالعدوى",
      },
      {
        en: "Energy levels improve",
        ar: "تتحسن مستويات الطاقة",
      },
      {
        en: "Chronic coughing becomes less frequent",
        ar: "يصبح السعال المزمن أقل تكراراً",
      },
    ],
  },
  {
    id: "1year",
    timeframe: { en: "After 1 Year", ar: "بعد سنة واحدة" },
    improvements: [
      {
        en: "Risk of coronary heart disease becomes about 50% lower than a smoker's",
        ar: "يصبح خطر الإصابة بأمراض القلب التاجية أقل بنحو 50% من المدخن",
      },
      {
        en: "Heart works more efficiently",
        ar: "يعمل القلب بكفاءة أكبر",
      },
    ],
  },
  {
    id: "2years",
    timeframe: { en: "After 2 Years", ar: "بعد سنتين" },
    improvements: [
      {
        en: "Risk of stroke begins approaching that of a non-smoker",
        ar: "يبدأ خطر السكتة الدماغية في الاقتراب من غير المدخن",
      },
      {
        en: "Overall cardiovascular health improves greatly",
        ar: "تتحسن صحة القلب والأوعية الدموية بشكل كبير",
      },
      {
        en: "Cravings and nicotine dependence are usually much lower",
        ar: "عادة ما تكون الرغبة الشديدة والاعتماد على النيكوتين أقل بكثير",
      },
    ],
  },
  {
    id: "3years",
    timeframe: { en: "After 3 Years", ar: "بعد 3 سنوات" },
    improvements: [
      {
        en: "Risk of heart disease can become close to that of a non-smoker",
        ar: "يمكن أن يصبح خطر أمراض القلب قريباً من غير المدخن",
      },
      {
        en: "Lung function continues improving",
        ar: "تستمر وظائف الرئة في التحسن",
      },
      {
        en: "Breathing becomes easier",
        ar: "يصبح التنفس أسهل",
      },
      {
        en: "Risk of several smoking-related diseases decreases significantly",
        ar: "ينخفض خطر العديد من الأمراض المرتبطة بالتدخين بشكل كبير",
      },
    ],
  },
];

export const progressContent = {
  title: { en: "Progress Tracking", ar: "تتبع التقدم" },
  subtitle: {
    en: "Track your smoke-free days, health improvements, and money saved.",
    ar: "تتبع أيامك الخالية من التدخين وتحسينات صحتك والمال الذي وفرته.",
  },
  streak: { en: "Days Without Smoking", ar: "أيام بدون تدخين" },
  currentBadge: { en: "Current Badge", ar: "الشارة الحالية" },
  nextMilestone: { en: "Next Milestone", ar: "الهدف التالي" },
  daysToGo: { en: "days to go", ar: "يوم متبقي" },
  moneySaved: { en: "Money Saved", ar: "المال الموفر" },
  moneyBefore: { en: "Would have spent", ar: "كان سينفق" },
  moneyAfter: { en: "Saved since quitting", ar: "موفر منذ الإقلاع" },
  healthTitle: {
    en: "Health Improvements After Quitting Smoking",
    ar: "التحسينات الصحية بعد الإقلاع عن التدخين",
  },
  feelingQuestion: {
    en: "Are you feeling this improvement?",
    ar: "هل تشعر بهذا التحسن؟",
  },
  yes: { en: "Yes", ar: "نعم" },
  no: { en: "No", ar: "لا" },
  notifications: {
    title: { en: "Friendly Reminders", ar: "تذكيرات ودية" },
    subtitle: {
      en: "Stay motivated with daily reminders and motivational messages.",
      ar: "ابقَ متحمساً مع تذكيرات يومية ورسائل تحفيزية.",
    },
    enable: { en: "Enable daily reminders", ar: "تفعيل التذكيرات اليومية" },
    phone: { en: "Phone notifications", ar: "إشعارات الهاتف" },
    messages: { en: "Reminder messages", ar: "رسائل التذكير" },
    access: { en: "Easy access to the website", ar: "وصول سهل للموقع" },
    motivational: { en: "Daily motivational messages", ar: "رسائل تحفيزية يومية" },
    sampleMessages: [
      {
        en: "Every smoke-free day is a victory. Keep going!",
        ar: "كل يوم بدون تدخين هو انتصار. استمر!",
      },
      {
        en: "Your lungs are healing. Breathe freely today.",
        ar: "رئتاك تتعافيان. تنفس بحرية اليوم.",
      },
      {
        en: "You chose yourself. That takes courage.",
        ar: "لقد اخترت نفسك. هذا يتطلب شجاعة.",
      },
    ],
  },
  noProfile: {
    en: "Please complete your personal information first to track progress.",
    ar: "يرجى إكمال بياناتك الشخصية أولاً لتتبع التقدم.",
  },
  signupLink: { en: "Complete Sign Up", ar: "أكمل التسجيل" },
} as const;

export function pt(record: Bilingual, locale: Locale): string {
  return record[locale];
}
