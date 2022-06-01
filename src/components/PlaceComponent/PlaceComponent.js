import React from 'react'
import { places } from '../Test'
import './PlaceComponent.css';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
const PlaceComponent = () => {
    const place = places[0];
  return (
    <Link to = {`place/${place.Id}`}>
    <div className ='popup_component'>
        <div className="title">
            <h2>{place.Title}</h2>
        </div>
        <div className="image">
            <img src={place.Image} alt={place.Title} />
        </div>
        <div className="rating">
            <Rating
                name="simple-controlled"
                value={place.Rate}    
            />
        </div>
        
       
    </div>
    </Link>
  )
}

export default PlaceComponent