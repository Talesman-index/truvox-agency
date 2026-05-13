import React from 'react';

interface TruvoxLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const TruvoxLogo: React.FC<TruvoxLogoProps> = ({ className, width = 180, height = 40 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 180 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* T */}
      <rect x="0" y="8" width="22" height="5" fill="currentColor" />
      <rect x="8.5" y="8" width="5" height="24" fill="currentColor" />
      
      {/* R */}
      <path d="M30 8H42C46.4183 8 50 11.5817 50 16C50 20.4183 46.4183 24 42 24H35V32H30V8ZM35 19H42C43.6569 19 45 17.6569 45 16C45 14.3431 43.6569 13 42 13H35V19Z" fill="currentColor" />
      <path d="M43 24L51 32H45L37 24H43Z" fill="currentColor" />
      
      {/* U */}
      <path d="M60 8H65V24C65 27.866 68.134 31 72 31C75.866 31 79 27.866 79 24V8H84V24C84 30.6274 78.6274 36 72 36C65.3726 36 60 30.6274 60 24V8Z" fill="currentColor" />
      
      {/* V */}
      <path d="M92 8H97.5L103 24L108.5 8H114L106 32H100L92 8Z" fill="currentColor" />
      
      {/* O - Strategic Circle */}
      <circle cx="128" cy="20" r="12" stroke="currentColor" strokeWidth="4" />
      <circle cx="128" cy="20" r="3" fill="currentColor" />
      <rect x="127" y="11" width="2" height="18" fill="currentColor" opacity="0.5" />
      <rect x="119" y="19" width="18" height="2" fill="currentColor" opacity="0.5" />
      
      {/* X - Disruptive Element */}
      <path d="M152 10L160 20L152 30H158L163 24L168 30H174L166 20L174 10H168L163 16L158 10H152Z" fill="currentColor" />
      
      {/* Minimal Accent Line */}
      <rect x="150" y="34" width="26" height="2" fill="currentColor" />
    </svg>
  );
};
