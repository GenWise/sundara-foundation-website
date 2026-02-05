import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin } from 'lucide-react';

interface PersonCardProps {
  name: string;
  role: string;
  description?: string;
  imageUrl: string;
  linkedinUrl?: string;
}

export function PersonCard({ name, role, description, imageUrl, linkedinUrl }: PersonCardProps) {
  return (
    <div className="text-center">
      {/* Photo */}
      <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4" style={{ borderColor: 'var(--gold)' }}>
        <ImageWithFallback 
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Name with LinkedIn */}
      <div className="flex items-center justify-center gap-2 mb-1">
        <h3 
          style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '1.25rem',
            color: 'var(--navy)',
            fontWeight: 600
          }}
        >
          {name}
        </h3>
        {linkedinUrl && (
          <a 
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label={`${name}'s LinkedIn profile`}
          >
            <Linkedin className="w-5 h-5" style={{ color: '#0077b5' }} />
          </a>
        )}
      </div>
      
      {/* Role */}
      <p className="text-gray-600 mb-2" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
        {role}
      </p>
      
      {/* Description */}
      {description && (
        <p className="text-gray-700 text-sm leading-relaxed max-w-xs mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
