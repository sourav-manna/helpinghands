import React, { useState, useEffect } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import {useNavigate } from "react-router-dom";



function refreshPage() {
  window.location.reload(false);
}


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  // const isLoggedIn = useSelector(state => state.isLoggedIn);
  const [isLoggedIn, setLogged] = useState(false);
  const [mystate, setMystate] = useState("");
  const navigator = useNavigate();

  const changeHandler = () => {
    if(localStorage.length>0) 
    {
      setLogged(true);
      setMystate("Logout");
    }
    else 
     {
      setLogged(false);
      setMystate("Login");
    }
     console.log(localStorage.length, isLoggedIn)
  }

  const logHandler = () => {
    if (mystate === "Login"){
      navigator("../signin");
    }else{
      localStorage.clear();
      navigator("../signin");
    }
    changeHandler();
  }

  useEffect(()=>{
    changeHandler();
  });
 
  

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
          }
        >
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
            <li>
              <a onClick={()=>{logHandler()}}>{mystate}</a>
            </li>
            
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
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
