import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CommunityVideos } from "@/components/community/CommunityVideos";
import { PageShell } from "@/components/campaign/PageShell";
import { communityContent, ct } from "@/lib/community-content";
import { isValidLocale } from "@/lib/i18n";

type CommunityPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: CommunityPageProps): Promise<Metadata> {
  const { lang } = await params;
  const isAr = lang === "ar";
  return {
    title: isAr ? "فيديوهات المجتمع | ابدأ من جديد" : "Community | Reset Your Breath",
    description: isAr
      ? "شاهد فيديوهات مختارة ومحفزة تدعم رحلتك للإقلاع عن التدخين."
      : "Watch curated motivational videos that support your journey to quit smoking.",
    openGraph: {
      title: isAr ? "فيديوهات المجتمع | ابدأ من جديد" : "Community | Reset Your Breath",
      description: isAr
        ? "شاهد فيديوهات مختارة ومحفزة تدعم رحلتك للإقلاع عن التدخين."
        : "Watch curated motivational videos that support your journey to quit smoking.",
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

export default async function CommunityPage({ params }: CommunityPageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <PageShell
      locale={lang}
      compact
      badge={ct(communityContent.badge, lang)}
      title={ct(communityContent.title, lang)}
      subtitle={ct(communityContent.subtitle, lang)}
    >
      <CommunityVideos locale={lang} />
    </PageShell>
  );
}
