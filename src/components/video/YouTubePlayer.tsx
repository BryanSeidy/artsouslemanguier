'use client';

import { useEffect, useRef, useState } from 'react';
import ExternalVideoCard from './ExternalVideoCard';
import type { Video } from '@/data/videos';

interface YouTubePlayerProps {
  video: Video;
  width: number;
  height: number;
}

/**
 * YouTubePlayer — YouTube embed via youtube-nocookie.com.
 * Click-to-load: iframe src is set only after user interaction.
 * No autoplay. Preserves referer. Provides "Voir sur YouTube" link.
 */
export default function YouTubePlayer({
  video,
  width,
  height,
}: YouTubePlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);

  const videoId = video.providerVideoId || extractYouTubeId(video.sourceUrl);
  const embedUrl = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`
    : '';

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
        aria-label={`Lire la vidéo YouTube : ${video.title}`}
      >
        <span className="relative z-10 p-6 bg-black/70 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/70">
          ▶
        </span>
        <span className="absolute bottom-4 left-4 right-4 text-center text-white text-sm font-medium backdrop-blur-sm backdrop-opacity-40">
          Lire sur YouTube
        </span>
      </button>
      {loaded && (
        <iframe
          ref={iframeRef}
          className="h-full w-full"
          width={width}
          height={height}
          title={`YouTube — ${video.title}`}
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          referrerPolicy="origin"
        />
      )}
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 z-20 text-[10px] font-medium text-white/70 underline underline-offset-2 hover:text-white bg-black/40 px-2 py-1 rounded backdrop-blur-sm"
      >
        Voir sur YouTube
      </a>
    </div>
  );
}

function extractYouTubeId(url: string): string | undefined {
  if (!url) return undefined;
  const patterns = [
    new RegExp('(?:youtube\\.com/watch\\?v=|youtu\\.be/|youtube\\.com/shorts/)([a-zA-Z0-9_-]{11})'),
    new RegExp('youtube\\.com/embed/([a-zA-Z0-9_-]{11})'),
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return undefined;
}
