import Link from 'next/link';
import type { Video } from '@/data/videos';

interface ExternalVideoCardProps {
  video: Video;
}

/**
 * ExternalVideoCard — editorial card for platforms without reliable embed.
 * No iframe, no arbitrary HTML. Just a clean link to the original source.
 */
export default function ExternalVideoCard({ video }: ExternalVideoCardProps) {
  return (
    <article className="border border-border rounded-lg p-6 bg-surface-alt hover:bg-surface transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
          {video.platform === 'tiktok' ? 'TikTok' : video.platform === 'vimeo' ? 'Vimeo' : 'Lien externe'}
        </span>
        {video.duration && (
          <span className="text-[10px] font-medium text-ink-soft">{video.duration}</span>
        )}
      </div>
      <h3 className="font-semibold text-ink mb-2">{video.title}</h3>
      {video.shortDescription && (
        <p className="text-sm text-ink-soft mb-4">{video.shortDescription}</p>
      )}
      {video.artistName && (
        <p className="text-xs text-ink-soft mb-4">
          {video.artistRole ? `${video.artistName} — ${video.artistRole}` : video.artistName}
        </p>
      )}
      <Link
        href={video.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-green-dark underline underline-offset-2 hover:text-green transition-colors"
      >
        Voir la source →
      </Link>
    </article>
  );
}
