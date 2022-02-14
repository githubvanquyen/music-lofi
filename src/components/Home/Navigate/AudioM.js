import React,{useContext, useRef, useEffect} from 'react'
import { AppContext } from '../../../Provider/AppContext'
import { SET_MUSICREF, SET_PLAYCURRENT } from '../../../Reducer/type';
const AudioM = () => {
    const musicRef = useRef();
    const {dispatch, play, setPlay, app:{playCurrent}} = useContext(AppContext);
    useEffect(() =>{
        dispatch({
            type:SET_MUSICREF,
            payload:{
              music: musicRef,
            },
          });
    },[])

    const handleChangeBtn = ()=>{
        if(play){
          dispatch({
            type: SET_PLAYCURRENT,
            payload: playCurrent + 1
          })
        }
    }
  return (
    <div>
    <audio
      className="music-main"
      src="/videos/Người Em Cố Đô (Orinn Remix) - Rum x Đaa - Nhạc Trẻ Remix Edm Tik Tok Gây Nghiện Hay Nhất 2021.mp3"
      ref={musicRef}
      onPause={handleChangeBtn}
    />
    </div>
  )
}

export default AudioM