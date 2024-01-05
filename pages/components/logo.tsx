// ./app/pages/components/logo.tsx
import React, { useState, MouseEvent } from 'react';
import Link from '../../node_modules/next/link'
import { useEffect } from 'react';

import 'styles/Logo.css'; 

interface Position {
  x: number;
  y: number;
}

export interface LogoProps {
  collapse:boolean;
}

export default function Logo(props:LogoProps){
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
      const magnificationFactor = 1.5; 
      const translateX = (position.x - position.x / magnificationFactor).toFixed(2);
      const translateY = (position.y - position.y / magnificationFactor).toFixed(2);

      return `translate(${translateX}px, ${translateY}px) scale(${magnificationFactor})`;
    }

    return 'none';
  };

  let logoText = <strong className="hoverable">LR</strong>;
  
  return (
    <Link href="../">
    <div
      className="fish-eye-text hoverable"
      style={{ transform: getTransformStyles(), color:'white',fontSize:'100px' }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {logoText}
      
      {/* <img src="/luke.svg" width="150"></img> */}
    </div>
    </Link>
  );
};

