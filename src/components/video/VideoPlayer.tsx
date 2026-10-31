'use client';

import { useState, useCallback } from 'react';
import YouTubePlayer from './YouTubePlayer';
import VimeoPlayer from './VimeoPlayer';
import TikTokPlayer from './TikTokPlayer';
import ExternalVideoCard from './ExternalVideoCard';
import type { Video } from '@/data/videos';

interface VideoPlayerProps {
  video: Video;
  width?: number;
  height?: number;
}

/**
 * VideoPlayer — resolves the platform and renders the appropriate embed adapter.
 * Uses click-to-load: poster is shown first, iframe loads only on user request.
 */
export default function VideoPlayer({
  video,
  width = 640,
  height = 360,
}: VideoPlayerProps) {
  const [platform, setPlatform] = useState<videoPlatform | null>(null);

  const resolvePlatform = useCallback(() => {
    const p = video.platform;
    setPlatform(p);
  }, [video.platform]);

  return (
    <div className="relative group aspect-video bg-surface-alt rounded-lg overflow-hidden">
      {platform ? (
        <div className="relative h-full w-full">
          {platform === 'youtube' && (
            <YouTubePlayer video={video} width={width} height={height} />
          )}
          {platform === 'vimeo' && (
            <VimeoPlayer video={video} width={width} height={height} />
          )}
          {platform === 'tiktok' && (
            <TikTokPlayer video={video} width={width} height={height} />
          )}
          {platform === 'other' && (
            <ExternalVideoCard video={video} />
          )}
        </div>
      ) : (
        <button
          onClick={resolvePlatform}
          className="absolute inset-0 flex items-center justify-center bg-surface-alt/90 hover:bg-surface-alt transition-colors focus:outline-none"
          aria-label={`Lancer la lecture de ${video.title}`}
        >
          <span className="relative z-10 p-4 bg-black/60 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/60">
            ▶
          </span>
        </button>
      )}
    </div>
  );
}

type videoPlatform = 'youtube' | 'vimeo' | 'tiktok' | 'other';
