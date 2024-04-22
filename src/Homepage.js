import React from 'react'
import "./Homepage.css"
import Sidenav from './Components/navigation/Sidenav'
import Timeline from './Components/timeline/Timeline'

function Homepage() {
  return (
    <div className='homepage'>
        <div className='homepage__nav'>
            <Sidenav />
        </div>
        <div className='homepage__timeline'>
            <Timeline />
        </div>
    </div>
  )
}

export default Homepage