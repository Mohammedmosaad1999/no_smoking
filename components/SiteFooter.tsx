import Link from "next/link";
import { Bell, Clock, Globe, MessageCircle } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { footerContent, getNavLinks, ht } from "@/lib/home-content";
import type { Locale } from "@/lib/i18n";

type SiteFooterProps = {
  locale: Locale;
};

const reminderIcons = [Bell, MessageCircle, Clock, Globe];

export function SiteFooter({ locale }: SiteFooterProps) {
  const navLinks = getNavLinks(locale);

  return (
    <footer className="mt-auto bg-[#122820] text-white">
      <div className="container-page grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8 lg:py-10">
        <div>
          <BrandLogo locale={locale} showText={false} size="sm" />
          <p className="mt-2.5 font-serif text-base font-bold">Reset Your Breath</p>
          <p className="text-xs font-semibold text-[#5bb89a]">ابدأ من جديد</p>
          <p className="mt-2.5 max-w-xs text-xs leading-relaxed text-white/60">
            {ht(footerContent.tagline, locale)}
          </p>
        </div>

        <div>
          <h3 className="font-serif text-base font-bold">
            {ht(footerContent.explore, locale)}
          </h3>
          <ul className="mt-2.5 space-y-1.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-white/60 transition hover:text-[#5bb89a]"
                >
                  {ht(link.label, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-base font-bold">
            {ht(footerContent.reminders, locale)}
          </h3>
          <ul className="mt-2.5 space-y-2">
            {footerContent.reminderItems.map((item, i) => {
              const Icon = reminderIcons[i];
              return (
                <li
                  key={item.en}
                  className="flex items-center gap-2 text-xs text-white/60"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-[#5bb89a]" />
                  {ht(item, locale)}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-3 text-center text-[0.7rem] leading-relaxed text-white/40">
          © Reset Your Breath — ابدأ من جديد — {ht(footerContent.copyright, locale)}
        </div>
      </div>
    </footer>
  );
}
