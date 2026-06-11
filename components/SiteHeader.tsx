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
      <div className="container-page flex items-center justify-between gap-2 py-3 sm:gap-3 sm:py-4 lg:gap-4">
        <Link href={`/${locale}`} className="min-w-0 max-w-[calc(100%-3rem)] shrink sm:max-w-none">
          <BrandLogo locale={locale} size="sm" />
        </Link>

        <DesktopNav locale={locale} />

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <HeaderCta locale={locale} />
          <div className="hidden sm:block">
            <LanguageToggle locale={locale} />
          </div>
          <MobileNav locale={locale} />
        </div>
      </div>
    </header>
  );
}
