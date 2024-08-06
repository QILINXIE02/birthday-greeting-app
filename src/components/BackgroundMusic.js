// src/components/BackgroundMusic.js
import React, { useState, useRef } from 'react';

const BackgroundMusic = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          // Handle play errors here
          console.error("Playback failed:", error);
        });
      }
      setPlaying(!playing);
    }
  };

  return (
    <div>
      <button onClick={togglePlay}>
        {playing ? 'Pause Music' : 'Play Music'}
      </button>
      <audio ref={audioRef} loop>
        {/* <source src="path_to_your_music_file.mp3" type="audio/mp3" /> */}
      </audio>
    </div>
  );
};

export default BackgroundMusic;
