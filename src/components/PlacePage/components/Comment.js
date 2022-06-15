import { Avatar, Divider } from '@mui/material';
import React, { useEffect ,useState} from 'react'
import PlaceService from '../../../Services/PlaceService';
import {useNavigate} from 'react-router-dom'
import UserService from '../../../Services/UserService'
import '../placePage.css';

const Comment = ({comment,setLoading}) => {
    const [user, setUser] = useState({});
    const userService = new UserService();
    const placeService = new PlaceService();
    const navigate = useNavigate('');

    useEffect(()=>{
        userService.GetUserInfoById(comment.userId).then((user)=>{
            setUser(user.data);
            console.log(user)
            setLoading(false);
        })
    },[])
  return <>
  <Divider sx ={{width : "90%", margin : "0 auto"}}/>
   <div className = "comment">
        <Avatar sx= {{width : 60, height: 60, marginRight : "20px", cursor: "pointer"}} src = {user.avatar} alt = {user.userName} onClick ={()=>navigate(`/userspages/${comment.userId}`)}/>
        <div className="info">
            <h3>{user.userName}</h3>
            <p>{comment.commentText}</p>
        </div>
    </div>
    </>
}

export default Comment