import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './userShortInfo.css'
import {Button} from '@mui/material'
import {useNavigate} from 'react-router-dom';
import UserService from '../../Services/UserService';

const UserShortInfoLine = ({user, showButtons = true, id}) => {
    let navigate = useNavigate();
    let service = new UserService();
    const [isFollow, setFollow] = useState(true);
    
    useEffect(()=>{
        service.GetCurrentUserInfo().then((res)=>{
            console.log(res);
            console.log(user.id)
            res.data.subscriptions.forEach(element => {   
                console.log(element.subscribeId); 
                if (element.subscribeId == user.id){ 
                    console.log("work")
                    setFollow(false);
                }
            });
            
                
        })
    },[])
  return (
    <div className ={"shortInfoContainer"}>
        <div className="avatar">
            <Avatar src ={user.avatar} sx ={{height : "90px", width : "90px"}}/>
        </div>
        <div className="info">
            <p className = "userName">{user.userName}</p>
            <p className ="fullName">{user.fullName}</p>
            <p className = "location"><i className="fas fa-globe"></i>{user.location}</p>
            {user.gender ===0 ? <p>Male</p> : <p>Female</p>}
        </div>
        <div className="navigator_buttons">
            {
                showButtons ?
                    isFollow ? 
                        <>
                        <Button variant="outlined" color="error" sx={{marginBottom: "10px"}} >
                            Unfollow
                        </Button> 
                        <Button color="secondary" onClick={()=>navigate(`/userspages/${user.id}`)}>Profile</Button>
                        </>: <>
                        <Button variant="outlined" color="success" sx={{marginBottom: "10px"}} >
                            Follow
                        </Button>
                        <Button color="secondary" onClick={()=>navigate(`/userspages/${user.id}`)}>Profile</Button>
                        </>
                        :<></>
            }
            
        </div>
    </div>
  )
}

export default UserShortInfoLine