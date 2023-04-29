import React,{useState} from "react";

import "./listing.css";

import { AiFillHeart } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

const Listing = () => {
  const toggle = useSelector(state => state.toggle)

  const dispatch = useDispatch();

  if(localStorage.getItem("toggle") === null){
    localStorage.setItem("toggle", 1);
  }

  const ToggleChange = (val) => {
    // setToggle(val);
    dispatch({
    type:"TOGGLE_BUTTON",
    payload:val
    })
    localStorage.setItem("toggle", val);
  }

  var valueToggle = parseInt(localStorage.getItem("toggle")); 
  
  console.log(valueToggle)
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
          <h4 className={valueToggle  === 1?"bar-active":null} ><Link to="/mypage/unassigned" onClick={()=>ToggleChange(1)}>Unassigned</Link></h4>
          <h4 className={valueToggle === 2?"bar-active":null}><Link to="/mypage/inprogress" onClick={()=>ToggleChange(2)}>Inprogress</Link></h4>
          <h4 className={valueToggle === 3?"bar-active":null}><Link to="/mypage/completed" onClick={()=>ToggleChange(3)}>Completed</Link></h4>
        </div>
        
        <div className="tweetDiv">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Listing;
