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


const drawerWidth = "fit-content";

const NewMenu = () => {
    const [sidebar, setSidebar] =useState(false);
    let navigate = useNavigate();
    
      const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins?.toolbar,
        justifyContent: "flex-end"
      }));
    const theme = useTheme();

  return (
      <>
    <AppBar position="sticky" sx ={{height : "6vh", minWidth : "100%", backgroundColor: "#21D4FD", backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)"}}>
        <div className="bar">
            <Toolbar> 
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
              <Link to = '/profile' className="avatar">
                <h2>MaksMaryanchuk</h2>
                <Avatar src  ={"https://i.ibb.co/D1C0s8Y/2022-03-14-19-40-03.jpg"} sx ={{height : "4vh", width : "4vh"}}/> 
              </Link>
              : <></>
            }
    </AppBar>
    <Drawer sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
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
      <MenuContent/>


    </Drawer>
    
    </>
  )
}

export default NewMenu