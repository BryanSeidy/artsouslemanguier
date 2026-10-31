import Link from 'next/link';
import VideoPlayer from './VideoPlayer';
import type { Video } from '@/data/videos';

interface VideoFeaturedProps {
  video: Video;
}

/**
 * VideoFeatured — large editorial composition for a featured video.
 * Big cover, title, presentation, artist, play button.
 */
export default function VideoFeatured({ video }: VideoFeaturedProps) {
  return (
    <section className="section relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:pr-10">
            <div className="section-eyebrow inline-block">Émission en vedette</div>
            <h2 className="mt-3 mb-6 text-ink">
              {video.title}
            </h2>
            {video.shortDescription && (
              <p className="prose text-ink-soft mb-6 max-w-[42rem]">
                {video.shortDescription}
              </p>
            )}
            {video.artistName && (
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-dark mb-1">
                  Artiste
                </p>
                <p className="text-lg font-semibold text-ink">
                  {video.artistRole ? `${video.artistName} — ${video.artistRole}` : video.artistName}
                </p>
              </div>
            )}
            {video.publishedAt && (
              <p className="text-xs text-ink-soft mb-8">
                Publié le {new Date(video.publishedAt).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            )}
            <Link
              href={`/emissions/${video.slug}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-surface bg-green-dark rounded hover:bg-green transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              Voir l&apos;émission
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="aspect-video bg-surface-alt rounded-lg overflow-hidden shadow-lg">
              <VideoPlayer video={video} width={640} height={360} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
