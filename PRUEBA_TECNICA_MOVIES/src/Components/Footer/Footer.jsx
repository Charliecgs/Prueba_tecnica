import "./Footer.css";

import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="allFooter">
        <div className="linksFooter">
          <div className="linksa">
            <NavLink to={"/"}>Home</NavLink> |
            <NavLink to={"/"}>Terms and conditions</NavLink> |
            <NavLink to={"/"}>Privacy Policy</NavLink> |
            <NavLink to={"/"}>Collection Statement</NavLink> |
            <NavLink to={"/"}>Help</NavLink> |
            <NavLink to={"/"}>Manage Account</NavLink>
          </div>
          <div className="copy">
            <p>Copyright © 2016 DEMO Streaming. All Rights Reserved</p>
          </div>
        </div>
        <div className="imagesFooter">
          <div className="icons">
            <a className="icon" href="https://es-es.facebook.com/">
              <img
                src="../../../public/images/social/facebook-white.svg"
                alt="facebook logo"
              />
            </a>
            <a className="icon" href="https://es-es.facebook.com/">
              <img
                src="../../../public/images/social/twitter-white.svg"
                alt="twitter logo"
              />
            </a>
            <a className="icon" href="https://es-es.facebook.com/">
              <img
                src="../../../public/images/social/instagram-white.svg"
                alt="instagram logo"
              />
            </a>
          </div>
          <div className="largeIcons">
            <a className="icon2" href="https://es-es.facebook.com/">
              <img
                src="../../../public/images/store/app-store.svg"
                alt="app-store logo"
              />
            </a>
            <a className="icon2" href="https://es-es.facebook.com/">
              <img
                src="../../../public/images/store/play-store.svg"
                alt="play-store logo"
              />
            </a>
            <a className="iconWindows" href="https://es-es.facebook.com/">
              <img
                src="../../../public/images/store/windows-store.svg"
                alt="windows-store logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
