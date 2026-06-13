import type { Locale, Bilingual } from "@/types";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

export const navLabels = {
  home: { en: en.homeContent.navLabels.home, ar: ar.homeContent.navLabels.home },
  science: { en: en.homeContent.navLabels.science, ar: ar.homeContent.navLabels.science },
  community: { en: en.homeContent.navLabels.community, ar: ar.homeContent.navLabels.community },
  products: { en: en.homeContent.navLabels.products, ar: ar.homeContent.navLabels.products },
  cost: { en: en.homeContent.navLabels.cost, ar: ar.homeContent.navLabels.cost },
  treatment: { en: en.homeContent.navLabels.treatment, ar: ar.homeContent.navLabels.treatment },
  track: { en: en.homeContent.navLabels.track, ar: ar.homeContent.navLabels.track },
} as const;

export const homeContent = {
  overline: {
    en: en.homeContent.overline,
    ar: ar.homeContent.overline,
  },
  headline: {
    en: en.homeContent.headline,
    ar: ar.homeContent.headline,
  },
  headlineHighlight: {
    en: en.homeContent.headlineHighlight,
    ar: ar.homeContent.headlineHighlight,
  },
  description: {
    en: en.homeContent.description,
    ar: ar.homeContent.description,
  },
  cta: {
    en: en.homeContent.cta,
    ar: ar.homeContent.cta,
  },
  howItWorks: {
    en: en.homeContent.howItWorks,
    ar: ar.homeContent.howItWorks,
  },
  cardQuote: {
    en: en.homeContent.cardQuote,
    ar: ar.homeContent.cardQuote,
  },
  cardSubquote: {
    en: en.homeContent.cardSubquote,
    ar: ar.homeContent.cardSubquote,
  },
  stats: [
    {
      value: { en: en.homeContent.stats[0].value, ar: ar.homeContent.stats[0].value },
      label: { en: en.homeContent.stats[0].label, ar: ar.homeContent.stats[0].label },
    },
    {
      value: { en: en.homeContent.stats[1].value, ar: ar.homeContent.stats[1].value },
      label: { en: en.homeContent.stats[1].label, ar: ar.homeContent.stats[1].label },
    },
    {
      value: { en: en.homeContent.stats[2].value, ar: ar.homeContent.stats[2].value },
      label: { en: en.homeContent.stats[2].label, ar: ar.homeContent.stats[2].label },
    },
  ],
  bottomSection: {
    en: en.homeContent.bottomSection,
    ar: ar.homeContent.bottomSection,
  },
  ctaSection: {
    title: {
      en: en.homeContent.ctaSection.title,
      ar: ar.homeContent.ctaSection.title,
    },
    subtitle: {
      en: en.homeContent.ctaSection.subtitle,
      ar: ar.homeContent.ctaSection.subtitle,
    },
  },
} as const;

export const footerContent = {
  tagline: {
    en: en.homeContent.footerContent.tagline,
    ar: ar.homeContent.footerContent.tagline,
  },
  explore: { en: en.homeContent.footerContent.explore, ar: ar.homeContent.footerContent.explore },
  reminders: { en: en.homeContent.footerContent.reminders, ar: ar.homeContent.footerContent.reminders },
  reminderItems: [
    {
      en: en.homeContent.footerContent.reminderItems[0],
      ar: ar.homeContent.footerContent.reminderItems[0],
    },
    {
      en: en.homeContent.footerContent.reminderItems[1],
      ar: ar.homeContent.footerContent.reminderItems[1],
    },
    {
      en: en.homeContent.footerContent.reminderItems[2],
      ar: ar.homeContent.footerContent.reminderItems[2],
    },
    {
      en: en.homeContent.footerContent.reminderItems[3],
      ar: ar.homeContent.footerContent.reminderItems[3],
    },
  ],
  copyright: {
    en: en.homeContent.footerContent.copyright,
    ar: ar.homeContent.footerContent.copyright,
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
  ] as const;
}
