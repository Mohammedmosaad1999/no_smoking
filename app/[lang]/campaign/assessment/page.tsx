import { notFound } from "next/navigation";
import { AddictionAssessment } from "@/components/campaign/AddictionAssessment";
import { isValidLocale } from "@/lib/i18n";

type AssessmentPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function AssessmentPage({ params }: AssessmentPageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-14">
      <AddictionAssessment locale={lang} />
    </section>
  );
}
