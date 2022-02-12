import React, { useContext, useRef } from "react";
import { AppContext } from "../../../Provider/AppContext";

const Modal2 = () => {
  const premiumRef = useRef();
  const { handleClick } = useContext(AppContext);
  return (
    <>
      <img
        src="/imgs/pie-chart-outline.svg"
        alt=""
        onClick={() => handleClick(premiumRef)}
      />
      <div className="premium common" ref={premiumRef}>
        <div className="premium-head">Saved Templates</div>
        <div className="premium-content">Templates are a premium feature</div>
        <div className="btn-premium">
          <button> Go Premium</button>
        </div>
      </div>
    </>
  );
};

export default Modal2;
