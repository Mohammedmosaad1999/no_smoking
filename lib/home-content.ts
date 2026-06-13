import type { Locale } from "./i18n";

type Bilingual = Record<Locale, string>;

export const navLabels = {
  home: { en: "Home", ar: "الرئيسية" },
  science: { en: "Science", ar: "العلم" },
  community: { en: "Community", ar: "المجتمع" },
  products: { en: "Products", ar: "المنتجات" },
  cost: { en: "Cost", ar: "التكلفة" },
  treatment: { en: "Treatment", ar: "العلاج" },
  track: { en: "Track", ar: "التتبع" },
  // support: { en: "Support", ar: "الدعم" },
} as const;

export const homeContent = {
  overline: {
    en: "A bilingual quit-smoking companion",
    ar: "رفيق ثنائي اللغة للإقلاع عن التدخين",
  },
  headline: {
    en: "Reset your breath. Reclaim your life.",
    ar: "استعد أنفاسك. استعد حياتك.",
  },
  headlineHighlight: {
    en: "breath",
    ar: "أنفاسك",
  },
  description: {
    en: "Treatment helps individuals quit, while Reset Your Breath policies help prevent people from starting and support those trying to quit.",
    ar: "يساعد العلاج الأفراد على الإقلاع عن التدخين، بينما تساعد سياسات ابدأ من جديد على منع الناس من البدء ودعم من يحاولون الإقلاع.",
  },
  cta: {
    en: "Today, I choose myself",
    ar: "اليوم، أختار نفسي",
  },
  howItWorks: {
    en: "How it works",
    ar: "كيف يعمل",
  },
  cardQuote: {
    en: "Today, I choose myself.",
    ar: "اليوم، أختار نفسي.",
  },
  cardSubquote: {
    en: "Take one breath. Then the next.",
    ar: "خذ نفساً واحداً. ثم التالي.",
  },
  stats: [
    {
      value: { en: "20 min", ar: "20 د" },
      label: {
        en: "heart rate starts to normalise",
        ar: "يبدأ معدل ضربات القلب في التطبيع",
      },
    },
    {
      value: { en: "50–70%", ar: "50–70%" },
      label: {
        en: "higher quit odds with NRT",
        ar: "فرص أعلى للإقلاع مع NRT",
      },
    },
    {
      value: { en: "1 year", ar: "سنة" },
      label: {
        en: "heart-disease risk halved",
        ar: "خطر أمراض القلب ينخفض للنصف",
      },
    },
  ],
  bottomSection: {
    en: "How it works",
    ar: "كيف يعمل",
  },
  ctaSection: {
    title: {
      en: "Ready to choose yourself?",
      ar: "هل أنت مستعد لاختيار نفسك؟",
    },
    subtitle: {
      en: "It takes one decision today — and a tracker that keeps you going.",
      ar: "قرار واحد اليوم — وتتبع يبقيك مستمراً.",
    },
  },
} as const;

export const footerContent = {
  tagline: {
    en: "A small step toward quitting is a step toward a better life.",
    ar: "خطوة صغيرة نحو الإقلاع هي خطوة نحو حياة أفضل.",
  },
  explore: { en: "Explore", ar: "استكشف" },
  reminders: { en: "Friendly reminders", ar: "تذكيرات ودية" },
  reminderItems: [
    {
      en: "Phone notifications",
      ar: "إشعارات الهاتف",
    },
    {
      en: "Daily motivational messages",
      ar: "رسائل تحفيزية يومية",
    },
    {
      en: "Gentle check-ins",
      ar: "متابعة لطيفة",
    },
    {
      en: "Always one tap away",
      ar: "دائماً على بعد نقرة",
    },
  ],
  copyright: {
    en: "Educational health initiative. Not a substitute for professional medical care.",
    ar: "مبادرة صحية تعليمية. لا تغني عن الرعاية الطبية المتخصصة.",
  },
} as const;

export function ht(record: Bilingual, locale: Locale): string {
  return record[locale];
}

export function getNavLinks(locale: Locale) {
  return [
    { href: `/${locale}`, label: navLabels.home, key: "home" },
    { href: `/${locale}/science`, label: navLabels.science, key: "science" },
    { href: `/${locale}/community`, label: navLabels.community, key: "community" },
    { href: `/${locale}/products`, label: navLabels.products, key: "products" },
    { href: `/${locale}/campaign/calculator`, label: navLabels.cost, key: "cost" },
    { href: `/${locale}/campaign/treatment`, label: navLabels.treatment, key: "treatment" },
    { href: `/${locale}/campaign/progress`, label: navLabels.track, key: "track" },
    // {
    //   href: `/${locale}/campaign/treatment/psychological`,
    //   label: navLabels.support,
    //   key: "support",
    // },
  ] as const;
}
