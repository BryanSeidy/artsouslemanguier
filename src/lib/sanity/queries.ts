/**
 * GROQ queries for Sanity content.
 * All queries are typed and limited to public data.
 */

/**
 * Fetch all published video episodes, ordered by sortOrder then publishedAt.
 */
export const QUERY_ALL_VIDEOS = `*[
  _type == "videoEpisode" &&
  publicationStatus == "published"
] | order(sortOrder asc, publishedAt desc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  shortDescription,
  description,
  sourceUrl,
  platform,
  providerVideoId,
  "artistRefs": artistReferences[]->{
    _id,
    name,
    slug,
    discipline,
  },
  episodeNumber,
  seasonNumber,
  publishedAt,
  duration,
  orientation,
  "poster": posterImage,
  credits,
  featured,
  sortOrder,
  publicationStatus,
  seoTitle,
  seoDescription,
}`;

/**
 * Fetch a single video episode by slug.
 */
export const QUERY_VIDEO_BY_SLUG = `*[
  _type == "videoEpisode" &&
  slug.current == $slug &&
  publicationStatus == "published"
][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  shortDescription,
  description,
  sourceUrl,
  platform,
  providerVideoId,
  "artistRefs": artistReferences[]->{
    _id,
    name,
    slug,
    discipline,
  },
  episodeNumber,
  seasonNumber,
  publishedAt,
  duration,
  orientation,
  "poster": posterImage,
  credits,
  featured,
  sortOrder,
  publicationStatus,
  seoTitle,
  seoDescription,
}`;

/**
 * Fetch the featured video episode.
 */
export const QUERY_FEATURED_VIDEO = `*[
  _type == "videoEpisode" &&
  featured == true &&
  publicationStatus == "published"
] | order(sortOrder asc) [0] {
  _id,
  title,
  slug,
  shortDescription,
  sourceUrl,
  platform,
  providerVideoId,
  "artistRefs": artistReferences[]->{
    _id,
    name,
    slug,
    discipline,
  },
  publishedAt,
  duration,
  orientation,
  "poster": posterImage,
  credits,
  seoTitle,
  seoDescription,
}`;

/**
 * Fetch related videos by category or tags, excluding the current video.
 */
export const QUERY_RELATED_VIDEOS = `*[
  _type == "videoEpisode" &&
  _id != $excludeId &&
  publicationStatus == "published"
] | order(sortOrder asc) [0..3] {
  _id,
  title,
  slug,
  shortDescription,
  sourceUrl,
  platform,
  providerVideoId,
  publishedAt,
  duration,
  orientation,
  "poster": posterImage,
  credits,
}`;

/**
 * Fetch all artists.
 */
export const QUERY_ALL_ARTISTS = `*[
  _type == "artist"
] | order(name asc) {
  _id,
  name,
  slug,
  biography,
  "portrait": portrait,
  discipline,
  website,
}`;

/**
 * Fetch site settings (singleton document).
 */
export const QUERY_SITE_SETTINGS = `*[
  _type == "siteSettings"
][0] {
  _id,
  title,
  description,
  "logo": logo,
  socialLinks,
  officialContacts,
  globalSeoTitle,
  globalSeoDescription,
}`;

/**
 * Fetch all site pages.
 */
export const QUERY_ALL_PAGES = `*[
  _type == "sitePage"
] | order(title asc) {
  _id,
  title,
  slug,
  content,
  seoTitle,
  seoDescription,
}`;

/**
 * Fetch all projects.
 */
export const QUERY_ALL_PROJECTS = `*[
  _type == "project"
] | order(date desc) {
  _id,
  title,
  slug,
  description,
  images,
  date,
  status,
  source,
}`;