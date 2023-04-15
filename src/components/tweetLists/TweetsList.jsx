import './TweetsList.css'
import '../LoginRegister/LoginRegister.css'
//import moment from 'moment'
import axios from 'axios'
import { useEffect, useState } from 'react'
//import { useNavigate } from 'react-router-dom'
import './roledesign.css'

//import { arrayWithHoles } from '@thumbtack/thumbprint-react/dist/cjs/_virtual/_rollupPluginBabelHelpers'

const TweetsList = () => {
        // const navigator = useNavigate()
        const [Bloglist, setBloglist] = useState([])
        const [imacc, setImacc] = useState('https://i.pinimg.com/originals/ff/75/e2/ff75e224fbed217c2555a8cdc8fb4cf1.png')
        // const [cat, setCat] = useState('http://e309-35-187-146-251.ngrok.io/');
        //const [activeBtn, setActiveBtn] = useState(null);


        const openInNewTab = url => {
            window.open(url, '_blank', 'noopener,noreferrer');
        };
        
        const fetchData = (api_link)=>{
            axios.get(api_link)
            .then(response =>{
                if(response.data){
                    setBloglist(response.data)
                }else{
                    console.log("error!!")
                }
            return 0;
        })}

        useEffect(()=>{
            // document.getElementById('loading').style.display = 'block';
            fetchData('https://sourav525.pythonanywhere.com/' + localStorage.getItem('category').toLowerCase());
        },[])
        
        return(
        <>
        {/* <div className="role-btn-div">
        <div className="btn-div">
        <button
          className={`role-btn ${activeBtn === "food" ? "active" : ""}`}
          onClick={() => {setActiveBtn("food"); fetchData('https://sourav525.pythonanywhere.com/food'); }}
        >
          Food
        </button>
  
        <button
          className={`role-btn ${activeBtn === "medical" ? "active" : ""}`}
          onClick={() => {setActiveBtn("medical"); fetchData('https://sourav525.pythonanywhere.com/medical');}}
        >
          Medical
        </button>
  
        <button
          className={`role-btn ${activeBtn === "rescue" ? "active" : ""}`}
          onClick={() => {setActiveBtn("rescue"); fetchData('https://sourav525.pythonanywhere.com/rescue');}}
        >
          Rescue
        </button>
  
        <button
          className={`role-btn ${activeBtn === "infrastructure" ? "active" : ""}`}
          onClick={() => {setActiveBtn("infrastructure"); fetchData('https://sourav525.pythonanywhere.com/infrastructure');}}
        >
          Infrastructure
        </button>
  
        <button
          className={`role-btn ${activeBtn === "others" ? "active" : ""}`}
          onClick={() => {setActiveBtn("others"); fetchData('https://sourav525.pythonanywhere.com/others');}}
        >
          Others
        </button>
      </div>
      </div>*/}
        <div className = "tweets-container">{ 
        Bloglist.map((blogs) =>(
            <div className = "blog" key = {blogs._id}>
                    <div className='body' onLoad = {()=>{if(blogs.Image != ""){setImacc(blogs.Image)}}}>
                        <div className = "header">
                           {/* {blogs['Hashtags_Used'].map((hashtag) =>(<span className = "hashtag">#{hashtag} </span>))} */}
                           {blogs.Hashtags_Used}
                        </div>
                        {}
                        {/* <div className= "image">
                            <img src={blogs.Image} alt=""></img>
                        </div> */}
                        <div className = "footer">
                            <b>{blogs.Username}</b><br></br>
                            {/* <small>{moment(blogs.Date).fromNow()}</small> */}
                            {<small>Followers:{blogs.Follower_Count}</small>}
                        </div>
                            <small>{blogs.Location}</small>
                        <br></br>
                        <div className = "contain">
                          {blogs.Tweet_Text}
                        </div>
                        <div>
                        <a  className="btn-for-tweet btn-one-for-tweet" onClick={()=> openInNewTab('https://twitter.com/'+blogs.Username+'/status/'+blogs.Tweetid)}>
                            <span>View Details</span>
                        </a>
                        </div>
                    </div>
                </div>
        ))}
        </div>
        </>
        )
    }
export default TweetsList;
