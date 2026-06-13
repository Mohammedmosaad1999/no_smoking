import type { Locale } from "./i18n";
import type { LocalizedVideo } from "./video-utils";

type Bilingual = Record<Locale, string>;

export type ProductBuyLink = {
  label: Bilingual;
  url: string;
};

export type ProductItem = {
  id: string;
  title: Bilingual;
  videos?: readonly LocalizedVideo[];
  buyLinks: readonly ProductBuyLink[];
};

export const productsContent = {
  badge: { en: "Products", ar: "المنتجات" },
  title: { en: "Products", ar: "المنتجات" },
  subtitle: {
    en: "Purchase links and how-to videos for quit-smoking products.",
    ar: "روابط الشراء وفيديوهات طريقة الاستخدام لمنتجات الإقلاع عن التدخين.",
  },
  whereToBuy: { en: "Where to buy", ar: "اشتريها منين" },
  howToUse: { en: "How to use", ar: "كيفية الاستخدام" },
} as const;

export const productItems: readonly ProductItem[] = [
  {
    id: "champix",
    title: { en: "Champix", ar: "شامبيكس" },
    videos: [
      {
        locale: "ar",
        label: {
          en: "How to use Champix",
          ar: "فيديو يوريك ازاي تستخدم الدواء",
        },
        url: "https://www.youtube.com/watch?v=ljbnWtAsMNE", 
      },
      {
        locale: "en",
        label: {
          en: "How to use Champix",
          ar: "فيديو يوريك ازاي تستخدم الدواء",
        },
        url: "https://youtu.be/osVTf4Un_3c",
      },
    ],
    buyLinks: [
      {
        label: { en: "Champix on Vezeeta", ar: "شامبيكس على فيزيتا" },
        url: "https://www.vezeeta.com/en-eg/pharmacy/champix-1-mg-28-f-c-tablet",
      },
    ],
  },
  {
    id: "nrt",
    title: {
      en: "Nicotine Replacement Therapy (NRT)",
      ar: "العلاج ببدائل النيكوتين (NRT)",
    },
    videos: [
      {
        locale: "en",
        label: { en: "How to use NRT", ar: "استخدام بدائل النيكوتين" },
        url: "https://youtu.be/7wvBq38mues",
      },
      {
        locale: "ar",
        label: { en: "How to use NRT", ar: "استخدام بدائل النيكوتين" },
        url: "https://youtu.be/OSW0lT6pI90",
      },
    ],
    buyLinks: [
      {
        label: { en: "Nicotine Gum", ar: "علكة النيكوتين" },
        url: "https://www.amazon.com/Blip-NRT-Nicotine-Gum-Replacement/dp/B0CM6V6TS9",
      },
      {
        label: { en: "Nicotine Lozenges", ar: "أقراص استحلاب النيكوتين" },
        url: "https://www.amazon.com/Quitine-Nicotine-Lozenges-Flavor-Smoking/dp/B0DN3YWVVB",
      },
    ],
  },
  {
    id: "lozenges",
    title: { en: "Nicotine Lozenges", ar: "أقراص استحلاب النيكوتين" },
    videos: [
      {
        locale: "en",
        label: {
          en: "How to use nicotine lozenges",
          ar: "استخدام أقراص النيكوتين",
        },
        url: "https://youtu.be/IzRgbANNrWE",
      },
    ],
    buyLinks: [
      {
        label: { en: "Buy on Amazon", ar: "اشتري من أمازون" },
        url: "https://a.co/d/0fB0F24d",
      },
    ],
  },
  {
    id: "patches",
    title: { en: "Nicotine Patches", ar: "لصقات النيكوتين" },
    videos: [
      {
        locale: "en",
        label: {
          en: "How to use nicotine patches",
          ar: "استخدام لصقات النيكوتين",
        },
        url: "https://youtu.be/3e4-_X_5kWA",
      },
      {
        locale: "ar",
        label: {
          en: "How to use nicotine patches",
          ar: "استخدام لصقات النيكوتين",
        },
        url: "https://youtu.be/pzmOfgftV5c",
      },
    ],
    buyLinks: [
      {
        label: { en: "Buy on Amazon", ar: "اشتري من أمازون" },
        url: "https://a.co/d/0atPe6Zg",
      },
    ],
  },
  {
    id: "inhalers",
    title: { en: "Nicotine Inhalers", ar: "أجهزة استنشاق النيكوتين" },
    videos: [
      {
        locale: "en",
        label: {
          en: "How to use nicotine inhalers",
          ar: "استخدام جهاز الاستنشاق",
        },
        url: "https://youtu.be/TlkLj4IY25s",
      },
      {
        locale: "ar",
        label: {
          en: "How to use nicotine inhalers",
          ar: "استخدام جهاز الاستنشاق",
        },
        url: "https://youtube.com/shorts/HWXO5qOey4c",
      },
    ],
    buyLinks: [
      {
        label: { en: "Buy on Amazon", ar: "اشتري من أمازون" },
        url: "https://a.co/d/08cWSVRk",
      },
    ],
  },
  {
    id: "nasal-sprays",
    title: { en: "Nicotine Nasal Sprays", ar: "بخاخات النيكوتين الأنفية" },
    videos: [
      {
        locale: "en",
        label: {
          en: "How to use nicotine nasal spray",
          ar: "استخدام البخاخ الأنفي",
        },
        url: "https://youtu.be/1ofPBXHDVDc",
      },
      {
        locale: "ar",
        label: {
          en: "How to use nicotine nasal spray",
          ar: "استخدام البخاخ الأنفي",
        },
        url: "https://youtu.be/0Hwa0a556IU",
      },
    ],
    buyLinks: [
      {
        label: { en: "Buy on Amazon", ar: "اشتري من أمازون" },
        url: "https://a.co/d/03Gu4s8J",
      },
    ],
  },
];

export function pt(record: Bilingual, locale: Locale): string {
  return record[locale];
}
