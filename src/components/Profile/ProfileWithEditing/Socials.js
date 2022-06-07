import React, { useState } from 'react'
import {OutlinedInput,TextField, Button } from '@mui/material'
import './profile.css'
import { getElementError } from '@testing-library/dom'
const Socials = () => {
    const [isDisabled, setIsDisabled] = useState(true);

    function editHandle(){
        switch(isDisabled){
            case true :{
                setIsDisabled(false);
                break;
            } 
            case false : {
                setIsDisabled(true);
                break;
            }
        }
    }   

  return (
<div className="profileEdit">
    <div className ="socials">
        
        <h1 style ={{textAlign:"center"}}>User Socials</h1>
        <div className="social_line">
            <div className="icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="" />
            </div>   
            <TextField label="Instagram Link" name="linkField" disabled = {isDisabled} />
        </div>
        <div className="social_line">
            <div className="icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png" alt="" />
            </div>   
            <TextField label="Facebook Link" name="linkField" disabled = {isDisabled}/>
        </div>
        <div className="social_line">
            <div className="icon">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
            </div>   
            <TextField label="GitHub Link" name="linkField" disabled = {isDisabled}/>
        </div>
        <div className="social_line">
            <div className="icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TikTok_Icon_Black.svg/2048px-TikTok_Icon_Black.svg.png" alt="" />
            </div>   
            <TextField label="TikTok Link" name="linkField" disabled = {isDisabled} />
        </div>
        <div className="btns">
            <Button variant="outlined" onClick ={()=>editHandle()}>Edit</Button>
            <Button variant="contained">Save</Button>
        </div>
        
    </div>
    </div>
  )
}

export default Socials