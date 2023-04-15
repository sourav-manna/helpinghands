import React from "react";
import "./listing.css";

import { AiFillHeart } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>Tweets</h1>
      </div>

      <div className="secContainer ">
        {/* <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src="https://picsum.photos/200/300" alt="img" />
          <h3>Nature</h3>
        </div> */}
        <div className="tweetOption flex">
          <h4><Link to="/mypage/unassigned">Unassigned</Link></h4>
          <h4><Link to="/mypage/inprogress">Inprogress</Link></h4>
          <h4><Link to="/mypage/completed">Completed</Link></h4>
        </div>
        
        <div className="tweetDiv">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Listing;
