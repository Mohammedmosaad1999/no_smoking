import type { Locale } from "./i18n";
import type { LocalizedVideo } from "./video-utils";

type Bilingual = Record<Locale, string>;

export const communityContent = {
  badge: { en: "Community", ar: "المجتمع" },
  title: {
    en: "Community videos",
    ar: "فيديوهات المجتمع",
  },
  subtitle: {
    en: "Watch curated videos that support your quit journey.",
    ar: "شاهد فيديوهات مختارة تدعم رحلة الإقلاع.",
  },
} as const;

export function ct(record: Bilingual, locale: Locale): string {
  return record[locale];
}

export const communityVideos: readonly LocalizedVideo[] = [
  {
    locale: "en",
    label: {
      en: "What happens when you stop smoking",
      ar: "What happens when you stop smoking",
    },
    url: "https://youtu.be/o3I0mJ2RfU0",
  },
  {
    locale: "en",
    label: {
      en: "A helpful guide to stop smoking",
      ar: "A helpful guide to stop smoking",
    },
    url: "https://youtu.be/FdYIvEc7e-0",
  },
  {
    locale: "en",
    label: {
      en: "How to quit all types of smoking (vapes)",
      ar: "How to quit all types of smoking (vapes)",
    },
    url: "https://youtu.be/QpnGsasp9j8",
  },
  {
    locale: "en",
    label: {
      en: "Quitting smoking timeline",
      ar: "Quitting smoking timeline",
    },
    url: "https://youtu.be/fLbQfMmrISE",
  },
  {
    locale: "en",
    label: {
      en: "What happens to your body when you stop smoking",
      ar: "What happens to your body when you stop smoking",
    },
    url: "https://youtu.be/D8gygc4boZA",
  },
  {
    locale: "en",
    label: {
      en: "How smoking affects your health and daily life",
      ar: "How smoking affects your health and daily life",
    },
    url: "https://youtu.be/Ebtn5lx8xms",
  },
  {
    locale: "en",
    label: {
      en: "A simple way to break a habit (smoking)",
      ar: "A simple way to break a habit (smoking)",
    },
    url: "https://youtu.be/-moW9jvvMr4",
  },
  {
    locale: "en",
    label: {
      en: "Top 5 reasons to quit smoking",
      ar: "Top 5 reasons to quit smoking",
    },
    url: "https://youtu.be/HFgtol421r4",
  },
  {
    locale: "ar",
    label: {
      en: "Ministry of Health campaign video",
      ar: "فيديو حملة وزارة الصحة",
    },
    url: "https://youtu.be/BBGT8iDrEDA",
  },
  {
    locale: "ar",
    label: {
      en: "Khetaf's quit smoking story",
      ar: "قصة خطاف في ترك التدخين",
    },
    url: "https://youtu.be/3nJYLExM3NQ",
  },
  {
    locale: "ar",
    label: {
      en: "Dr. Hossam warns about smoking dangers",
      ar: "تحذير دكتور حسام من أضرار التدخين",
    },
    url: "https://youtu.be/m2WnIvywoc4",
  },
  {
    locale: "ar",
    label: {
      en: "Cartoon film motivating quitting",
      ar: "فيلم كرتوني يحفز على الإقلاع",
    },
    url: "https://youtu.be/BbIdvAsw7Pw",
  },
  {
    locale: "ar",
    label: {
      en: "Sudden body changes after quitting",
      ar: "التغيرات الطارئة على الجسم بعد الإقلاع",
    },
    url: "https://youtu.be/Tf2Lo7mCAZw",
  },
  {
    locale: "ar",
    label: {
      en: "How quitting affects your body in one month",
      ar: "تأثير الإقلاع عن التدخين على الجسم في خلال شهر",
    },
    url: "https://youtu.be/A6QwZ1FKFPs",
  },
  {
    locale: "ar",
    label: {
      en: "Video explaining how to quit smoking",
      ar: "فيديو لتوضيح طريقة الإقلاع عن التدخين",
    },
    url: "https://youtu.be/aLkznlYTX7E",
  },
  {
    locale: "ar",
    label: {
      en: "Photographic video to help you quit",
      ar: "فيديو تصويري للمساعدة على الإقلاع",
    },
    url: "https://youtu.be/D6Tz_ZMp0Ac",
  },
];
