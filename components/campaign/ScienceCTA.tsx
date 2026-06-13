import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { campaignContent, ct } from "@/lib/campaign-content";
import type { Locale } from "@/lib/i18n";
import { siteImages } from "@/lib/images";

type ScienceCTAProps = {
  locale: Locale;
};

export function ScienceCTA({ locale }: ScienceCTAProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={siteImages.progress}
          alt="Healthy lifestyle"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/95 via-emerald-900/90 to-teal-800/85" />
      </div>

      <div className="relative container-page py-8 text-center sm:py-10 lg:py-12">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
          <Heart className="h-7 w-7 text-white" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-200">
          {locale === "en"
            ? "Ready to take the next step?"
            : "هل أنت مستعد لاتخاذ الخطوة التالية؟"}
        </p>
        <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
          {locale === "en" ? "Reset Your Breath Campaign" : "حملة ابدأ من جديد"}
        </h2>
        <Link
          href={`/${locale}/campaign/signup`}
          className="btn-primary mt-10 bg-white text-teal-900 shadow-2xl shadow-black/20 hover:bg-teal-50"
        >
          {ct(campaignContent.cta, locale)}
          <ArrowRight
            className={`h-5 w-5 ${locale === "ar" ? "rotate-180" : ""}`}
          />
        </Link>
      </div>
    </section>
  );
}
