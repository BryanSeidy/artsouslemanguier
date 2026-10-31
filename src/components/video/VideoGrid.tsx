import VideoStoryCard from './VideoStoryCard';
import type { Video } from '@/data/videos';

interface VideoGridProps {
  videos: Video[];
  title?: string;
  eyebrow?: string;
}

/**
 * VideoGrid — asymmetrical editorial grid.
 * Not all cards have the same visual weight. First item is featured larger.
 */
export default function VideoGrid({ videos, title, eyebrow }: VideoGridProps) {
  if (videos.length === 0) return null;

  return (
    <section className="section">
      <div className="container">
        {eyebrow || title && (
          <div className="section-head mb-12">
            {eyebrow && (
              <div className="section-eyebrow inline-block">{eyebrow}</div>
            )}
            {title && <h2 className="mb-4">{title}</h2>}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {videos.map((video, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={video.id}
                className={`md:col-span-${isFirst ? 6 : 3} ${isFirst ? 'md:row-span-2' : ''}`}
              >
                <VideoStoryCard video={video} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
