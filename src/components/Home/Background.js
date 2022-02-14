import React, { useContext, useEffect, useReducer, useRef } from "react";
import "./Home.css";
import { AppContext } from "../../Provider/AppContext";
import { GET_BGREF, SET_AUTOBG } from "../../Reducer/type";

const Background = () => {
  const {  dispatch ,app } = useContext(AppContext);
  const {lightBackground} = app;
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
    const timeNow = new Date;
    const hour = timeNow.getHours();
    console.log(hour);
    if(hour > 7 && hour < 18){
      dispatch({
        type: SET_AUTOBG,
        payload: true
      })
      lightRef.current.style.opacity = "1";
      darkRef.current.style.opacity = "0";
    }else{
      dispatch({
      type: SET_AUTOBG,
      payload: false,
      })
      lightRef.current.style.opacity = "0";
      darkRef.current.style.opacity = "1";
    }
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
