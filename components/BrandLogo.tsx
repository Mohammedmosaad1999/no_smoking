import type { Locale } from "@/lib/i18n";
import { siteName } from "@/lib/content";

type BrandLogoProps = {
  locale?: Locale;
  size?: "sm" | "md";
  showText?: boolean;
};

export function BrandLogo({
  locale,
  size = "md",
  showText = true,
}: BrandLogoProps) {
  const iconSize = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const svgSize = size === "sm" ? 22 : 26;

  return (
    <div className="flex min-w-0 items-center gap-3">
      <span
        className={`${iconSize} flex shrink-0 items-center justify-center rounded-full bg-[#e8f3ef]`}
      >
        <svg
          width={svgSize}
          height={svgSize}
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden
        >
          <path
            d="M10 8c-2 0-4 2-4 5v6c0 4 3 7 6 7s6-3 6-7v-6c0-3-2-5-4-5-1.5 0-2.5 1-3 2.5C13.5 9 12.5 8 10 8z"
            fill="#5bb89a"
            opacity="0.85"
          />
          <path
            d="M22 8c2 0 4 2 4 5v6c0 4-3 7-6 7s-6-3-6-7v-6c0-3 2-5 4-5 1.5 0 2.5 1 3 2.5C18.5 9 19.5 8 22 8z"
            fill="#e07a5f"
            opacity="0.9"
          />
        </svg>
      </span>
      {showText && locale && (
        <div className="min-w-0 leading-tight">
          <p className="truncate font-serif text-sm font-bold text-[#1a4338] sm:text-base lg:text-lg">
            Reset Your Breath
          </p>
          <p className="truncate text-[0.7rem] font-semibold text-[#5bb89a] sm:text-xs">
            {siteName.ar}
          </p>
        </div>
      )}
    </div>
  );
}
