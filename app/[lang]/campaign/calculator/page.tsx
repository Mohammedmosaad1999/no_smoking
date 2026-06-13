import { notFound } from "next/navigation";
import { DamageCalculator } from "@/components/campaign/DamageCalculator";
import { PageShell } from "@/components/campaign/PageShell";
import { campaignContent, ct } from "@/lib/campaign-content";
import { isValidLocale } from "@/lib/i18n";

type CalculatorPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <PageShell
      locale={lang}
      compact
      badge={ct(campaignContent.calculator.badge, lang)}
      title={ct(campaignContent.calculator.title, lang)}
      subtitle={ct(campaignContent.calculator.subtitle, lang)}
    >
      <DamageCalculator locale={lang} />
    </PageShell>
  );
}
