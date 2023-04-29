import React,{useState, useEffect} from 'react'
import { Cards } from '../Cards/Cards';
import axios from 'axios';

export const InProgress = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, [])

  const loadData = () =>{
    axios({
      method: 'POST',
      url: 'https://floodsupportapi.azurewebsites.net/inprocesstweet',
      data:{
        "uid": localStorage.getItem('userId')
      }
    }).then((res) => {
      if(res.data.status === true){
        console.log(res.data.docs);
        setData(res.data.docs);
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>
      {data && data?.map((item) => {
            return(
              <Cards
              _id={item._id}
              username={item.username}
              followerCount={item.followerCount}
              tweetText={item.tweetText}
              status={item.status}
              date={item.date}
              location={item.location}
            />
            )
        }
        )}
    </div>
  )
}
