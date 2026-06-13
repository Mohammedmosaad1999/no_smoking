import type { Locale, Bilingual, LocalizedVideo } from "@/types";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

export const communityContent = {
  badge: { en: en.communityContent.badge, ar: ar.communityContent.badge },
  title: {
    en: en.communityContent.title,
    ar: ar.communityContent.title,
  },
  subtitle: {
    en: en.communityContent.subtitle,
    ar: ar.communityContent.subtitle,
  },
} as const;

export function ct(record: Bilingual, locale: Locale): string {
  return record[locale];
}

export const communityVideos: readonly LocalizedVideo[] = [
  {
    locale: "en",
    label: { en: en.communityContent.videos.stopSmoking, ar: ar.communityContent.videos.stopSmoking },
    url: "https://youtu.be/o3I0mJ2RfU0",
  },
  {
    locale: "en",
    label: { en: en.communityContent.videos.helpfulGuide, ar: ar.communityContent.videos.helpfulGuide },
    url: "https://youtu.be/FdYIvEc7e-0",
  },
  {
    locale: "en",
    label: { en: en.communityContent.videos.quitAllTypes, ar: ar.communityContent.videos.quitAllTypes },
    url: "https://youtu.be/QpnGsasp9j8",
  },
  {
    locale: "en",
    label: { en: en.communityContent.videos.timeline, ar: ar.communityContent.videos.timeline },
    url: "https://youtu.be/fLbQfMmrISE",
  },
  {
    locale: "en",
    label: { en: en.communityContent.videos.bodyEffects, ar: ar.communityContent.videos.bodyEffects },
    url: "https://youtu.be/D8gygc4boZA",
  },
  {
    locale: "en",
    label: { en: en.communityContent.videos.healthDaily, ar: ar.communityContent.videos.healthDaily },
    url: "https://youtu.be/Ebtn5lx8xms",
  },
  {
    locale: "en",
    label: { en: en.communityContent.videos.breakHabit, ar: ar.communityContent.videos.breakHabit },
    url: "https://youtu.be/-moW9jvvMr4",
  },
  {
    locale: "en",
    label: { en: en.communityContent.videos.top5Reasons, ar: ar.communityContent.videos.top5Reasons },
    url: "https://youtu.be/HFgtol421r4",
  },
  {
    locale: "ar",
    label: { en: en.communityContent.videos.mohCampaign, ar: ar.communityContent.videos.mohCampaign },
    url: "https://youtu.be/BBGT8iDrEDA",
  },
  {
    locale: "ar",
    label: { en: en.communityContent.videos.khetafStory, ar: ar.communityContent.videos.khetafStory },
    url: "https://youtu.be/3nJYLExM3NQ",
  },
  {
    locale: "ar",
    label: { en: en.communityContent.videos.hossamWarning, ar: ar.communityContent.videos.hossamWarning },
    url: "https://youtu.be/m2WnIvywoc4",
  },
  {
    locale: "ar",
    label: { en: en.communityContent.videos.cartoonMotivate, ar: ar.communityContent.videos.cartoonMotivate },
    url: "https://youtu.be/BbIdvAsw7Pw",
  },
  {
    locale: "ar",
    label: { en: en.communityContent.videos.suddenChanges, ar: ar.communityContent.videos.suddenChanges },
    url: "https://youtu.be/Tf2Lo7mCAZw",
  },
  {
    locale: "ar",
    label: { en: en.communityContent.videos.oneMonthEffects, ar: ar.communityContent.videos.oneMonthEffects },
    url: "https://youtu.be/A6QwZ1FKFPs",
  },
  {
    locale: "ar",
    label: { en: en.communityContent.videos.explainQuit, ar: ar.communityContent.videos.explainQuit },
    url: "https://youtu.be/aLkznlYTX7E",
  },
  {
    locale: "ar",
    label: { en: en.communityContent.videos.photographic, ar: ar.communityContent.videos.photographic },
    url: "https://youtu.be/D6Tz_ZMp0Ac",
  },
];
