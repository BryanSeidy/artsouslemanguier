import { EPISODES, EPISODES_NOTE } from '@/data/episodes';

export default function EpisodeList() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head mb-12">
          <h2 className="mb-4">Émission / Archives</h2>
          <p className="prose text-ink-soft max-w-[44rem]">
            L’émission « Art Sous Le Manguier » est une série vidéo
            documentaire d’environ vingt minutes dans laquelle Louise Abomba
            interviewe plasticiens, peintres, sculpteurs et curateurs sous un
            manguier, à Douala.
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
                    Invités : {ep.guests.join(', ')}
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
                    Voir la vidéo
                  </a>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state border border-border rounded-lg p-10 md:p-16 max-w-[44rem] mx-auto">
            <h3 className="mb-4 font-semibold text-ink">
              Archive des épisodes à constituer
            </h3>
            <p className="prose text-ink-soft mb-6">
              Aucun épisode n’est présenté comme réel sur ce site tant que
              ses titres, invités, dates et liens vidéo n’ont pas été
              confirmés par l’association.
            </p>
            <p className="text-sm text-ink-soft">{EPISODES_NOTE}</p>
            <p className="mt-6 text-sm text-ink-soft">
              Pour consulter la liste complète des épisodes, merci de prendre
              contact avec l’association.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
