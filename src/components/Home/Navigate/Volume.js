import React, { useRef, useContext, useState, useEffect } from "react";
import { AppContext } from "../../../Provider/AppContext";
const Volume = () => {
  const {app} = useContext(AppContext);
  const {music} = app;
  const [volumeMS, setVolumeMS] = useState(30);

  const rangeRef = useRef();
  const handleChangeVolume = (e) => {
    setVolumeMS(e.target.value)
  };
  useEffect(()=>{
    music.volume = volumeMS / 100;
    rangeRef.current.style = `
    background: linear-gradient(
      to right,
      rgb(243, 169, 82) 0%,
      rgb(243, 169, 82) ${volumeMS}%,
      #14141d ${volumeMS}%,
      #14141d 100%
      );
      `;
  },[volumeMS])
  return (
    <div className="volume-main">
      <input
        className="range"
        type="range"
        value={volumeMS}
        ref={rangeRef}
        step="0.1"
        onChange={handleChangeVolume}
        min="0"
        max="100"
      />
    </div>
  );
};

export default Volume;
