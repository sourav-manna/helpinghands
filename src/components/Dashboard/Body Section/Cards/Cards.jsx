import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'
import "./card.css";

export const Cards = (props) => {
  const [status, setStatus] = useState(props.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        Swal.fire({
          icon: 'success',
          title: 'Tweet added to progress',
        })
        navigate('/mypage/inprogress')
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
        Swal.fire({
          icon: 'success',
          title: 'Congrats! You have completed the task',
        })
        navigate('/mypage/completed')
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
        <Link >Mark as Process</Link>
      </button>
    );
  } else if (status === "inprocess") {
    btnActivity = (
      <button className="addButton" onClick={AddToComplete}>
        <Link >Mark as Complete</Link>
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
