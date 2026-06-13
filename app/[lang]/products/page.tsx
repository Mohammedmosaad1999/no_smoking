import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/campaign/PageShell";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { isValidLocale } from "@/lib/i18n";
import { productsContent, pt } from "@/lib/products-content";

type ProductsPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: ProductsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const isAr = lang === "ar";
  return {
    title: isAr ? "منتجات المساعدة على الإقلاع | ابدأ من جديد" : "Products | Reset Your Breath",
    description: isAr
      ? "روابط الشراء وفيديوهات طريقة الاستخدام لمنتجات الإقلاع عن التدخين."
      : "Purchase links and how-to videos for quit-smoking products.",
    openGraph: {
      title: isAr ? "منتجات المساعدة على الإقلاع | ابدأ من جديد" : "Products | Reset Your Breath",
      description: isAr
        ? "روابط الشراء وفيديوهات طريقة الاستخدام لمنتجات الإقلاع عن التدخين."
        : "Purchase links and how-to videos for quit-smoking products.",
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
