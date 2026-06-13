import type { Locale, Bilingual, ProductItem } from "@/types";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

export const productsContent = {
  badge: { en: en.productsContent.badge, ar: ar.productsContent.badge },
  title: { en: en.productsContent.title, ar: ar.productsContent.title },
  subtitle: {
    en: en.productsContent.subtitle,
    ar: ar.productsContent.subtitle,
  },
  whereToBuy: { en: en.productsContent.whereToBuy, ar: ar.productsContent.whereToBuy },
  howToUse: { en: en.productsContent.howToUse, ar: ar.productsContent.howToUse },
} as const;

export const productItems: readonly ProductItem[] = [
  {
    id: "champix",
    title: { en: en.productsContent.items.champix.title, ar: ar.productsContent.items.champix.title },
    videos: [
      {
        locale: "ar",
        label: {
          en: en.productsContent.items.champix.videoLabel,
          ar: ar.productsContent.items.champix.videoLabel,
        },
        url: "https://www.youtube.com/watch?v=ljbnWtAsMNE",
      },
      {
        locale: "en",
        label: {
          en: en.productsContent.items.champix.videoLabel,
          ar: ar.productsContent.items.champix.videoLabel,
        },
        url: "https://youtu.be/osVTf4Un_3c",
      },
    ],
    buyLinks: [
      {
        label: { en: en.productsContent.items.champix.buyLabel, ar: ar.productsContent.items.champix.buyLabel },
        url: "https://www.vezeeta.com/en-eg/pharmacy/champix-1-mg-28-f-c-tablet",
      },
    ],
  },
  {
    id: "nrt",
    title: {
      en: en.productsContent.items.nrt.title,
      ar: ar.productsContent.items.nrt.title,
    },
    videos: [
      {
        locale: "en",
        label: { en: en.productsContent.items.nrt.videoLabel, ar: ar.productsContent.items.nrt.videoLabel },
        url: "https://youtu.be/7wvBq38mues",
      },
      {
        locale: "ar",
        label: { en: en.productsContent.items.nrt.videoLabel, ar: ar.productsContent.items.nrt.videoLabel },
        url: "https://youtu.be/OSW0lT6pI90",
      },
    ],
    buyLinks: [
      {
        label: { en: en.productsContent.items.nrt.gumBuy, ar: ar.productsContent.items.nrt.gumBuy },
        url: "https://www.amazon.com/Blip-NRT-Nicotine-Gum-Replacement/dp/B0CM6V6TS9",
      },
      {
        label: { en: en.productsContent.items.nrt.lozengesBuy, ar: ar.productsContent.items.nrt.lozengesBuy },
        url: "https://www.amazon.com/Quitine-Nicotine-Lozenges-Flavor-Smoking/dp/B0DN3YWVVB",
      },
    ],
  },
  {
    id: "lozenges",
    title: { en: en.productsContent.items.lozenges.title, ar: ar.productsContent.items.lozenges.title },
    videos: [
      {
        locale: "en",
        label: {
          en: en.productsContent.items.lozenges.videoLabel,
          ar: ar.productsContent.items.lozenges.videoLabel,
        },
        url: "https://youtu.be/IzRgbANNrWE",
      },
    ],
    buyLinks: [
      {
        label: { en: en.productsContent.items.lozenges.buyLabel, ar: ar.productsContent.items.lozenges.buyLabel },
        url: "https://a.co/d/0fB0F24d",
      },
    ],
  },
  {
    id: "patches",
    title: { en: en.productsContent.items.patches.title, ar: ar.productsContent.items.patches.title },
    videos: [
      {
        locale: "en",
        label: {
          en: en.productsContent.items.patches.videoLabel,
          ar: ar.productsContent.items.patches.videoLabel,
        },
        url: "https://youtu.be/3e4-_X_5kWA",
      },
      {
        locale: "ar",
        label: {
          en: en.productsContent.items.patches.videoLabel,
          ar: ar.productsContent.items.patches.videoLabel,
        },
        url: "https://youtu.be/pzmOfgftV5c",
      },
    ],
    buyLinks: [
      {
        label: { en: en.productsContent.items.patches.buyLabel, ar: ar.productsContent.items.patches.buyLabel },
        url: "https://a.co/d/0atPe6Zg",
      },
    ],
  },
  {
    id: "inhalers",
    title: { en: en.productsContent.items.inhalers.title, ar: ar.productsContent.items.inhalers.title },
    videos: [
      {
        locale: "en",
        label: {
          en: en.productsContent.items.inhalers.videoLabel,
          ar: ar.productsContent.items.inhalers.videoLabel,
        },
        url: "https://youtu.be/TlkLj4IY25s",
      },
      {
        locale: "ar",
        label: {
          en: en.productsContent.items.inhalers.videoLabel,
          ar: ar.productsContent.items.inhalers.videoLabel,
        },
        url: "https://youtube.com/shorts/HWXO5qOey4c",
      },
    ],
    buyLinks: [
      {
        label: { en: en.productsContent.items.inhalers.buyLabel, ar: ar.productsContent.items.inhalers.buyLabel },
        url: "https://a.co/d/08cWSVRk",
      },
    ],
  },
  {
    id: "nasal-sprays",
    title: { en: en.productsContent.items.nasalSprays.title, ar: ar.productsContent.items.nasalSprays.title },
    videos: [
      {
        locale: "en",
        label: {
          en: en.productsContent.items.nasalSprays.videoLabel,
          ar: ar.productsContent.items.nasalSprays.videoLabel,
        },
        url: "https://youtu.be/1ofPBXHDVDc",
      },
      {
        locale: "ar",
        label: {
          en: en.productsContent.items.nasalSprays.videoLabel,
          ar: ar.productsContent.items.nasalSprays.videoLabel,
        },
        url: "https://youtu.be/0Hwa0a556IU",
      },
    ],
    buyLinks: [
      {
        label: { en: en.productsContent.items.nasalSprays.buyLabel, ar: ar.productsContent.items.nasalSprays.buyLabel },
        url: "https://a.co/d/03Gu4s8J",
      },
    ],
  },
];

export function pt(record: Bilingual, locale: Locale): string {
  return record[locale];
}
