import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'

const MapWithPicker = ({defaultCenter, setDefaultCenter}) => {
    
    const LocationFinderDummy = () => {
        const map = useMapEvents({
            click(e) {
                console.log(e.latlng);
                setDefaultCenter(e.latlng);
            },
        });
        return null;
    };
    
    
    useEffect(()=>{
      console.log(defaultCenter)
      
    },[defaultCenter])
    
    

    return (
      defaultCenter &&
      <MapContainer center={defaultCenter} zoom={ 15 } scrollWheelZoom = {true} >
         
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          
          <Marker position={defaultCenter}
            riseOnHover={true}
          >
          </Marker>
          <LocationFinderDummy />
      </MapContainer>
    )
}

export default MapWithPicker;