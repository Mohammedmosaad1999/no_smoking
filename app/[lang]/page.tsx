import { notFound } from "next/navigation";
import { HomeCta, HomeHero } from "@/components/home/HomeSections";
import { isValidLocale } from "@/lib/i18n";

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <div className="home-page">
      <HomeHero locale={lang} />
      <HomeCta locale={lang} />
    </div>
  );
}
