/* Art Sous Le Manguier — episodes register.
   No episode title, guest, date or video link is currently confirmed by a
   primary source, so the public register is intentionally empty. Each entry
   below would require validation with the association before publication.
   See docs/CONTENT_AUDIT.md for the full provenance trail. */

export interface Episode {
  id: string;
  title: string;
  season?: number;
  date?: string; // ISO or display
  guests?: string[];
  description?: string;
  videoUrl?: string; // only when confirmed, original platform embed
  source?: string;
}

/* Empty register — do not invent episodes. */
export const EPISODES: Episode[] = [];

export const EPISODES_NOTE =
  'La liste d\u00e9taill\u00e9e des \u00e9pisodes (titres, invit\u00e9s, dates, liens vid\u00e9o) ' +
  'est \u00e0 constituer avec l\u2019association. Aucun \u00e9pisode n\u2019est invent\u00e9 ' +
  'ni pr\u00e9sent\u00e9 comme r\u00e9el sur ce site.';
