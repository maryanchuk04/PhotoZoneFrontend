import React, {useEffect, useState}from 'react';
import Menu from "../../Shared/Menu/Menu";
import './ProfilePage.css';
import {Link} from 'react-router-dom';
import ProfileMenu from "./profileMenu";
import AboutBlock from "./AboutBlock";
import FriendsBlock from "./FriendsBlock";
import { useParams } from 'react-router';
import UserService from '../../../Services/UserService';
import { ClockLoader } from 'react-spinners';


const ProfilePage = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    let service = new UserService();
    const {id}= useParams(""); 
    useEffect(()=>{
        console.log(id);
        service.GetUserInfoById(id).then((res)=>{
            console.log(res);
            setUser(res.data);
            setLoading(false);
        })

    },[])
    return !loading ?
        <div className="profile_page">
            <div className="profile_container">
                <div className="container">
                <ProfileMenu user = {user}/>
                <AboutBlock user = {user}/>
                </div>
            </div>
        </div>
        : <ClockLoader size ="200" css = {{margin : "auto" }} color={"#A254FF"}/>
    
};

export default ProfilePage;