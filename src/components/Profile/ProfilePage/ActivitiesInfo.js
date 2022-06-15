import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import PlaceService from '../../../Services/PlaceService'
import PlaceLine from '../../PlaceComponent/PlaceLine';
import './activities.css';
import PlaceActivity from './PlaceActivity';

const ActivitiesInfo = ({id,user}) => {
  const service = new PlaceService();
  const [places, setPlaces] = useState([]);

  useEffect(()=>{
    service.getPlaceByUserId(id).then((res)=>{
      setPlaces(res.data);
      console.log(res);
    })
  },[])
  return (
    <div className = "activities">
      
      
     <h1>User`s activities</h1>
      
      {
        places?.length === 0 ? <h1 style ={{margin: "auto", textAlign: "center"}}>There are currently no activities...</h1>
         : places?.map((place)=> <PlaceActivity place ={place}/>)

      }
    </div>
  )
}

export default ActivitiesInfo