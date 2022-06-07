import { Avatar } from '@mui/material'
import React from 'react'
import './userShortInfo.css'
import {Button} from '@mui/material'
import {useNavigate} from 'react-router-dom';

const UserShortInfoLine = ({user}) => {
    let navigate = useNavigate();

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
            <Button variant="outlined" color="error" sx={{marginBottom: "10px"}} >
                Unfollow
            </Button>
            <Button color="secondary" onClick={()=>navigate(`/userspages/${user.id}`)}>Profile</Button>
        </div>
    </div>
  )
}

export default UserShortInfoLine