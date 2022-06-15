import React, {useState, useEffect} from 'react'
import { calcDistance, getReverseInDetale } from '../../Services/GeolocationService';
import CircularProgress from '@mui/material/CircularProgress';
import './ListElement.css'
import  {Link} from 'react-router-dom';
import { ClockLoader } from 'react-spinners';

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
    
  return loading?  <div className = "loader"><ClockLoader size= "150" css = {{margin : "auto" }} color={"#A254FF"}/></div> : 
    <Link to ={`/place/${element.id}`} className = "listElement">
        <div className="information">
            <h3>{element.title}</h3>  
            <p>{locationString}</p>
            <p>Distance : {loading ? <CircularProgress/> : distance} km.</p>   
        </div>
        <div className="image">
            <img src={element.mainImage} alt={element.title} />
        </div>   
    </Link>
  
}

export default ListElement