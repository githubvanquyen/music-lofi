import React, { useContext, useEffect, useReducer, useRef } from "react";
import "./Home.css";
import { AppContext } from "../../Provider/AppContext";
import { GET_BGREF } from "../../Reducer/type";

const Background = () => {
  const {  dispatch } = useContext(AppContext);

  const lightRef = useRef();
  const darkRef = useRef();

  useEffect(() => {
    dispatch({
        type: GET_BGREF,
        payload: {
            lightRef: lightRef,
            darkRef: darkRef,
        },
      });
  }, []);
  return (
    <div className="background-video">
      <video
        src="/BDR Day-Christmas ver 112521 (1).mp4"
        className="light-background"
        ref={lightRef}
        style={{ width: "100%", height: "100%" }}
        loop
        playsInline
        muted
        autoPlay
        preload="auto"
      />
      <video
        src="/BDR STARRY NIGHT - Christmas ver.mp4"
        className="dark-background"
        ref={darkRef}
        style={{ width: "100%", height: "100%" }}
        loop
        playsInline
        muted
        autoPlay
        preload="auto"
      />
    </div>
  );
};

export default Background;
