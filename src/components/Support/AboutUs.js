import React from 'react'
import "./aboutUs.css"
const AboutUs = () => {
  return (
    <div className  ="aboutUs">
        <h1>About Us</h1>
        <div className="about_container">
            <div className="image">
                <img src="https://cdn.lifehack.org/wp-content/uploads/2015/03/tips-to-become-a-better-photographer.jpeg" alt="" />
            </div>
            <div className="information">
                <p>Welcome to the web application called Photozone!<br/>
                Here you can share with each user a new location for photos, as well as find new cool and unforgettable acquaintances! This application is under development, so if you have any comments or suggestions, contact us or give a feedback</p>
            </div>
          </div>

    </div>
  )
}

export default AboutUs