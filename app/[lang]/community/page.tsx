import { notFound } from "next/navigation";
import { CommunityVideos } from "@/components/community/CommunityVideos";
import { PageShell } from "@/components/campaign/PageShell";
import { communityContent, ct } from "@/lib/community-content";
import { isValidLocale } from "@/lib/i18n";

type CommunityPageProps = {
  params: Promise<{ lang: string }>;
};

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
