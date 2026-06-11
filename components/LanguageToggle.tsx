import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type LanguageToggleProps = {
  locale: Locale;
};

export function LanguageToggle({ locale }: LanguageToggleProps) {
  return (
    <div className="flex w-full items-center justify-center rounded-full bg-[#1a4338] p-1 text-sm font-bold sm:w-auto">
      <Link
        href="/en"
        className={`rounded-full px-3 py-1.5 transition ${
          locale === "en"
            ? "bg-[#2d5a4e] text-white"
            : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </Link>
      <Link
        href="/ar"
        className={`rounded-full px-3 py-1.5 transition ${
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
