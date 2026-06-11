import type { Locale } from "@/lib/i18n";

type PageShellProps = {
  locale: Locale;
  badge?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function PageShell({
  badge,
  title,
  subtitle,
  children,
}: PageShellProps) {
  return (
    <div className="section-mesh">
      <section className="page-header">
        <div className="container-page py-8 sm:py-12 lg:py-16">
          {badge && <div className="badge-pill mb-3 sm:mb-4">{badge}</div>}
          <h1 className="max-w-3xl font-extrabold text-teal-950">{title}</h1>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-600 sm:mt-4 sm:text-xl">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      <section className="container-page py-8 sm:py-10 lg:py-14">{children}</section>
    </div>
  );
}
