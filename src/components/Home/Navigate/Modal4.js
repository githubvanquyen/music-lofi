import React, { useState, useContext, useRef } from "react";
import { AppContext } from "../../../Provider/AppContext";
const Modal4 = () => {
  const { app, handleClick, setPlay } = useContext(AppContext);
  const { music } = app;
  const timerRef = useRef();
  const [time, setTime] = useState("");
  const date = time.split(":");
  const hour = parseInt(date[0]);
  const minute = parseInt(date[1]);
  const dateNow = new Date();
  const second =
    (hour - dateNow.getHours()) * 3600 +
    (minute - dateNow.getMinutes()) * 60 -
    dateNow.getSeconds();
  if (time !== "") {
    setTimeout(() => {
      music.pause();
      setPlay(false);
    }, second * 1000);
  }
  return (
    <>
      <img
        src="/imgs/hourglass-outline.svg"
        alt=""
        onClick={() => handleClick(timerRef)}
      />
      <div className="timer" ref={timerRef}>
        <div>
          <p style={{ fontWeight: "700" }}>End task at:</p>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button onClick={() => setTime("")} className="btn-unset">
          Unset
        </button>
      </div>
    </>
  );
};

export default Modal4;
