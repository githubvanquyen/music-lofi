import React, { useState, useContext, useRef } from "react";
import '../Home.css'
import { AppContext } from "../../../Provider/AppContext";
import {
  SET_MODALFUNC,
  SET_MUSICREF,
  SET_OPENSEARCH,
  SET_PLAYCURRENT,
  SET_PLAYLIST,
} from "../../../Reducer/type";

const Search = () => {
  const { getListMusic, getMusic, app, handleClick,setPlay, dispatch} = useContext(AppContext);
  const musicRef = app.music
  const [nameMusic, setNameMusic] = useState({
    name: "",
  });
  /* const [playlist, setPlaylist] = useState([]);
  const [playCurrent, setPlayCurrent] = useState(0); */
  const searchRef = useRef();
  const searchMusic = useRef();
  const dropboxSearch = useRef();

  /* const handleSetNameMusic = (e) => {
    console.log(nameMusic);
    setNameMusic({ ...nameMusic, name: e.target.value });
  }; */
  //handleSearchNameMusic

  const handleSearchNameMusic = async (e) => {
    dropboxSearch.current.classList.add("append");
    setNameMusic({ ...nameMusic, name: e.target.value });
    if (nameMusic.name.length < 2) {
      //setPlaylist([]);
      dispatch({
        type: SET_PLAYLIST,
        payload: [],
      })
      dropboxSearch.current.classList.remove("append");
    } else {
      try {
        const music = await getListMusic(nameMusic);
        //setPlaylist([...music.data]);
        dispatch({
          type:SET_PLAYLIST,
          payload: [...music.data],
        })
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  const handleGetMusic = async (song,index) => {
    //setPlayCurrent(index);
    dispatch({
      type: SET_PLAYCURRENT,
      payload: index,
    })
    console.log(index);
    try {
      const dataMusic = await getMusic(song.id);
      if (dataMusic.success) {
        musicRef.src = dataMusic.data[128];
        musicRef.play();
        setPlay(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  /* const handleOpenSearch = () => {
    dispatch({
      type: SET_OPENSEARCH,
    });
    if (btnSearch) {
      searchRef.current.classList.add("append");
      if (playlist.length > 0) {
        dropboxSearch.current.classList.add("append");
      }
    } else {
      searchRef.current.classList.remove("append");
      dropboxSearch.current.classList.remove("append");
    }
  }; */

  return (
    <>
    <img src="/imgs/magnifying-glass.png" alt="" onClick={() =>handleClick(searchMusic)}/>
    <div className="search-music" ref={searchMusic}>
      <input
        type="text"
        placeholder="Enter song name.."
        value={nameMusic.name}
        onChange={handleSearchNameMusic}
        ref={searchRef}
      />{/* 
      <SearchIcon className="search-icon" onClick={handleOpenSearch} /> */}
        <p style={{fontSize:'18px', fontWeight:'600', color:'#fff', padding:'8px 0 0 8px'}}>Result</p> 
      <div className="drop-result-search" ref={dropboxSearch}>
        <ul>
          {app.playlist.map((song, index) => (
            <li key={index} onClick={() => handleGetMusic(song,index)}>
              <div className="thumb-music">
                <img
                  src={`https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/${song.thumb}`}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </div>
              <div className="info-music">
                <div>{song.name}</div>
                <div style={{ fontSize: "14px", color: "#ccc" }}>
                  {song.artist}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default Search;
