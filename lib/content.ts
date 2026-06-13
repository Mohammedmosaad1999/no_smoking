import type { Locale } from "@/types";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

export const siteName: Record<Locale, string> = {
  en: en.content.siteName,
  ar: ar.content.siteName,
};

export const content = {
  languageSelect: {
    title: {
      en: en.content.languageSelect.title,
      ar: ar.content.languageSelect.title,
    },
    subtitle: {
      en: en.content.languageSelect.subtitle,
      ar: ar.content.languageSelect.subtitle,
    },
    english: {
      en: en.content.languageSelect.english,
      ar: ar.content.languageSelect.english,
    },
    arabic: {
      en: en.content.languageSelect.arabic,
      ar: ar.content.languageSelect.arabic,
    },
  },
  home: {
    tagline: {
      en: en.content.home.tagline,
      ar: ar.content.home.tagline,
    },
    exploreScience: {
      en: en.content.home.exploreScience,
      ar: ar.content.home.exploreScience,
    },
    subgroup: {
      en: en.content.home.subgroup,
      ar: ar.content.home.subgroup,
    },
  },
  science: {
    title: {
      en: en.content.science.title,
      ar: ar.content.science.title,
    },
    subtitle: {
      en: en.content.science.subtitle,
      ar: ar.content.science.subtitle,
    },
    topics: [
      {
        id: "physiology",
        title: {
          en: en.content.science.topics.physiology.title,
          ar: ar.content.science.topics.physiology.title,
        },
        body: {
          en: en.content.science.topics.physiology.body,
          ar: ar.content.science.topics.physiology.body,
        },
      },
      {
        id: "respiratory",
        title: {
          en: en.content.science.topics.respiratory.title,
          ar: ar.content.science.topics.respiratory.title,
        },
        body: {
          en: en.content.science.topics.respiratory.body,
          ar: ar.content.science.topics.respiratory.body,
        },
      },
    ],
  },
  nav: {
    home: {
      en: en.content.nav.home,
      ar: ar.content.nav.home,
    },
    science: {
      en: en.content.nav.science,
      ar: ar.content.nav.science,
    },
    changeLanguage: {
      en: en.content.nav.changeLanguage,
      ar: ar.content.nav.changeLanguage,
    },
  },
} as const;

export function t<T extends Record<Locale, string>>(
  record: T,
  locale: Locale
): string {
  return record[locale];
}
