import React, {useState} from 'react'
import './profile.css'
import { styled } from '@mui/material/styles';
import {Avatar, IconButton} from "@mui/material"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {uploadImage} from '../../../Services/ImageUploader';
import { ClockLoader } from 'react-spinners';
import UserService from '../../../Services/UserService';

const AvatarInfo = ({userImage}) => {
  const [loading, setLoading] = useState(false);
  const [image,setImage] = useState(userImage);
  const [file, setFile] = useState({});
  let service = new UserService();


  const Input = styled('input')({
    display: 'none',
  });

async function handleFileSelected(e){
    setLoading(true);
    const files = Object(e.currentTarget.files)[0]
    console.log(files)
    setFile(files);
    const res = await uploadImage(files);
    const data = {
      avatar : res
    }
    service.ChangeAvatar(data).then(result=>{
      setImage(res);
      setLoading(false);
      console.log(result);
    })
} 

  return (
    <div className ={"avatarBlock"}>
        {loading ? <div className = "loader"><ClockLoader size= "150" css = {{margin : "auto" }} color={"#A254FF"}/></div>  :<Avatar src ={image} className ="ava" />}
        <div className="photo">
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" onChange = {(e)=>handleFileSelected(e)} />
              <IconButton color="primary" aria-label="upload picture" component="span">
                <CameraAltIcon/>
              </IconButton>
          </label>
        </div>
    </div>
  )
}

export default AvatarInfo