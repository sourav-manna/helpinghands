import React from 'react'
import './body.css'
import Top from './Top Section/Top'
import Listing from './Listing Section/Listing'
import Activity from './Action Section/Activity'


export const Body = () => {
  return (
    <div className='mainContent'>
      <Top/>
      
      <div className="bottom flex">
        <Listing/>
        <Activity />
      </div>
    </div>
  )
}
