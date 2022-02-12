import React, { useState, useRef, useContext, useEffect} from "react";
import { AppContext } from "../../Provider/AppContext";
import { SET_MUSICREF } from "../../Reducer/type";

const Button = () => {
  const { dispatch } = useContext(AppContext);
  const [play, setPlay] = useState(true);
  const playRef = useRef();
  const musicRef = useRef();

  useEffect(()=>{
      dispatch({
          type: SET_MUSICREF,
          payload: musicRef,
      })
  },[])

  const handlePlay = () => {
    setPlay(!play);
    if (play) {
      musicRef.current.play();
      playRef.current.src = "/imgs/pause.4ac70926.svg";
    } else {
      musicRef.current.pause();
      playRef.current.src = "/imgs/play.18d46dd9.svg";
    }
  };
  return (
    <div className="music-nav">
      <audio
        className="music-main"
        src="https://mp3-s1-zmp3.zadn.vn/4e1dcf2c1568fc36a579/6560157113725050153?authen=exp=1644378552~acl=/4e1dcf2c1568fc36a579/*~hmac=e14c5f93134245eb6673664e260a7363&fs=MTY0NDIwNTmUsIC1MjE3MXx3ZWJWNnwwfDExMy4xODkdUngMTg1LjIzMQ"
        ref={musicRef}
      />
      <img className="btn-pre" src="/imgs/previous.3b347466.svg" alt="" />
      <img
        className="btn-play"
        src="/imgs/play.18d46dd9.svg"
        alt=""
        ref={playRef}
        onClick={handlePlay}
      />
      <img className="btn-next" src="/imgs/next.9551d6f2.svg" alt="" />
    </div>
  );
};

export default Button;
