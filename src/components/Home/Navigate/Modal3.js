import React, { useContext, useRef } from "react";
import { AppContext } from "../../../Provider/AppContext";

const Modal3 = () => {
  const changeSetRef = useRef();
  const { handleClick } = useContext(AppContext);
  return (
    <>
      <img
        src="/imgs/map-outline.svg"
        alt=""
        onClick={() => {
          handleClick(changeSetRef);
        }}
      />
      <div className="change-set common" ref={changeSetRef}>
        {/* <div className="bg-layout-top"></div> */}
        <div className="change-wrap">
          <div className="change-head">Chang Set</div>
          <div className="change-items">
            <img
              className="items-img"
              style={{ opacity: "1 !important" }}
              src="/imgs/chill.6d5d8ab2.png"
            />
          </div>
          <div className="change-items">
            <img className="items-img" src="/imgs/lofi_desk.947e4566.png" />
            <div className="change-premium">
              <button className="btn-change"> Go Premium</button>
            </div>
          </div>
          <div className="change-items">
            <img className="items-img" src="/imgs/forest-set.9d2b0160.png" />
            <div className="change-premium">
              <button className="btn-change"> Go Premium</button>
            </div>
          </div>
          <div className="change-items">
            <img className="items-img" src="/imgs/ocean-set.2f88f0b7.png" />
            <div className="change-premium">
              <button className="btn-change"> Go Premium</button>
            </div>
          </div>
          <div className="change-items">
            <img className="items-img" src="/imgs/cafe-set.588fc661.png" />
            <div className="change-premium">
              <button className="btn-change"> Go Premium</button>
            </div>
          </div>
          <div className="change-items">
            <img className="items-img" src="/imgs/van-set.e036daf9.png" />
            <div className="change-premium">
              <button className="btn-change"> Go Premium</button>
            </div>
          </div>
          <div className="change-items">
            <img className="items-img" src="/imgs/summer-set.ff31bfc2.png" />
            <div className="change-premium">
              <button className="btn-change"> Go Premium</button>
            </div>
          </div>
        </div>

        {/* <div className="bg-layout-bot"></div> */}
      </div>
    </>
  );
};

export default Modal3;
