import React, {useEffect, useState} from 'react'
import { useMap } from 'react-leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import './Maps.css'
import * as L from "leaflet";
import PlaceComponent from '../PlaceComponent/PlaceComponent';
import PlaceService from '../../Services/PlaceService';
import { elementTypeAcceptingRef } from '@mui/utils';



export function ChangeView({ center, zoom, places }) {
  const [location, setLocation] = useState(center);
  const map = useMap();
  map.setView(center, zoom);
  return null;
}


const Maps = (props) => {
  const [location, setLocation] = useState(props.center);
  function handleChange(latlng) {
    setLocation(latlng);
    props.onChangeValues({ latitude: latlng.lat, longitude: latlng.lng });
  }

  function updateMarker(e) {
    console.log(e.target.getLatLng())
    handleChange(e.target.getLatLng());
  }

  const LeafIcon = L.Icon.extend({
    options: {}
  });

  const personIcon = new LeafIcon({
    iconUrl:
      "https://icon-library.com/images/google-maps-person-icon/google-maps-person-icon-15.jpg",
    iconSize:     [40, 50], // size of the icon
    popupAnchor:  [-3, -76]
  });
 
  useEffect(() => {
    console.log(props)
  
    
  }, [])

  return (
      props.center &&
      <MapContainer  center={props.center} zoom={props.zoom === undefined ? 15 : props.zoom } scrollWheelZoom = {true} >
        <ChangeView  center={props.center} zoom={props.zoom === undefined ? 15 : props.zoom }/>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {
            props.places?.map((place)=>
              <Marker position={{lat: place.location?.latitude, lng:place.location?.longitude}}
                riseOnHover={true}
                onDragend={updateMarker}>
                  <Popup position={{lat : place.location.latitude, lng : place.location?.longitude}}>
                    <pre>
                        <PlaceComponent place = {place}/>
                    </pre>
                </Popup>
              </Marker>
            
            ) 
          }  
              <Marker position={props.center}
                riseOnHover={true}
                onDragend={updateMarker} icon = {personIcon}>
                   <Popup position={props.center}>
                    <h3>Your Position</h3>
                </Popup>
              </Marker>
        
      </MapContainer>
  )
}

export default Maps