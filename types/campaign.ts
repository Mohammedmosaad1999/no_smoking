import type { Locale } from "./i18n";
import type { Bilingual, LocalizedVideo, ProductBuyLink } from "./product";

export type AssessmentOption = {
  label: Bilingual;
  points: number;
};

export type AssessmentQuestion = {
  id: string;
  question: Bilingual;
  options: AssessmentOption[];
};

export type SeverityLevel = {
  min: number;
  max: number;
  label: Bilingual;
  interpretation: Bilingual;
  color: string;
};

export type ScoringTableEntry = {
  range: string;
  label: Bilingual;
};

export type VideoLink = LocalizedVideo;
export type BuyLink = ProductBuyLink;

export type TreatmentSection = {
  id: string;
  title: Bilingual;
  content: Bilingual[];
  videos?: VideoLink[];
  buyLinks?: BuyLink[];
  bullets?: Bilingual[][];
};

export type Milestone = {
  days: number;
  badge: Bilingual;
  color: string;
};

export type HealthImprovement = {
  id: string;
  timeframe: Bilingual;
  improvements: Bilingual[];
};
