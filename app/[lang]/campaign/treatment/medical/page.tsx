import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Pill } from "lucide-react";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/campaign/PageShell";
import { TreatmentNav } from "@/components/campaign/TreatmentNav";
import { BuyLink } from "@/components/ui/BuyLink";
import { IconBox } from "@/components/ui/IconBox";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { treatmentContent, tt } from "@/lib/treatment-content";
import { siteImages } from "@/lib/images";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { getVideoForLocale } from "@/lib/video-utils";

type MedicalPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function MedicalPage({ params }: MedicalPageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const { medical } = treatmentContent;
  const champixVideo = getVideoForLocale(medical.champix.videos, lang as Locale);

  return (
    <PageShell
      locale={lang}
      title={tt(treatmentContent.tabs.medical, lang)}
      subtitle={tt(medical.intro, lang)}
    >
      <TreatmentNav locale={lang} active="medical" />

      <article className="card-premium overflow-hidden">
        <div className="relative h-48 sm:h-56">
          <Image
            src={siteImages.medical}
            alt="Medical treatment"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start gap-3 sm:items-center sm:gap-4">
            <IconBox icon={Pill} variant="blue" size="lg" />
            <h2 className="text-xl font-extrabold text-teal-950 sm:text-2xl">
              {tt(medical.champix.title, lang)}
            </h2>
          </div>

          <div className="mt-8 space-y-8">
            {[
              medical.champix.mechanism,
              medical.champix.why,
              medical.champix.risks,
            ].map((section) => (
              <div key={section.title.en}>
                <h3 className="text-lg font-bold text-teal-800">
                  {tt(section.title, lang)}
                </h3>
                <p className="prose-body mt-3">{tt(section.body, lang)}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-8">
            {champixVideo && (
              <div>
                <h3 className="mb-4 text-base font-bold text-teal-700">
                  {tt(medical.champix.video, lang)}
                </h3>
                <YouTubeEmbed
                  url={champixVideo.url}
                  title={champixVideo.label[lang]}
                />
              </div>
            )}

            <BuyLink
              href={medical.champix.buyUrl}
              label={medical.champix.whereToBuy}
              locale={lang}
            />
          </div>
        </div>
      </article>

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
