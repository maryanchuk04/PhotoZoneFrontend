import React, {useState, useEffect} from 'react'
import { calcDistance, getReverseInDetale } from '../../Services/GeolocationService';
import CircularProgress from '@mui/material/CircularProgress';
import './ListElement.css'

const ListElement = ({element,center,loading}) => {
    const [loadDistance, setLoadDistance] = useState(true)
    const [locationString, setLocationString] = useState("");
    const [distance, setDistance] = useState(0);
    useEffect(() => {
      console.log(loading)
    }, [loading])
    
    useEffect(() => {
      getReverseInDetale({lat : element.location.latitude, lng : element.location.longitude}).then((res)=>{
        setLocationString(res);
      })
      
     setDistance(calcDistance(center, {lat : element.location.latitude, lng : element.location.longitude}))
    }, [])
    
  return (
    <div className = "listElement">
        <div className="information">
            <h3>{element.title}</h3>  
            <p>{locationString}</p>
            <p>Distance : {loading ? <CircularProgress/> : distance} km.</p>   
        </div>
        <div className="image">
            <img src={element.mainImage} alt={element.title} />
        </div>   
    </div>
  )
}

export default ListElement