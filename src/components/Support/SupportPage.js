import React from 'react'
import AboutUs from './AboutUs'
import Feedback from './feedback'
import './support.css'

const SupportPage = () => {
  return (
    <div className="support">
        <div className="container">
          <AboutUs/>
          <Feedback/>
        </div>
    </div>
  )
}

export default SupportPage