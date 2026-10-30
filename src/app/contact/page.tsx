import Link from 'next/link';
import { ORGANIZATION, SITE } from '@/data/site';

export const metadata = {
  title: 'Contact',
  description:
    "Contacter l'association Art Sous Le Manguier (Douala, Cameroun). Coordonnées en cours de vérification auprès de l'association.",
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
              \u00e9mission ou ses archives audiovisuelles ?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="prose text-ink-soft space-y-5">
              <p>
                L\u2019association est bas\u00e9e \u00e0 Douala, Cameroun (Doual\u2019art,
                Bonanjo), o\u00f9 l\u2019\u00e9mission a \u00e9t\u00e9 lanc\u00e9e en
                2017 sous un manguier.
              </p>
              <p>
                Pour toute demande (presse, partenariats, archives,
                \u00e9mission), utilisez la page de contact ou les canaux officiels
                de l\u2019association.
              </p>
              <p>
                Vous pouvez \u00e9galement consulter l\u2019\u00e9mission et les
              initiatives sur les autres pages du site.
              </p>
            </div>

            <aside className="border border-border rounded p-6 bg-surface-alt">
              <h2 className="mb-4 font-semibold text-ink">À propos de ce site</h2>
              <p className="text-sm text-ink-soft mb-4">
                Ce site est un \u00e9ditorial institutionnel sans base de donn\u00e9es,
                sans formulaire d\u2019envoi et sans collecte de donn\u00e9es.
              </p>
              <p className="text-sm text-ink-soft mb-4">
                Aucun courriel, t\u00e9l\u00e9phone, adresse physique ou lien vers un
                compte de r\u00e9seau social n\u2019est affich\u00e9 \u00e0 ce stade :
                ces \u00e9l\u00e9ments sont en cours de v\u00e9rification aupr\u00e8s de
                l\u2019association et ne sont pas invent\u00e9s.
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
          <h2 className="mb-4">Poursuivre la d\u00e9couverte</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/emissions"
              className="px-6 py-3 text-sm font-semibold text-ink border border-ink rounded hover:bg-surface-alt transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              \u00c9mission / Archives
            </Link>
            <Link
              href="/a-propos"
              className="px-6 py-3 text-sm font-semibold text-ink border border-ink rounded hover:bg-surface-alt transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              \u00c0 propos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
