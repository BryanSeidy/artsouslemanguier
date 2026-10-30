import Link from 'next/link';
import Image from 'next/image';
import { ORGANIZATION, SITE } from '@/data/site';

export const metadata = {
  title: 'Accueil',
  description:
    "Art Sous Le Manguier — émission vidéo documentaire lancée en 2017 sous un manguier à Doual'art (Douala). Visibilité des artistes contemporains et mémoire collective culturelle.",
};

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero — editorial identity, real logo as authorized visual */}
      <section className="section relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="lg:pr-10">
            <div className="section-eyebrow inline-block">Art Sous Le Manguier</div>
            <h1 className="mt-3 mb-6">
              Un lieu vivant de rencontres, de transmission et de m\u00e9moire
              artistique
            </h1>
            <p className="prose text-ink-soft mb-8 max-w-[42rem]">
              {ORGANIZATION.description} L\u2019association porte \u00e9galement des
              initiatives de rencontres et de transmission autour de la cr\u00e9ation
              contemporaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/emissions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-surface bg-green-dark rounded hover:bg-green transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
              >
                Découvrir l\u2019\u00e9mission
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

      <hr className="divider" />

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="section-head text-center max-w-[44rem] mx-auto mb-12">
            <h2 className="mb-4">La d\u00e9marche</h2>
            <p className="prose text-ink-soft">
              Cr\u00e9\u00e9e en {ORGANIZATION.established} par {ORGANIZATION.founder} ({ORGANIZATION.founderRole}),
              l\u2019association Art Sous Le Manguier produit des \u00e9missions vid\u00e9o
              d\u2019environ vingt minutes dans lesquelles plasticiens, peintres, sculpteurs
              et curateurs sont interview\u00e9s sous un manguier, \u00e0 Douala. L\u2019objectif
              d\u00e9clar\u00e9 est de favoriser la visibilit\u00e9 des artistes contemporains
              et de sauvegarder leurs travaux pour la m\u00e9moire collective.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="prose text-ink-soft space-y-5">
              <p>
                Le format est flexible : un \u00e9pisode peut pr\u00e9senter un seul
                artiste ou plusieurs. Chaque rencontre est une occasion d\u2019\u00e9tablir
                des \u00ab r\u00e9f\u00e9rents pour avoir des r\u00e9f\u00e9rences \u00bb, pour
                citer la fondatrice.
              </p>
              <p>
                L\u2019initiative s\u2019adresse aux artistes, aux amateurs d\u2019art
              contemporain africain, aux \u00e9tudiants en arts, aux galeristes et curateurs,
              ainsi qu\u2019au grand public int\u00e9ress\u00e9 par la culture camerounaise.
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
                  \u00c9pisodes diffus\u00e9s en {ORGANIZATION.episodesCount?.asOf}:{' '}
                  {ORGANIZATION.episodesCount?.value} (source :
                  {ORGANIZATION.episodesCount?.source})
                </li>
                <li>
                  Saison 6 : premier \u00e9pisode le{' '}
                  {ORGANIZATION.season6FirstEpisode?.date}
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <hr className="divider divider-center" />

      {/* Initiatives — concise, homepage only */}
      <section className="section">
        <div className="container">
          <div className="section-head text-center mb-12">
            <h2 className="mb-4">Initiatives document\u00e9es</h2>
            <p className="prose text-ink-soft max-w-[44rem] mx-auto">
              Au-delà de l’émission, l’association porte des initiatives de rencontres
              et de transmission. Leur détail est à confirmer avec l’association.
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
                <span className="inline-block mt-3 text-[0.75rem] font-semibold uppercase tracking-wider text-ink-soft">
                  Statut : {init.status === 'documented' ? 'Documenté' : 'À valider'}
                </span>
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
              Vous souhaitez en savoir plus sur l\u2019association, l\u2019\u00e9mission ou
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
            <p className="mt-6 text-xs text-ink-soft">
              {ORGANIZATION.contactNote}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
