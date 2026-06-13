import type { UserProfile, AssessmentResult, HealthEvaluation } from "@/types";

const PROFILE_KEY = "ryb_user_profile";
const ASSESSMENT_KEY = "ryb_assessment_result";
const EVALUATIONS_KEY = "ryb_health_evaluations";
const NOTIFICATIONS_KEY = "ryb_notifications_enabled";

export function getUserProfile(): UserProfile | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(PROFILE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as UserProfile;
  } catch {
    return null;
  }
}

export function saveUserProfile(profile: UserProfile): void {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

export function getAssessmentResult(): AssessmentResult | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(ASSESSMENT_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AssessmentResult;
  } catch {
    return null;
  }
}

export function saveAssessmentResult(result: AssessmentResult): void {
  localStorage.setItem(ASSESSMENT_KEY, JSON.stringify(result));
}

export function getHealthEvaluations(): HealthEvaluation {
  if (typeof window === "undefined") return {};
  const raw = localStorage.getItem(EVALUATIONS_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as HealthEvaluation;
  } catch {
    return {};
  }
}

export function saveHealthEvaluation(id: string, value: "yes" | "no"): void {
  const current = getHealthEvaluations();
  current[id] = value;
  localStorage.setItem(EVALUATIONS_KEY, JSON.stringify(current));
}

export function getNotificationsEnabled(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(NOTIFICATIONS_KEY) === "true";
}

export function setNotificationsEnabled(enabled: boolean): void {
  localStorage.setItem(NOTIFICATIONS_KEY, String(enabled));
}

export function getDaysSinceQuit(quitDate: string): number {
  if (!quitDate) return 0;
  const quit = new Date(quitDate);
  const now = new Date();
  quit.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  const diff = now.getTime() - quit.getTime();
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
}

export function getMoneySaved(
  cigarettesPerDay: number,
  costPerCigarette: number,
  days: number
): number {
  return cigarettesPerDay * costPerCigarette * days;
}
