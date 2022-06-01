import React, {useState} from 'react'
import { useMap } from 'react-leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import './Maps.css'
import {map} from "leaflet";
import PlaceComponent from '../PlaceComponent/PlaceComponent';

export function ChangeView({ center, zoom }) {
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
//foreach and display more buttons
  
  return (
      props.center &&
      <MapContainer center={props.center} zoom={props.zoom === undefined ? 15 : props.zoom } scrollWheelZoom = {true} >
        <ChangeView center={props.center} zoom={props.zoom === undefined ? 15 : props.zoom }/>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
          <Marker position={props.center}
                riseOnHover={true}
                onDragend={updateMarker}>
            
                <Popup position={props.center}>
                    <pre>
                        <PlaceComponent/>
                    </pre>
                </Popup>
            </Marker>
      
      </MapContainer>
  )
}

export default Maps