import { Play } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { LocalizedVideo } from "@/lib/video-utils";
import { getVideosForLocale } from "@/lib/video-utils";
import { YouTubeEmbed } from "./YouTubeEmbed";

type VideoSectionProps = {
  locale: Locale;
  title: Record<Locale, string>;
  videos: readonly LocalizedVideo[];
};

export function VideoSection({ locale, title, videos }: VideoSectionProps) {
  const localizedVideos = getVideosForLocale(videos, locale);

  if (localizedVideos.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-base font-bold text-teal-700">
        <Play className="h-5 w-5" />
        {title[locale]}
      </div>
      <div className="grid gap-6">
        {localizedVideos.map((video) => (
          <div key={video.url} className="space-y-3">
            <p className="text-base font-semibold text-slate-700">
              {video.label[locale]}
            </p>
            <YouTubeEmbed url={video.url} title={video.label[locale]} />
          </div>
        ))}
      </div>
    </div>
  );
}
