import Link from 'next/link';
import Image from 'next/image';
import VideoPlayer from './VideoPlayer';
import type { Video } from '@/data/videos';

interface VideoStoryCardProps {
  video: Video;
}

/**
 * VideoStoryCard — individual video presentation.
 * Real cover if available, discrete play indicator, title, artist,
 * temporal info, short editorial context.
 */
export default function VideoStoryCard({ video }: VideoStoryCardProps) {
  return (
    <article className="border border-border rounded-lg overflow-hidden hover:border-green-dark/40 transition-colors group">
      <div className="relative aspect-video bg-surface-alt">
        <VideoPlayer video={video} width={400} height={225} />
        {video.thumbnail && (
          <Image
            src={video.thumbnail}
            alt=""
            width={400}
            height={225}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-40"
            priority
          />
        )}
        <span className="absolute top-2 right-2 z-10 px-2 py-1 text-[10px] font-semibold text-white bg-black/60 rounded backdrop-blur-sm">
          {video.orientation === 'portrait' ? '9:16' : '16:9'}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {video.category && (
            <span className="text-[10px] font-semibold uppercase tracking-wider text-green-dark">
              {video.category}
            </span>
          )}
          {video.publishedAt && (
            <span className="text-[10px] text-ink-soft">
              {new Date(video.publishedAt).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          )}
        </div>
        <Link
          href={`/emissions/${video.slug}`}
          className="font-semibold text-ink mb-2 block group-hover:text-green-dark transition-colors"
        >
          {video.title}
        </Link>
        {video.artistName && (
          <p className="text-sm text-ink-soft mb-3">
            {video.artistRole ? `${video.artistName} — ${video.artistRole}` : video.artistName}
          </p>
        )}
        {video.shortDescription && (
          <p className="text-sm text-ink-soft line-clamp-2 mb-3">
            {video.shortDescription}
          </p>
        )}
        {video.duration && (
          <span className="text-xs font-medium text-ink-soft">
            {video.duration}
          </span>
        )}
      </div>
    </article>
  );
}
