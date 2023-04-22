import React,{useState, useEffect} from 'react'
import { Cards } from '../Cards/Cards';
import axios from 'axios';

export const Completed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, [])

  const loadData = () =>{
    axios({
      method: 'POST',
      url: 'https://floodsupportapi.azurewebsites.net/completetweet',
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
          username={item.username}
          tweetText={item.tweetText}
          status={item.status}
          />
      )
  }
  )}
  </div>
  )
}