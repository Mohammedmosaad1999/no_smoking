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
    <section className="container-page py-5 sm:py-8 lg:py-10">
      <PersonalDataForm locale={lang} />
    </section>
  );
}
