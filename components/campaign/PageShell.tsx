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
        <div className="container-page py-12 sm:py-16">
          {badge && <div className="badge-pill mb-4">{badge}</div>}
          <h1 className="max-w-3xl font-extrabold text-teal-950">{title}</h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-xl leading-relaxed text-slate-600">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      <section className="container-page py-10 sm:py-14">{children}</section>
    </div>
  );
}
