import { ORGANIZATION } from '@/data/site';

export const metadata = {
  title: 'À propos — Art Sous Le Manguier',
  description:
    "À propos d'Art Sous Le Manguier : contexte, démarche et mission de l'association fondée par Louise Abomba en 2017 à Douala.",
  alternates: {
    canonical: 'https://artsouslemanguier.com/a-propos',
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="section">
        <div className="container">
          <div className="section-head max-w-[44rem]">
            <h1 className="mb-4">À propos</h1>
            <p className="prose text-ink-soft">
              Art Sous Le Manguier est une initiative culturelle camerounaise
              portée par {ORGANIZATION.founder}, {ORGANIZATION.founderRole}.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="prose text-ink-soft space-y-5">
              <p>
                L’émission « Art Sous Le Manguier » a débuté en{' '}
                {ORGANIZATION.established} sous un manguier dans l’enceinte de{' '}
                {ORGANIZATION.place}, à Douala. Initialement conçue comme un
                tournage informel, elle s’est rapidement formalisée.
              </p>
              <p>
                Concrètement, l’association produit des émissions vidéo
                d’environ vingt minutes dans lesquelles Louise Abomba interviewe
                plasticiens, peintres, sculpteurs et curateurs sur son « plateau
                sous le manguier ».
              </p>
              <p>{ORGANIZATION.mission}</p>
            </div>
            <div className="prose text-ink-soft space-y-5">
              <h2 className="mb-3">La fondatrice</h2>
              <p>
                <strong>{ORGANIZATION.founder}</strong> est{' '}
                {ORGANIZATION.founderRole}. Elle porte le projet depuis son lancement.
              </p>
              <blockquote className="border-l-3 border-green-dark pl-5 italic text-ink-soft my-6">
                « Un devoir pour la mémoire collective » — pour « établir des
                référents pour avoir des références », selon les propos de
                Louise Abomba rapportés dans le dossier de contexte du projet.
              </blockquote>
              <p className="text-sm text-ink-soft">
                Ce projet s’adresse aux artistes, aux amateurs d’art
                contemporain africain, aux étudiants en arts, galeristes et
                curateurs, ainsi qu’au grand public intéressé par la culture
                camerounaise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider divider-center" />

      <section className="section">
        <div className="container">
          <div className="section-head max-w-[44rem]">
            <h2 className="mb-4">Initiatives associées</h2>
            <p className="prose text-ink-soft">
              Au-delà de l’émission, l’association est impliquée dans
              des initiatives de rencontres et de transmission.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {ORGANIZATION.initiatives.map((init) => (
              <article key={init.id} className="border border-border rounded p-6">
                <h3 className="mb-2 font-semibold text-ink">{init.title}</h3>
                <p className="text-sm text-ink-soft">{init.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
