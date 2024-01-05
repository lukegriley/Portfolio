"use client"
import LandingPage from '../pages/landing'
import { useEffect } from 'react';

export default function Home() {
  const  handleVisibilityChange = function() {
    document.body.style.cursor = "none";
  };


  return (<LandingPage />);
}
