interface PartnerLogoProps {
  name: string;
  url?: string;
  logoUrl?: string;
}

export function PartnerLogo({ name, url, logoUrl }: PartnerLogoProps) {
  const content = (
    <div className="flex items-center justify-center p-8 bg-white rounded-lg border-2 border-gray-200 hover:border-gold hover:shadow-md transition-all h-full min-h-[140px]">
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={`${name} logo`}
          className="h-24 max-w-[280px] object-contain"
        />
      ) : (
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.5rem',
            color: 'var(--navy)',
            fontWeight: 600
          }}
        >
          {name}
        </span>
      )}
    </div>
  );

  if (url) {
    return (
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {content}
      </a>
    );
  }

  return content;
}
