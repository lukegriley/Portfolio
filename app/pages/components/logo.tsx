// ./app/pages/components/logo.tsx
import React, { useState, MouseEvent } from 'react';

import '../../styles/Logo.css'; // Import your CSS file

interface Position {
  x: number;
  y: number;
}

const Logo: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    updatePosition(e);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    updatePosition(e);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const updatePosition = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  const getTransformStyles = (): string => {
    if (isHovered) {
      const magnificationFactor = 1.5; // Adjust the magnification factor as needed
      const translateX = (position.x - position.x / magnificationFactor).toFixed(2);
      const translateY = (position.y - position.y / magnificationFactor).toFixed(2);

      return `translate(${translateX}px, ${translateY}px) scale(${magnificationFactor})`;
    }

    return 'none';
  };


  return (
    <div
      className="fish-eye-text"
      style={{ transform: getTransformStyles() }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      Luke Riley
    </div>
  );
};

export default Logo;
