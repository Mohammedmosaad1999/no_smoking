import { getYouTubeEmbedUrl } from "@/lib/youtube";

type YouTubeEmbedProps = {
  url: string;
  title?: string;
  className?: string;
};

export function YouTubeEmbed({ url, title = "Video", className = "" }: YouTubeEmbedProps) {
  const embedUrl = getYouTubeEmbedUrl(url);
  if (!embedUrl) return null;

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl shadow-slate-900/20 ${className}`}
    >
      <div className="relative aspect-video w-full">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}
