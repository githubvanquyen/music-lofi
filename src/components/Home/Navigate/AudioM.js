import React,{useContext, useRef, useEffect} from 'react'
import { AppContext } from '../../../Provider/AppContext'
import { SET_MUSICREF } from '../../../Reducer/type';
const AudioM = () => {
    const musicRef = useRef();
    const {dispatch, setPlay} = useContext(AppContext);
    useEffect(() =>{
        dispatch({
            type:SET_MUSICREF,
            payload:{
              music: musicRef,
            },
          });
    },[])

    const handleChangeBtn = ()=>{
        setPlay(false);
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