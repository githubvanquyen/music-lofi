import React, { useRef, useContext, useEffect } from "react";
import "../Home.css";
import Search from "./Search";
import ButtonMS from "./ButtonMS";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import AudioM from "./AudioM";
import { NavigateContext } from "../../../Provider/NavigateContext";
import { AppContext } from "../../../Provider/AppContext";
import { SET_MUSICREF } from "../../../Reducer/type";
import Modal4 from "./Modal4";
const Navigate = () => {

  /* const {dispatch} = useContext(NavigateContext);*/
  const musicRef = useRef(); 
  const { getMusicRef , dispatch} = useContext(AppContext);
  
  
  return (
    <div className="container">
        <AudioM/>
      <div className="function-bar">
        <div>
          <ul>
            <li className="change-music">
              <Modal1/>
            </li>
            <li>
              <Search/>
            </li>
            <li className="modal-change">
              <Modal3/>
            </li>
            <li className="modal-premium">
              <Modal2/>
            </li>
            <li>
              <Modal4/>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="music-name">
        <p></p>
      </div> */}
      <ButtonMS/>
    </div>
  );
};

export default Navigate;
