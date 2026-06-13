export const DEFAULT_CIGARETTE_PRICE = 5;
export const CIGARETTES_PER_PACK = 20;
export const DEFAULT_PACK_PRICE = DEFAULT_CIGARETTE_PRICE * CIGARETTES_PER_PACK;

export type CurrencyCode = "EGP" | "USD" | "AED";

const CURRENCY_FROM_EGP: Record<CurrencyCode, number> = {
  EGP: 1,
  USD: 1 / 48,
  AED: 1 / 13.2,
};

export type SmokingCosts = {
  daily: number;
  monthly: number;
  yearly: number;
  fiveYears: number;
  tenYears: number;
  cigarettesPerYear: number;
  saveIfQuitYearly: number;
  saveIfQuitMonthly: number;
  saveIfHalfYearly: number;
  saveIfHalfMonthly: number;
};

export function calculateSmokingCosts(
  cigarettesPerDay: number,
  pricePerCigarette: number = DEFAULT_CIGARETTE_PRICE,
): SmokingCosts {
  const daily = cigarettesPerDay * pricePerCigarette;
  const monthly = daily * 30;
  const yearly = daily * 365;
  const fiveYears = yearly * 5;
  const tenYears = yearly * 10;
  const saveIfHalfYearly = yearly / 2;
  const saveIfHalfMonthly = monthly / 2;

  return {
    daily,
    monthly,
    yearly,
    fiveYears,
    tenYears,
    cigarettesPerYear: cigarettesPerDay * 365,
    saveIfQuitYearly: yearly,
    saveIfQuitMonthly: monthly,
    saveIfHalfYearly: saveIfHalfYearly,
    saveIfHalfMonthly: saveIfHalfMonthly,
  };
}

export function formatNumber(value: number, maximumFractionDigits = 0): string {
  return value.toLocaleString("en-US", { maximumFractionDigits });
}

export function formatMoney(
  amountEgp: number,
  locale: "en" | "ar",
  currency: CurrencyCode = "EGP",
): string {
  const converted = amountEgp * CURRENCY_FROM_EGP[currency];
  const formatted = formatNumber(
    converted,
    currency === "EGP" ? 0 : 2,
  );

  if (currency === "EGP") {
    return locale === "ar" ? `${formatted} جنيه` : `${formatted} EGP`;
  }

  return `${formatted} ${currency}`;
}

export function formatEgp(amount: number, locale: "en" | "ar"): string {
  return formatMoney(amount, locale, "EGP");
}
