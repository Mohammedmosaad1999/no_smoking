import type { LucideIcon } from "lucide-react";

type IconBoxProps = {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "teal" | "emerald" | "blue" | "violet" | "amber";
  className?: string;
};

const variants = {
  teal: "bg-teal-500/10 text-teal-600 ring-teal-500/20",
  emerald: "bg-emerald-500/10 text-emerald-600 ring-emerald-500/20",
  blue: "bg-blue-500/10 text-blue-600 ring-blue-500/20",
  violet: "bg-violet-500/10 text-violet-600 ring-violet-500/20",
  amber: "bg-amber-500/10 text-amber-600 ring-amber-500/20",
};

const sizes = {
  sm: "h-10 w-10 [&_svg]:h-5 [&_svg]:w-5",
  md: "h-12 w-12 [&_svg]:h-6 [&_svg]:w-6",
  lg: "h-14 w-14 [&_svg]:h-7 [&_svg]:w-7",
};

export function IconBox({
  icon: Icon,
  size = "md",
  variant = "teal",
  className = "",
}: IconBoxProps) {
  return (
    <div
      className={`inline-flex shrink-0 items-center justify-center rounded-2xl ring-1 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <Icon strokeWidth={1.75} />
    </div>
  );
}
