import React, { useState, useEffect } from "react";
import "./navbar.css";
import { FaTwitterSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
// import { authActions } from "../store";
import { NavLink } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";


function refreshPage() {
  window.location.reload(false);
}

function Logout() {
  localStorage.clear();
  window.location.href = "/signin";
}

function SignUp(){
  window.location.href = "/";
  
}
// function Inout(){
//   if(localStorage.length>0) return true;
//   else return false;
// }
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  // const isLoggedIn = useSelector(state => state.isLoggedIn);
  const [isLoggedIn, setLogged] = useState(false);

  useEffect(()=>{
    
     if(localStorage.length>0) setLogged(true);
     else setLogged(false);
     console.log(localStorage.length, isLoggedIn)
    
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
            {isLoggedIn ? (
              <li>
                <a href="#" onClick={Logout} target="_blank">
                  Logout
                </a>
              </li>
            ):(
              
              <li>
                <a onclick={SignUp} target="_blank">
                  Sign Up
                </a>
              </li>
          )}
            
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
