import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./activity.css";
import { useSelector } from "react-redux";

const Activity = () => {

  const [dataComplete, setDataComplete] = useState([]);
  const [dataInprogress, setDataInprogress] = useState([]);
  const inProTime = useSelector(state => state.intime);

  useEffect(() => {
    loadData();
    loadActivity();
  }, [])

  const loadData = () => {
    axios({
      method: 'POST',
      url: 'https://floodsupportapi.azurewebsites.net/completetweet',
      data: {
        "uid": localStorage.getItem('userId')
      }
    }).then((res) => {
      if (res.data.status === true) {
        console.log(res.data.docs);
        setDataComplete(res.data.docs.reverse());
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  const loadActivity = () => {
    axios({
      method: 'POST',
      url: 'https://floodsupportapi.azurewebsites.net/inprocesstweet',
      data: {
        "uid": localStorage.getItem('userId')
      }
    }).then((res) => {
      if (res.data.status === true) {
        console.log(res.data.docs);
        setDataInprogress(res.data.docs.reverse());
      }
    }
    ).catch((err) => {
      console.log(err);
    }
    )
  }

  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Recent Activity</h1>
      </div>

      <div className="secContainer grid">
        {dataComplete && dataComplete?.map((item) => {
          return (

            <div className="singleCustomer flex">
              <img
                src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-user-advertisement-tanah-basah-glyph-tanah-basah.png"
                alt="Customer"
              />
              <div className="customerDetails">
                <span className="name">{localStorage.getItem("name")}</span>
                <small>{item?.status} task posted by {item?.username}</small>
              </div>
              <div className="duration">{inProTime}</div>
            </div>
          )
        }
        )}

        {
          dataInprogress && dataInprogress?.map((item) => {
            return (
              <div className="singleCustomer flex">
                <img
                  src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-user-advertisement-tanah-basah-glyph-tanah-basah.png"
                  alt="Customer"
                />
                <div className="customerDetails">
                  <span className="name">{localStorage.getItem("name")}</span>
                  <small>{item?.status} task posted by {item?.username}</small>
                </div>
                <div className="duration">{inProTime}</div>
              </div>
            )
          }
          )
        }


      </div>
    </div>
  );
};

export default Activity;
