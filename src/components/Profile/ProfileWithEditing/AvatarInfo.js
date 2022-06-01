import React from 'react'
import './profile.css'
import {Avatar, IconButton} from "@mui/material"
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const AvatarInfo = ({userImage}) => {
  return (
    <div className ={"avatarBlock"}>
        <Avatar src ={userImage} className ="ava" />
        <div className="photo">
            <IconButton>
                <CameraAltIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default AvatarInfo