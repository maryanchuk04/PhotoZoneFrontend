import React, { useState, useEffect } from 'react'
import { useTheme } from '@emotion/react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './newMenu.css'
import MuiAppBar from "@mui/material/AppBar";
import { SwipeableDrawer } from '@mui/material';
import { Drawer } from '@mui/material';
import { styled } from '@mui/system';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuContent from './menuContent';
import { Divider, Avatar } from '@mui/material';
import { isAuth } from '../../../Services/SharedFunctions';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router';
import UserService from '../../../Services/UserService';
import useMedia from 'use-media';

const drawerWidth = "fit-content";

const NewMenu = () => {
    const media = useMedia({maxWidth : "635px"});

    const [sidebar, setSidebar] =useState(false);
    let navigate = useNavigate();
      let service = new UserService();
      const [user,setUser] =  useState({});

      const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins?.toolbar,
        justifyContent: "flex-end"
      }));
    const theme = useTheme();

    useEffect(()=>{
      if(isAuth()){
        service.GetCurrentUserInfo().then((res)=>{
          setUser(res.data);
          console.log(res.data);
        });
        console.log(media)
      }
    },[])


  return (
      <>
    <AppBar position="sticky" sx ={{height : "6vh", minWidth : "100%", backgroundColor: "#21D4FD", backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)"}}>
        <div className="bar">
            <Toolbar sx = {{position : 'absolute'}}> 
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick ={()=> setSidebar(true)}
            >
                <MenuIcon />
            </IconButton>
            
            </Toolbar>
            
            
            <img src="https://see.fontimg.com/api/renderfont4/5Y58/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/UGhvdG9ab25l/vegan-style-personal-use.png" alt="" onClick={()=>navigate('/')} />
        </div>
        {isAuth() ? 
              <Link to = '/profile' className="avatarHeader">
                {!media ? <h2>{user.userName}</h2> : <></>}
                <Avatar src  ={user.avatar} sx ={{height : "4vh", width : "4vh"}}/> 
              </Link>
              : <></>
            }
    </AppBar>
    <Drawer sx={{
          border: "0",
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          },
          
        }}
        
        variant="persistent"
        anchor="left"
        open={sidebar}>
        <DrawerHeader sx ={{height : "6vh"}}>
          <IconButton onClick={()=>setSidebar(false)}>
            {theme.direction === "ltr" ? (
              <ChevronRightIcon />
            ) : (
                <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
      <MenuContent userInfo = {user}/>


    </Drawer>
    
    </>
  )
}

export default NewMenu