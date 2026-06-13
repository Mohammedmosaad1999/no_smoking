import { notFound } from "next/navigation";
import { PageShell } from "@/components/campaign/PageShell";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { isValidLocale } from "@/lib/i18n";
import { productsContent, pt } from "@/lib/products-content";

type ProductsPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <PageShell
      locale={lang}
      compact
      badge={pt(productsContent.badge, lang)}
      title={pt(productsContent.title, lang)}
      subtitle={pt(productsContent.subtitle, lang)}
    >
      <ProductCatalog locale={lang} />
    </PageShell>
  );
}
