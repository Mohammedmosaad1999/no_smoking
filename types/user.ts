export type UserProfile = {
  email: string;
  name: string;
  age: string;
  gender: string;
  smokingSince: string;
  cigarettesPerDay: string;
  whyStarted: string;
  quitDate: string;
  costPerCigarette: string;
};

export type HealthEvaluation = Record<string, "yes" | "no" | null>;

export type AssessmentResult = {
  score: number;
  answers: Record<string, number>;
};
