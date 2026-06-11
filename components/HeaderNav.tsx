"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { campaignContent } from "@/lib/campaign-content";
import { getNavLinks, ht } from "@/lib/home-content";
import type { Locale } from "@/lib/i18n";
import { isNavLinkActive, isSignupActive } from "@/lib/nav-utils";

type HeaderNavProps = {
  locale: Locale;
};

export function DesktopNav({ locale }: HeaderNavProps) {
  const pathname = usePathname();
  const navLinks = getNavLinks(locale);

  return (
    <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
      {navLinks.map((item) => {
        const active = isNavLinkActive(pathname, item.href, locale);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-header-link${active ? " nav-header-link-active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            {ht(item.label, locale)}
          </Link>
        );
      })}
    </nav>
  );
}

export function HeaderCta({ locale }: HeaderNavProps) {
  const pathname = usePathname();
  const active = isSignupActive(pathname, locale);

  return (
    <Link
      href={`/${locale}/campaign/signup`}
      className={`btn-coral header-cta whitespace-nowrap${active ? " btn-coral-active" : ""}`}
    >
      {ht(campaignContent.cta, locale)}
    </Link>
  );
}
