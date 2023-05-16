import React, { useEffect } from 'react'
import './Landing.css'

import Image from './img.png'
import { Link, useNavigate } from 'react-router-dom'

export const LandingPage = () => {
  var navigator = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('category')){
      navigator('../mypage')
    }
  }, [])
  return (
    <div className='containerforlanding'>
        <div className='landing'>
           <p> <h1 className='landing__title'> <span className='landing__title--span'>Helping</span>Hands</h1></p>
           <div id="desc">
              <p className='landing__text'>Twitter-based flood aid and rescue system which is a platform that is dedicated to helping people affected by floods by using Twitter, one of the most widely used social media platform.</p>
           </div> 
            <div className='btndiv'>
                <Link to='/signin' className='landing__button' id="login">EXPLORE ➡</Link>
                {/* <Link to='/signup' className='landing__button' id="reg">REGISTER</Link> */}
            </div>
        </div>

        <div className='container1'>
        
<lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_drmhmvq7.json"  background="transparent"  speed="1"  style={{width: "1000px", height: "1000px", transform:"scaleX(-1)"}} loop  autoplay></lottie-player>
        </div>

    </div>
  )
}
