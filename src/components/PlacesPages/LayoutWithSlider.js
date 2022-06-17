import { Button, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Slider from "react-slick";
import './places.css'

const LayoutWithSlider = ({places}) => {
    let navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight : true,
        arrows : true
      };

      useEffect(()=>{
        console.log(places);
      },[])
  return <Slider {...settings} className ="slider">
      {places?.map((place)=>
          <div className = 'place_slider'>
              <div className="image">
                  <img src={place.mainImage} alt={place.title}/>
              </div>
              <div className="information">
                  <h1>{place.title}</h1>
                  <p className = "desk">{place.description}</p>
                  
                  <p className = "loca">Location : {place.location.locationName}</p>
                  <Rating value = {place.rate} readOnly/>
                  <Button variant = "text" className="more" onClick = {()=> navigate(`/place/${place.id}`)}>More</Button>
              </div>
          </div>
      )}
  </Slider>
}

export default LayoutWithSlider