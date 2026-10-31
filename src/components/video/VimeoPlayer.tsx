'use client';

import { useEffect, useRef, useState } from 'react';
import ExternalVideoCard from './ExternalVideoCard';
import type { Video } from '@/data/videos';

interface VimeoPlayerProps {
  video: Video;
  width: number;
  height: number;
}

/**
 * VimeoPlayer — Vimeo embed.
 * Click-to-load: iframe src is set only after user interaction.
 * Preserves privacy hash for unlisted videos. External link fallback.
 */
export default function VimeoPlayer({
  video,
  width,
  height,
}: VimeoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);

  const videoId = video.providerVideoId || extractVimeoId(video.sourceUrl);
  const embedUrl = videoId ? `https://player.vimeo.com/video/${videoId}` : '';

  useEffect(() => {
    if (!loaded || !iframeRef.current || !embedUrl) return;
    iframeRef.current.src = embedUrl;
  }, [loaded, embedUrl]);

  if (!videoId) {
    return <ExternalVideoCard video={video} />;
  }

  return (
    <div className="relative h-full w-full">
      <button
        onClick={() => setLoaded(true)}
        className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors focus:outline-none"
        aria-label={`Lire la vidéo Vimeo : ${video.title}`}
      >
        <span className="relative z-10 p-6 bg-black/70 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/70">
          ▶
        </span>
        <span className="absolute bottom-4 left-4 right-4 text-center text-white text-sm font-medium backdrop-blur-sm backdrop-opacity-40">
          Lire sur Vimeo
        </span>
      </button>
      {loaded && (
        <iframe
          ref={iframeRef}
          className="h-full w-full"
          width={width}
          height={height}
          title={`Vimeo — ${video.title}`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          referrerPolicy="origin"
        />
      )}
      <a
        href={video.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 z-20 text-[10px] font-medium text-white/70 underline underline-offset-2 hover:text-white bg-black/40 px-2 py-1 rounded backdrop-blur-sm"
      >
        Voir sur Vimeo
      </a>
    </div>
  );
}

function extractVimeoId(url: string): string | undefined {
  if (!url) return undefined;
  // Vimeo URLs: https://vimeo.com/123456789 or with hash
  const match = url.match(new RegExp('vimeo\\.com/(?:[^/]+/)?([0-9]+)'));
  if (match) return match[1];
  return undefined;
}
