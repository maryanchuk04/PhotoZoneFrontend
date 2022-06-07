import React from 'react';
import {Avatar} from "@mui/material";
import './ProfilePage.css'
import {Link} from 'react-router-dom'

const ProfileMenu = ({user}) => {
    return(
            <div className="profile_preview">
                <img src="https://images4.alphacoders.com/153/thumb-1920-153316.jpg" alt=""/>
                <div className="avatar-with-menu">
                    <Avatar src={user.avatar} sx={{ width: 200, height: 200 }}/>
                    <div className="username_menu">
                        <h1>@{user.userName}</h1>
                        <div className="profile_info">
                            <div className="location">
                                <i className = "fas fa-globe"></i>
                                <p>{user.location}</p>
                            </div>
                            <div className="age">
                                <p>{user.age} years old.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ProfileMenu;