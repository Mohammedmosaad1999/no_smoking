import { isValidLocale, type Locale } from "./i18n";

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const normalized = normalizePath(pathname);
  const segments = normalized.split("/").filter(Boolean);

  if (segments.length > 0 && isValidLocale(segments[0])) {
    segments[0] = locale;
    return `/${segments.join("/")}`;
  }

  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function isNavLinkActive(
  pathname: string,
  href: string,
  locale: Locale,
): boolean {
  const current = normalizePath(pathname);
  const target = normalizePath(href);

  if (target === `/${locale}`) {
    return current === `/${locale}`;
  }

  if (target === `/${locale}/campaign/treatment`) {
    return (
      current.startsWith(target) &&
      !current.startsWith(`/${locale}/campaign/treatment/psychological`)
    );
  }

  return current === target || current.startsWith(`${target}/`);
}

export function isSignupActive(pathname: string, locale: Locale): boolean {
  return pathname.startsWith(`/${locale}/campaign/signup`);
}
