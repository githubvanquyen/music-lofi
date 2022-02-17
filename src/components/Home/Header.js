import React, { useContext, useRef } from "react";
import "./Home.css";
import { AppContext } from "../../Provider/AppContext";
import { authContext } from "../../Provider/AuthContext";
import HeaderM from "./HeaderM";
import { AUTH_LOGOUT } from "../../Reducer/type";
const Header = () => {
  const { changeBackground, fullScreenApp, app} = useContext(AppContext);
  const {auth, dispatch} = useContext(authContext);
  const {lightBackground} = app;

  const handleLogout =()=>{
    localStorage.removeItem('access_token');
    dispatch({
      type: AUTH_LOGOUT,
      payload:{
        isAuthenticated: false,
        user: null,
      }
    })
  }
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
          checked={!lightBackground}
          className="switch-input"
          onChange={changeBackground}
        />
        <label htmlFor="switch" className="switch"  title="change background"></label>
        <img src="/imgs/fullscreen.a76b5d15.svg" width="26px" id="zoom-out" alt="" title="fullscreen" onClick={fullScreenApp}/>
      </div>
      <HeaderM /> 
      <div className="logout"><button className="logout-btn" onClick={handleLogout}>Log out</button></div>
    </div>
  );
};

export default Header;
