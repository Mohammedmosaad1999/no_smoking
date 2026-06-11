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
    <section className="container-page py-8 sm:py-12 lg:py-14">
      <AddictionAssessment locale={lang} />
    </section>
  );
}
