import { ORGANIZATION } from '@/data/site';
import { VIDEOS } from '@/data/videos';
import VideoGrid from '@/components/video/VideoGrid';
import VideoFeatured from '@/components/video/VideoFeatured';
import { EPISODES_NOTE } from '@/data/episodes';

export const metadata = {
  title: 'Émission / Archives — Art Sous Le Manguier',
  description:
    'Émission Art Sous Le Manguier : série vidéo documentaire lancée en 2017 sous un manguier à Doual’art (Douala). 54 épisodes diffusés en 2022 (source Vantaart).',
  alternates: {
    canonical: 'https://artsouslemanguier.com/emissions',
  },
};

export default function EmissionsPage() {
  const featured = VIDEOS.filter((v) => v.featured);
  const rest = VIDEOS.filter((v) => !v.featured);

  return (
    <div className="space-y-16">
      <section className="section">
        <div className="container">
          <div className="section-head mb-10 max-w-[44rem]">
            <h1 className="mb-4">Émission / Archives</h1>
            <p className="prose text-ink-soft">
              L’émission « Art Sous Le Manguier » a débuté en{ORGANIZATION.established} sous un manguier dans l’enceinte de{ORGANIZATION.place}. Elle donne la visibilité aux artistes contemporains et contribue à la mémoire collective culturelle.
            </p>
            <div className="mt-6 border border-border rounded-lg p-6 bg-surface-alt">
              <h2 className="mb-3 font-semibold text-ink">Repères</h2>
              <ul className="text-sm text-ink-soft space-y-2 list-disc list-inside">
                <li>
                  Format : émissions d’environ vingt minutes, un ou plusieurs
                  artistes par épisode.
                </li>
                <li>
                  Épisodes diffusés en {ORGANIZATION.episodesCount?.asOf}:{' '}
                  <strong>{ORGANIZATION.episodesCount?.value}</strong> (
                  {ORGANIZATION.episodesCount?.source})
                </li>
                <li>
                  Saison 6 : premier épisode le{' '}
                  {ORGANIZATION.season6FirstEpisode?.date} (
                  {ORGANIZATION.season6FirstEpisode?.source})
                </li>
              </ul>
              <p className="mt-4 text-xs text-ink-soft">
                Le chiffre des épisodes est historique et daté ; il ne préjuge
                pas d’une activité en cours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="section">
          <div className="container">
            <VideoFeatured video={featured[0]} />
          </div>
        </section>
      )}

      {rest.length > 0 ? (
        <VideoGrid videos={rest} title="Archives" eyebrow="La collection" />
      ) : (
        <section className="section">
          <div className="container">
            <div className="empty-state border border-border rounded-lg p-10 md:p-16 max-w-[44rem] mx-auto">
              <h3 className="mb-4 font-semibold text-ink">
                Archive des épisodes à constituer
              </h3>
              <p className="prose text-ink-soft mb-6">
                Aucune vidéo n’est publiée sur ce site tant que son URL source
                et sa plateforme n’ont pas été confirmées par l’association.
              </p>
              <p className="text-sm text-ink-soft">{EPISODES_NOTE}</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
