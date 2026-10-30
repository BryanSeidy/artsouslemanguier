import EpisodeList from '@/components/EpisodeList';
import { ORGANIZATION } from '@/data/site';

export const metadata = {
  title: 'Émission / Archives',
  description:
    "Émission Art Sous Le Manguier : série vidéo documentaire lancée en 2017 sous un manguier à Doual'art (Douala). 54 épisodes diffusés en 2022 (source Vantaart).",
};

export default function EmissionsPage() {
  return (
    <div className="space-y-16">
      <section className="section">
        <div className="container">
          <div className="section-head mb-10 max-w-[44rem]">
            <h1 className="mb-4">\u00c9mission / Archives</h1>
            <p className="prose text-ink-soft">
              L\u2019\u00e9mission \u00ab Art Sous Le Manguier \u00bb a d\u00e9but\u00e9 en{' '}
              {ORGANIZATION.established} sous un manguier dans l\u2019enceinte de{' '}
              {ORGANIZATION.place}. Elle donne la visibilit\u00e9 aux artistes
              contemporains et contribue \u00e0 la m\u00e9moire collective culturelle.
            </p>
            <div className="mt-6 border border-border rounded-lg p-6 bg-surface-alt">
              <h2 className="mb-3 font-semibold text-ink">Rep\u00e8res</h2>
              <ul className="text-sm text-ink-soft space-y-2 list-disc list-inside">
                <li>
                  Format : \u00e9missions d\u2019environ vingt minutes, un ou plusieurs
                  artistes par \u00e9pisode.
                </li>
                <li>
                  \u00c9pisodes diffus\u00e9s en {ORGANIZATION.episodesCount?.asOf}:{' '}
                  <strong>{ORGANIZATION.episodesCount?.value}</strong> (
                  {ORGANIZATION.episodesCount?.source})
                </li>
                <li>
                  Saison 6 : premier \u00e9pisode le{' '}
                  {ORGANIZATION.season6FirstEpisode?.date} (
                  {ORGANIZATION.season6FirstEpisode?.source})
                </li>
              </ul>
              <p className="mt-4 text-xs text-ink-soft">
                Le chiffre des \u00e9pisodes est historique et dat\u00e9 ; il ne pr\u00e9juge
                pas d\u2019une activit\u00e9 en cours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EpisodeList />
    </div>
  );
}
