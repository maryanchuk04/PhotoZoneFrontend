import React, { useEffect, useState } from 'react'
import UserService from '../../Services/UserService';
import './subscribers.css'
import UserShortInfoLine from './userShortInfoLine';
import { ClockLoader} from 'react-spinners';
import { Divider, List, ListItem, ListItemButton } from '@mui/material';

const SubscribersBox = (props) => {

    const {menuValue, items, loading, changeLoad} = props;
    const [users, setUsers] = useState([]);
    const [isload, setIsLoad] = useState(loading);
    let guids = [];
    let service = new UserService();
    
    
    
    useEffect(()=>{
        console.log(items);
        if(items?.lendth !== 0){
            items?.forEach(elem => {
                guids.push(elem.subscribeId);
            });
            
            const data = {ids : guids}
            console.log(data);
            service.GetUsersInfoByIds(data).then((res)=>{
                console.log(res.data);
                setUsers(res.data);
                changeLoad();
                setIsLoad(false);
                
            });
        }
        
        
        console.log(guids)
    },[menuValue])

  return <>

     { !loading ? 
        <>
        { users.length !== 0 ?
            
            users?.map((user,index) =>  (
                <>
                    { index === users.length-1 ? <>
                        <Divider/>
                        <UserShortInfoLine user = {user}/>
                        <Divider/>  
                        </>  : 
                        <>
                            <Divider/>
                            <UserShortInfoLine user = {user}/>   
                        </> 
                    }   
                </>
                
            )) : <h3 className = "error">For now, there is no one here!</h3>
            
        }
        </>
        : <ClockLoader size= "150" css = {{margin : "auto" }} color={"#A254FF"}/>
     }
  </>
    
}

export default SubscribersBox