import type { Locale } from "./i18n";

type Bilingual = Record<Locale, string>;

export const campaignContent = {
  cta: {
    en: "Today, I choose myself",
    ar: "اليوم، أختار نفسي",
  },
  signup: {
    title: { en: "Personal Information", ar: "البيانات الشخصية" },
    subtitle: {
      en: "Tell us about yourself so we can personalize your quit journey.",
      ar: "أخبرنا عن نفسك حتى نتمكن من تخصيص رحلة الإقلاع عن التدخين.",
    },
    email: { en: "Gmail", ar: "البريد الإلكتروني" },
    name: { en: "Name", ar: "الأسم" },
    age: { en: "Age", ar: "السن" },
    gender: { en: "Gender", ar: "النوع" },
    smokingSince: {
      en: "Since when have you started smoking?",
      ar: "منذ متى بدأت التدخين؟",
    },
    cigarettesPerDay: {
      en: "How many cigarettes do you usually smoke (Average)?",
      ar: "كم عدد السجائر التي تدخنها عادةً؟",
    },
    whyStarted: {
      en: "Why did you start smoking?",
      ar: "لماذا بدأت التدخين؟",
    },
    quitDate: {
      en: "When did you quit (or plan to quit)?",
      ar: "متى توقفت (أو تخطط للتوقف)؟",
    },
    costPerCigarette: {
      en: "Price per cigarette (EGP)",
      ar: "سعر السيجارة (جنيه)",
    },
    sections: {
      personal: { en: "Personal Details", ar: "البيانات الشخصية" },
      smoking: { en: "Smoking History", ar: "تاريخ التدخين" },
    },
    submit: { en: "Continue", ar: "متابعة" },
    genderOptions: {
      male: { en: "Male", ar: "ذكر" },
      female: { en: "Female", ar: "أنثى" },
    },
  },
  importance: {
    title: {
      en: "Why Reclaim Your Breath?",
      ar: "أهمية حملة ابدأ من جديد؟",
    },
    body: {
      en: '"Reclaim Your Breath" is a campaign aimed at encouraging individuals to choose a healthier, smoke-free life. It highlights the detrimental effects of smoking on mental health, relationships, and overall quality of life. Additionally, this campaign offers every method to help people stop smoking. The campaign stresses the significance of taking initial steps toward change, symbolized by the phrase "Reclaim Your Breath," which embodies freedom and the opportunity for recovery. It seeks to raise awareness of smoking\'s negative impacts and motivate people to believe in their ability to change, emphasizing that each small step toward quitting contributes to a better life.',
      ar: '"استعادة أنفاسك" هي حملة تهدف إلى تشجيع الأفراد على اختيار حياة أكثر صحة وخالية من التدخين. بالإضافة إلى ذلك، تقدم هذه الحملة كل الطرق لمساعدة الأشخاص على التوقف عن التدخين. ويسلط الضوء على الآثار الضارة للتدخين على الصحة العقلية والعلاقات ونوعية الحياة بشكل عام. وتؤكد الحملة على أهمية اتخاذ خطوات أولية نحو التغيير، وهو ما يرمز إليه بعبارة "استعيد أنفاسك"، التي تجسد الحرية وفرصة التعافي. وتهدف إلى رفع مستوى الوعي بالآثار السلبية للتدخين وتحفيز الناس على الإيمان بقدرتهم على التغيير، مع التأكيد على أن كل خطوة صغيرة نحو الإقلاع عن التدخين تساهم في حياة أفضل.',
    },
    nextCalculator: { en: "Smoking Damage Calculator", ar: "حاسبة أضرار التدخين" },
    nextTreatment: { en: "Explore Treatment Options", ar: "استكشف خيارات العلاج" },
  },
  calculator: {
    title: { en: "Smoking Damage Calculator", ar: "حاسبة أضرار التدخين" },
    subtitle: {
      en: "See how much smoking costs you — in money and health.",
      ar: "اكتشف كم يكلفك التدخين — في المال والصحة.",
    },
    cigarettesLabel: {
      en: "Number of cigarettes per day",
      ar: "عدد السجائر يومياً",
    },
    costLabel: {
      en: "Price per cigarette (EGP)",
      ar: "سعر السيجارة (جنيه)",
    },
    priceNote: {
      en: "Default price: 5 EGP per cigarette",
      ar: "السعر الافتراضي: 5 جنيه للسيجارة",
    },
    dailyCost: { en: "Daily", ar: "يومياً" },
    monthlyCost: { en: "Monthly", ar: "شهرياً" },
    yearlyCost: { en: "Yearly", ar: "سنوياً" },
    tenYearsCost: { en: "In 10 years", ar: "خلال 10 سنوات" },
    savingsTitle: { en: "How much can you save?", ar: "قد إيه هتوفر؟" },
    saveIfQuit: {
      en: "If you quit completely",
      ar: "لو بطلت خالص",
    },
    saveIfHalf: {
      en: "If you cut down to half",
      ar: "لو خفّضت للنصف",
    },
    perYear: { en: "per year", ar: "في السنة" },
    perMonth: { en: "per month", ar: "في الشهر" },
    example: {
      en: "Example: 20 cigarettes/day × 5 EGP = 100 EGP/day",
      ar: "مثال: 20 سيجارة × 5 جنيه = 100 جنيه في اليوم",
    },
    nextProgress: { en: "Track Your Progress", ar: "تتبع تقدمك" },
    nextTreatment: { en: "View Treatment Options", ar: "عرض خيارات العلاج" },
  },
  nav: {
    campaign: { en: "Campaign", ar: "الحملة" },
    treatment: { en: "Treatment", ar: "العلاج" },
    progress: { en: "Progress", ar: "التقدم" },
  },
} as const;

export function ct(record: Bilingual, locale: Locale): string {
  return record[locale];
}
