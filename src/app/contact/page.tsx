import Link from 'next/link';
import { ORGANIZATION } from '@/data/site';

export const metadata = {
  title: 'Contact — Art Sous Le Manguier',
  description:
    'Contacter l’association Art Sous Le Manguier (Douala, Cameroun). Coordonnées en cours de vérification.',
  alternates: {
    canonical: 'https://artsouslemanguier.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <section className="section">
        <div className="container">
          <div className="section-head max-w-[44rem]">
            <h1 className="mb-4">Contact</h1>
            <p className="prose text-ink-soft">
              Vous souhaitez en savoir plus sur Art Sous Le Manguier, son
              émission ou ses archives audiovisuelles ?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="prose text-ink-soft space-y-5">
              <p>
                L’association est implantée à Douala, Cameroun, là où
                l’émission a été lancée en 2017 sous un manguier.
              </p>
              <p>
                Pour toute demande (presse, partenariats, archives,
                émission), utilisez la page de contact pour entrer en relation
                avec l’association.
              </p>
              <p>
                Vous pouvez également consulter l’émission et les
                initiatives sur les autres pages du site.
              </p>
            </div>

            <aside className="border border-border rounded p-6 bg-surface-alt">
              <h2 className="mb-4 font-semibold text-ink">À propos de ce site</h2>
              <p className="text-sm text-ink-soft mb-4">
                Ce site est un éditorial institutionnel sans base de données,
                sans formulaire d’envoi et sans collecte de données.
              </p>
              <p className="text-sm text-ink-soft mb-4">
                Aucun courriel, téléphone, adresse physique ou lien vers un
                compte de réseau social n’est affiché à ce stade : ces
                éléments sont en cours de vérification auprès de l’association.
              </p>
              <p className="text-sm text-ink-soft">
                {ORGANIZATION.contactNote}
              </p>
            </aside>
          </div>
        </div>
      </section>

      <hr className="divider divider-center" />

      <section className="section">
        <div className="container text-center">
          <h2 className="mb-4">Poursuivre la découverte</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/emissions"
              className="px-6 py-3 text-sm font-semibold text-ink border border-ink rounded hover:bg-surface-alt transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              Émission / Archives
            </Link>
            <Link
              href="/a-propos"
              className="px-6 py-3 text-sm font-semibold text-ink border border-ink rounded hover:bg-surface-alt transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              À propos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
