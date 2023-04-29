import axios from "axios";
import React, { useState, useEffect } from "react";
import { Cards } from "../Cards/Cards";

export const Unassigned = () => {
  const [data, setData] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios({
      method: "POST",
      url: "https://floodsupportapi.azurewebsites.net/tweet",
      data: {
        category: localStorage.getItem("category"),
        status: "unassigned",
      },
    })
      .then((res) => {
        if (res.data.status === true) {
          console.log(res.data.docs);
          setData(res.data.docs);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {data &&
        data?.map((item) => {
          return (
            <Cards
              _id={item._id}
              username={item.username}
              followerCount={item.followerCount}
              tweetText={item.tweetText}
              status={item.status}
              date={item.date}
              location={item.location}
            />
          );
        })}
    </div>
  );
};
