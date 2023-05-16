import React, { useState } from "react";
import "./sidebar.css";

// Imported Icons
import { IoMdSpeedometer, IoIosContacts, IoMdInformationCircle } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { About } from "../Pages/About";
import { Contact } from "../Pages/Contact";
import { Report } from "../Pages/Report";

const Sidebar = () => {
  const [modalAbout, setModalAbout] = useState(false);
  const [modalContact, setModalContact] = useState(false);
  const [modalHelp, setModalHelp] = useState(false);


  const modalHandlerAbout = () => {
    setModalAbout(!modalAbout);
  };

  const modalHandlerContact = () => {
    setModalContact(!modalContact);
  };

  const modalHandlerHelp = () => {
    setModalHelp(!modalHelp);
  };

  const changeHandler = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src="https://img.icons8.com/nolan/96/helping-hand.png" />
        <h2>Helping-Hands.</h2>
      </div>
      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK-MENU
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoMdSpeedometer className="icon"/>
              <span className="smallText">
                Dashboard
              </span>
            </a>
          </li>
          <li className="listItem" onClick={modalHandlerAbout}>
            <a href="#" className="menuLink flex">
              <IoMdInformationCircle className="icon"/>
              <span className="smallText">
                About 
              </span>
            </a>
          </li>
          {
            modalAbout && <About modalHandlerAbout={modalHandlerAbout}/>
          }
          <li className="listItem" onClick={modalHandlerContact}>
            <a href="#" className="menuLink flex">
              <IoIosContacts className="icon"/>
              <span className="smallText">
                Contact 
              </span>
            </a>
          </li>
          {
            modalContact && <Contact modalHandlerContact={modalHandlerContact}/>
          }
        </ul>
      </div>
      <div className="menuDiv">
        <h3 className="divTitle">
          USER 
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <FaUserAlt className="icon"/>
              <span className="smallText">
                {localStorage.getItem("name")}
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex" onClick={changeHandler}>
              <BiLogOut className="icon"/>
              <span className="smallText">
                LOGOUT
              </span>
            </a>
          </li>
         
        </ul>
      </div>
      <div className="sideBarCard">
        <BsQuestionCircle className="icon"/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help Center</h3>
          <p>Having trouble in Website?</p>
          <button className="btn1" onClick={modalHandlerHelp}>Report</button>
          {
            modalHelp && <Report modalHandlerHelp={modalHandlerHelp}/>
          }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
