"use client"
import LandingPage from '../pages/landing'
import { useEffect } from 'react';

export default function Home() {
  const handleVisibilityChange = () => {
    if (document.hidden) {
      document.body.style.cursor = 'none'; 
    } else {
      document.body.style.cursor = 'auto'; 
    }
  };

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);


  return (<LandingPage />);
}
