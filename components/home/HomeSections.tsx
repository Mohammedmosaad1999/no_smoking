import Link from "next/link";
import { homeContent, ht } from "@/lib/home-content";
import type { Locale } from "@/lib/i18n";

type HomeHeroProps = {
  locale: Locale;
};

export function HomeHero({ locale }: HomeHeroProps) {
  const highlight = ht(homeContent.headlineHighlight, locale);

  return (
    <section className="container-page py-5 sm:py-8 lg:py-12">
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5bb89a] sm:text-sm">
            {ht(homeContent.overline, locale)}
          </p>

          <h1 className="mt-2 font-serif text-2xl leading-tight text-[#1a4338] sm:mt-3 sm:text-3xl lg:text-4xl">
            {locale === "en" ? (
              <>
                Reset your{" "}
                <em className="not-italic text-[#5bb89a]">{highlight}</em>.
                Reclaim your life.
              </>
            ) : (
              <>
                استعد <em className="not-italic text-[#5bb89a]">{highlight}</em>
                . استعد حياتك.
              </>
            )}
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#1a4338]/75 sm:text-base">
            {ht(homeContent.description, locale)}
          </p>

          <div className="action-row mt-4 sm:mt-6">
            <Link href={`/${locale}/campaign/signup`} className="btn-coral">
              {ht(homeContent.cta, locale)}
            </Link>
            <Link href={`/${locale}/science`} className="btn-outline">
              {ht(homeContent.howItWorks, locale)}
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 border-t border-[#e2ebe6] pt-5 sm:mt-7 sm:gap-3 sm:pt-6">
            {homeContent.stats.map((stat) => (
              <div key={stat.value.en}>
                <p className="font-serif text-xl font-bold text-[#5bb89a] sm:text-2xl lg:text-3xl">
                  {ht(stat.value, locale)}
                </p>
                <p className="mt-1 text-[0.7rem] leading-snug text-[#1a4338]/60 sm:text-xs lg:text-sm">
                  {ht(stat.label, locale)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-card relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a4338] via-[#234d42] to-[#2d5a4e] p-6 sm:rounded-[2rem] sm:p-10 lg:min-h-[420px]">
          <div className="absolute -end-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -start-10 h-48 w-48 rounded-full bg-[#5bb89a]/10" />

          <div className="relative flex min-h-[220px] flex-col items-center justify-center text-center sm:min-h-[280px]">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 sm:mb-8 sm:h-24 sm:w-24">
              <svg width="48" height="48" viewBox="0 0 32 32" fill="none" aria-hidden>
                <path
                  d="M10 8c-2 0-4 2-4 5v6c0 4 3 7 6 7s6-3 6-7v-6c0-3-2-5-4-5-1.5 0-2.5 1-3 2.5C13.5 9 12.5 8 10 8z"
                  fill="#5bb89a"
                />
                <path
                  d="M22 8c2 0 4 2 4 5v6c0 4-3 7-6 7s-6-3-6-7v-6c0-3 2-5 4-5 1.5 0 2.5 1 3 2.5C18.5 9 19.5 8 22 8z"
                  fill="#e07a5f"
                />
              </svg>
            </div>
            <p className="font-serif text-xl text-white sm:text-2xl lg:text-3xl">
              {ht(homeContent.cardQuote, locale)}
            </p>
            <p className="mt-2 text-sm text-white/70 sm:mt-3 sm:text-base">
              {ht(homeContent.cardSubquote, locale)}
            </p>
          </div>

          <svg
            className="absolute bottom-0 start-0 w-full text-[#5bb89a]/20"
            viewBox="0 0 400 60"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0,40 Q100,10 200,35 T400,25 L400,60 L0,60 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#5bb89a] sm:mt-10">
        {ht(homeContent.bottomSection, locale)}
      </p>
    </section>
  );
}

type HomeCtaProps = {
  locale: Locale;
};

export function HomeCta({ locale }: HomeCtaProps) {
  return (
    <section className="container-page pb-5 sm:pb-8 lg:pb-10">
      <div className="cta-banner rounded-2xl px-4 py-6 text-center sm:rounded-[2rem] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <h2 className="font-serif text-xl text-white sm:text-2xl lg:text-3xl">
          {ht(homeContent.ctaSection.title, locale)}
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-white/75 sm:mt-3 sm:text-base">
          {ht(homeContent.ctaSection.subtitle, locale)}
        </p>
        <Link
          href={`/${locale}/campaign/signup`}
          className="btn-coral mt-5 inline-flex sm:mt-6"
        >
          {ht(homeContent.cta, locale)}
        </Link>
      </div>
    </section>
  );
}
