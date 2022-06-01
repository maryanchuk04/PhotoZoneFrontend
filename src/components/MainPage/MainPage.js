import React, {useState, useCallback, createRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Map from '../Maps/Maps';
import './MainPage.css';
import ButtonsAddNewLocation from '../Shared/Buttons/ButtonsAddNewLocation';
import ButtonMyLocation from "../Shared/Buttons/ButtonMyLocation";
import { map } from 'leaflet';
import Menu from '../Shared/Menu/Menu';
import { getBrowserLocation } from '../../Services/GeolocationService';
import {LatLng} from "leaflet/dist/leaflet-src.esm";
import SearchLocationButton from "../Shared/Buttons/SearchLocationButton";



const defaultcenter = {
    lat: 48.2864702,
    lng: 25.9376532
  };

const MainPage = () => {

    const [center, setcenter] = useState(defaultcenter)
    const [isOpen,setIsOpen] = useState(false);

    const setCurrentLocation =(center2) =>{
           setcenter({
               lat: 0,
               lng: 0
           });
           setTimeout(()=>setcenter(center2),1000);
    }
    useEffect(()=>{
        getBrowserLocation().then((curLocation)=>{
            setcenter(curLocation);
        }).catch((defaultcenter) => {
            setcenter(defaultcenter);
        })
    },[])

     const onPlaceSelect = useCallback(
       (coordinates) => {
         setcenter(coordinates)
         if (map) map.flyTo(coordinates);
       },
       [],
     )

  return (
    <div>

          <div className = "maps_container">
            <Map center = {center} whenCreated={map} />
              <ButtonMyLocation currentLocation = {center} setCurrentLocation ={setCurrentLocation} />
              <Link to = '/newlocation'><ButtonsAddNewLocation/></Link>
          </div>

            <SearchLocationButton/>
        </div>
  )
}

export default MainPage