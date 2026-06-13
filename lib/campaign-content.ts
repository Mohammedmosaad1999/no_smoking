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
    badge: {
      en: "Smoking damage calculator",
      ar: "حاسبة أضرار التدخين",
    },
    title: {
      en: "What is it really costing you?",
      ar: "كم يكلفك التدخين فعلاً؟",
    },
    subtitle: {
      en: "Adjust your habit below to see the money — and the time — smoking takes from you.",
      ar: "عدّل عادتك أدناه لترى المال — والوقت — الذي يأخذه التدخين منك.",
    },
    cigarettesLabel: {
      en: "Cigarettes per day",
      ar: "عدد السجائر يومياً",
    },
    packLabel: {
      en: "Price per pack (20 cigarettes)",
      ar: "سعر الباكو (20 سيجارة)",
    },
    costLabel: {
      en: "Price per cigarette (EGP)",
      ar: "سعر السيجارة (جنيه)",
    },
    currencyLabel: { en: "Currency", ar: "العملة" },
    perDay: { en: "per day", ar: "في اليوم" },
    perMonth: { en: "per month", ar: "في الشهر" },
    perYear: { en: "per year", ar: "في السنة" },
    cigarettesYear: { en: "cigarettes / year", ar: "سيجارة / سنة" },
    fiveYears: {
      en: "over 5 years — money you could keep",
      ar: "خلال 5 سنوات — مال كان ممكن توفره",
    },
    savedNote: {
      en: "These numbers are saved and power the savings on your tracker.",
      ar: "يتم حفظ هذه الأرقام وتغذي مدخراتك في صفحة التتبع.",
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
