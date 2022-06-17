import React, { useState } from 'react'
import {OutlinedInput,TextField, Button } from '@mui/material'
import './profile.css'
import { getElementError } from '@testing-library/dom'
import UserService from '../../../Services/UserService'
const Socials = ({userData}) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [instLink, setInstLink] = useState(userData.instLink || "");
    const [facebook, setFacebook] = useState(userData.facebookLink || "");
    const [gitHub, setGitHub] = useState(userData.gitHubLink || "");
    const [tikTok,setTikTok] = useState(userData.tikTokLink || "");
    let service = new UserService();

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
    
    const SaveSocials = () =>{
        const data = {
            gitHubLink : gitHub,
            instLink : instLink,
            facebookLink : facebook,
            tikTokLink : tikTok
        };

        service.SaveSocials(data).then((res)=>{
            console.log(res.data);
        })
        setIsDisabled(true);
    }

  return (
<div className="profileEdit">
    <div className ="socials">
        
        <h1 style ={{textAlign:"center"}}>User Socials</h1>
        <div className="social_line">
            <div className="icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="" />
            </div>   
            <TextField label="Instagram Link" name="linkField" defaultValue = {userData.instLink} disabled = {isDisabled} sx = {{width : '100%'}} onChange ={(e)=> setInstLink(e.target.value)}/>
        </div>
        <div className="social_line">
            <div className="icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png" alt="" />
            </div>   
            <TextField label="Facebook Link" name="linkField" defaultValue = {userData.facebookLink} disabled = {isDisabled}  sx = {{width : '100%'}} onChange ={(e)=> setFacebook(e.target.value)}/>
        </div>
        <div className="social_line">
            <div className="icon">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt=""  />
            </div>   
            <TextField label="GitHub Link" name="linkField" defaultValue = {userData.gitHubLink} disabled = {isDisabled}  sx = {{width : '100%'}} onChange ={(e)=> setGitHub(e.target.value)}/>
        </div>
        <div className="social_line">
            <div className="icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TikTok_Icon_Black.svg/2048px-TikTok_Icon_Black.svg.png" alt="" />
            </div>   
            <TextField label="TikTok Link" defaultValue = {userData.tikTokLink} name="linkField" disabled = {isDisabled}  sx = {{width : '100%'}} onChange ={(e)=> setTikTok(e.target.value)}/>
        </div>
        <div className="btns">
            <Button variant="outlined" onClick ={()=>editHandle()}>Edit</Button>
            <Button variant="contained" onClick ={()=> SaveSocials()}>Save</Button>
        </div>
        
    </div>
    </div>
  )
}

export default Socials