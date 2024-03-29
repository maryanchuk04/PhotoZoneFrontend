import React, {useState, useEffect}from 'react'

import { isAuth } from '../../../Services/SharedFunctions'
import './menuContent.css'
import { Divider, List, ListItem, ListItemButton, Button , Avatar} from '@mui/material'
import { ListItemIcon } from '@material-ui/core'
import HomeIcon from '@mui/icons-material/Home';
import { Login } from '../../Login/Login'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { getBrowserLocation,getReverse } from '../../../Services/GeolocationService';

const MenuContent = ({userInfo}) => {
    const [userLocationString,setUserLocationString] = useState("");
    const [process, setprocess] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const close = ()=>{
        setIsOpen(false);
    }
    useEffect(()=>{
        getBrowserLocation().then((res)=>{
            getReverse(res).then((res)=>{
                setUserLocationString(res);
                setprocess(false);
            });
        })
        
    }, [])

    const menuList = [
        {
            title : "Home",
            route : "/",
            class : "fas fa-home"
        },
        {
            title : "Places",
            route : "/places",
            class : "fas fa-map-pin"
        },
        {
            title : "Users",
            route : "/users",
            class : "fas fa-users"
        },
        {
            title : "Support",
            route : "/support",
            class : "fas fa-headset"
        }
        
    ]
  return (
    <div className ="sidebarInfo">
        {
            isAuth() ? <>
                <div className="userPreview">
                    <Link to ="/profile"><Avatar alt="UserName" src={userInfo.avatar} sx={{ width: 100, height: 100, margin : "0 auto"}} /></Link>
                    <p>{process ? <CircularProgress color ="success"/> : userLocationString}</p>
                </div>
                <List>
                        {menuList?.map((x)=>(
                            <Link to  = {x.route}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <div className="itemLine">
                                            <ListItemIcon>
                                                <i className ={x.class}></i>
                                            </ListItemIcon>
                                            <h2>{x.title}</h2>  
                                        </div>
                                    </ListItemButton>
                                </ListItem>   
                                <Divider/>
                            </Link>
                            
                        ))
                    
                        } 
                        <Link to = "subscribers">
                            <ListItem disablePadding>
                                    <ListItemButton>
                                        <div className="itemLine">
                                            <ListItemIcon>
                                                <i class="fas fa-users"></i>
                                            </ListItemIcon>
                                            <h2>Subscribers</h2>  
                                        </div>
                                    </ListItemButton>
                            </ListItem>   
                            <Divider/>
                        </Link>    
                        <Link to = "newLocation">
                            <ListItem disablePadding>
                                    <ListItemButton>
                                        <div className="itemLine">
                                            <ListItemIcon>
                                            <i class="fas fa-plus-circle"></i>
                                            </ListItemIcon>
                                            <h2>Create Location</h2>  
                                        </div>
                                    </ListItemButton>
                            </ListItem>   
                            <Divider/>
                        </Link> 
                    </List>
                    <div className="logout">
                        <button id = "logout_button" onClick ={()=>{
                            localStorage.removeItem("token");
                            window.location = "/";
                            
                        }}><i className="fas fa-sign-out-alt" ></i>Logout</button>
                    </div>
            </> : <>
                <div className="non-user-preview">
                    <Button variant="contained" size ="large" onClick ={()=>setIsOpen(true)}>SignIn / Up</Button>
                </div>
                    <List>
                        {menuList?.map((x)=>(
                            <Link to  = {x.route}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <div className="itemLine">
                                            <ListItemIcon>
                                                <i className ={x.class}></i>
                                            </ListItemIcon>
                                            <h2>{x.title}</h2>  
                                        </div>
                                    </ListItemButton>
                                </ListItem>   
                                <Divider/>
                            </Link>
                            
                        ))
                    
                        }  
                    </List>
                {
                    isOpen ? <Login isOpen ={isOpen} onClose ={close}/> : <></>
                }
                
            </>
        }
    </div>
  )
}

export default MenuContent