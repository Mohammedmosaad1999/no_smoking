import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { DesktopNav, HeaderCta } from "@/components/HeaderNav";
import { LanguageToggle } from "@/components/LanguageToggle";
import { MobileNav } from "@/components/MobileNav";
import type { Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e2ebe6] bg-[#f5f7f2]/95 backdrop-blur-md">
      <div className="container-page flex items-center justify-between gap-2 py-2.5 sm:py-3 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-2 xl:gap-3">
        <Link href={`/${locale}`} className="shrink-0">
          <BrandLogo locale={locale} size="sm" variant="header" />
        </Link>

        <DesktopNav locale={locale} />

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <HeaderCta locale={locale} />
          <div className="hidden sm:block lg:hidden">
            <LanguageToggle locale={locale} compact />
          </div>
          <div className="hidden lg:block">
            <LanguageToggle locale={locale} compact />
          </div>
          <MobileNav locale={locale} />
        </div>
      </div>
    </header>
  );
}
