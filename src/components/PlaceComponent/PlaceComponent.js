import React from 'react'
import './PlaceComponent.css';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
const PlaceComponent = ({place}) => {
    
  return (
    <Link to = {`place/${place.id}`}>
    <div className ='popup_component'>
        <div className="title">
            <h2>{place.title}</h2>
        </div>
        <div className="image">
            <img src={place.mainImage} alt={place.title} />
        </div>
        <div className="rating">
            <Rating
                name="simple-controlled"
                value={place.rating}    
                readOnly
            />
        </div>
        
       
    </div>
    </Link>
  )
}

export default PlaceComponent