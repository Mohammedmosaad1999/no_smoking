import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/campaign/PageShell";
import { TreatmentNav } from "@/components/campaign/TreatmentNav";
import { IconBox } from "@/components/ui/IconBox";
import { treatmentContent, tt } from "@/lib/treatment-content";
import { isValidLocale } from "@/lib/i18n";

type MohpPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function MohpPage({ params }: MohpPageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const { mohp } = treatmentContent;

  return (
    <PageShell
      locale={lang}
      title={tt(mohp.title, lang)}
      subtitle={tt(mohp.subtitle, lang)}
    >
      <TreatmentNav locale={lang} active="mohp" />

      <div className="space-y-6">
        {mohp.sections.map((section, index) => (
          <article key={section.title.en} className="card-premium p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <IconBox icon={Building2} variant="teal" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                  {index + 1}
                </span>
                <h2 className="mt-1 text-xl font-extrabold text-teal-950">
                  {tt(section.title, lang)}
                </h2>
                <p className="prose-body mt-3">{tt(section.body, lang)}</p>
                {"bullets" in section && section.bullets && (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet.en}
                        className="flex items-center gap-2 rounded-lg bg-teal-50/60 px-3 py-2 text-sm text-slate-700"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                        {tt(bullet, lang)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </article>
        ))}

        <section className="rounded-2xl border border-teal-300/50 bg-gradient-to-br from-teal-700 to-emerald-800 p-6 text-white sm:p-8">
          <h2 className="text-xl font-extrabold">{tt(mohp.impact.title, lang)}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {mohp.impact.bullets.map((bullet) => (
              <li
                key={bullet.en}
                className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                {tt(bullet, lang)}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-8">
        <Link href={`/${lang}/campaign/progress`} className="btn-primary">
          {lang === "en" ? "Track Your Progress" : "تتبع تقدمك"}
          <ArrowRight
            className={`h-5 w-5 ${lang === "ar" ? "rotate-180" : ""}`}
          />
        </Link>
      </div>
    </PageShell>
  );
}
