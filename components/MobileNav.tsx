"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  BookOpen,
  Calculator,
  Globe,
  Home,
  Menu,
  ShoppingBag,
  TrendingUp,
  // Users,
  Video,
  X,
  type LucideIcon,
} from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { campaignContent } from "@/lib/campaign-content";
import { getNavLinks, ht } from "@/lib/home-content";
import type { Locale } from "@/lib/i18n";
import { content, t } from "@/lib/content";
import { isNavLinkActive, isSignupActive } from "@/lib/nav-utils";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  science: BookOpen,
  community: Video,
  products: ShoppingBag,
  cost: Calculator,
  treatment: Activity,
  track: TrendingUp,
  // support: Users,
};

function buildNavItems(locale: Locale): NavItem[] {
  return getNavLinks(locale).map((link) => ({
    href: link.href,
    label: ht(link.label, locale),
    icon: iconMap[link.key] ?? Home,
  }));
}

type MobileNavProps = {
  locale: Locale;
};

export function MobileNav({ locale }: MobileNavProps) {
  const pathname = usePathname();
  const items = buildNavItems(locale);
  const signupActive = isSignupActive(pathname, locale);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const menuLabel = locale === "en" ? "Menu" : "القائمة";

  const drawer =
    open && mounted
      ? createPortal(
          <div className="fixed inset-0 z-[200] lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-label={locale === "en" ? "Close menu" : "إغلاق"}
            />

            <aside className="sidebar-panel absolute inset-y-0 end-0 flex h-full w-[min(88vw,320px)] flex-col bg-[#f5f7f2] shadow-2xl">
              <div className="flex shrink-0 items-center justify-between border-b border-[#e2ebe6] px-4 py-3.5">
                <p className="text-lg font-bold text-[#1a4338]">{menuLabel}</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8e8e0] bg-white text-[#1a4338]"
                  aria-label={locale === "en" ? "Close menu" : "إغلاق القائمة"}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="sidebar-nav">
                <ul className="space-y-1">
                  {items.map((item) => {
                    const Icon = item.icon;
                    const active = isNavLinkActive(pathname, item.href, locale);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`sidebar-link${active ? " sidebar-link-active" : ""}`}
                          aria-current={active ? "page" : undefined}
                        >
                          <Icon className="h-5 w-5 shrink-0 text-[#5bb89a]" />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <Link
                  href={`/${locale}/campaign/signup`}
                  onClick={() => setOpen(false)}
                  className={`btn-coral btn-coral-block mt-5${signupActive ? " btn-coral-active" : ""}`}
                >
                  {ht(campaignContent.cta, locale)}
                </Link>
              </nav>

              <div className="sidebar-footer space-y-3">
                <LanguageToggle locale={locale} />
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="sidebar-link border border-[#d8e8e0] bg-white"
                >
                  <Globe className="h-5 w-5 shrink-0 text-[#5bb89a]" />
                  <span>{t(content.nav.changeLanguage, locale)}</span>
                </Link>
              </div>
            </aside>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d8e8e0] bg-white text-[#1a4338] lg:hidden"
        aria-label={locale === "en" ? "Open menu" : "فتح القائمة"}
      >
        <Menu className="h-5 w-5" />
      </button>
      {drawer}
    </>
  );
}
