import React from 'react';
import {Avatar} from "@mui/material";
import './ProfilePage.css'
import {Link} from 'react-router-dom'

const ProfileMenu = (props) => {
    return(
            <div className="profile_preview">
                <img src="https://images4.alphacoders.com/153/thumb-1920-153316.jpg" alt=""/>
                <div className="avatar-with-menu">
                    <Avatar src={"https://i.ibb.co/D1C0s8Y/2022-03-14-19-40-03.jpg"} sx={{ width: 200, height: 200 }}/>
                    <div className="username_menu">
                        <h1>@MaksMaryanchuk</h1>
                        <div className="profile_menu">
                            <ul className="profmenu">
                                <li><Link to ="/profilepage">About</Link></li>
                                <li><Link to ="/profilepage/favourite">Favourite</Link></li>
                                <li><Link to ="/profilepage/friends">Friends</Link></li>
                                <li><Link to ="/profilepage/places">Places</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ProfileMenu;