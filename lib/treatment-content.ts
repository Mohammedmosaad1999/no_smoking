import type { Locale, Bilingual, TreatmentSection, VideoLink, BuyLink } from "@/types";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

export const treatmentContent = {
  title: { en: en.treatmentContent.title, ar: ar.treatmentContent.title },
  subtitle: {
    en: en.treatmentContent.subtitle,
    ar: ar.treatmentContent.subtitle,
  },
  tabs: {
    medical: { en: en.treatmentContent.tabs.medical, ar: ar.treatmentContent.tabs.medical },
    nrt: { en: en.treatmentContent.tabs.nrt, ar: ar.treatmentContent.tabs.nrt },
    psychological: { en: en.treatmentContent.tabs.psychological, ar: ar.treatmentContent.tabs.psychological },
    mohp: { en: en.treatmentContent.tabs.mohp, ar: ar.treatmentContent.tabs.mohp },
  },
  medical: {
    intro: {
      en: en.treatmentContent.medical.intro,
      ar: ar.treatmentContent.medical.intro,
    },
    champix: {
      title: { en: en.treatmentContent.medical.champix.title, ar: ar.treatmentContent.medical.champix.title },
      mechanism: {
        title: { en: en.treatmentContent.medical.champix.mechanism.title, ar: ar.treatmentContent.medical.champix.mechanism.title },
        body: {
          en: en.treatmentContent.medical.champix.mechanism.body,
          ar: ar.treatmentContent.medical.champix.mechanism.body,
        },
      },
      why: {
        title: { en: en.treatmentContent.medical.champix.why.title, ar: ar.treatmentContent.medical.champix.why.title },
        body: {
          en: en.treatmentContent.medical.champix.why.body,
          ar: ar.treatmentContent.medical.champix.why.body,
        },
      },
      risks: {
        title: { en: en.treatmentContent.medical.champix.risks.title, ar: ar.treatmentContent.medical.champix.risks.title },
        body: {
          en: en.treatmentContent.medical.champix.risks.body,
          ar: ar.treatmentContent.medical.champix.risks.body,
        },
      },
      whereToBuy: { en: en.treatmentContent.medical.champix.whereToBuy, ar: ar.treatmentContent.medical.champix.whereToBuy },
      video: { en: en.treatmentContent.medical.champix.video, ar: ar.treatmentContent.medical.champix.video },
      buyUrl: "https://www.vezeeta.com/en-eg/pharmacy/champix-1-mg-28-f-c-tablet",
      videos: [
        {
          locale: "ar",
          label: {
            en: en.treatmentContent.medical.champix.videoLabel,
            ar: ar.treatmentContent.medical.champix.videoLabel,
          },
          url: "https://youtu.be/osVTf4Un_3c?si=nYsPmVWZTmuUJ3VG",
        },
      ],
    },
  },
  nrt: {
    intro: {
      title: { en: en.treatmentContent.nrt.intro.title, ar: ar.treatmentContent.nrt.intro.title },
      paragraphs: [
        {
          en: en.treatmentContent.nrt.intro.paragraphs[0],
          ar: ar.treatmentContent.nrt.intro.paragraphs[0],
        },
        {
          en: en.treatmentContent.nrt.intro.paragraphs[1],
          ar: ar.treatmentContent.nrt.intro.paragraphs[1],
        },
        {
          en: en.treatmentContent.nrt.intro.paragraphs[2],
          ar: ar.treatmentContent.nrt.intro.paragraphs[2],
        },
      ],
    },
    products: ["Gum", "Lozenges", "Skin patches", "Inhalers", "Nasal sprays"] as const,
    productLabels: {
      Gum: { en: en.treatmentContent.nrt.productLabels.Gum, ar: ar.treatmentContent.nrt.productLabels.Gum },
      Lozenges: { en: en.treatmentContent.nrt.productLabels.Lozenges, ar: ar.treatmentContent.nrt.productLabels.Lozenges },
      "Skin patches": { en: en.treatmentContent.nrt.productLabels["Skin patches"], ar: ar.treatmentContent.nrt.productLabels["Skin patches"] },
      Inhalers: { en: en.treatmentContent.nrt.productLabels.Inhalers, ar: ar.treatmentContent.nrt.productLabels.Inhalers },
      "Nasal sprays": { en: en.treatmentContent.nrt.productLabels["Nasal sprays"], ar: ar.treatmentContent.nrt.productLabels["Nasal sprays"] },
    },
    sections: [
      {
        id: "gum",
        title: { en: en.treatmentContent.nrt.sections.gum.title, ar: ar.treatmentContent.nrt.sections.gum.title },
        content: [
          {
            en: en.treatmentContent.nrt.sections.gum.content[0],
            ar: ar.treatmentContent.nrt.sections.gum.content[0],
          },
          {
            en: en.treatmentContent.nrt.sections.gum.content[1],
            ar: ar.treatmentContent.nrt.sections.gum.content[1],
          },
        ],
        videos: [
          {
            locale: "en",
            label: { en: en.treatmentContent.nrt.sections.gum.videoLabel, ar: ar.treatmentContent.nrt.sections.gum.videoLabel },
            url: "https://youtu.be/7wvBq38mues?si=Qk_tapQShv-bdXf8",
          },
          {
            locale: "ar",
            label: { en: en.treatmentContent.nrt.sections.gum.videoLabel, ar: ar.treatmentContent.nrt.sections.gum.videoLabel },
            url: "https://youtu.be/OSW0lT6pI90?si=KDrIrKmYZhBdSKz9",
          },
        ],
        buyLinks: [
          { label: { en: en.treatmentContent.nrt.sections.gum.buyLinks.gum, ar: ar.treatmentContent.nrt.sections.gum.buyLinks.gum }, url: "https://www.amazon.com/Blip-NRT-Nicotine-Gum-Replacement/dp/B0CM6V6TS9" },
          { label: { en: en.treatmentContent.nrt.sections.gum.buyLinks.lozenges, ar: ar.treatmentContent.nrt.sections.gum.buyLinks.lozenges }, url: "https://www.amazon.com/Quitine-Nicotine-Lozenges-Flavor-Smoking/dp/B0DN3YWVVB" },
        ],
      },
      {
        id: "lozenges",
        title: { en: en.treatmentContent.nrt.sections.lozenges.title, ar: ar.treatmentContent.nrt.sections.lozenges.title },
        content: [
          {
            en: en.treatmentContent.nrt.sections.lozenges.content[0],
            ar: ar.treatmentContent.nrt.sections.lozenges.content[0],
          },
          {
            en: en.treatmentContent.nrt.sections.lozenges.content[1],
            ar: ar.treatmentContent.nrt.sections.lozenges.content[1],
          },
        ],
        videos: [
          {
            locale: "en",
            label: { en: en.treatmentContent.nrt.sections.lozenges.videoLabel, ar: ar.treatmentContent.nrt.sections.lozenges.videoLabel },
            url: "https://youtu.be/IzRgbANNrWE?si=asp5o0nGSjgUah4f",
          },
        ],
        buyLinks: [
          { label: { en: en.treatmentContent.nrt.sections.lozenges.buyLabel, ar: ar.treatmentContent.nrt.sections.lozenges.buyLabel }, url: "https://a.co/d/0fB0F24d" },
        ],
      },
      {
        id: "patches",
        title: { en: en.treatmentContent.nrt.sections.patches.title, ar: ar.treatmentContent.nrt.sections.patches.title },
        content: [
          {
            en: en.treatmentContent.nrt.sections.patches.content[0],
            ar: ar.treatmentContent.nrt.sections.patches.content[0],
          },
          {
            en: en.treatmentContent.nrt.sections.patches.content[1],
            ar: ar.treatmentContent.nrt.sections.patches.content[1],
          },
        ],
        videos: [
          {
            locale: "en",
            label: { en: en.treatmentContent.nrt.sections.patches.videoLabel, ar: ar.treatmentContent.nrt.sections.patches.videoLabel },
            url: "https://youtu.be/3e4-_X_5kWA?si=YI6sqHXZLqcIiHny",
          },
          {
            locale: "ar",
            label: { en: en.treatmentContent.nrt.sections.patches.videoLabel, ar: ar.treatmentContent.nrt.sections.patches.videoLabel },
            url: "https://youtu.be/pzmOfgftV5c?si=4pomj5ni3hQmnBb8",
          },
        ],
        buyLinks: [
          { label: { en: en.treatmentContent.nrt.sections.patches.buyLabel, ar: ar.treatmentContent.nrt.sections.patches.buyLabel }, url: "https://a.co/d/0atPe6Zg" },
        ],
      },
      {
        id: "inhalers",
        title: { en: en.treatmentContent.nrt.sections.inhalers.title, ar: ar.treatmentContent.nrt.sections.inhalers.title },
        content: [
          {
            en: en.treatmentContent.nrt.sections.inhalers.content[0],
            ar: ar.treatmentContent.nrt.sections.inhalers.content[0],
          },
          {
            en: en.treatmentContent.nrt.sections.inhalers.content[1],
            ar: ar.treatmentContent.nrt.sections.inhalers.content[1],
          },
        ],
        videos: [
          {
            locale: "en",
            label: { en: en.treatmentContent.nrt.sections.inhalers.videoLabel, ar: ar.treatmentContent.nrt.sections.inhalers.videoLabel },
            url: "https://youtu.be/TlkLj4IY25s?si=gtb0mvoiJae-jrP-",
          },
          {
            locale: "ar",
            label: { en: en.treatmentContent.nrt.sections.inhalers.videoLabel, ar: ar.treatmentContent.nrt.sections.inhalers.videoLabel },
            url: "https://youtube.com/shorts/HWXO5qOey4c?si=ddx1CtkWFDPLhw3G",
          },
        ],
        buyLinks: [
          { label: { en: en.treatmentContent.nrt.sections.inhalers.buyLabel, ar: ar.treatmentContent.nrt.sections.inhalers.buyLabel }, url: "https://a.co/d/08cWSVRk" },
        ],
      },
      {
        id: "nasal-spray",
        title: { en: en.treatmentContent.nrt.sections.nasalSpray.title, ar: ar.treatmentContent.nrt.sections.nasalSpray.title },
        content: [
          {
            en: en.treatmentContent.nrt.sections.nasalSpray.content[0],
            ar: ar.treatmentContent.nrt.sections.nasalSpray.content[0],
          },
          {
            en: en.treatmentContent.nrt.sections.nasalSpray.content[1],
            ar: ar.treatmentContent.nrt.sections.nasalSpray.content[1],
          },
        ],
        videos: [
          {
            locale: "en",
            label: { en: en.treatmentContent.nrt.sections.nasalSpray.videoLabel, ar: ar.treatmentContent.nrt.sections.nasalSpray.videoLabel },
            url: "https://youtu.be/1ofPBXHDVDc?si=oHOaI9KY-HDhUlzL",
          },
          {
            locale: "ar",
            label: { en: en.treatmentContent.nrt.sections.nasalSpray.videoLabel, ar: ar.treatmentContent.nrt.sections.nasalSpray.videoLabel },
            url: "https://youtu.be/0Hwa0a556IU?si=KBprIFcsOxJ-yyyb",
          },
        ],
        buyLinks: [
          { label: { en: en.treatmentContent.nrt.sections.nasalSpray.buyLabel, ar: ar.treatmentContent.nrt.sections.nasalSpray.buyLabel }, url: "https://a.co/d/03Gu4s8J" },
        ],
      },
    ] as TreatmentSection[],
    combining: {
      title: { en: en.treatmentContent.nrt.combining.title, ar: ar.treatmentContent.nrt.combining.title },
      body: {
        en: en.treatmentContent.nrt.combining.body,
        ar: ar.treatmentContent.nrt.combining.body,
      },
    },
    risksBenefits: {
      title: { en: en.treatmentContent.nrt.risksBenefits.title, ar: ar.treatmentContent.nrt.risksBenefits.title },
      advantages: {
        title: { en: en.treatmentContent.nrt.risksBenefits.advantages.title, ar: ar.treatmentContent.nrt.risksBenefits.advantages.title },
        body: {
          en: en.treatmentContent.nrt.risksBenefits.advantages.body,
          ar: ar.treatmentContent.nrt.risksBenefits.advantages.body,
        },
      },
      sideEffects: {
        title: { en: en.treatmentContent.nrt.risksBenefits.sideEffects.title, ar: ar.treatmentContent.nrt.risksBenefits.sideEffects.title },
        general: [
          { en: en.treatmentContent.nrt.risksBenefits.sideEffects.general[0], ar: ar.treatmentContent.nrt.risksBenefits.sideEffects.general[0] },
          { en: en.treatmentContent.nrt.risksBenefits.sideEffects.general[1], ar: ar.treatmentContent.nrt.risksBenefits.sideEffects.general[1] },
          { en: en.treatmentContent.nrt.risksBenefits.sideEffects.general[2], ar: ar.treatmentContent.nrt.risksBenefits.sideEffects.general[2] },
        ],
        patches: [
          { en: en.treatmentContent.nrt.risksBenefits.sideEffects.patches[0], ar: ar.treatmentContent.nrt.risksBenefits.sideEffects.patches[0] },
          { en: en.treatmentContent.nrt.risksBenefits.sideEffects.patches[1], ar: ar.treatmentContent.nrt.risksBenefits.sideEffects.patches[1] },
        ],
        gum: [
          { en: en.treatmentContent.nrt.risksBenefits.sideEffects.gum[0], ar: ar.treatmentContent.nrt.risksBenefits.sideEffects.gum[0] },
          { en: en.treatmentContent.nrt.risksBenefits.sideEffects.gum[1], ar: ar.treatmentContent.nrt.risksBenefits.sideEffects.gum[1] },
          { en: en.treatmentContent.nrt.risksBenefits.sideEffects.gum[2], ar: ar.treatmentContent.nrt.risksBenefits.sideEffects.gum[2] },
        ],
      },
      poisoning: {
        title: { en: en.treatmentContent.nrt.risksBenefits.poisoning.title, ar: ar.treatmentContent.nrt.risksBenefits.poisoning.title },
        body: {
          en: en.treatmentContent.nrt.risksBenefits.poisoning.body,
          ar: ar.treatmentContent.nrt.risksBenefits.poisoning.body,
        },
      },
    },
    recovery: {
      title: { en: en.treatmentContent.nrt.recovery.title, ar: ar.treatmentContent.nrt.recovery.title },
      duration: {
        en: en.treatmentContent.nrt.recovery.duration,
        ar: ar.treatmentContent.nrt.recovery.duration,
      },
      alternatives: {
        en: en.treatmentContent.nrt.recovery.alternatives,
        ar: ar.treatmentContent.nrt.recovery.alternatives,
      },
    },
    teamNote: {
      title: { en: en.treatmentContent.nrt.teamNote.title, ar: ar.treatmentContent.nrt.teamNote.title },
      body: {
        en: en.treatmentContent.nrt.teamNote.body,
        ar: ar.treatmentContent.nrt.teamNote.body,
      },
    },
    whereToBuy: { en: en.treatmentContent.nrt.whereToBuy, ar: ar.treatmentContent.nrt.whereToBuy },
    videos: { en: en.treatmentContent.nrt.videos, ar: ar.treatmentContent.nrt.videos },
  },
  psychological: {
    title: { en: en.treatmentContent.psychological.title, ar: ar.treatmentContent.psychological.title },
    methods: [
      {
        title: { en: en.treatmentContent.psychological.methods[0].title, ar: ar.treatmentContent.psychological.methods[0].title },
        description: {
          en: en.treatmentContent.psychological.methods[0].description,
          ar: ar.treatmentContent.psychological.methods[0].description,
        },
        example: {
          en: en.treatmentContent.psychological.methods[0].example,
          ar: ar.treatmentContent.psychological.methods[0].example,
        },
      },
      {
        title: { en: en.treatmentContent.psychological.methods[1].title, ar: ar.treatmentContent.psychological.methods[1].title },
        description: {
          en: en.treatmentContent.psychological.methods[1].description,
          ar: ar.treatmentContent.psychological.methods[1].description,
        },
        example: {
          en: en.treatmentContent.psychological.methods[1].example,
          ar: ar.treatmentContent.psychological.methods[1].example,
        },
      },
      {
        title: { en: en.treatmentContent.psychological.methods[2].title, ar: ar.treatmentContent.psychological.methods[2].title },
        description: {
          en: en.treatmentContent.psychological.methods[2].description,
          ar: ar.treatmentContent.psychological.methods[2].description,
        },
      },
      {
        title: { en: en.treatmentContent.psychological.methods[3].title, ar: ar.treatmentContent.psychological.methods[3].title },
        description: {
          en: en.treatmentContent.psychological.methods[3].description,
          ar: ar.treatmentContent.psychological.methods[3].description,
        },
      },
      {
        title: { en: en.treatmentContent.psychological.methods[4].title, ar: ar.treatmentContent.psychological.methods[4].title },
        description: {
          en: en.treatmentContent.psychological.methods[4].description,
          ar: ar.treatmentContent.psychological.methods[4].description,
        },
      },
      {
        title: { en: en.treatmentContent.psychological.methods[5].title, ar: ar.treatmentContent.psychological.methods[5].title },
        description: {
          en: en.treatmentContent.psychological.methods[5].description,
          ar: ar.treatmentContent.psychological.methods[5].description,
        },
      },
      {
        title: { en: en.treatmentContent.psychological.methods[6].title, ar: ar.treatmentContent.psychological.methods[6].title },
        description: {
          en: en.treatmentContent.psychological.methods[6].description,
          ar: ar.treatmentContent.psychological.methods[6].description,
        },
      },
    ],
  },
  mohp: {
    title: { en: en.treatmentContent.mohp.title, ar: ar.treatmentContent.mohp.title },
    subtitle: {
      en: en.treatmentContent.mohp.subtitle,
      ar: ar.treatmentContent.mohp.subtitle,
    },
    sections: [
      {
        title: { en: en.treatmentContent.mohp.sections[0].title, ar: ar.treatmentContent.mohp.sections[0].title },
        body: {
          en: en.treatmentContent.mohp.sections[0].body,
          ar: ar.treatmentContent.mohp.sections[0].body,
        },
        bullets: [
          { en: en.treatmentContent.mohp.sections[0].bullets[0], ar: ar.treatmentContent.mohp.sections[0].bullets[0] },
          { en: en.treatmentContent.mohp.sections[0].bullets[1], ar: ar.treatmentContent.mohp.sections[0].bullets[1] },
          { en: en.treatmentContent.mohp.sections[0].bullets[2], ar: ar.treatmentContent.mohp.sections[0].bullets[2] },
          { en: en.treatmentContent.mohp.sections[0].bullets[3], ar: ar.treatmentContent.mohp.sections[0].bullets[3] },
        ],
      },
      {
        title: { en: en.treatmentContent.mohp.sections[1].title, ar: ar.treatmentContent.mohp.sections[1].title },
        body: {
          en: en.treatmentContent.mohp.sections[1].body,
          ar: ar.treatmentContent.mohp.sections[1].body,
        },
      },
      {
        title: { en: en.treatmentContent.mohp.sections[2].title, ar: ar.treatmentContent.mohp.sections[2].title },
        body: {
          en: en.treatmentContent.mohp.sections[2].body,
          ar: ar.treatmentContent.mohp.sections[2].body,
        },
      },
      {
        title: { en: en.treatmentContent.mohp.sections[3].title, ar: ar.treatmentContent.mohp.sections[3].title },
        body: {
          en: en.treatmentContent.mohp.sections[3].body,
          ar: ar.treatmentContent.mohp.sections[3].body,
        },
      },
      {
        title: { en: en.treatmentContent.mohp.sections[4].title, ar: ar.treatmentContent.mohp.sections[4].title },
        body: {
          en: en.treatmentContent.mohp.sections[4].body,
          ar: ar.treatmentContent.mohp.sections[4].body,
        },
      },
      {
        title: { en: en.treatmentContent.mohp.sections[5].title, ar: ar.treatmentContent.mohp.sections[5].title },
        body: {
          en: en.treatmentContent.mohp.sections[5].body,
          ar: ar.treatmentContent.mohp.sections[5].body,
        },
      },
    ],
    impact: {
      title: { en: en.treatmentContent.mohp.impact.title, ar: ar.treatmentContent.mohp.impact.title },
      bullets: [
        { en: en.treatmentContent.mohp.impact.bullets[0], ar: ar.treatmentContent.mohp.impact.bullets[0] },
        { en: en.treatmentContent.mohp.impact.bullets[1], ar: ar.treatmentContent.mohp.impact.bullets[1] },
        { en: en.treatmentContent.mohp.impact.bullets[2], ar: ar.treatmentContent.mohp.impact.bullets[2] },
        { en: en.treatmentContent.mohp.impact.bullets[3], ar: ar.treatmentContent.mohp.impact.bullets[3] },
      ],
    },
  },
} as const;

export function tt(record: Bilingual, locale: Locale): string {
  return record[locale];
}
