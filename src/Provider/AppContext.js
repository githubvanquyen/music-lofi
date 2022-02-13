import React, { createContext, useReducer, useState } from "react";
import appReducer from "../Reducer/appReducer";
import { SET_BGAPP, SET_MODALFUNC, SET_MUSICREF } from "../Reducer/type";
import axios from "axios";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [app, dispatch] = useReducer(appReducer, {
    lightBackground: true,
    lightRef: {},
    darkRef: {},
    option: {},
    btnSearch: false,
    music:{},
    btnPlay:{},
    playlist:[],
    playCurrent:0,
  });
  const [play, setPlay] = useState(false);

  const { lightBackground, lightRef, darkRef, option, btnSearch, music} = app;
  const changeBackground = () => {
    dispatch({
      type: SET_BGAPP,
    });
    if (!lightBackground) {
      lightRef.style.opacity = "1";
      darkRef.style.opacity = "0";
    } else {
      lightRef.style.opacity = "0";
      darkRef.style.opacity = "1";
    }
  };
  const fullScreenApp = () => {
    const isFullScreen = document.fullscreenElement;
    if (isFullScreen === null) {
      document.body.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  const changeBtnClick = (item) => {
    if (item !== option) {
      if (Object.keys(option).length === 0) {
        item.style.display = "block";
      } else {
        option.style.display = "none";
        item.style.display = "block";
      }
    } else {
      if (item.style.display === "block") {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
    }
  };
  const getListMusic = async (nameMusic) => {
    try {
      const response = await axios.post(
        "http://music-app-lofi.herokuapp.com/song/search-song",
        nameMusic
      );
      if (response.data.success) {
        return response.data;
      }
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else {
        return { success: false, message: error.message };
      }
    }
  };

  const getMusic = async (id) =>{
    try {
      const response = await axios.post('http://music-app-lofi.herokuapp.com/song/detail-song',{id: id})
      if(response.data.success){
        return response.data;
      }
    } catch (error) {
      if(error.response.data){
        return error.response.data
      }else{
        return { success: false, message: error.message };
      }
    }
  }

  const handleClick = (props) => {
    dispatch({
      type: SET_MODALFUNC,
      payload: {
        modal: props,
      },
    });
    changeBtnClick(props.current);
  };
  const handlePlay = () => {
    setPlay(!play);
    if (play) {
      music.pause();
      //playRef.current.src = "/imgs/play.18d46dd9.svg";
    } else {
      music.play();
      //playRef.current.src = "/imgs/pause.4ac70926.svg";
    } 
  };

  const appContextData = {
    fullScreenApp,
    changeBackground,
    changeBtnClick,
    getListMusic,
    getMusic,
    dispatch,
    app,
    handleClick,
    play,
    setPlay,
    handlePlay
  };
  return (
    <AppContext.Provider value={appContextData}>{children}</AppContext.Provider>
  );
};
export default AppContextProvider ;
