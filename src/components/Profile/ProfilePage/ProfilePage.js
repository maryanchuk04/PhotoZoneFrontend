import React from 'react';
import Menu from "../../Shared/Menu/Menu";
import './ProfilePage.css';
import {Link} from 'react-router-dom';
import {Button,IconButton,Input} from "@mui/material";
import {Height, PhotoCamera, Place} from "@mui/icons-material";
import {Avatar} from "@mui/material";
import { styled } from '@mui/material/styles';
import {places, friends} from "../../Test";
import PlacePreviewCard from "../../Shared/PlacePreviewCard/PlacePreviewCard";
import profileMenu from "./profileMenu";
import ProfileMenu from "./profileMenu";
import FavouriteBlock from "./FavouriteBlock";
import AboutBlock from "./AboutBlock";
import FriendsBlock from "./FriendsBlock";
import Footer from "../../Footer/Footer";



const ProfilePage = () => {
    
    return (
        <div className="profile_page">
            <div className="profile_container">
                <ProfileMenu/>
                <AboutBlock/>
            </div>
        </div>
    )
};

export default ProfilePage;