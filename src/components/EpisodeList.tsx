import { EPISODES, EPISODES_NOTE } from '@/data/episodes';

export default function EpisodeList() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head mb-12">
          <h2 className="mb-4">\u00c9mission / Archives</h2>
          <p className="prose text-ink-soft max-w-[44rem]">
            L\u2019\u00e9mission \u00ab Art Sous Le Manguier \u00bb est une s\u00e9rie vid\u00e9o
            documentaire d\u2019environ vingt minutes dans laquelle Louise Abomba
            interviewe plasticiens, peintres, sculpteurs et curateurs sous un
            manguier, \u00e0 Douala.
          </p>
        </div>

        {EPISODES.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {EPISODES.map((ep) => (
              <article key={ep.id} className="border border-border rounded p-6">
                <h3 className="mb-2 font-semibold text-ink">{ep.title}</h3>
                {ep.date && (
                  <p className="text-xs text-ink-soft mb-3">{ep.date}</p>
                )}
                {ep.guests && ep.guests.length > 0 && (
                  <p className="text-sm text-ink-soft mb-4">
                    Invit\u00e9s : {ep.guests.join(', ')}
                  </p>
                )}
                {ep.description && (
                  <p className="text-sm text-ink-soft mb-4">
                    {ep.description}
                  </p>
                )}
                {ep.videoUrl && (
                  <a
                    href={ep.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-green-dark underline underline-offset-2"
                  >
                    Voir la vid\u00e9o
                  </a>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state border border-border rounded-lg p-10 md:p-16 max-w-[44rem] mx-auto">
            <h3 className="mb-4 font-semibold text-ink">
              Archive des \u00e9pisodes \u00e0 constituer
            </h3>
            <p className="prose text-ink-soft mb-6">
              Aucun \u00e9pisode n\u2019est pr\u00e9sent\u00e9 comme r\u00e9el sur ce site
              tant que ses titres, invit\u00e9s, dates et liens vid\u00e9o n\u2019ont pas
              \u00e9t\u00e9 confirm\u00e9s par l\u2019association. Aucun contenu n\u2019est invent\u00e9.
            </p>
            <p className="text-sm text-ink-soft">{EPISODES_NOTE}</p>
            <p className="mt-6 text-sm text-ink-soft">
              Pour consulter la liste compl\u00e8te des \u00e9pisodes, merci de prendre
              contact avec l\u2019association.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
