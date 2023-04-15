import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import "./card.css";

export const Cards = (props) => {
  const [status, setStatus] = useState(props.status);
  const dispatch = useDispatch();
  // calculate current time
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  // add tweet to progress
  const AddToProgress = () => {

    axios({
      method: "POST",
      url: "https://floodsupportapi.azurewebsites.net/updateinprocess",
      data: {
        tweetid: props._id,
        uid: localStorage.getItem("userId"),
        
      },
    }).then((res) => {
      if (res.data.status === true) {
        console.log(res.data.docs);
        alert("Tweet added to progress");
        dispatch({
          type: "INPROCESS_TIME",
          payload: time,
        });
      }
    });
  };

  // add tweet to complete

  const AddToComplete = () => {
    axios({
      method: "POST",
      url: "https://floodsupportapi.azurewebsites.net/updatecomplete",
      data: {
        tweetid: props._id,
        uid: localStorage.getItem("userId"),
      },
    }).then((res) => {
      if (res.data.status === true) {
        console.log(res.data.docs);
        alert("Tweet added to complete");
        dispatch({
          type: "COMPLETED_TIME",
          payload: time,
        });
      }
    });
  };

  var btnActivity;
  if (status === "pending") {
    btnActivity = (
      <button className="addButton" onClick={AddToProgress}>
        <Link to="/mypage/inprogress">Mark To Process</Link>
      </button>
    );
  } else if (status === "inprocess") {
    btnActivity = (
      <button className="addButton" onClick={AddToComplete}>
        <Link to="/mypage/completed">Mark To Complete</Link>
      </button>
    );
  } else if (status === "completed") {
    btnActivity = (
      <button className="addButton" disabled>
        Done
      </button>
    );
  }


  return (
    <div className="parentCardDiv">
      <div className="childCardDiv">
       
        <h1 className="headingCard">{props.username}</h1>
        <p className="cardPara">{props.tweetText}</p>

        <button className="pendingStatus">{status}</button>
        {
          btnActivity
        }
        
      </div>
    </div>
  );
};
