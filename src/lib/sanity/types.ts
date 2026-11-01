/**
 * Shared types for Sanity content.
 * These mirror the Sanity schemas defined in the studio.
 */

export interface SanityImageWithCredit {
  _type: 'imageWithCredit';
  asset: {
    _ref: string;
    _type: 'reference';
    url?: string;
  };
  alt: string;
  credit?: string;
}

export interface SanityVideoEpisode {
  _type: 'videoEpisode';
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: { current: string };
  shortDescription?: string;
  description?: any; // rich text array
  sourceUrl: string;
  platform:
    | 'youtube'
    | 'vimeo'
    | 'tiktok'
    | 'facebook'
    | 'instagram'
    | 'dailymotion'
    | 'other';
  providerVideoId?: string;
  artistReferences?: Array<{ _ref: string; _type: 'reference' }>;
  episodeNumber?: number;
  seasonNumber?: number;
  publishedAt?: string;
  duration?: string;
  orientation?: 'landscape' | 'portrait';
  posterImage?: SanityImageWithCredit;
  credits?: string;
  featured?: boolean;
  sortOrder?: number;
  publicationStatus: 'draft' | 'published';
  seoTitle?: string;
  seoDescription?: string;
}

export interface SanityArtist {
  _type: 'artist';
  _id: string;
  name: string;
  slug: { current: string };
  biography?: any;
  portrait?: SanityImageWithCredit;
  discipline?: string;
  website?: string;
}

export interface SanitySitePage {
  _type: 'sitePage';
  _id: string;
  title: string;
  slug: { current: string };
  content?: any;
  seoTitle?: string;
  seoDescription?: string;
}

export interface SanityProject {
  _type: 'project';
  _id: string;
  title: string;
  slug: { current: string };
  description?: any;
  images?: SanityImageWithCredit[];
  date?: string;
  status: 'documented' | 'ongoing' | 'completed';
  source?: string;
}

export interface SanityArticle {
  _type: 'article';
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  body?: any;
  coverImage?: SanityImageWithCredit;
  publishedAt?: string;
  status: 'draft' | 'published';
}

export interface SanitySiteSettings {
  _type: 'siteSettings';
  _id: string;
  title: string;
  description: string;
  logo?: SanityImageWithCredit;
  socialLinks?: Array<{
    platform: 'linkedin' | 'instagram' | 'facebook';
    url: string;
  }>;
  officialContacts?: Array<{
    type: 'email' | 'phone' | 'address';
    value: string;
  }>;
  globalSeoTitle?: string;
  globalSeoDescription?: string;
}
