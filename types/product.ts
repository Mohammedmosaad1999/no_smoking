import type { Locale } from "./i18n";

export type Bilingual = Record<Locale, string>;

export type ProductBuyLink = {
  label: Bilingual;
  url: string;
};

export type LocalizedVideo = {
  locale: Locale;
  label: Bilingual;
  url: string;
};

export type ProductItem = {
  id: string;
  title: Bilingual;
  videos?: readonly LocalizedVideo[];
  buyLinks: readonly ProductBuyLink[];
};
