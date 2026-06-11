import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain } from "lucide-react";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/campaign/PageShell";
import { TreatmentNav } from "@/components/campaign/TreatmentNav";
import { IconBox } from "@/components/ui/IconBox";
import { treatmentContent, tt } from "@/lib/treatment-content";
import { siteImages } from "@/lib/images";
import { isValidLocale } from "@/lib/i18n";

type PsychologicalPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function PsychologicalPage({
  params,
}: PsychologicalPageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const { psychological } = treatmentContent;

  return (
    <PageShell locale={lang} title={tt(psychological.title, lang)}>
      <TreatmentNav locale={lang} active="psychological" />

      <div className="relative mb-8 overflow-hidden rounded-3xl">
        <div className="relative h-48 sm:h-56">
          <Image
            src={siteImages.brain}
            alt="Psychological treatment"
            fill
            className="object-cover"
            sizes="800px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-950/70 to-transparent" />
        </div>
      </div>

      <div className="space-y-6">
        {psychological.methods.map((method, index) => (
          <article key={method.title.en} className="card-premium p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <IconBox icon={Brain} variant="violet" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-violet-600">
                  {lang === "en" ? `Method ${index + 1}` : `الطريقة ${index + 1}`}
                </span>
                <h2 className="mt-1 text-xl font-extrabold text-teal-950">
                  {tt(method.title, lang)}
                </h2>
                <p className="prose-body mt-3">{tt(method.description, lang)}</p>
                {"example" in method && method.example && (
                  <p className="mt-4 rounded-xl bg-violet-50 px-4 py-3 text-sm italic text-slate-600 ring-1 ring-violet-100">
                    {lang === "en" ? "Example: " : "مثال: "}
                    {tt(method.example, lang)}
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
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
