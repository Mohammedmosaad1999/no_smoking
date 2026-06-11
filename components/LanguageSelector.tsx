import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Languages, Wind } from "lucide-react";
import { content, siteName, t } from "@/lib/content";
import { siteImages } from "@/lib/images";

export function LanguageSelector() {
  return (
    <div className="relative flex min-h-full flex-col">
      <div className="absolute inset-0">
        <Image
          src={siteImages.nature}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center px-4 py-16 sm:px-8">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm">
            <Wind className="h-10 w-10" />
          </div>
          <h1 className="text-4xl font-extrabold text-white drop-shadow sm:text-5xl">
            Reset Your Breathe
          </h1>
          <p className="mt-3 text-2xl font-bold text-teal-100" dir="rtl">
            {siteName.ar}
          </p>
        </div>

        <div className="card-premium w-full max-w-lg p-8 sm:p-10">
          <div className="mb-6 flex items-center justify-center gap-2 text-teal-700">
            <Languages className="h-6 w-6" />
            <h2 className="text-xl font-extrabold text-slate-800">
              {t(content.languageSelect.title, "en")} /{" "}
              <span dir="rtl">{t(content.languageSelect.title, "ar")}</span>
            </h2>
          </div>
          <p className="text-center text-lg text-slate-600">
            {t(content.languageSelect.subtitle, "en")}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/en"
              className="group flex flex-col items-center rounded-2xl border-2 border-teal-100 bg-gradient-to-b from-white to-teal-50/50 p-6 text-center transition hover:border-teal-400 hover:shadow-lg"
            >
              <span className="text-2xl font-extrabold text-teal-950">
                English
              </span>
              <span className="mt-2 text-base text-slate-500">
                Continue in English
              </span>
              <ArrowRight className="mt-4 h-5 w-5 text-teal-600 transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/ar"
              className="group flex flex-col items-center rounded-2xl border-2 border-teal-100 bg-gradient-to-b from-white to-teal-50/50 p-6 text-center transition hover:border-teal-400 hover:shadow-lg"
            >
              <span className="text-2xl font-extrabold text-teal-950" dir="rtl">
                العربية
              </span>
              <span className="mt-2 text-base text-slate-500" dir="rtl">
                {t(content.languageSelect.arabic, "ar")}
              </span>
              <ArrowRight className="mt-4 h-5 w-5 rotate-180 text-teal-600 transition group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
