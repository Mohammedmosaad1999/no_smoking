import type { Locale } from "./i18n";

export type LocalizedVideo = {
  locale: Locale;
  label: Record<Locale, string>;
  url: string;
};

export function getVideosForLocale(
  videos: readonly LocalizedVideo[] | undefined,
  locale: Locale
): LocalizedVideo[] {
  if (!videos?.length) return [];
  return videos.filter((video) => video.locale === locale);
}

export function getVideoForLocale(
  videos: readonly LocalizedVideo[] | undefined,
  locale: Locale
): LocalizedVideo | undefined {
  return getVideosForLocale(videos, locale)[0];
}
