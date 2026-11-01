import { sanityClient, isSanityConfigured } from './client';
import {
  QUERY_ALL_VIDEOS,
  QUERY_VIDEO_BY_SLUG,
  QUERY_FEATURED_VIDEO,
  QUERY_RELATED_VIDEOS,
  QUERY_ALL_ARTISTS,
  QUERY_SITE_SETTINGS,
  QUERY_ALL_PAGES,
  QUERY_ALL_PROJECTS,
} from './queries';
import type {
  SanityVideoEpisode,
  SanityArtist,
  SanitySitePage,
  SanityProject,
  SanityArticle,
  SanitySiteSettings,
} from './types';
import { VIDEOS } from '@/data/videos';
import type { Video } from '@/data/videos';

/**
 * Helper to fetch data from Sanity with a local fallback.
 * If Sanity is not configured (no env vars), the local static data is used.
 * This ensures the build works without Sanity environment variables.
 */

/**
 * Fetch all published videos from Sanity, or fall back to local data.
 */
export async function fetchVideos(): Promise<Video[]> {
  if (!isSanityConfigured || !sanityClient) {
    return VIDEOS;
  }
  try {
    const videos = await sanityClient.fetch<SanityVideoEpisode[]>(
      QUERY_ALL_VIDEOS
    );
    return videos.map((v) => mapSanityVideoToLocal(v));
  } catch (error) {
    console.error('[sanity] Failed to fetch videos, using local fallback:', error);
    return VIDEOS;
  }
}

/**
 * Fetch a single video by slug from Sanity, or fall back to local data.
 */
export async function fetchVideoBySlug(slug: string): Promise<Video | null> {
  if (!isSanityConfigured || !sanityClient) {
    return VIDEOS.find((v) => v.slug === slug) ?? null;
  }
  try {
    const video = await sanityClient.fetch<SanityVideoEpisode | null>(
      QUERY_VIDEO_BY_SLUG,
      { slug }
    );
    if (!video) return null;
    return mapSanityVideoToLocal(video);
  } catch (error) {
    console.error('[sanity] Failed to fetch video by slug, using local fallback:', error);
    return VIDEOS.find((v) => v.slug === slug) ?? null;
  }
}

/**
 * Fetch the featured video from Sanity, or fall back to local data.
 */
export async function fetchFeaturedVideo(): Promise<Video | null> {
  if (!isSanityConfigured || !sanityClient) {
    return VIDEOS.find((v) => v.featured) ?? null;
  }
  try {
    const video = await sanityClient.fetch<SanityVideoEpisode | null>(
      QUERY_FEATURED_VIDEO
    );
    if (!video) return null;
    return mapSanityVideoToLocal(video);
  } catch (error) {
    console.error('[sanity] Failed to fetch featured video, using local fallback:', error);
    return VIDEOS.find((v) => v.featured) ?? null;
  }
}

/**
 * Fetch related videos from Sanity, or fall back to local data.
 */
export async function fetchRelatedVideos(
  excludeId: string
): Promise<Video[]> {
  if (!isSanityConfigured || !sanityClient) {
    return VIDEOS.filter((v) => v.id !== excludeId).slice(0, 3);
  }
  try {
    const videos = await sanityClient.fetch<SanityVideoEpisode[]>(
      QUERY_RELATED_VIDEOS,
      { excludeId }
    );
    return videos.map((v) => mapSanityVideoToLocal(v));
  } catch (error) {
    console.error('[sanity] Failed to fetch related videos, using local fallback:', error);
    return VIDEOS.filter((v) => v.id !== excludeId).slice(0, 3);
  }
}

/**
 * Fetch all artists from Sanity.
 * Returns empty array if Sanity is not configured.
 */
export async function fetchArtists(): Promise<SanityArtist[]> {
  if (!isSanityConfigured || !sanityClient) {
    return [];
  }
  try {
    return await sanityClient.fetch<SanityArtist[]>(QUERY_ALL_ARTISTS);
  } catch (error) {
    console.error('[sanity] Failed to fetch artists:', error);
    return [];
  }
}

/**
 * Fetch site settings from Sanity.
 * Returns null if Sanity is not configured.
 */
export async function fetchSiteSettings(): Promise<SanitySiteSettings | null> {
  if (!isSanityConfigured || !sanityClient) {
    return null;
  }
  try {
    return await sanityClient.fetch<SanitySiteSettings | null>(QUERY_SITE_SETTINGS);
  } catch (error) {
    console.error('[sanity] Failed to fetch site settings:', error);
    return null;
  }
}

/**
 * Fetch all site pages from Sanity.
 * Returns empty array if Sanity is not configured.
 */
export async function fetchSitePages(): Promise<SanitySitePage[]> {
  if (!isSanityConfigured || !sanityClient) {
    return [];
  }
  try {
    return await sanityClient.fetch<SanitySitePage[]>(QUERY_ALL_PAGES);
  } catch (error) {
    console.error('[sanity] Failed to fetch pages:', error);
    return [];
  }
}

/**
 * Fetch all projects from Sanity.
 * Returns empty array if Sanity is not configured.
 */
export async function fetchProjects(): Promise<SanityProject[]> {
  if (!isSanityConfigured || !sanityClient) {
    return [];
  }
  try {
    return await sanityClient.fetch<SanityProject[]>(QUERY_ALL_PROJECTS);
  } catch (error) {
    console.error('[sanity] Failed to fetch projects:', error);
    return [];
  }
}

/**
 * Map a Sanity video episode to the local Video interface.
 * Unknown fields are omitted to preserve the "no invented data" principle.
 */
function mapSanityVideoToLocal(v: SanityVideoEpisode): Video {
  return {
    id: v._id,
    slug: v.slug.current,
    title: v.title,
    shortDescription: v.shortDescription,
    description: v.description ? String(v.description) : undefined,
    platform: v.platform,
    sourceUrl: v.sourceUrl,
    providerVideoId: v.providerVideoId,
    artistName: v.artistReferences?.[0]?._ref ? undefined : v.title, // placeholder until artist data is resolved
    artistRole: undefined,
    episodeNumber: v.episodeNumber,
    publishedAt: v.publishedAt,
    duration: v.duration,
    category: undefined,
    tags: undefined,
    featured: v.featured ?? false,
    orientation: v.orientation,
    credits: v.credits,
    externalSource: v.sourceUrl,
  };
}
