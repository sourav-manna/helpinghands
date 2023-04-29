import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import "./top.css";
import video from "../../../Assets/vid1.mp4";

// Icons
import { BiSearchAlt, BiCategoryAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone, MdFlood } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaHandHoldingMedical, FaHandsHelping } from "react-icons/fa";
import { RxValueNone } from "react-icons/rx";

const Top = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios({
      method: "get",
      url: "https://floodsupportapi.azurewebsites.net/stats",
    }).then((response) => {
      if (response.status === 200) {
        setData(response.data);
      }
    });
  }, []);

  var category = localStorage.getItem("category");

  var categoryShow;

  if (category === "food") {
    categoryShow = <IoFastFoodOutline className="icon" />;
  } else if (category === "medical") {
    categoryShow = <FaHandHoldingMedical className="icon" />;
  } else if (category === "rescue") {
    categoryShow = <FaHandsHelping className="icon" />;
  } else if (category === "infrastructure") {
    categoryShow = <MdFlood className="icon" />;
  } else if (category === "other") {
    categoryShow = <RxValueNone className="icon" />;
  }

  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title1">
          <h1>Welcome to Helping-Hands.</h1>
        </div>
        {/* <div className="searchBar flex">
          <input type="text" placeholder="Search Tweets" />
          <BiSearchAlt className="icon" />
        </div> */}

        <div className="adminDiv flex">
          <p>Category: </p>
          {categoryShow}
          {category}
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
            <Chart
              width={310}
              height={250}
              type="donut"
              series={[data.completed, data.inprogress, data.pending]}
              options={{
                labels: ["Completed", "Inprogress", "Unassigned"],
                colors: ["#005288", "#3d7ca5", "#7aa5c1"],

                plotOptions: {
                  pie: {
                    donut: {
                      size: "55%",
                    },
                  },
                },

                stroke: {
                  show: false,
                },

                legend: {
                  show: true,
                  position: "right",
                  horizontalAlign: "center",
                  fontSize: "12px",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  labels: {
                    colors: "#000",
                    useSeriesColors: false,
                  },
                  markers: {
                    width: 15,
                    height: 9,
                    strokeWidth: 0,
                    strokeColor: "#fff",
                    fillColors: undefined,
                    radius: 1,
                    customHTML: undefined,
                    onClick: undefined,
                    offsetX: 0,
                    offsetY: 0,
                  },
                  itemMargin: {
                    horizontal: 1,
                    vertical: 0,
                  },
                  onItemClick: {
                    toggleDataSeries: true,
                  },
                  onItemHover: {
                    highlightDataSeries: true,
                  },
                },
              }}
            />
            <div className="textDiv"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
