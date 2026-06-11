import Image from "next/image";
import { Brain, Wind } from "lucide-react";
import { notFound } from "next/navigation";
import { ScienceCTA } from "@/components/campaign/ScienceCTA";
import { IconBox } from "@/components/ui/IconBox";
import { content, t } from "@/lib/content";
import { siteImages } from "@/lib/images";
import { isValidLocale } from "@/lib/i18n";

type SciencePageProps = {
  params: Promise<{ lang: string }>;
};

const topicMeta = [
  { icon: Brain, image: siteImages.brain, variant: "violet" as const },
  { icon: Wind, image: siteImages.lungs, variant: "emerald" as const },
];

export default async function SciencePage({ params }: SciencePageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <div className="section-mesh">
      <section className="page-header">
        <div className="container-page py-14 sm:py-20">
          <div className="badge-pill mb-5">
            {lang === "en" ? "Page 2" : "الصفحة 2"}
          </div>
          <h1 className="max-w-3xl font-extrabold text-teal-950">
            {t(content.science.title, lang)}
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-slate-600">
            {t(content.science.subtitle, lang)}
          </p>
        </div>
      </section>

      <section className="container-page space-y-8 pb-20 pt-10">
        {content.science.topics.map((topic, index) => {
          const meta = topicMeta[index];
          const Icon = meta.icon;

          return (
            <article key={topic.id} className="card-premium overflow-hidden">
              <div className="grid lg:grid-cols-5">
                <div className="relative h-52 lg:col-span-2 lg:h-auto lg:min-h-[280px]">
                  <Image
                    src={meta.image}
                    alt={t(topic.title, lang)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                </div>

                <div className="lg:col-span-3">
                  <div className="flex items-start gap-4 border-b border-teal-50 bg-teal-50/30 px-6 py-5 sm:px-8">
                    <IconBox icon={Icon} variant={meta.variant} size="lg" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                        {lang === "en"
                          ? `Topic ${index + 1}`
                          : `الموضوع ${index + 1}`}
                      </span>
                      <h2 className="mt-1 text-xl font-bold leading-snug text-teal-950 sm:text-2xl">
                        {t(topic.title, lang)}
                      </h2>
                    </div>
                  </div>
                  <div className="px-6 py-6 sm:px-8 sm:py-8">
                    <p className="prose-body text-base sm:text-lg">
                      {t(topic.body, lang)}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <ScienceCTA locale={lang} />
    </div>
  );
}
