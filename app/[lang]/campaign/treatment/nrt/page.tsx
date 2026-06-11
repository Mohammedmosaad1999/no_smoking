import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/campaign/PageShell";
import { TreatmentNav } from "@/components/campaign/TreatmentNav";
import { BuyLink } from "@/components/ui/BuyLink";
import { VideoSection } from "@/components/ui/VideoSection";
import { treatmentContent, tt } from "@/lib/treatment-content";
import { isValidLocale } from "@/lib/i18n";

type NrtPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function NrtPage({ params }: NrtPageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const { nrt } = treatmentContent;

  return (
    <PageShell locale={lang} title={tt(treatmentContent.tabs.nrt, lang)}>
      <TreatmentNav locale={lang} active="nrt" />

      <div className="space-y-8">
        <section className="card-premium p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-teal-950">
            {tt(nrt.intro.title, lang)}
          </h2>
          {nrt.intro.paragraphs.map((p, i) => (
            <p key={i} className="prose-body mt-4">
              {tt(p, lang)}
            </p>
          ))}
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {nrt.products.map((product) => (
              <li
                key={product}
                className="flex items-center gap-2 rounded-xl bg-teal-50/60 px-4 py-2.5 text-sm font-medium text-teal-900"
              >
                <span className="h-2 w-2 rounded-full bg-teal-500" />
                {tt(nrt.productLabels[product], lang)}
              </li>
            ))}
          </ul>
        </section>

        {nrt.sections.map((section) => (
          <section key={section.id} className="card-premium p-6 sm:p-8">
            <h3 className="text-xl font-extrabold text-teal-950">
              {tt(section.title, lang)}
            </h3>
            {section.content.map((para, i) => (
              <p key={i} className="prose-body mt-4">
                {tt(para, lang)}
              </p>
            ))}

            {section.videos && section.videos.length > 0 && (
              <div className="mt-8">
                <VideoSection
                  locale={lang}
                  title={nrt.videos}
                  videos={section.videos}
                />
              </div>
            )}

            {section.buyLinks && section.buyLinks.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {section.buyLinks.map((link) => (
                  <BuyLink
                    key={link.url}
                    href={link.url}
                    label={link.label}
                    locale={lang}
                  />
                ))}
              </div>
            )}
          </section>
        ))}

        <section className="card-premium border-teal-200/60 bg-teal-50/40 p-6 sm:p-8">
          <h3 className="font-extrabold text-teal-950">
            {tt(nrt.combining.title, lang)}
          </h3>
          <p className="prose-body mt-3">{tt(nrt.combining.body, lang)}</p>
        </section>

        <section className="card-premium p-6 sm:p-8">
          <h3 className="font-extrabold text-teal-950">
            {tt(nrt.risksBenefits.title, lang)}
          </h3>
          <div className="mt-5 space-y-5">
            <div>
              <h4 className="font-bold text-teal-800">
                {tt(nrt.risksBenefits.advantages.title, lang)}
              </h4>
              <p className="prose-body mt-2">
                {tt(nrt.risksBenefits.advantages.body, lang)}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-teal-800">
                {tt(nrt.risksBenefits.sideEffects.title, lang)}
              </h4>
              <ul className="mt-2 list-inside list-disc text-slate-700">
                {nrt.risksBenefits.sideEffects.general.map((item) => (
                  <li key={item.en}>{tt(item, lang)}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-red-800">
                {tt(nrt.risksBenefits.poisoning.title, lang)}
              </h4>
              <p className="prose-body mt-2">
                {tt(nrt.risksBenefits.poisoning.body, lang)}
              </p>
            </div>
          </div>
        </section>

        <section className="card-premium p-6 sm:p-8">
          <h3 className="font-extrabold text-teal-950">
            {tt(nrt.recovery.title, lang)}
          </h3>
          <p className="prose-body mt-3">{tt(nrt.recovery.duration, lang)}</p>
          <p className="prose-body mt-3">{tt(nrt.recovery.alternatives, lang)}</p>
        </section>

        <section className="rounded-2xl border border-teal-300/50 bg-gradient-to-br from-teal-600 to-emerald-700 p-6 text-white sm:p-8">
          <h3 className="text-xl font-extrabold">{tt(nrt.teamNote.title, lang)}</h3>
          <p className="mt-3 leading-relaxed text-teal-50">
            {tt(nrt.teamNote.body, lang)}
          </p>
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
