import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
  FaLinkedinSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


import { NavLink } from "react-router-dom";

function refreshPage() {
  window.location.reload(false);
}

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
            <div className="icon-h">H</div>
            <div className="icon-s">
              elping
              <br></br>
              ands
            </div>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a onClick={refreshPage}>Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://twitter.com/" target="_blank">
                <FaTwitterSquare className="twitter" />
              </a>
            </li>
            {/* <li>
              <a
                href="#">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="#">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li> */}
          </ul>

          {/* hamburget menu start */} 
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>............</h1>
      </section> */}
    </>
  );
};

export default Navbar;
