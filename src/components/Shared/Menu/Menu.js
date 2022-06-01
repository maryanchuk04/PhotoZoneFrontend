import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getBrowserLocation } from '../../../Services/GeolocationService'
import {Avatar} from "@mui/material";
import { getReverse } from '../../../Services/GeolocationService';
import { isAuth } from '../../../Services/SharedFunctions'
import { Button } from '@mui/material'
import { Login } from '../../Login/Login'


const unAuthImage = 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png';


const Menu = () => {
    const [userLocationString,setUserLocationString] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const close = ()=>{
        setIsOpen(false);
    }
    useEffect(()=>{
        getBrowserLocation().then((res)=>{
            getReverse(res).then((res)=>{
                setUserLocationString(res);
            });
        })
        
    }, [])

    return isAuth() ? 
    <div>
      <div class="header"><img src="https://see.fontimg.com/api/renderfont4/5Y58/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/UGhvdG9ab25l/vegan-style-personal-use.png"/></div>
        <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"/>
        <label for="openSidebarMenu" class="sidebarIconToggle">
          <div class="spinner diagonal part-1"></div>
          <div class="spinner horizontal"></div>
          <div class="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
        <ul class="sidebarMenuInner">
            <li className="user_preview">
                <div className="user_background">
                    <div className="user_icon">
                        <Link to = "/profilepage"><Avatar alt="UserName" src="https://i.ibb.co/D1C0s8Y/2022-03-14-19-40-03.jpg" sx={{ width: 65, height: 65}} /></Link>
                    </div>
                    <h2>MaksMaryanchuk</h2>
                    <h3>{userLocationString}</h3>
                </div>
            </li>
            <Link to = "/"><li><i className="fas fa-home"></i>Home</li></Link>
            <Link to="/search"><li><i className="fas fa-search"></i>Search</li></Link>
            <Link to = "/popular"><li><i className="fas fa-fire"></i>Popular</li></Link>
            <Link to = "/"><li><i className="fas fa-users"></i>Friends</li></Link>
            <Link to = "/"><li><i className="fas fa-headset"></i>Support</li></Link>
          </ul>
            <div className="logout">
                <button id = "logout_button" onClick ={()=>{
                    localStorage.removeItem("token");
                }}><i className="fas fa-sign-out-alt" ></i>Logout</button>
            </div>
        </div>
    </div> : <div>
      <div class="header"><img src="https://see.fontimg.com/api/renderfont4/5Y58/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/UGhvdG9ab25l/vegan-style-personal-use.png"/></div>
        <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"/>
        <label for="openSidebarMenu" class="sidebarIconToggle">
          <div class="spinner diagonal part-1"></div>
          <div class="spinner horizontal"></div>
          <div class="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
        <ul class="sidebarMenuInner">
            <li className="user_preview">
                <div className="user_background">
                    <Button variant="contained" size="large" onClick = {()=>setIsOpen(true)}>
                        Sign In/Up
                    </Button>

                </div>
            </li>
            <Link to = "/"><li><i className="fas fa-home"></i>Home</li></Link>
            <Link to="/search"><li><i className="fas fa-search"></i>Search</li></Link>
            <Link to ='/users'><li><i className ='fas fa-users'></i>Users</li></Link>
            <Link to = "/popular"><li><i className="fas fa-fire"></i>Popular</li></Link>
            <Link to = "/support"><li><i className="fas fa-headset"></i>Support</li></Link>

          </ul>
        </div>
        {
            isOpen ? <Login isOpen ={isOpen} onClose ={close}/> : <></>
        }
    </div>
    
}

export default Menu