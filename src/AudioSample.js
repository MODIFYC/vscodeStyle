import React, { useRef } from "react";
import music from "./music.mp3";

function Player() {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <>
      <figure>
        <figcaption>Bop Walker(FreedomTrailStudio)</figcaption>
        <audio src={music} ref={audioRef}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
      <button onClick={handlePlay}>재생</button>
      <button onClick={handlePause}>중지</button>
    </>
  );
}

export default Player;