import React, {useState, useEffect} from 'react'
import Maps from '../../../Maps/Maps'
import './secondSteps.css'
import { latLng, map } from 'leaflet';
import { getBrowserLocation, getReverse } from '../../../../Services/GeolocationService';
import Autocomplete from "react-google-autocomplete";
import { TextField } from '@mui/material'
import { getReverseInDetale } from '../../../../Services/GeolocationService';
import  {ClockLoader} from 'react-spinners';
import { css } from '@mui/styled-engine';
import MapWithPicker from '../../../Maps/MapsWithPicker';
import { CircularProgress } from '@mui/material';

const defaultcenter = {
  lat: 48.2864702,
  lng: 25.9376532
};
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SecondSteps = ({setLocation, location}) => {
  const [center, setCenter] = useState(defaultcenter)
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingInput, setLoadingInput]= useState(false);

  useEffect(()=>{
    if(location.longitude === 0 || location.latitude === 0){
      getBrowserLocation().then((curLocation)=>{
        setCenter(curLocation);
        console.log(curLocation)
        
        getReverseInDetale(curLocation).then((res)=>{

          console.log("hello", res)
          setLocation({
            latitude : curLocation.lat,
            longitude : curLocation.lng,
            locationString : res
          })
          setLoading(false);
        }); 
    }).catch((defaultcenter) => {
        setCenter(defaultcenter);
        setLoading(false);
    })
    }else{
      setLoading(false)
    }
    
  },[])

  const handleChangeLocation = (value) =>{
    setLoadingInput(true);
    console.log(value)
    setCenter(value);
    getReverseInDetale(value).then((res)=>{
      console.log(res)
      
      setInput(res);
      
      setLocation({
        longitude : value.lng,
        latitude : value.lat,
        locationString : res
      })

      setLoadingInput(false);
    })
  }





  return !loading ? 
  <div className ='location_part'>
    <div className ="location_info_block">
      { !loadingInput ? <TextField id="filled-basic" label="Location" variant="filled" value = {location.locationString} disabled/> : <CircularProgress />}
    </div>
    <div className="location_display_block">
      <MapWithPicker defaultCenter = {latLng(location.latitude, location.longitude)} setDefaultCenter = {handleChangeLocation}/>
    </div>
  </div> : <ClockLoader size= "150" css = {{margin : "auto" }} color={"#A254FF"}/>
}

export default SecondSteps