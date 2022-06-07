import React from 'react'
import './sidebarInfo.css'


const SidebarInfo = ({user}) => {
  return (
    <div className ="sidebarInfoContainer">
        <div className="information_about_user">
            <h1 className = "fullName">{user.fullName}</h1>
            <p className = "birthday">Date of birth :{user.birthday.slice(0,10)} <i class="fas fa-birthday-cake"></i></p>
            <p className = "phoneNumber">Phone number: {user.phone}</p>
            
            {
              user.hobby !== null ? 
              <div className="aboutMe">
                <h2>Interests</h2>
                <p>{user.hobby}</p>
            </div> : <></>
            }
            <h2>I'm on social media</h2>
            <div className="socials">
                <a href={user.instLink} target ='_blank'><i className = "fab fa-instagram-square"></i></a>
                <a href={user.tikTokLink} target ='_blank'><i className = "fab fa-tiktok"></i></a>
                <a href={user.facebookLink} target ='_blank'><i className = "fab fa-facebook-square"></i></a>
                <a href={user.gitHubLink}target ='_blank'><i className = "fab fa-github-square"></i></a>
            </div>
        </div>
    </div>
  )
}

export default SidebarInfo