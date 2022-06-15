import React, {useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'


const MapWithOnePoint = (props) => {
    const [location, setLocation] = useState(props.center);
    function updateMarker(e) {
        console.log(e.target.getLatLng())
        handleChange(e.target.getLatLng());
      }
      function handleChange(latlng) {
        setLocation(latlng);
        props.onChangeValues({ latitude: latlng.lat, longitude: latlng.lng });
      }
  return props.center &&
  <MapContainer  center={props.center} zoom={props.zoom === undefined ? 15 : props.zoom } scrollWheelZoom = {true} >
    <TileLayer 
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
          <Marker position={props.center}
            riseOnHover={true}
            onDragend={updateMarker}>
               <Popup position={props.center}>
                <h3>{props.locationName}</h3>
            </Popup>
          </Marker>
    
  </MapContainer>
}

export default MapWithOnePoint