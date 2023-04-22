import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
// import { useParams } from 'react-router-dom';
import moment from 'moment';
import './Trending.css';



const Blogstuc = (props) =>{
    
    const [Blog, setBlog] = useState({})
    const [likes, setLikes] = useState(0)
    const [commt, setCommt] = useState()
    const [Commentt, setComment] = useState([])
    const [activel, setActivel] = useState(false)
    const [imacc, setImacc] = useState('https://i.pinimg.com/originals/ff/75/e2/ff75e224fbed217c2555a8cdc8fb4cf1.png')

    useEffect(()=>{
        axios.get('https://sourav525.pythonanywhere.com/trending')
        .then(response =>{
            if(response.data){
                setBlog(response.data[0])
            }else{
                console.log("Server error!!")
            }
            
        })
     },[]);

    return(
        <>
        <div className='disp' onLoad = {()=>{if(Blog.Image == ""){setImacc('https://i.pinimg.com/originals/ff/75/e2/ff75e224fbed217c2555a8cdc8fb4cf1.png')}else{setImacc(Blog.Image)}}}>
            <div className = "blog-body">
                <center>
                    <div className = "theader">
                       #{Blog['Hashtags_Used']}
                    </div>
                    </center>
                <div>
                    <img src={Blog.Image} alt=""></img>
                </div>
                <div className='body'>
                    <div className = "tfooter">
                        <b>{Blog.Username}</b> <b>|</b> <span class="postTime"><i class="fa-solid fa-calendar-days"></i> {moment(Blog.Date).fromNow()}</span>
                        <br></br>
                        <b><span>Followers : </span></b> {Blog['Follower_Count']}
                        
                    </div>
                </div>
                <div className = "tblog_contain">
                        {Blog['Tweet_Text']}
                </div>
                <div>
                        <center><button className='view-btn'>View Details↗️</button></center>
                </div>
            </div>
        </div>
    </>);
}

const Trending = () =>{
    const k = "63109bb37bc8b5e4378c687b"
    return (<Blogstuc blog = {k} />);
}


export default Trending;