export const DEFAULT_CIGARETTE_PRICE = 5;

export type SmokingCosts = {
  daily: number;
  monthly: number;
  yearly: number;
  tenYears: number;
  saveIfQuitYearly: number;
  saveIfQuitMonthly: number;
  saveIfHalfYearly: number;
  saveIfHalfMonthly: number;
};

export function calculateSmokingCosts(
  cigarettesPerDay: number,
  pricePerCigarette: number = DEFAULT_CIGARETTE_PRICE
): SmokingCosts {
  const daily = cigarettesPerDay * pricePerCigarette;
  const monthly = daily * 30;
  const yearly = daily * 365;
  const tenYears = yearly * 10;
  const saveIfHalfYearly = yearly / 2;
  const saveIfHalfMonthly = monthly / 2;

  return {
    daily,
    monthly,
    yearly,
    tenYears,
    saveIfQuitYearly: yearly,
    saveIfQuitMonthly: monthly,
    saveIfHalfYearly: saveIfHalfYearly,
    saveIfHalfMonthly: saveIfHalfMonthly,
  };
}

export function formatEgp(amount: number, locale: "en" | "ar"): string {
  const formatted = amount.toLocaleString(undefined, { maximumFractionDigits: 0 });
  return locale === "ar" ? `${formatted} جنيه` : `${formatted} EGP`;
}
