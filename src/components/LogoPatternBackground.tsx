
import React from 'react';

interface LogoPatternBackgroundProps {
  className?: string;
}

const LogoPatternBackground: React.FC<LogoPatternBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 ${className}`}>
      <div className="relative w-full h-full">
        {/* First row */}
        {[...Array(12)].map((_, i) => (
          <img 
            key={`row1-${i}`}
            src="/lovable-uploads/8a8c6a80-5bd8-48bf-aa22-01e80ef02631.png" 
            alt="" 
            className="absolute opacity-[0.08] w-8 md:w-12"
            style={{
              top: `${Math.floor(i / 4) * 160}px`,
              left: `${(i % 4) * 240}px`,
            }}
          />
        ))}
        
        {/* Second row (offset) */}
        {[...Array(12)].map((_, i) => (
          <img 
            key={`row2-${i}`}
            src="/lovable-uploads/8a8c6a80-5bd8-48bf-aa22-01e80ef02631.png" 
            alt="" 
            className="absolute opacity-[0.08] w-8 md:w-12"
            style={{
              top: `${Math.floor(i / 4) * 160 + 80}px`,
              left: `${(i % 4) * 240 + 120}px`,
            }}
          />
        ))}
        
        {/* Third row */}
        {[...Array(12)].map((_, i) => (
          <img 
            key={`row3-${i}`}
            src="/lovable-uploads/8a8c6a80-5bd8-48bf-aa22-01e80ef02631.png" 
            alt="" 
            className="absolute opacity-[0.08] w-8 md:w-12"
            style={{
              top: `${Math.floor(i / 4) * 160 + 160}px`,
              left: `${(i % 4) * 240}px`,
            }}
          />
        ))}

        {/* Fourth row (offset) */}
        {[...Array(12)].map((_, i) => (
          <img 
            key={`row4-${i}`}
            src="/lovable-uploads/8a8c6a80-5bd8-48bf-aa22-01e80ef02631.png" 
            alt="" 
            className="absolute opacity-[0.08] w-8 md:w-12"
            style={{
              top: `${Math.floor(i / 4) * 160 + 240}px`,
              left: `${(i % 4) * 240 + 120}px`,
            }}
          />
        ))}

        {/* Fifth row */}
        {[...Array(12)].map((_, i) => (
          <img 
            key={`row5-${i}`}
            src="/lovable-uploads/8a8c6a80-5bd8-48bf-aa22-01e80ef02631.png" 
            alt="" 
            className="absolute opacity-[0.08] w-8 md:w-12"
            style={{
              top: `${Math.floor(i / 4) * 160 + 320}px`,
              left: `${(i % 4) * 240}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoPatternBackground;
