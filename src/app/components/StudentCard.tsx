import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  quote: string;
  media: StudentMedia[];
}

export function StudentCard({ name, age, location, school, year, quote, media }: StudentCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
          <div className="relative w-full h-full bg-black">
            <iframe
              src={currentMedia.url}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`Video of ${name}`}
            />
          </div>
        )}

        {/* Navigation arrows - only show if multiple media items */}
        {media.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {media.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
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
        <p className="text-gray-500 mb-4" style={{ fontSize: '0.875rem' }}>
          Age {age} • {location} • {school} • {year}
        </p>
        <p className="text-gray-700 italic leading-relaxed" style={{ fontSize: '1rem' }}>
          "{quote}"
        </p>
      </div>
    </div>
  );
}
