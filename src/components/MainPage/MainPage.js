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
import ListPlaces from './ListPlaces';
import PlaceService from '../../Services/PlaceService';
import { Login } from '../Login/Login';
import useMedia from 'use-media';


const defaultcenter = {
    lat: 48.2864702,
    lng: 25.9376532
  };

const MainPage = () => {
    const [loadingDistance, setLoadingDistance] = useState(true);
    const [places, setPlaces] = useState([]);
    const [center, setcenter] = useState(defaultcenter)
    const [isOpen,setIsOpen] = useState(true);
    const [locationLoad,setLocationLoad] = useState(true);
    const media = useMedia({maxWidth : "426px"});

    const close = ()=>{
        setIsOpen(false);
    }

    let service = new PlaceService();

    const setCurrentLocation =(center2) =>{
           setcenter({
               lat: 0,
               lng: 0
           });
           setTimeout(()=>setcenter(center2),1000);
    }
    useEffect(()=>{
        if(localStorage.getItem("token") !== null && localStorage.getItem("token")!== undefined){
          setIsOpen(false)
        }
        getBrowserLocation().then((curLocation)=>{
            service.getAllPlaces().then((res)=>{
              setPlaces(res.data)
              setLocationLoad(false);
              setLoadingDistance(false);
            })
            setcenter(curLocation);
           
        }).catch((defaultcenter) => {
            setcenter(defaultcenter);
            setLocationLoad(false)
            
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
            <Map center = {center} whenCreated={map} places = {places}/>
              <ButtonMyLocation currentLocation = {center} setCurrentLocation ={setCurrentLocation} />
              <Link to = '/newlocation'><ButtonsAddNewLocation/></Link>
          </div>
          {
                    isOpen ? <Login isOpen ={isOpen} onClose ={close}/> : <></>
          }

          {!media ? <ListPlaces locationLoad = { locationLoad} center = {center} loading ={loadingDistance}/>: <></>}
    </div>
  )
}

export default MainPage