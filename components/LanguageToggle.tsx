import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type LanguageToggleProps = {
  locale: Locale;
  compact?: boolean;
};

export function LanguageToggle({ locale, compact = false }: LanguageToggleProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-[#1a4338] font-bold sm:w-auto ${
        compact ? "p-0.5 text-xs" : "w-full p-1 text-sm"
      }`}
    >
      <Link
        href="/en"
        className={`rounded-full transition ${
          compact ? "px-2 py-1" : "px-3 py-1.5"
        } ${
          locale === "en"
            ? "bg-[#2d5a4e] text-white"
            : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </Link>
      <Link
        href="/ar"
        className={`rounded-full transition ${
          compact ? "px-2 py-1" : "px-3 py-1.5"
        } ${
          locale === "ar"
            ? "bg-[#2d5a4e] text-white"
            : "text-white/70 hover:text-white"
        }`}
      >
        ع
      </Link>
    </div>
  );
}
