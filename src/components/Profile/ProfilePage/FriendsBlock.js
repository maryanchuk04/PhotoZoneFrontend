import React from 'react';
import './ProfilePage'
import {friends} from "../../Test";
import {Avatar} from "@mui/material";


const FriendsBlock = () => {
    return (
        <div>
            <div id = "friends" className="friends_block">
                <div className="title">Friends</div>
                {
                    friends.map((friend,index) =>(
                        <div className="friend">
                            <Avatar src={friend.Avatar} alt={friend.UserName} sx={{width:100,height:100 }}/>

                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FriendsBlock;