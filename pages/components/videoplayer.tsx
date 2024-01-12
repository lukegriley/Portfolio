import React, { useState, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
}

export default function VideoPlayer (props:VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {

    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div>
      <video ref={videoRef} loop muted style={{ width: '50%', height: '50%' }}>
    <source src={props.src} type="video/mp4"/>
    Your browser does not support the video tag.
      </video>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};


