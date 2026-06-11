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
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:py-16">
        <div>
          <BrandLogo locale={locale} showText={false} />
          <p className="mt-4 font-serif text-lg font-bold">Reset Your Breath</p>
          <p className="text-sm font-semibold text-[#5bb89a]">ابدأ من جديد</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {ht(footerContent.tagline, locale)}
          </p>
        </div>

        <div>
          <h3 className="font-serif text-lg font-bold">
            {ht(footerContent.explore, locale)}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 transition hover:text-[#5bb89a]"
                >
                  {ht(link.label, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-bold">
            {ht(footerContent.reminders, locale)}
          </h3>
          <ul className="mt-4 space-y-3">
            {footerContent.reminderItems.map((item, i) => {
              const Icon = reminderIcons[i];
              return (
                <li
                  key={item.en}
                  className="flex items-center gap-2.5 text-sm text-white/60"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#5bb89a]" />
                  {ht(item, locale)}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 text-center text-xs text-white/40">
          © Reset Your Breath — ابدأ من جديد — {ht(footerContent.copyright, locale)}
        </div>
      </div>
    </footer>
  );
}
