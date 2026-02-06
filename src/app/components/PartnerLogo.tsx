interface PartnerLogoProps {
  name: string;
  url?: string;
  logoUrl?: string;
}

export function PartnerLogo({ name, url, logoUrl }: PartnerLogoProps) {
  const content = (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-gold hover:shadow-md transition-all h-full min-h-[160px]">
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={`${name} logo`}
          className="max-h-20 max-w-full object-contain mb-3"
        />
      ) : (
        <div
          className="mb-3 w-16 h-16 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: 'var(--navy)',
            border: '2px solid var(--gold)'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.75rem',
              color: 'var(--gold)',
              fontWeight: 600
            }}
          >
            {name.charAt(0)}
          </span>
        </div>
      )}

      {/* Partner name */}
      <h3
        className="text-center"
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.125rem',
          color: 'var(--navy)',
          fontWeight: 600
        }}
      >
        {name}
      </h3>
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
