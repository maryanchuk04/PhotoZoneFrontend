import React from 'react'
import './PlaceLine.css'
import Slider from 'react-slick';
import { Button, Rating } from '@mui/material';


const PlaceLine = ({place}) => {

  return (
    <div className ="PlaceLine">
        <div className="image">
            <img src ={place.mainImage} alt = {place.title}/>
        </div>
        <div className="information">
                  <h1>{place.title}</h1>
                  <p className = "desk">{place.description}</p>
                  <p className = "loca">Location : {place.location.locationString}</p>
                  <Rating value = {place.rating} readOnly/>
              </div>
    </div>
  )
}

export default PlaceLine