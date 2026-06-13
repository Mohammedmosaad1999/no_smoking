"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { communityVideos } from "@/lib/community-content";
import type { Locale } from "@/lib/i18n";
import { getVideosForLocale } from "@/lib/video-utils";

type CommunityVideosProps = {
  locale: Locale;
};

export function CommunityVideos({ locale }: CommunityVideosProps) {
  const videos = getVideosForLocale(communityVideos, locale);
  const [activeIndex, setActiveIndex] = useState(0);
  const playerRef = useRef<HTMLDivElement>(null);
  const shouldScrollToPlayer = useRef(false);

  function selectVideo(index: number) {
    shouldScrollToPlayer.current = true;
    setActiveIndex(index);
  }

  useEffect(() => {
    if (!shouldScrollToPlayer.current) return;
    shouldScrollToPlayer.current = false;

    playerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [activeIndex]);

  if (videos.length === 0) {
    return (
      <p className="text-center text-sm text-slate-600">
        {locale === "en"
          ? "No videos available for this language yet."
          : "لا توجد فيديوهات متاحة لهذه اللغة حالياً."}
      </p>
    );
  }

  const activeVideo = videos[activeIndex];

  return (
    <div className="mx-auto w-full max-w-6xl xl:max-w-7xl">
      <div ref={playerRef} className="card-premium scroll-mt-24 overflow-hidden">
        <div className="border-b border-slate-100 bg-gradient-to-r from-teal-50/80 to-white px-4 py-3 sm:px-5">
          <div className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white">
              {activeIndex + 1}
            </span>
            <div className="min-w-0">
              <p className="text-[0.7rem] font-bold uppercase tracking-wide text-teal-600">
                {locale === "en" ? "Now playing" : "يعرض الآن"}
              </p>
              <h2 className="mt-0.5 text-sm font-bold leading-snug text-teal-950 sm:text-base">
                {activeVideo.label[locale]}
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 p-3 sm:p-4">
          <YouTubeEmbed
            url={activeVideo.url}
            title={activeVideo.label[locale]}
            className="border-0 shadow-none"
          />
        </div>
      </div>

      <div className="mt-5 sm:mt-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">
          {locale === "en" ? "All videos" : "كل الفيديوهات"}
          <span className="ms-1.5 font-semibold text-teal-600">({videos.length})</span>
        </p>

        <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200/80 bg-white shadow-sm">
          {videos.map((video, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={video.url}>
                <button
                  type="button"
                  onClick={() => selectVideo(index)}
                  className={`flex w-full items-center gap-3 px-3 py-3 text-start transition sm:gap-4 sm:px-4 sm:py-3.5 ${
                    isActive
                      ? "bg-teal-50/90"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                      isActive
                        ? "bg-teal-600 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isActive ? (
                      <Play className="h-3.5 w-3.5 fill-current" />
                    ) : (
                      index + 1
                    )}
                  </span>
                  <span
                    className={`min-w-0 flex-1 text-sm leading-snug sm:text-[0.9rem] ${
                      isActive
                        ? "font-bold text-teal-900"
                        : "font-medium text-slate-700"
                    }`}
                  >
                    {video.label[locale]}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
