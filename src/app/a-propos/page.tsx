import { ORGANIZATION } from '@/data/site';

export const metadata = {
  title: 'À propos',
  description:
    "À propos d'Art Sous Le Manguier : contexte, démarche et mission de l'association fondée par Louise Abomba en 2017 à Douala.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="section">
        <div className="container">
          <div className="section-head max-w-[44rem]">
            <h1 className="mb-4">\u00c0 propos</h1>
            <p className="prose text-ink-soft">
              Art Sous Le Manguier est une initiative culturelle camerounaise
              port\u00e9e par {ORGANIZATION.founder}, {ORGANIZATION.founderRole}.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="prose text-ink-soft space-y-5">
              <p>
                L\u2019\u00e9mission \u00ab Art Sous Le Manguier \u00bb a d\u00e9but\u00e9 en{' '}
                {ORGANIZATION.established} sous un manguier dans l\u2019enceinte de{' '}
                {ORGANIZATION.place}, \u00e0 Douala. Initialement con\u00e7ue comme un
                tournage informel, elle s\u2019est rapidement formalis\u00e9e.
              </p>
              <p>
                Concr\u00e8tement, l\u2019association produit des \u00e9missions vid\u00e9o
                d\u2019environ vingt minutes dans lesquelles Louise Abomba interviewe
                plasticiens, peintres, sculpteurs et curateurs sur son \u00ab plateau
                sous le manguier \u00bb.
              </p>
              <p>
                {ORGANIZATION.mission}
              </p>
            </div>
            <div className="prose text-ink-soft space-y-5">
              <h2 className="mb-3">La fondatrice</h2>
              <p>
                <strong>{ORGANIZATION.founder}</strong> est{' '}
                {ORGANIZATION.founderRole}. Elle porte le projet depuis son lancement.
              </p>
              <blockquote className="border-l-3 border-green-dark pl-5 italic text-ink-soft my-6">
                \u00ab Un devoir pour la m\u00e9moire collective \u00bb — pour \u00ab
                \u00e9tablir des r\u00e9f\u00e9rents pour avoir des r\u00e9f\u00e9rences \u00bb,
                selon les propos de Louise Abomba rapport\u00e9s dans le dossier de
                contexte du projet.
              </blockquote>
              <p className="text-sm text-ink-soft">
                Ce projet s\u2019adresse aux artistes, aux amateurs d\u2019art
                contemporain africain, aux \u00e9tudiants en arts, galeristes et
                curateurs, ainsi qu\u2019au grand public int\u00e9ress\u00e9 par la culture
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
            <h2 className="mb-4">Initiatives associ\u00e9es</h2>
            <p className="prose text-ink-soft">
              Au-delà de l\u2019\u00e9mission, l\u2019association est impliqu\u00e9e dans
              des initiatives de rencontres et de transmission, document\u00e9es dans
              le cadre de ce site.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {ORGANIZATION.initiatives.map((init) => (
              <article
                key={init.id}
                className="border border-border rounded p-6"
              >
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
