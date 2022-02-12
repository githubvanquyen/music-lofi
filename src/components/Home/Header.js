import React, { useContext, useRef } from "react";
import "./Home.css";
import { AppContext } from "../../Provider/AppContext";
import HeaderM from "./HeaderM";
const Header = () => {
  const { changeBackground, fullScreenApp} = useContext(AppContext);

  return (
    <div className="navgation">
      <div className="logo">
        <img src="/imgs/logo.0cbf9e63.gif" alt="" height="100px" className="" />
      </div>
      <div className="nav">
        <ul className="menu-bar">
          <li>
            <a>How it works</a>
            <div className="tutorial">
              <div className="tuto__contain">
                <div className="tuto-img"></div>
              </div>
            </div>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li className="drop-menu">
            <a>More</a>
            <ul className="sub-menu">
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Submisions</a>
              </li>
              <li>
                <a>Spotify</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Merch</a>
          </li>
        </ul>
      </div>
      <div className="menu">
        <input
          type="checkbox"
          id="switch"
          className="switch-input"
          onChange={changeBackground}
        />
        <label htmlFor="switch" className="switch"  title="change background"></label>
        <img src="/imgs/fullscreen.a76b5d15.svg" width="26px" id="zoom-out" alt="" title="fullscreen" onClick={fullScreenApp}/>
      </div>
      <HeaderM /> 
    </div>
  );
};

export default Header;
