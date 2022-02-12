import React, { useRef, useState } from "react";

const HeaderM = () => {
    const [openNav, setOpenNav] = useState(true);
  const navMobile = useRef();
  const closeNav = useRef();
  const handleOpenNavMobile = () => {
      setOpenNav(!openNav);
        openNav ? navMobile.current.style.display = 'block' : navMobile.current.style.display = 'none'
  };
  return (
    <>
      <div className="btn-modal">
        <img src="/imgs/menu-outline.svg" onClick={handleOpenNavMobile} />
      </div>
      <div className="nav-mobile" ref={navMobile}>
          <div className="nav__mobile-close">
              <img src="/imgs/close-outline.svg" ref={closeNav} onClick={handleOpenNavMobile}/>
          </div>
        <ul className="menu-bar__mobile">
          <li>
            <a>How it works</a>
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
    </>
  );
};

export default HeaderM;
