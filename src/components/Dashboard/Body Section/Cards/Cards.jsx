import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "./card.css";

export const Cards = (props) => {
  const [status, setStatus] = useState(props.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // calculate current time
  var today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  // toggle button

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
        Swal.fire({
          icon: "success",
          title: "Tweet added to progress",
        });

        dispatch({
          type: "INPROCESS_TIME",
          payload: time,
        });

        dispatch({
          type: "TOGGLE_BUTTON",
          payload: 2,
        });
        localStorage.setItem("toggle", 2);

        navigate("/mypage/inprogress");
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
        Swal.fire({
          icon: "success",
          title: "Congrats! You have completed the task",
        });

        navigate("/mypage/completed");

        dispatch({
          type: "COMPLETED_TIME",
          payload: time,
        });
        dispatch({
          type: "TOGGLE_BUTTON",
          payload: 3,
        });
        localStorage.setItem("toggle", 3);
      }
    });
  };

  // null string
  var statusActivity;

  var btnActivity;
  if (status === "pending") {
    btnActivity = (
      <button className="addButton" onClick={AddToProgress}>
        <Link>Mark as Process</Link>
      </button>
    );
    statusActivity = (
      <div
        style={{
          height: "5px",
          width: 10 + "%",
          backgroundColor: "#5993e2",
          borderRadius: "3px",
          transition: "width 1s ease-in-out",
        }}
      ></div>
    );
  } else if (status === "inprocess") {
    btnActivity = (
      <button className="addButton" onClick={AddToComplete}>
        <Link>Mark as Complete</Link>
      </button>
    );
    statusActivity = (
      <div
        style={{
          height: "5px",
          width: 50 + "%",
          backgroundColor: "	#f0ad4e",
          borderRadius: "3px",
          transition: "width 1s ease-in-out",
        }}
      ></div>
    );
  } else if (status === "completed") {
    btnActivity = (
      <button className="addButton" disabled>
        Done
      </button>
    );

    statusActivity = (
      <div
        style={{
          height: "5px",
          width: 100 + "%",
          backgroundColor: "#00FF00",
          borderRadius: "3px",
          transition: "width 1s ease-in-out",
        }}
      ></div>
    );
  }

  const urlString = `https://twitter.com/i/web/status/${props._id}`;

  return (
    <div className="parentCardDiv">
      <div className="childCardDiv1">
        <h6>Followers: {props.followerCount}</h6>
        <h2>{props.username}</h2>

        <a href={urlString} target="_blank" rel="noreferrer">
          View Details ➡
        </a>
      </div>
      <div className="childCardDiv2">
        <div className="progress-wrapper">
          <div className="progress">{statusActivity}</div>
          <span className="progress-text">{props.status}</span>
        </div>
        <h6>{props.date}</h6>
        {props.location ? <h3>{props.location}</h3> : <h3>India</h3>}
        <p className="p-trunc">{props.tweetText}</p>
        {btnActivity}
      </div>
    </div>
  );
};
