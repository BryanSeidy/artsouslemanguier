export {
  sanityClient,
  sanityImageUrl,
  isSanityConfigured,
  sanityProjectId,
  sanityDataset,
} from './client';
export type {
  SanityVideoEpisode,
  SanityArtist,
  SanitySitePage,
  SanityProject,
  SanityArticle,
  SanitySiteSettings,
  SanityImageWithCredit,
} from './types';
export {
  QUERY_ALL_VIDEOS,
  QUERY_VIDEO_BY_SLUG,
  QUERY_FEATURED_VIDEO,
  QUERY_RELATED_VIDEOS,
  QUERY_ALL_ARTISTS,
  QUERY_SITE_SETTINGS,
  QUERY_ALL_PAGES,
  QUERY_ALL_PROJECTS,
} from './queries';
