import React from 'react';
import {Avatar} from "@mui/material";
import './ProfilePage.css'
import {Link} from 'react-router-dom'
import useMedia from 'use-media';

const ProfileMenu = ({user}) => {
    const media = useMedia({maxWidth : "426px"});
    return(
            <div className="profile_preview">
                <div className="kartinka">
                    <img src="https://images4.alphacoders.com/153/thumb-1920-153316.jpg" alt=""/>
                </div>
                <div className="avatar-with-menu">
                    {media ? <Avatar src={user.avatar} sx={{ width: 100, height: 100 }}/> : <Avatar src={user.avatar} sx={{ width: 200, height: 200 }} />}
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