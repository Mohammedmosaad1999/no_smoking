import { notFound } from "next/navigation";
import { PageShell } from "@/components/campaign/PageShell";
import { ProgressDashboard } from "@/components/campaign/ProgressDashboard";
import { progressContent, pt } from "@/lib/progress-content";
import { isValidLocale } from "@/lib/i18n";

type ProgressPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function ProgressPage({ params }: ProgressPageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <PageShell
      locale={lang}
      badge={lang === "en" ? "Campaign" : "الحملة"}
      title={pt(progressContent.title, lang)}
      subtitle={pt(progressContent.subtitle, lang)}
    >
      <ProgressDashboard locale={lang} />
    </PageShell>
  );
}
