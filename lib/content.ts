import type { Locale } from "./i18n";

export const siteName: Record<Locale, string> = {
  en: "Reset Your Breathe",
  ar: "ابدأ من جديد",
};

export const content = {
  languageSelect: {
    title: {
      en: "Choose Your Language",
      ar: "اختر لغتك",
    },
    subtitle: {
      en: "Select how you'd like to explore Reset Your Breathe",
      ar: "اختر كيف تريد استكشاف موقع ابدأ من جديد",
    },
    english: {
      en: "English",
      ar: "الإنجليزية",
    },
    arabic: {
      en: "العربية",
      ar: "العربية",
    },
  },
  home: {
    tagline: {
      en: "Treatment helps individuals quit, while (Reset Your Breath) policies help prevent people from starting and support those trying to quit.",
      ar: "يساعد العلاج الأفراد على الإقلاع عن التدخين، بينما تساعد سياسات (ابدأ من جديد) على منع الناس من البدء ودعم أولئك الذين يحاولون الإقلاع عن التدخين.",
    },
    exploreScience: {
      en: "Explore the Science",
      ar: "استكشف العلم",
    },
    subgroup: {
      en: "Subgroup N1",
      ar: "المجموعة الفرعية N1",
    },
  },
  science: {
    title: {
      en: "Understanding the Impact (The Science)",
      ar: "فهم التأثير (العلم)",
    },
    subtitle: {
      en: "Discover how nicotine affects the brain and how the lungs can heal when you quit smoking.",
      ar: "اكتشف كيف يؤثر النيكوتين على الدماغ وكيف يمكن للرئتين أن تشفيا عند الإقلاع عن التدخين.",
    },
    topics: [
      {
        id: "physiology",
        title: {
          en: 'The Physiology of Addiction: "How nicotine affects the reward system in the brain?"',
          ar: 'فسيولوجيا الإدمان: "كيف يؤثر النيكوتين على نظام المكافأة في الدماغ؟"',
        },
        body: {
          en: "Nicotine is the main chemical in tobacco that makes smoking addictive, even though people know it is harmful. It affects the brain's reward system by increasing dopamine, a chemical that creates feelings of pleasure and motivation. Nicotine attaches to special receptors in the brain, which activate brain cells linked to reward and addiction. Over time, the brain becomes used to nicotine and starts depending on it to feel normal. When a person stops using nicotine, withdrawal symptoms can occur. These symptoms are linked to other brain receptors involved in stress and cravings.",
          ar: "النيكوتين هو المادة الكيميائية الرئيسية الموجودة في التبغ والتي تجعل التدخين إدمانًا، على الرغم من أن الناس يعرفون أنه ضار. فهو يؤثر على نظام المكافأة في الدماغ عن طريق زيادة الدوبامين، وهي مادة كيميائية تخلق مشاعر المتعة والتحفيز. يرتبط النيكوتين بمستقبلات خاصة في الدماغ، والتي تعمل على تنشيط خلايا الدماغ المرتبطة بالمكافأة والإدمان. مع مرور الوقت، يعتاد الدماغ على النيكوتين ويبدأ في الاعتماد عليه ليشعر بأنه طبيعي. عندما يتوقف الشخص عن استخدام النيكوتين، يمكن أن تحدث أعراض الانسحاب. ترتبط هذه الأعراض بمستقبلات دماغية أخرى تشارك في التوتر والرغبة الشديدة في تناول الطعام.",
        },
      },
      {
        id: "respiratory",
        title: {
          en: 'Respiratory Restoration: "How the Lungs heal?"',
          ar: 'استعادة الجهاز التنفسي: "كيف تشفى الرئتان؟"',
        },
        body: {
          en: "Another remarkable discovery in respiratory health is the lungs' inherent ability to heal themselves. This includes the presence of stem cells that aid in repairing airways and alveoli, especially effective when inflammation is low. Cilia, which cleans the lungs from mucus, can regrow within two weeks after damage, particularly if smoking is ceased or toxin exposure is reduced. Although severe damage to alveoli is irreversible, the healing process can enhance lung health and flexibility.",
          ar: "اكتشاف رائع آخر في صحة الجهاز التنفسي هو قدرة الرئتين المتأصلة على شفاء نفسيهما. ويشمل ذلك وجود الخلايا الجذعية التي تساعد في إصلاح الشعب الهوائية والحويصلات الهوائية، وتكون فعالة بشكل خاص عندما يكون الالتهاب منخفضًا. يمكن للأهداب، التي تنظف الرئتين من المخاط، أن تنمو مرة أخرى في غضون أسبوعين بعد التلف، خاصة إذا توقف التدخين أو انخفض التعرض للسموم. على الرغم من أن الضرر الشديد الذي يلحق بالحويصلات الهوائية لا يمكن إصلاحه، إلا أن عملية الشفاء يمكن أن تعزز صحة الرئة ومرونتها.",
        },
      },
    ],
  },
  nav: {
    home: { en: "Home", ar: "الرئيسية" },
    science: { en: "The Science", ar: "العلم" },
    changeLanguage: { en: "Change Language", ar: "تغيير اللغة" },
  },
} as const;

export function t<T extends Record<Locale, string>>(
  record: T,
  locale: Locale
): string {
  return record[locale];
}
