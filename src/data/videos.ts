/* Art Sous Le Manguier — Video collection source.
   Each entry represents a real video episode or archive item.
   Unknown fields are omitted. No invented dates, durations, or platforms.
   See docs/ADDING_VIDEOS.md for how to add a new video. */

export interface Video {
  id: string;
  slug: string;
  title: string;
  shortDescription?: string;
  description?: string;
  platform: 'youtube' | 'vimeo' | 'tiktok' | 'other';
  sourceUrl: string;
  providerVideoId?: string;
  thumbnail?: string;
  artistName?: string;
  artistRole?: string;
  episodeNumber?: number;
  publishedAt?: string;
  duration?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  orientation?: 'landscape' | 'portrait';
  credits?: string;
  externalSource?: string;
}

/* Central video register — empty by default.
   Add entries here as videos are confirmed with the association.
   Each video must have a verified sourceUrl and platform. */
export const VIDEOS: Video[] = [];

export const VIDEOS_EMPTY_NOTE =
  "Aucune vidéo n'est publiée sur ce site tant que son URL source " +
  'et sa plateforme n’ont pas été confirmées par l’association. ' +
  'Aucune vidéo n’est inventée ni présentée comme réelle.';
