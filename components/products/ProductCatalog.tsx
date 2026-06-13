import { ShoppingBag } from "lucide-react";
import { BuyLink } from "@/components/ui/BuyLink";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import {
  productItems,
  productsContent,
  pt,
  type ProductItem,
} from "@/lib/products-content";
import type { Locale } from "@/lib/i18n";
import { getVideosForLocale } from "@/lib/video-utils";

type ProductCatalogProps = {
  locale: Locale;
};

function ProductCard({ product, locale }: { product: ProductItem; locale: Locale }) {
  const localizedVideos = getVideosForLocale(product.videos, locale);
  const videos =
    localizedVideos.length > 0
      ? localizedVideos
      : [...(product.videos ?? [])];

  return (
    <article className="card-premium overflow-hidden">
      <div className="border-b border-slate-100 bg-teal-50/40 px-4 py-3 sm:px-5 sm:py-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-600 text-white">
            <ShoppingBag className="h-4 w-4" />
          </span>
          <h2 className="text-base font-extrabold text-teal-950 sm:text-lg">
            {pt(product.title, locale)}
          </h2>
        </div>
      </div>

      <div className="space-y-5 p-4 sm:p-5">
        {videos.length > 0 && (
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-teal-700">
              {pt(productsContent.howToUse, locale)}
            </h3>
            <div className="space-y-4">
              {videos.map((video) => (
                <div key={video.url}>
                  <p className="mb-2 text-sm font-semibold text-slate-700">
                    {video.label[locale]}
                  </p>
                  <YouTubeEmbed url={video.url} title={video.label[locale]} />
                </div>
              ))}
            </div>
          </div>
        )}

        {product.buyLinks.length > 0 && (
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-teal-700">
              {pt(productsContent.whereToBuy, locale)}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {product.buyLinks.map((link) => (
                <BuyLink
                  key={link.url}
                  href={link.url}
                  label={link.label}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export function ProductCatalog({ locale }: ProductCatalogProps) {
  return (
    <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
      {productItems.map((product) => (
        <ProductCard key={product.id} product={product} locale={locale} />
      ))}
    </div>
  );
}
