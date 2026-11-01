import Link from 'next/link';
import Image from 'next/image';
import { ORGANIZATION, SITE } from '@/data/site';
import { VIDEOS } from '@/data/videos';
import { fetchFeaturedVideo, fetchVideos } from '@/lib/sanity/fetch';
import VideoFeatured from '@/components/video/VideoFeatured';
import VideoGrid from '@/components/video/VideoGrid';

export const metadata = {
  title: 'Art Sous Le Manguier — Émission vidéo, archives et mémoire artistique',
  description:
    "Art Sous Le Manguier — émission vidéo documentaire lancée en 2017 sous un manguier à Doual'art (Douala). Visibilité des artistes contemporains et mémoire collective culturelle.",
  alternates: {
    canonical: SITE.url,
  },
};

export default async function Home() {
  const [featured, rest] = await Promise.all([
    fetchFeaturedVideo(),
    fetchVideos().then((vs) => vs.filter((v) => !v.featured)),
  ]);

  return (
    <div className="space-y-16">
      {/* Hero — institutional identity */}
      <section className="section relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="lg:pr-10">
            <div className="section-eyebrow inline-block">Art Sous Le Manguier</div>
            <h1 className="mt-3 mb-6">
              Une mémoire vivante de la création artistique
            </h1>
            <p className="prose text-ink-soft mb-8 max-w-[42rem]">
              {ORGANIZATION.description} L’association porte également des
              initiatives de rencontres et de transmission autour de la création contemporaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/emissions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-surface bg-green-dark rounded hover:bg-green transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
              >
                Découvrir l’émission
              </Link>
              <Link
                href="/a-propos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-ink border border-ink rounded hover:bg-surface-alt transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
              >
                À propos
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div
              className="aspect-square bg-green-dark p-4 flex items-center justify-center"
              style={{ borderRadius: '8px' }}
            >
              <Image
                src="/images/logo.jpg"
                alt=""
                width={400}
                height={400}
                priority
                className="block"
              />
            </div>
          </div>
        </div>
      </section>

      {featured && <VideoFeatured video={featured} />}

      <hr className="divider" />

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="section-head text-center max-w-[44rem] mx-auto mb-12">
            <h2 className="mb-4">La démarche</h2>
            <p className="prose text-ink-soft">
              Créée en {ORGANIZATION.established} par {ORGANIZATION.founder} ({ORGANIZATION.founderRole}),
              l’association Art Sous Le Manguier produit des émissions vidéo
              d’environ vingt minutes dans lesquelles plasticiens, peintres, sculpteurs
              et curateurs sont interviewés sous un manguier, à Douala. L’objectif
              déclaré est de favoriser la visibilité des artistes contemporains
              et de sauvegarder leurs travaux pour la mémoire collective.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="prose text-ink-soft space-y-5">
              <p>
                Le format est flexible : un épisode peut présenter un seul
                artiste ou plusieurs. Chaque rencontre est une occasion d’établir
                des « référents pour avoir des références », pour citer la fondatrice.
              </p>
              <p>
                L’initiative s’adresse aux artistes, aux amateurs d’art
                contemporain africain, aux étudiants en arts, aux galeristes et curateurs,
                ainsi qu’au grand public intéressé par la culture camerounaise.
              </p>
            </div>
            <aside className="border border-border rounded p-6 bg-surface-alt">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-dark">
                Repères
              </h3>
              <ul className="text-sm text-ink-soft space-y-3 list-disc list-inside">
                <li>
                  Lancement : {ORGANIZATION.established}, sous un manguier à{' '}
                  {ORGANIZATION.place}
                </li>
                <li>
                  Épisodes diffusés en {ORGANIZATION.episodesCount?.asOf}:{' '}
                  {ORGANIZATION.episodesCount?.value} (source :
                  {ORGANIZATION.episodesCount?.source})
                </li>
                <li>
                  Saison 6 : premier épisode le{' '}
                  {ORGANIZATION.season6FirstEpisode?.date}
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <hr className="divider divider-center" />

      {rest.length > 0 && (
        <VideoGrid
          videos={rest}
          title="Archives récentes"
          eyebrow="La collection audiovisuelle"
        />
      )}

      <hr className="divider divider-center" />

      {/* Initiatives — concise, homepage only */}
      <section className="section">
        <div className="container">
          <div className="section-head text-center mb-12">
            <h2 className="mb-4">Initiatives documentées</h2>
            <p className="prose text-ink-soft max-w-[44rem] mx-auto">
              Au-delà de l’émission, l’association porte des initiatives de rencontres
              et de transmission.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {ORGANIZATION.initiatives.map((init) => (
              <article
                key={init.id}
                className="border border-border rounded p-6 hover:bg-surface-alt transition-colors"
              >
                <h3 className="mb-2 font-semibold text-ink">{init.title}</h3>
                <p className="text-sm text-ink-soft">{init.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider divider-center" />

      {/* Contact — short, no invented channel */}
      <section className="section">
        <div className="container">
          <div className="section-head text-center mb-10">
            <h2 className="mb-4">Contact</h2>
            <p className="prose text-ink-soft max-w-[44rem] mx-auto">
              Vous souhaitez en savoir plus sur l’association, l’émission ou
              ses archives ? Prenez contact via la page de contact.
            </p>
          </div>
          <div className="max-w-[34rem] mx-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-surface bg-ink rounded hover:bg-green-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              Voir la page de contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
