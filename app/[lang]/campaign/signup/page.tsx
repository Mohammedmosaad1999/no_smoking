import { notFound } from "next/navigation";
import { PersonalDataForm } from "@/components/campaign/PersonalDataForm";
import { isValidLocale } from "@/lib/i18n";

type SignupPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function SignupPage({ params }: SignupPageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-8 sm:py-20">
      <PersonalDataForm locale={lang} />
    </section>
  );
}
