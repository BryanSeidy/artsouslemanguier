/* Art Sous Le Manguier — episodes register.
   No episode title, guest, date or video link is currently confirmed by a
   primary source, so the public register is intentionally empty. Each entry
   below would require validation with the association before publication.
   See docs/CONTENT_AUDIT.md for the full provenance trail. */

export interface Episode {
  id: string;
  slug: string;
  title: string;
  season?: number;
  episodeNumber?: number;
  date?: string;
  guests?: string[];
  description?: string;
  shortDescription?: string;
  videoUrl?: string;
  platform?: 'youtube' | 'vimeo' | 'tiktok' | 'other';
  providerVideoId?: string;
  thumbnail?: string;
  artistName?: string;
  artistRole?: string;
  duration?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  orientation?: 'landscape' | 'portrait';
  credits?: string;
  externalSource?: string;
}

/* Empty register — do not invent episodes. */
export const EPISODES: Episode[] = [];

export const EPISODES_NOTE =
  'La liste détaillée des épisodes (titres, invités, dates, liens vidéo) ' +
  'est à constituer avec l’association. Aucun épisode n’est inventé ' +
  'ni présenté comme réel sur ce site.';
