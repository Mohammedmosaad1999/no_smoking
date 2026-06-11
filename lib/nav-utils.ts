import type { Locale } from "./i18n";

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
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
