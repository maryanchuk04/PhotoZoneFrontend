import React from 'react';
import './AboutBlock.css'
import {friends} from "../../Test";
import {Avatar} from "@mui/material";
import SidebarInfo from './sidebarInfo';
import ActivitiesInfo from './ActivitiesInfo';
const AboutBlock = ({user}) => {
    return (
        <div id = "about" className="about" >
            <SidebarInfo user = {user}/>
            <ActivitiesInfo user = {user}/>
        </div>
    )
};

export default AboutBlock;