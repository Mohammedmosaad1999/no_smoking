import { ExternalLink, ShoppingBag } from "lucide-react";
import type { Locale } from "@/lib/i18n";

type BuyLinkProps = {
  href: string;
  label: Record<Locale, string>;
  locale: Locale;
};

export function BuyLink({ href, label, locale }: BuyLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
    >
      <ShoppingBag className="h-4 w-4" />
      {label[locale]}
      <ExternalLink className="h-3.5 w-3.5 opacity-60" />
    </a>
  );
}
