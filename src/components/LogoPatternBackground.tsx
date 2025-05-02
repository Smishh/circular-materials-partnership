
import React from 'react';

interface LogoPatternBackgroundProps {
  className?: string;
}

const LogoPatternBackground: React.FC<LogoPatternBackgroundProps> = ({ className = '' }) => {
  // Create a hexagonal grid pattern
  const rows = 12;
  const itemsPerRow = 12;
  const hexGrid = [];
  
  // Calculate spacing
  const horizontalGap = 180;  // horizontal gap between logos
  const verticalGap = 160;    // vertical gap between rows
  const offsetPerRow = horizontalGap / 2; // offset for even rows to create hexagon pattern
  
  // Generate hex grid
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < itemsPerRow; col++) {
      const isEvenRow = row % 2 === 0;
      const horizontalOffset = isEvenRow ? 0 : offsetPerRow;
      
      hexGrid.push({
        top: row * verticalGap,
        left: col * horizontalGap + horizontalOffset,
        key: `hex-${row}-${col}`
      });
    }
  }
  
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 ${className}`}>
      <div className="relative w-full h-full">
        {hexGrid.map((position) => (
          <img 
            key={position.key}
            src="/lovable-uploads/8a8c6a80-5bd8-48bf-aa22-01e80ef02631.png" 
            alt="" 
            className="absolute opacity-[0.08] w-8 md:w-12"
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoPatternBackground;
