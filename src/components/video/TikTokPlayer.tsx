'use client';

import { useEffect, useRef, useState } from 'react';
import ExternalVideoCard from './ExternalVideoCard';
import type { Video } from '@/data/videos';

interface TikTokPlayerProps {
  video: Video;
  width: number;
  height: number;
}

/**
 * TikTokPlayer — Official TikTok Embed Player.
 * Click-to-load: embed script loads only after user interaction.
 * Preserves vertical 9:16 orientation.
 */
export default function TikTokPlayer({
  video,
  width,
  height,
}: TikTokPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  const videoId = extractTikTokId(video.sourceUrl);

  useEffect(() => {
    if (!loaded || !containerRef.current || !videoId) return;
    // Load TikTok embed SDK
    const scriptId = 'tiktok-embed';
    if (document.getElementById(scriptId)) {
      initEmbed(containerRef.current, videoId);
      return;
    }
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    script.onload = () => {
      if (containerRef.current) initEmbed(containerRef.current, videoId);
    };
    document.body.appendChild(script);
  }, [loaded, videoId]);

  if (!videoId) {
    return <ExternalVideoCard video={video} />;
  }

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <button
        onClick={() => setLoaded(true)}
        className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors focus:outline-none"
        aria-label={`Lire la vidéo TikTok : ${video.title}`}
      >
        <span className="relative z-10 p-6 bg-black/70 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/70">
          ▶
        </span>
        <span className="absolute bottom-4 left-4 right-4 text-center text-white text-sm font-medium backdrop-blur-sm backdrop-opacity-40">
          Lire sur TikTok
        </span>
      </button>
      <div
        ref={containerRef}
        className="h-full w-full hidden"
        data-tiktok-embed
      />
      <a
        href={video.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 z-20 text-[10px] font-medium text-white/70 underline underline-offset-2 hover:text-white bg-black/40 px-2 py-1 rounded backdrop-blur-sm"
      >
        Voir sur TikTok
      </a>
    </div>
  );
}

function initEmbed(container: HTMLDivElement, videoId: string) {
  container.classList.remove('hidden');
  container.innerHTML = `<blockquote class="tiktok-embed" cite="${videoId}" style="max-width: 605px;min-width: 325px;"></blockquote>`;
  if ((window as any).tiktokEmbed) {
    (window as any).tiktokEmbed.load();
  }
}

function extractTikTokId(url: string): string | undefined {
  if (!url) return undefined;
  const match = url.match(new RegExp('tiktok\\.com/@[\\w.]+/video/([0-9]+)'));
  if (match) return match[1];
  return undefined;
}
