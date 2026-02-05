interface SundaraLogoProps {
  size?: number;
  className?: string;
}

export function SundaraLogo({ size = 80, className = '' }: SundaraLogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle - represents completeness */}
      <circle 
        cx="100" 
        cy="100" 
        r="95" 
        stroke="var(--gold)" 
        strokeWidth="3" 
        fill="none"
      />
      
      {/* Inner mandala pattern - lotus petals representing knowledge and growth */}
      <g transform="translate(100, 100)">
        {/* 8 petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <path
            key={i}
            d="M 0 -60 Q 15 -45 0 -30 Q -15 -45 0 -60"
            fill="var(--gold)"
            opacity="0.3"
            transform={`rotate(${angle})`}
          />
        ))}
        
        {/* Central diya/lamp - symbol of knowledge dispelling darkness */}
        <ellipse 
          cx="0" 
          cy="0" 
          rx="25" 
          ry="15" 
          fill="var(--gold)"
        />
        
        {/* Flame */}
        <path
          d="M 0 -15 Q -8 -25 0 -35 Q 8 -25 0 -15"
          fill="var(--gold)"
          opacity="0.9"
        />
        
        {/* Stylized "S" integrated into the lamp base */}
        <text
          x="0"
          y="8"
          textAnchor="middle"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '28px',
            fontWeight: 700,
            fill: 'var(--navy)'
          }}
        >
          S
        </text>
      </g>
      
      {/* Small decorative dots at cardinal points */}
      <circle cx="100" cy="5" r="3" fill="var(--gold)" opacity="0.6" />
      <circle cx="195" cy="100" r="3" fill="var(--gold)" opacity="0.6" />
      <circle cx="100" cy="195" r="3" fill="var(--gold)" opacity="0.6" />
      <circle cx="5" cy="100" r="3" fill="var(--gold)" opacity="0.6" />
    </svg>
  );
}
