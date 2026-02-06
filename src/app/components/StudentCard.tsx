import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, Play, Image as ImageIcon } from 'lucide-react';

function VideoWithThumbnail({ videoUrl, thumbnail, name }: { videoUrl: string; thumbnail?: string; name: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying || !thumbnail) {
    return (
      <div className="relative w-full h-full bg-black">
        <iframe
          src={videoUrl}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={`Video of ${name}`}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
      <ImageWithFallback
        src={thumbnail}
        alt={`${name} video thumbnail`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
          <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}

interface StudentMedia {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
}

interface StudentCardProps {
  name: string;
  age: number;
  location: string;
  school: string;
  year: string;
  course: string;
  quote: string;
  media: StudentMedia[];
}

export function StudentCard({ name, age, location, school, year, course, quote, media }: StudentCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = quote.length > 150;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const currentMedia = media[currentIndex];

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Media Carousel */}
      <div className="aspect-[4/3] overflow-hidden relative group">
        {currentMedia.type === 'image' ? (
          <ImageWithFallback
            src={currentMedia.url}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <VideoWithThumbnail
            videoUrl={currentMedia.url}
            thumbnail={currentMedia.thumbnail}
            name={name}
          />
        )}

        {/* Navigation arrows - always visible if multiple items */}
        {media.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Media type indicator with icons */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/50 px-3 py-1.5 rounded-full">
              {media.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`p-1 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white text-black'
                      : 'bg-transparent text-white/70 hover:text-white'
                  }`}
                  aria-label={`Go to ${item.type} ${index + 1}`}
                >
                  {item.type === 'video' ? (
                    <Play className="w-3.5 h-3.5" fill={index === currentIndex ? 'currentColor' : 'none'} />
                  ) : (
                    <ImageIcon className="w-3.5 h-3.5" strokeWidth={index === currentIndex ? 2.5 : 2} />
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 
          style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '1.5rem',
            color: 'var(--navy)',
            fontWeight: 600,
            marginBottom: '0.25rem'
          }}
        >
          {name}
        </h3>
        <p className="text-gray-500 mb-1" style={{ fontSize: '0.875rem' }}>
          Age {age} • {location} • {school} • {year}
        </p>
        <p className="text-gray-500 mb-4" style={{ fontSize: '0.875rem' }}>
          Course: {course}
        </p>
        <div className="text-gray-700 italic leading-relaxed" style={{ fontSize: '1rem' }}>
          <p>
            "{shouldTruncate && !isExpanded ? `${quote.slice(0, 150)}...` : quote}"
          </p>
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm not-italic mt-2 hover:underline"
              style={{ color: 'var(--navy)', fontWeight: 500 }}
            >
              {isExpanded ? 'See less' : 'See more'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
