import type { Locale } from "@/lib/i18n";

type PageShellProps = {
  locale: Locale;
  badge?: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
  children: React.ReactNode;
};

export function PageShell({
  badge,
  title,
  subtitle,
  compact = false,
  children,
}: PageShellProps) {
  return (
    <div className="section-mesh">
      <section className="page-header">
        <div
          className={`container-page ${compact ? "py-4 sm:py-6" : "py-5 sm:py-8 lg:py-10"}`}
        >
          {badge && <div className="badge-pill mb-2 sm:mb-3">{badge}</div>}
          <h1
            className={`max-w-3xl font-extrabold text-teal-950 ${compact ? "text-xl sm:text-2xl" : ""}`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-1.5 max-w-2xl leading-relaxed text-slate-600 sm:mt-2 ${
                compact ? "text-xs sm:text-sm" : "text-sm sm:text-base"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </section>

      <section
        className={`container-page ${compact ? "py-4 sm:py-6" : "py-5 sm:py-7 lg:py-9"}`}
      >
        {children}
      </section>
    </div>
  );
}
