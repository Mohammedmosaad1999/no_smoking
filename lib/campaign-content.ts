import type { Locale, Bilingual } from "@/types";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

export const campaignContent = {
  cta: {
    en: en.campaignContent.cta,
    ar: ar.campaignContent.cta,
  },
  signup: {
    title: { en: en.campaignContent.signup.title, ar: ar.campaignContent.signup.title },
    subtitle: {
      en: en.campaignContent.signup.subtitle,
      ar: ar.campaignContent.signup.subtitle,
    },
    email: { en: en.campaignContent.signup.email, ar: ar.campaignContent.signup.email },
    name: { en: en.campaignContent.signup.name, ar: ar.campaignContent.signup.name },
    age: { en: en.campaignContent.signup.age, ar: ar.campaignContent.signup.age },
    gender: { en: en.campaignContent.signup.gender, ar: ar.campaignContent.signup.gender },
    smokingSince: {
      en: en.campaignContent.signup.smokingSince,
      ar: ar.campaignContent.signup.smokingSince,
    },
    cigarettesPerDay: {
      en: en.campaignContent.signup.cigarettesPerDay,
      ar: ar.campaignContent.signup.cigarettesPerDay,
    },
    whyStarted: {
      en: en.campaignContent.signup.whyStarted,
      ar: ar.campaignContent.signup.whyStarted,
    },
    quitDate: {
      en: en.campaignContent.signup.quitDate,
      ar: ar.campaignContent.signup.quitDate,
    },
    costPerCigarette: {
      en: en.campaignContent.signup.costPerCigarette,
      ar: ar.campaignContent.signup.costPerCigarette,
    },
    sections: {
      personal: { en: en.campaignContent.signup.sections.personal, ar: ar.campaignContent.signup.sections.personal },
      smoking: { en: en.campaignContent.signup.sections.smoking, ar: ar.campaignContent.signup.sections.smoking },
    },
    submit: { en: en.campaignContent.signup.submit, ar: ar.campaignContent.signup.submit },
    genderOptions: {
      male: { en: en.campaignContent.signup.genderOptions.male, ar: ar.campaignContent.signup.genderOptions.male },
      female: { en: en.campaignContent.signup.genderOptions.female, ar: ar.campaignContent.signup.genderOptions.female },
    },
  },
  importance: {
    title: {
      en: en.campaignContent.importance.title,
      ar: ar.campaignContent.importance.title,
    },
    body: {
      en: en.campaignContent.importance.body,
      ar: ar.campaignContent.importance.body,
    },
    nextCalculator: { en: en.campaignContent.importance.nextCalculator, ar: ar.campaignContent.importance.nextCalculator },
    nextTreatment: { en: en.campaignContent.importance.nextTreatment, ar: ar.campaignContent.importance.nextTreatment },
  },
  calculator: {
    badge: {
      en: en.campaignContent.calculator.badge,
      ar: ar.campaignContent.calculator.badge,
    },
    title: {
      en: en.campaignContent.calculator.title,
      ar: ar.campaignContent.calculator.title,
    },
    subtitle: {
      en: en.campaignContent.calculator.subtitle,
      ar: ar.campaignContent.calculator.subtitle,
    },
    cigarettesLabel: {
      en: en.campaignContent.calculator.cigarettesLabel,
      ar: ar.campaignContent.calculator.cigarettesLabel,
    },
    packLabel: {
      en: en.campaignContent.calculator.packLabel,
      ar: ar.campaignContent.calculator.packLabel,
    },
    costLabel: {
      en: en.campaignContent.calculator.costLabel,
      ar: ar.campaignContent.calculator.costLabel,
    },
    currencyLabel: { en: en.campaignContent.calculator.currencyLabel, ar: ar.campaignContent.calculator.currencyLabel },
    perDay: { en: en.campaignContent.calculator.perDay, ar: ar.campaignContent.calculator.perDay },
    perMonth: { en: en.campaignContent.calculator.perMonth, ar: ar.campaignContent.calculator.perMonth },
    perYear: { en: en.campaignContent.calculator.perYear, ar: ar.campaignContent.calculator.perYear },
    cigarettesYear: { en: en.campaignContent.calculator.cigarettesYear, ar: ar.campaignContent.calculator.cigarettesYear },
    fiveYears: {
      en: en.campaignContent.calculator.fiveYears,
      ar: ar.campaignContent.calculator.fiveYears,
    },
    savedNote: {
      en: en.campaignContent.calculator.savedNote,
      ar: ar.campaignContent.calculator.savedNote,
    },
    priceNote: {
      en: en.campaignContent.calculator.priceNote,
      ar: ar.campaignContent.calculator.priceNote,
    },
    dailyCost: { en: en.campaignContent.calculator.dailyCost, ar: ar.campaignContent.calculator.dailyCost },
    monthlyCost: { en: en.campaignContent.calculator.monthlyCost, ar: ar.campaignContent.calculator.monthlyCost },
    yearlyCost: { en: en.campaignContent.calculator.yearlyCost, ar: ar.campaignContent.calculator.yearlyCost },
    tenYearsCost: { en: en.campaignContent.calculator.tenYearsCost, ar: ar.campaignContent.calculator.tenYearsCost },
    savingsTitle: { en: en.campaignContent.calculator.savingsTitle, ar: ar.campaignContent.calculator.savingsTitle },
    saveIfQuit: {
      en: en.campaignContent.calculator.saveIfQuit,
      ar: ar.campaignContent.calculator.saveIfQuit,
    },
    saveIfHalf: {
      en: en.campaignContent.calculator.saveIfHalf,
      ar: ar.campaignContent.calculator.saveIfHalf,
    },
    example: {
      en: en.campaignContent.calculator.example,
      ar: ar.campaignContent.calculator.example,
    },
    nextProgress: { en: en.campaignContent.calculator.nextProgress, ar: ar.campaignContent.calculator.nextProgress },
    nextTreatment: { en: en.campaignContent.calculator.nextTreatment, ar: ar.campaignContent.calculator.nextTreatment },
  },
  nav: {
    campaign: { en: en.campaignContent.nav.campaign, ar: ar.campaignContent.nav.campaign },
    treatment: { en: en.campaignContent.nav.treatment, ar: ar.campaignContent.nav.treatment },
    progress: { en: en.campaignContent.nav.progress, ar: ar.campaignContent.nav.progress },
  },
} as const;

export function ct(record: Bilingual, locale: Locale): string {
  return record[locale];
}
