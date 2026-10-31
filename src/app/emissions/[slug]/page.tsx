import { notFound } from 'next/navigation';
import { VIDEOS } from '@/data/videos';
import VideoPlayer from '@/components/video/VideoPlayer';
import VideoGrid from '@/components/video/VideoGrid';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const video = VIDEOS.find((v) => v.slug === slug);
  if (!video) {
    return { title: 'Vidéo non trouvée — Art Sous Le Manguier' };
  }
  return {
    title: `${video.title} — Art Sous Le Manguier`,
    description: video.shortDescription || video.description,
    alternates: {
      canonical: `https://artsouslemanguier.com/emissions/${video.slug}`,
    },
    openGraph: {
      images: video.thumbnail ? [{ url: video.thumbnail, width: 1200, height: 630 }] : undefined,
    },
  };
}

export default async function VideoDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const video = VIDEOS.find((v) => v.slug === slug);
  if (!video) {
    notFound();
  }

  // Related videos: same category or shared tags, excluding current
  const related = VIDEOS.filter(
    (v) =>
      v.id !== video.id &&
      ((video.category && v.category === video.category) ||
        (video.tags && v.tags?.some((t) => video.tags?.includes(t))))
  ).slice(0, 3);

  return (
    <div className="space-y-16">
      <section className="section">
        <div className="container">
          <article className="max-w-[66ch] mx-auto">
            <div className="relative aspect-video bg-surface-alt rounded-lg overflow-hidden shadow-lg mb-8">
              <VideoPlayer video={video} width={800} height={450} />
            </div>

            <h1 className="mb-6 text-ink">{video.title}</h1>

            {video.category && (
              <p className="text-xs font-semibold uppercase tracking-wider text-green-dark mb-4">
                {video.category}
              </p>
            )}

            {video.description && (
              <div className="prose text-ink-soft mb-8 max-w-none">
                {video.description}
              </div>
            )}

            {video.artistName && (
              <div className="border-t border-border border-b border-border pt-6 pb-8 mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-dark mb-2">
                  Artiste
                </p>
                <p className="text-lg font-semibold text-ink mb-2">
                  {video.artistRole ? `${video.artistName} — ${video.artistRole}` : video.artistName}
                </p>
                {video.duration && (
                  <p className="text-sm text-ink-soft">
                    Durée : {video.duration}
                  </p>
                )}
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

            {video.credits && (
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-dark mb-2">
                  Crédits
                </p>
                <p className="text-sm text-ink-soft">{video.credits}</p>
              </div>
            )}

            {video.sourceUrl && (
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-dark mb-2">
                  Source originale
                </p>
                <a
                  href={video.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-green-dark underline underline-offset-2 hover:text-green transition-colors"
                >
                  Voir sur {video.platform === 'youtube' ? 'YouTube' : video.platform === 'vimeo' ? 'Vimeo' : video.platform === 'tiktok' ? 'TikTok' : 'la plateforme d’origine'}
                </a>
              </div>
            )}

            {video.externalSource && (
              <p className="text-xs text-ink-soft italic mb-8">
                {video.externalSource}
              </p>
            )}
          </article>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section border-t border-border">
          <div className="container">
            <VideoGrid
              videos={related}
              title="Émissions associées"
              eyebrow="Poursuivre la découverte"
            />
          </div>
        </section>
      )}
    </div>
  );
}
