import { createClient } from '@sanity/client';
import imageUrlBuilder, { SanityImageSource } from '@sanity/image-url';

/**
 * Sanity client configuration.
 *
 * The public API can be queried without a write token.
 * In the free plan, datasets are public — read access is open.
 *
 * Required environment variables:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID — Sanity project ID (e.g. p1picvka)
 *   NEXT_PUBLIC_SANITY_DATASET — Sanity dataset name (e.g. production)
 *
 * If these variables are missing, the client falls back to local data
 * defined in src/data/videos.ts and the build continues to work.
 */
export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const sanityApiVersion = '2024-01-01';

export const isSanityConfigured =
  Boolean(sanityProjectId) && Boolean(sanityDataset);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: sanityProjectId as string,
      dataset: sanityDataset as string,
      apiVersion: sanityApiVersion,
      useCdn: false, // always fetch fresh content for editorial accuracy
      perspective: 'published',
    })
  : null;

export const imageBuilder = isSanityConfigured && sanityClient
  ? imageUrlBuilder(sanityClient)
  : null;

/**
 * Build an image URL from a Sanity image asset reference.
 * Returns undefined if Sanity is not configured or the source is missing.
 */
export function sanityImageUrl(
  source: SanityImageSource | undefined,
  options?: { width?: number; height?: number; quality?: number }
): string | undefined {
  if (!imageBuilder || !source) return undefined;
  let builder = imageBuilder.image(source);
  if (options?.width) builder = builder.width(options.width);
  if (options?.height) builder = builder.height(options.height);
  return builder.quality(options?.quality ?? 80).auto('format').url();
}
