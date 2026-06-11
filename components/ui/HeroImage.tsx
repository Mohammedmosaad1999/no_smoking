import Image from "next/image";

type HeroImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  overlay?: "dark" | "teal" | "light";
  className?: string;
  height?: "sm" | "md" | "lg";
};

const heights = {
  sm: "h-48 sm:h-56",
  md: "h-56 sm:h-72",
  lg: "h-64 sm:h-96",
};

const overlays = {
  dark: "from-slate-950/80 via-slate-900/50 to-slate-900/30",
  teal: "from-teal-950/85 via-teal-900/55 to-teal-800/25",
  light: "from-white/90 via-white/40 to-transparent",
};

export function HeroImage({
  src,
  alt,
  priority = false,
  overlay = "teal",
  className = "",
  height = "md",
}: HeroImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${heights[height]} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 1200px"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${overlays[overlay]}`} />
    </div>
  );
}
