import React, {useEffect, useState} from 'react'
import './subscribers.css'
import { BottomNavigation,BottomNavigationAction, Badge } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SubscribersBox from './SubscribersBox';
import UserService from '../../Services/UserService';

const SubscribersPage = () => {

    const [user, setUser] = useState({});
    const [loading, setloading] = useState(true);
    let service = new UserService();
    const [value, setValue] = useState(0);

    useEffect(()=>{
        if (localStorage.getItem("token") === null ){
            window.location = '/'
        }
        service.GetCurrentUserInfo().then((res)=>{
            setUser(res.data);
            console.log(res.data)
        });
    },[])

    const handleChange = () =>{
        setloading(false)
    }


  return (
    <div className = "subscribers">
       <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                if(value === newValue){
                    return;
                }
                setloading(true)
                setValue(newValue);
                console.log(newValue)
            }}
            sx={{width : "100%", justifyContent :"space-around", height : "80px"}}
            >
            <BottomNavigationAction label="Followers" sx ={{maxWidth :"100%", fontSize : "24px"}} icon ={<Badge badgeContent={user.subsctibersCount} color="primary"><PersonIcon/></Badge>}/>
            <BottomNavigationAction label="Following"sx ={{maxWidth :"100%"}} icon ={<Badge badgeContent={user.subscriptionCount} color="primary"><PersonOutlineIcon/></Badge>} />
        </BottomNavigation>
        <div className ={"subscribers_box"}>
            {value === null ? <></> 
            : value === 0 ? 
                <SubscribersBox menuValue = {value} items ={user.subscribers} loading= {loading} changeLoad = {handleChange}/> 
                    : <SubscribersBox menuValue = {value} items ={user.subscriptions} loading ={loading} changeLoad = {handleChange}/> }
        </div>
    </div>
  )
}

export default SubscribersPage