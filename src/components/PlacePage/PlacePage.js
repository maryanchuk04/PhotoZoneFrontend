import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import PlaceService from '../../Services/PlaceService'
import UserService from '../../Services/UserService';
import {ClockLoader} from 'react-spinners';
import './placePage.css'
import Place from './Place';

const PlacePage = () => {
    const userService = new UserService();
    const placeService = new PlaceService();
    const {id} = useParams('');
    const [owner, setOwner] = useState({});
    const [loading, setLoading] = useState(true);
    const [place, setPlace] = useState({});

    useEffect(() => {
        placeService.getPlaceById(id).then((res)=>{
            console.log(res);
            setPlace(res.data);
            userService.GetUserInfoById(res.data.ownerId).then((user)=>{
                setOwner(user.data);
                setLoading(false);
            })
        })
    }, [])
    
  return  <div className = "placePage">
  {
  loading ? 
    <div className = "loader"><ClockLoader size= "150" css = {{margin : "auto" }} color={"#A254FF"}/></div>  : 
    <>
      <Place place = {place} user = {owner}/>  
    </>
}
    </div>
  
}

export default PlacePage