import React from 'react'
import "./Homepage.css"
import Sidenav from './navigation/Sidenav'
import Timeline from './timeline/Timeline'

function Homepage() {
  return (
    // set padding-left on homepage equal to sidenav width = 300px
    <div className='homepage'>
        {/* Fix the sidenav width to 300px */}
        <div className="homepage__nav">
            <Sidenav />
        </div>
        <div className='homepage__timeline'>
            <Timeline />
        </div>
    </div>
  )
}

export default Homepage