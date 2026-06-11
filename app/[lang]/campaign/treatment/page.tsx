import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Brain,
  Building2,
  Pill,
} from "lucide-react";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/campaign/PageShell";
import { IconBox } from "@/components/ui/IconBox";
import { treatmentContent, tt } from "@/lib/treatment-content";
import { isValidLocale } from "@/lib/i18n";

type TreatmentPageProps = {
  params: Promise<{ lang: string }>;
};

const sections = [
  { id: "medical" as const, icon: Pill, variant: "blue" as const },
  { id: "nrt" as const, icon: Activity, variant: "emerald" as const },
  { id: "psychological" as const, icon: Brain, variant: "violet" as const },
  { id: "mohp" as const, icon: Building2, variant: "teal" as const },
];

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <PageShell
      locale={lang}
      badge={lang === "en" ? "Campaign" : "الحملة"}
      title={tt(treatmentContent.title, lang)}
      subtitle={tt(treatmentContent.subtitle, lang)}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link
              key={section.id}
              href={`/${lang}/campaign/treatment/${section.id}`}
              className="card-premium group flex items-start gap-4 p-6 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-900/10 sm:p-7"
            >
              <IconBox icon={Icon} variant={section.variant} size="lg" />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-teal-950 group-hover:text-teal-700">
                  {tt(treatmentContent.tabs[section.id], lang)}
                </h2>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
                  {lang === "en" ? "Explore" : "استكشف"}
                  <ArrowRight
                    className={`h-4 w-4 transition group-hover:translate-x-0.5 ${lang === "ar" ? "rotate-180 group-hover:-translate-x-0.5" : ""}`}
                  />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </PageShell>
  );
}
