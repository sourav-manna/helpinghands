import React from "react";
import "./top.css";
import video from "../../../Assets/vid1.mp4";

// Icons
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title1">
          <h1>Welcome to Helping-Hands.</h1>
          
        </div>
        <div className="searchBar flex">
          <input type="text" placeholder="Search Tweets" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-user-advertisement-tanah-basah-glyph-tanah-basah.png" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Find and Help people</h1>
          <p>
            Each of us as human beings has a responsibility to reach out to help
            our brothers and sisters affected by disasters
          </p>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>
        <div className="leftCard flex">
          <div className="mainStat flex">
            <div className="textDiv">
              <h1>Our Stat</h1>
              <div className="flex">
                <span>
                  Today <br /> <small>4 requests</small>
                </span>
                <span>
                  This Month <br /> <small>127 requests</small>
                </span>
              </div>
              <span className="flex link">
                Go to Our Charts <BsArrowRight className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img
                src="https://www.fema.gov/sites/default/files/2020-06/illustration_hero_dataviz.png"
                alt="Image Name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
