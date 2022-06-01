import React from 'react';
import './AboutBlock.css'
import {friends} from "../../Test";
import {Avatar} from "@mui/material";
const AboutBlock = (props) => {
    return (
        <div id = "about" className="about_block" >
            <div className="title">About</div>
            <div className="about_info">
                <div className="main_info">
                    <h2>Main Information</h2>
                    <div className="information">
                        <div className="section">
                            <h2>Maks Maryanchuk</h2>
                            <h3>Hobby: Football, programmring</h3>
                            <h3>Sex: Male</h3>
                        </div>
                    </div>
                    <div className="information">
                        <div className="section">
                            <h2>Country: Ukraine</h2>
                            <h3>City: Chernivtsi</h3>
                        </div>
                    </div>
                    <div className="information">
                        <div className="section">
                                <h2>Date of birth: 01.01.2004</h2>
                                <h3>Age: 18</h3>
                        </div>
                    </div>
                </div>
                <div className="other">
                    <div className="other_information">
                        <h2>Other Information</h2>
                        <div className="other_info_intro">
                            <div className="profile_socials">
                                <h2>Socials</h2>
                                <p>Phone Number: 380665671003</p>
                                <p>Instagram: @maryanchuk04</p>
                                <p>Telegram: @Maks_Maryanchuk</p>
                            </div>
                        </div>
                    </div>
                    <div className="friends_about">
                        <h2>Friends</h2>
                        <div className="some_friends">
                            {
                                friends.map((f,index) =>(
                                    <div className="one_friend">
                                        <div className="one_fr_intro">
                                            <Avatar sx={{width:50, height : 50}} src={f.Avatar}/>
                                            <h4>{f.UserName}</h4>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutBlock;