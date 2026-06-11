import Link from "next/link";
import { homeContent, ht } from "@/lib/home-content";
import type { Locale } from "@/lib/i18n";

type HomeHeroProps = {
  locale: Locale;
};

export function HomeHero({ locale }: HomeHeroProps) {
  const highlight = ht(homeContent.headlineHighlight, locale);

  return (
    <section className="container-page py-10 sm:py-16 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5bb89a] sm:text-sm">
            {ht(homeContent.overline, locale)}
          </p>

          <h1 className="mt-4 font-serif text-4xl leading-tight text-[#1a4338] sm:text-5xl lg:text-[3.25rem]">
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

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#1a4338]/75">
            {ht(homeContent.description, locale)}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${locale}/campaign/signup`} className="btn-coral">
              {ht(homeContent.cta, locale)}
            </Link>
            <Link
              href={`/${locale}/science`}
              className="btn-outline"
            >
              {ht(homeContent.howItWorks, locale)}
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#e2ebe6] pt-8">
            {homeContent.stats.map((stat) => (
              <div key={stat.value.en}>
                <p className="font-serif text-2xl font-bold text-[#5bb89a] sm:text-3xl">
                  {ht(stat.value, locale)}
                </p>
                <p className="mt-1 text-xs leading-snug text-[#1a4338]/60 sm:text-sm">
                  {ht(stat.label, locale)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-card relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1a4338] via-[#234d42] to-[#2d5a4e] p-8 sm:p-10 lg:min-h-[420px]">
          <div className="absolute -end-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -start-10 h-48 w-48 rounded-full bg-[#5bb89a]/10" />

          <div className="relative flex h-full flex-col items-center justify-center text-center">
            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
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
            <p className="font-serif text-2xl text-white sm:text-3xl">
              {ht(homeContent.cardQuote, locale)}
            </p>
            <p className="mt-3 text-base text-white/70">
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

      <p className="mt-16 text-xs font-bold uppercase tracking-[0.2em] text-[#5bb89a]">
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
    <section className="container-page pb-12 sm:pb-16">
      <div className="cta-banner rounded-[2rem] px-6 py-12 text-center sm:px-12 sm:py-16">
        <h2 className="font-serif text-3xl text-white sm:text-4xl">
          {ht(homeContent.ctaSection.title, locale)}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-white/75">
          {ht(homeContent.ctaSection.subtitle, locale)}
        </p>
        <Link
          href={`/${locale}/campaign/signup`}
          className="btn-coral mt-8 inline-flex"
        >
          {ht(homeContent.cta, locale)}
        </Link>
      </div>
    </section>
  );
}
