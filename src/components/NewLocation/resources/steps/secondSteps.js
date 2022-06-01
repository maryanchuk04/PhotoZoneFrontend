import React, {useState, useEffect} from 'react'
import Maps from '../../../Maps/Maps'
import './secondSteps.css'
import { map } from 'leaflet';
import { getBrowserLocation } from '../../../../Services/GeolocationService';
import Autocomplete from "react-google-autocomplete";
import { TextField } from '@mui/material'
import { getReverseInDetale } from '../../../../Services/GeolocationService';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from '@mui/styled-engine';


const defaultcenter = {
  lat: 48.2864702,
  lng: 25.9376532
};
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SecondSteps = ({NewLocationObject}) => {
  const [center, setCenter] = useState(defaultcenter)
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getBrowserLocation().then((curLocation)=>{
        setCenter(curLocation);
        getReverseInDetale(curLocation).then((res)=>{
          setInput(res);
          setLoading(false);
        }); 
    }).catch((defaultcenter) => {
        setCenter(defaultcenter);
        setLoading(false);
    })
  },[])

  const onMapChange  = () =>{
    
  }



  return !loading ? 
  <div className ={'location_part'}>
    <div className ="location_info_block">
      <TextField id="filled-basic" label="Location" variant="filled" value = {input} disabled/>
    </div>
    <div className="location_display_block">
      <Maps center = {center} whenCreated={map} zoom ={12}/>
    </div>
  </div> : <ClipLoader loading ={loading} css = {override} size = {20}/>
}

export default SecondSteps