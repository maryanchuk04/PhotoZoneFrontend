import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './userShortInfo.css'
import {Button} from '@mui/material'
import {useNavigate} from 'react-router-dom';
import UserService from '../../Services/UserService';

const UserShortInfoLine = ({user, showButtons = true, id, isAuth}) => {
    let navigate = useNavigate();
    let service = new UserService();
    const [isFollow, setFollow] = useState(true);
    const [show, setShow] =  useState(showButtons);

    useEffect(()=>{
        console.log(showButtons);
        if (localStorage.getItem("token") === null ||localStorage.getItem("token") === undefined ){
            setShow(false);
        }else{
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
        }

        
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
            
                <Button color="secondary" onClick={()=>navigate(`/userspages/${user.id}`)}>Profile</Button>
                {show ?
                    isFollow ? 
                        <>
                        <Button variant="outlined" color="error" sx={{marginBottom: "10px"}} >
                            Unfollow
                        </Button> 
                       
                        </>: <>
                        <Button variant="outlined" color="success" sx={{marginBottom: "10px"}} >
                            Follow
                        </Button>
                        
                        </>
                        :<></>
                }
            
        </div>
    </div>
  )
}

export default UserShortInfoLine