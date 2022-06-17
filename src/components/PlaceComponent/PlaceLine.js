import React from 'react'
import './PlaceLine.css'
import Slider from 'react-slick';
import { Button, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const PlaceLine = ({place}) => {

  return (
    <div className ="PlaceLine">
        <div className="image">
            <img src ={place.mainImage} alt = {place.title}/>
        </div>
        <div className="information">
                  <h1><Link to = {`/place/${place.id}`}>{place.title}</Link></h1>
                  <p className = "desk">{place.description}</p>
                  <p className = "loca">Location : {place.location.locationName}</p>
                  <Rating value = {place.rate} readOnly/>
              </div>
    </div>
  )
}

export default PlaceLine