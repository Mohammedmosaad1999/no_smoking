import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HomeCta, HomeHero } from "@/components/home/HomeSections";
import { isValidLocale } from "@/lib/i18n";

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { lang } = await params;
  const isAr = lang === "ar";
  return {
    title: isAr ? "الصفحة الرئيسية | ابدأ من جديد" : "Home | Reset Your Breath",
    description: isAr 
      ? "يساعد العلاج الأفراد على الإقلاع عن التدخين، بينما تساعد سياسات ابدأ من جديد على منع الناس من البدء ودعم من يحاولون الإقلاع."
      : "Treatment helps individuals quit, while Reset Your Breath policies help prevent people from starting and support those trying to quit.",
    openGraph: {
      title: isAr ? "ابدأ من جديد" : "Reset Your Breath",
      description: isAr 
        ? "مبادرة توعوية لمساعدتك على الإقلاع عن التدخين واستعادة صحتك."
        : "An educational health initiative to help you quit smoking and reclaim your health.",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: isAr ? "ابدأ من جديد" : "Reset Your Breath",
        },
      ],
    },
  };
}

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
