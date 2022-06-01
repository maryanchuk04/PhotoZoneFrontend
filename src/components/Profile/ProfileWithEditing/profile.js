import React, { useEffect,useState } from 'react'
import './profile.css'
import AvatarInfo from './AvatarInfo'
import GeneralInfo from './GeneralInfo'
import Socials from './Socials'
import {isAuth} from '../../../Services/SharedFunctions'
import { useNavigate } from 'react-router'
import UserService from '../../../Services/UserService'
import ClipLoader from "react-spinners/ClipLoader";


const Profile = () => {
  let navigate = useNavigate();
  let userService = new UserService();
  const [loading, setLoading] = useState(true)
  const [user, setUser] =  useState({});
  useEffect(()=>{
    if (!isAuth())
      navigate('/');
    userService.GetCurrentUserInfo().then((res) =>{
      setUser(res.data);
      console.log(res.data)
      setLoading(false);
    });  
  },[])


  return  loading ? <div className ="spinner"><ClipLoader color={"#9E59FF"} loading={loading} size={150} css ={{margin : "auto",border : "4px solid #9E59FF", borderBottomColor : "transparent" }}/></div> :
  <div className ="profileContainer">
        <GeneralInfo userData ={user}/>
        <div className="rightblock">
            <AvatarInfo userImage ={user.avatar}/>
            <Socials userData ={user}/>
        </div>
     </div>

}

export default Profile