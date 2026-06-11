import Link from "next/link";
import { treatmentContent, tt } from "@/lib/treatment-content";
import type { Locale } from "@/lib/i18n";

type TreatmentNavProps = {
  locale: Locale;
  active: "medical" | "nrt" | "psychological" | "mohp";
};

const tabs = [
  { id: "medical" as const, href: "medical" },
  { id: "nrt" as const, href: "nrt" },
  { id: "psychological" as const, href: "psychological" },
  { id: "mohp" as const, href: "mohp" },
];

export function TreatmentNav({ locale, active }: TreatmentNavProps) {
  return (
    <nav className="mb-8 flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={`/${locale}/campaign/treatment/${tab.href}`}
          className={`rounded-xl px-4 py-3 text-base font-bold transition ${
            active === tab.id
              ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg shadow-teal-500/25"
              : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-teal-50 hover:text-teal-800"
          }`}
        >
          {tt(treatmentContent.tabs[tab.id], locale)}
        </Link>
      ))}
    </nav>
  );
}
