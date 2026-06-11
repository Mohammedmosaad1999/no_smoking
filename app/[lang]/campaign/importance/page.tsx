import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/campaign/PageShell";
import { campaignContent, ct } from "@/lib/campaign-content";
import { siteImages } from "@/lib/images";
import { isValidLocale } from "@/lib/i18n";

type ImportancePageProps = {
  params: Promise<{ lang: string }>;
};

export default async function ImportancePage({ params }: ImportancePageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <PageShell
      locale={lang}
      badge={lang === "en" ? "Campaign" : "الحملة"}
      title={ct(campaignContent.importance.title, lang)}
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="relative h-64 overflow-hidden rounded-3xl lg:col-span-2 lg:h-auto lg:min-h-[360px]">
          <Image
            src={siteImages.breathing}
            alt="Reclaim your breath"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 to-transparent" />
        </div>

        <blockquote className="card-premium flex flex-col justify-center p-8 lg:col-span-3">
          <HeartHandshake className="mb-4 h-8 w-8 text-teal-600" />
          <p className="prose-body text-lg">{ct(campaignContent.importance.body, lang)}</p>
        </blockquote>
      </div>

      <div className="mt-8 action-row sm:mt-10">
        <Link href={`/${lang}/campaign/calculator`} className="btn-primary">
          {ct(campaignContent.importance.nextCalculator, lang)}
          <ArrowRight
            className={`h-5 w-5 ${lang === "ar" ? "rotate-180" : ""}`}
          />
        </Link>
        <Link href={`/${lang}/campaign/treatment`} className="btn-secondary">
          {ct(campaignContent.importance.nextTreatment, lang)}
        </Link>
      </div>
    </PageShell>
  );
}
