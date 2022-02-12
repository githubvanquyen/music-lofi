import React,{useRef, useState, useContext, useEffect} from "react";
import {AppContext} from "../../../Provider/AppContext.js";
import {SET_BTN, SET_PLAYCURRENT} from "../../../Reducer/type";
const ButtonMS = () => {
  const playRef = useRef();
  const {play, setPlay , handlePlay, dispatch, getMusic,app} = useContext(AppContext);
  const {music, playlist, playCurrent} = app;
  useEffect(()=>{
    dispatch({
      type: SET_BTN,
      payload: {
        btn: playRef,
      }
    });
  },[])
  const handlePlayPre = async () => {
      if(playCurrent > 0){
        dispatch({
          type: SET_PLAYCURRENT,
          payload: playCurrent - 1,
        })
      }
      else{
          dispatch({
            type: SET_PLAYCURRENT,
            payload: playlist.length - 1,
          })
      }
    console.log(playCurrent);
    try {
      const dataMusic = await getMusic(playlist[playCurrent - 1].id);
      if (dataMusic.success) {
        music.src = dataMusic.data[128];
        music.play();
        setPlay(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handlePlayNext = async () => {
    console.log(playCurrent);
      if(playCurrent > playlist.length - 1){
        dispatch({
          type: SET_PLAYCURRENT,
          payload: 0,
        })
      }
      else{
        dispatch({
          type: SET_PLAYCURRENT,
          payload: playCurrent + 1,
        })
      }
    console.log(playCurrent);

    try {
      const dataMusic = await getMusic(playlist[playCurrent+1].id);
      if (dataMusic.success) {
        music.src = dataMusic.data[128];
        music.play();
        setPlay(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const pre = "pre";
  const next = "next";
  return (
    <div className="music-nav">
      <img className="btn-pre" src="/imgs/previous.3b347466.svg" alt="" onClick={handlePlayPre}/>
      <img
        className="btn-play"
        src={ play ? `/imgs/pause.4ac70926.svg`: `/imgs/play.18d46dd9.svg`}
        alt=""
        ref={playRef}
        onClick={handlePlay}
      />
      <img className="btn-next" src="/imgs/next.9551d6f2.svg" alt="" onClick={handlePlayNext}/>
    </div>
  );
};

export default ButtonMS;
