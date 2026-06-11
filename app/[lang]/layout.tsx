import { Cairo, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getDirection, isValidLocale } from "@/lib/i18n";

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

type LangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const direction = getDirection(lang);

  return (
    <div
      dir={direction}
      lang={lang}
      className={`${cairo.variable} ${playfair.variable} page-wrap flex min-h-full flex-col font-sans`}
    >
      <SiteHeader locale={lang} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={lang} />
    </div>
  );
}
