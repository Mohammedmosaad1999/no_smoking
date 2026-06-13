import type { Locale, Bilingual, Milestone, HealthImprovement } from "@/types";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

export const milestones: Milestone[] = [
  { days: 1, badge: { en: en.progressContent.milestones.bronze, ar: ar.progressContent.milestones.bronze }, color: "#cd7f32" },
  { days: 3, badge: { en: en.progressContent.milestones.silver, ar: ar.progressContent.milestones.silver }, color: "#c0c0c0" },
  { days: 7, badge: { en: en.progressContent.milestones.gold, ar: ar.progressContent.milestones.gold }, color: "#ffd700" },
  { days: 30, badge: { en: en.progressContent.milestones.diamond, ar: ar.progressContent.milestones.diamond }, color: "#b9f2ff" },
  { days: 90, badge: { en: en.progressContent.milestones.platinum, ar: ar.progressContent.milestones.platinum }, color: "#e5e4e2" },
  { days: 180, badge: { en: en.progressContent.milestones.champion, ar: ar.progressContent.milestones.champion }, color: "#50c878" },
  { days: 365, badge: { en: en.progressContent.milestones.conqueror, ar: ar.progressContent.milestones.conqueror }, color: "#4169e1" },
  { days: 730, badge: { en: en.progressContent.milestones.master, ar: ar.progressContent.milestones.master }, color: "#9932cc" },
  { days: 1095, badge: { en: en.progressContent.milestones.reclaimer, ar: ar.progressContent.milestones.reclaimer }, color: "#008080" },
];

export const healthImprovements: HealthImprovement[] = [
  {
    id: "20min",
    timeframe: { en: en.progressContent.healthTimeline.t20m.timeframe, ar: ar.progressContent.healthTimeline.t20m.timeframe },
    improvements: [
      { en: en.progressContent.healthTimeline.t20m.improvements[0], ar: ar.progressContent.healthTimeline.t20m.improvements[0] },
      { en: en.progressContent.healthTimeline.t20m.improvements[1], ar: ar.progressContent.healthTimeline.t20m.improvements[1] },
      { en: en.progressContent.healthTimeline.t20m.improvements[2], ar: ar.progressContent.healthTimeline.t20m.improvements[2] },
    ],
  },
  {
    id: "8-12h",
    timeframe: { en: en.progressContent.healthTimeline.t8h.timeframe, ar: ar.progressContent.healthTimeline.t8h.timeframe },
    improvements: [
      { en: en.progressContent.healthTimeline.t8h.improvements[0], ar: ar.progressContent.healthTimeline.t8h.improvements[0] },
      { en: en.progressContent.healthTimeline.t8h.improvements[1], ar: ar.progressContent.healthTimeline.t8h.improvements[1] },
      { en: en.progressContent.healthTimeline.t8h.improvements[2], ar: ar.progressContent.healthTimeline.t8h.improvements[2] },
    ],
  },
  {
    id: "1day",
    timeframe: { en: en.progressContent.healthTimeline.t1d.timeframe, ar: ar.progressContent.healthTimeline.t1d.timeframe },
    improvements: [
      { en: en.progressContent.healthTimeline.t1d.improvements[0], ar: ar.progressContent.healthTimeline.t1d.improvements[0] },
      { en: en.progressContent.healthTimeline.t1d.improvements[1], ar: ar.progressContent.healthTimeline.t1d.improvements[1] },
      { en: en.progressContent.healthTimeline.t1d.improvements[2], ar: ar.progressContent.healthTimeline.t1d.improvements[2] },
    ],
  },
  {
    id: "2days",
    timeframe: { en: en.progressContent.healthTimeline.t2d.timeframe, ar: ar.progressContent.healthTimeline.t2d.timeframe },
    improvements: [
      { en: en.progressContent.healthTimeline.t2d.improvements[0], ar: ar.progressContent.healthTimeline.t2d.improvements[0] },
      { en: en.progressContent.healthTimeline.t2d.improvements[1], ar: ar.progressContent.healthTimeline.t2d.improvements[1] },
      { en: en.progressContent.healthTimeline.t2d.improvements[2], ar: ar.progressContent.healthTimeline.t2d.improvements[2] },
    ],
  },
  {
    id: "2weeks-3months",
    timeframe: { en: en.progressContent.healthTimeline.t2w.timeframe, ar: ar.progressContent.healthTimeline.t2w.timeframe },
    improvements: [
      { en: en.progressContent.healthTimeline.t2w.improvements[0], ar: ar.progressContent.healthTimeline.t2w.improvements[0] },
      { en: en.progressContent.healthTimeline.t2w.improvements[1], ar: ar.progressContent.healthTimeline.t2w.improvements[1] },
      { en: en.progressContent.healthTimeline.t2w.improvements[2], ar: ar.progressContent.healthTimeline.t2w.improvements[2] },
      { en: en.progressContent.healthTimeline.t2w.improvements[3], ar: ar.progressContent.healthTimeline.t2w.improvements[3] },
    ],
  },
  {
    id: "1-9months",
    timeframe: { en: en.progressContent.healthTimeline.t1m.timeframe, ar: ar.progressContent.healthTimeline.t1m.timeframe },
    improvements: [
      { en: en.progressContent.healthTimeline.t1m.improvements[0], ar: ar.progressContent.healthTimeline.t1m.improvements[0] },
      { en: en.progressContent.healthTimeline.t1m.improvements[1], ar: ar.progressContent.healthTimeline.t1m.improvements[1] },
      { en: en.progressContent.healthTimeline.t1m.improvements[2], ar: ar.progressContent.healthTimeline.t1m.improvements[2] },
      { en: en.progressContent.healthTimeline.t1m.improvements[3], ar: ar.progressContent.healthTimeline.t1m.improvements[3] },
    ],
  },
  {
    id: "1year",
    timeframe: { en: en.progressContent.healthTimeline.t1y.timeframe, ar: ar.progressContent.healthTimeline.t1y.timeframe },
    improvements: [
      { en: en.progressContent.healthTimeline.t1y.improvements[0], ar: ar.progressContent.healthTimeline.t1y.improvements[0] },
      { en: en.progressContent.healthTimeline.t1y.improvements[1], ar: ar.progressContent.healthTimeline.t1y.improvements[1] },
    ],
  },
  {
    id: "2years",
    timeframe: { en: en.progressContent.healthTimeline.t2y.timeframe, ar: ar.progressContent.healthTimeline.t2y.timeframe },
    improvements: [
      { en: en.progressContent.healthTimeline.t2y.improvements[0], ar: ar.progressContent.healthTimeline.t2y.improvements[0] },
      { en: en.progressContent.healthTimeline.t2y.improvements[1], ar: ar.progressContent.healthTimeline.t2y.improvements[1] },
      { en: en.progressContent.healthTimeline.t2y.improvements[2], ar: ar.progressContent.healthTimeline.t2y.improvements[2] },
    ],
  },
  {
    id: "3years",
    timeframe: { en: en.progressContent.healthTimeline.t3y.timeframe, ar: ar.progressContent.healthTimeline.t3y.timeframe },
    improvements: [
      { en: en.progressContent.healthTimeline.t3y.improvements[0], ar: ar.progressContent.healthTimeline.t3y.improvements[0] },
      { en: en.progressContent.healthTimeline.t3y.improvements[1], ar: ar.progressContent.healthTimeline.t3y.improvements[1] },
      { en: en.progressContent.healthTimeline.t3y.improvements[2], ar: ar.progressContent.healthTimeline.t3y.improvements[2] },
      { en: en.progressContent.healthTimeline.t3y.improvements[3], ar: ar.progressContent.healthTimeline.t3y.improvements[3] },
    ],
  },
];

export const progressContent = {
  title: { en: en.progressContent.title, ar: ar.progressContent.title },
  subtitle: {
    en: en.progressContent.subtitle,
    ar: ar.progressContent.subtitle,
  },
  streak: { en: en.progressContent.streak, ar: ar.progressContent.streak },
  currentBadge: { en: en.progressContent.currentBadge, ar: ar.progressContent.currentBadge },
  nextMilestone: { en: en.progressContent.nextMilestone, ar: ar.progressContent.nextMilestone },
  daysToGo: { en: en.progressContent.daysToGo, ar: ar.progressContent.daysToGo },
  moneySaved: { en: en.progressContent.moneySaved, ar: ar.progressContent.moneySaved },
  moneyBefore: { en: en.progressContent.moneyBefore, ar: ar.progressContent.moneyBefore },
  moneyAfter: { en: en.progressContent.moneyAfter, ar: ar.progressContent.moneyAfter },
  healthTitle: {
    en: en.progressContent.healthTitle,
    ar: ar.progressContent.healthTitle,
  },
  feelingQuestion: {
    en: en.progressContent.feelingQuestion,
    ar: ar.progressContent.feelingQuestion,
  },
  yes: { en: en.progressContent.yes, ar: ar.progressContent.yes },
  no: { en: en.progressContent.no, ar: ar.progressContent.no },
  notifications: {
    title: { en: en.progressContent.notifications.title, ar: ar.progressContent.notifications.title },
    subtitle: {
      en: en.progressContent.notifications.subtitle,
      ar: ar.progressContent.notifications.subtitle,
    },
    enable: { en: en.progressContent.notifications.enable, ar: ar.progressContent.notifications.enable },
    phone: { en: en.progressContent.notifications.phone, ar: ar.progressContent.notifications.phone },
    messages: { en: en.progressContent.notifications.messages, ar: ar.progressContent.notifications.messages },
    access: { en: en.progressContent.notifications.access, ar: ar.progressContent.notifications.access },
    motivational: { en: en.progressContent.notifications.motivational, ar: ar.progressContent.notifications.motivational },
    sampleMessages: [
      {
        en: en.progressContent.notifications.sampleMessages[0],
        ar: ar.progressContent.notifications.sampleMessages[0],
      },
      {
        en: en.progressContent.notifications.sampleMessages[1],
        ar: ar.progressContent.notifications.sampleMessages[1],
      },
      {
        en: en.progressContent.notifications.sampleMessages[2],
        ar: ar.progressContent.notifications.sampleMessages[2],
      },
    ],
  },
  noProfile: {
    en: en.progressContent.noProfile,
    ar: ar.progressContent.noProfile,
  },
  signupLink: { en: en.progressContent.signupLink, ar: ar.progressContent.signupLink },
} as const;

export function pt(record: Bilingual, locale: Locale): string {
  return record[locale];
}
