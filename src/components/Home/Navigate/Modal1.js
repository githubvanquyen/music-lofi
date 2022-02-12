import React, { useContext, useRef, useState, useEffect } from "react";
import { AppContext } from "../../../Provider/AppContext";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import Volume from "./Volume";

const Modal1 = () => {
  const changeMusicRef = useRef();
  const { handleClick } = useContext(AppContext);
  const cityRain = useRef();
  const rainRef = useRef();
  const cityTraffic = useRef();
  const trafficRef = useRef();
  const firePlace = useRef();
  const fireRef = useRef();

  const [volumeNoise, setVolumeNoise] = useState({
    cityRain: 0,
    cityTraffic: 0,
    firePlace: 0,
  });
  const handleVolumeEffect = (e) => {
    setVolumeNoise({ ...volumeNoise, [e.target.name]: e.target.value });
  };
  const fixAutoPlay = (value, audioRef, inputRef) => {
    if (value === 0) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    audioRef.current.muted = false;
    audioRef.current.volume = value / 100;
    inputRef.current.style = `
      background: linear-gradient(
        to right,
        rgb(243, 169, 82) 0%,
        rgb(243, 169, 82) ${
          value < 30
            ? parseInt(value) + 7
            : value >= 60
            ? value > 80
              ? parseInt(value) - 7
              : parseInt(value) - 2
            : parseInt(value) + 2
        }%,
        #14141d ${
          value < 30
            ? parseInt(value) + 7
            : value >= 60
            ? value > 80
              ? parseInt(value) - 7
              : parseInt(value) - 2
            : parseInt(value) + 2
        }%,
        #14141d 100%
        );
        `;
  };
  useEffect(() => {
    fixAutoPlay(volumeNoise.cityRain, cityRain, rainRef);
  }, [volumeNoise.cityRain]);

  useEffect(() => {
    fixAutoPlay(volumeNoise.cityTraffic, cityTraffic, trafficRef);
  }, [volumeNoise.cityTraffic]);

  useEffect(() => {
    fixAutoPlay(volumeNoise.firePlace, firePlace, fireRef);
  }, [volumeNoise.firePlace]);
  return (
    <>
      <img
        src="/imgs/settings (1).png"
        alt=""
        onClick={() => {
          handleClick(changeMusicRef);
        }}
      />
      <div className="mode-music common" ref={changeMusicRef}>
        <div
          style={{
            padding: "8px 0px",
            fontSize: "26px",
            color: "white",
            fontWeight: "bold",
            marginLeft: "12px",
          }}
          className="mode-heading"
        >
          Mood
        </div>
        <div className="mode-choose">
          <div className="mode-items">
            <div>
              <NightlightIcon sx={{ fontSize: 32 }} />
            </div>
            <div>Sleepy</div>
          </div>
          <div className="mode-items">
            <div>
              <AudiotrackIcon sx={{ fontSize: 32 }} />
            </div>
            <div>Jazzy</div>
          </div>
          <div className="mode-items">
            <div>
              <LocalCafeIcon sx={{ fontSize: 32 }} />
            </div>
            <div>Chill</div>
          </div>
        </div>
        <div></div>

        <Volume />

        <div className="bg-noise">
          <div className="noise-head">Background Noise</div>
          <div className="city-rain">
            <div className="rain-head">City Rain</div>
            <div className="rain-audio">
              <audio
                className="audio-noise"
                src="/effect/rain_city.mp3"
                loop
                autoPlay
                muted
                preload="auto"
                ref={cityRain}
              />
              <input
                className="volume-noise volume-rain"
                type="range"
                min="0"
                max="100"
                name="cityRain"
                value={volumeNoise.cityRain}
                ref={rainRef}
                onChange={handleVolumeEffect}
              />
            </div>
          </div>
          <div className="city-rain">
            <div className="rain-head">City Traffic</div>
            <div className="rain-audio">
              <audio
                className="audio-noise"
                src="/effect/city_traffic.mp3"
                autoPlay
                muted
                ref={cityTraffic}
              />
              <input
                className="volume-noise volume-traffic"
                type="range"
                name="cityTraffic"
                min="0"
                value={volumeNoise.cityTraffic}
                ref={trafficRef}
                max="100"
                onChange={handleVolumeEffect}
              />
            </div>
          </div>
          <div className="city-rain">
            <div className="rain-head">Fireplace</div>
            <div className="rain-audio">
              <audio
                className="audio-noise"
                src="/effect/fireplace.mp3"
                autoPlay
                muted
                ref={firePlace}
              />
              <input
                className="volume-noise volume-fire"
                type="range"
                name="firePlace"
                min="0"
                value={volumeNoise.firePlace}
                max="100"
                ref={fireRef}
                onChange={handleVolumeEffect}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal1;
