import React, { useState } from "react";
import useSound from "use-sound";
import { faMusic, faSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles.css";
import music from "/assets/music/Onion_capers.mp3";

export function MusicToggle() {
  const [isPlaying, setisPlaying] = useState(false);
  const [play, { stop }] = useSound(music);
  const toggleMusic = (event) => {
    event.preventDefault();
    setisPlaying(!isPlaying);
    if (!isPlaying) {
      play();
    } else {
      stop();
    }
  };

  return (
    <div className="music">
      <FontAwesomeIcon onClick={toggleMusic} icon={isPlaying ? faMusic : faSlash} />
    </div>
  );
}
