import React from 'react'
import './places.css'
const PlacesList = ({places}) => {
  return (
    <div className = "place_list">
        {
          places?.map((place, index)=>{
            <h1>{place.title}</h1>
          })
        }
    </div>
  )
}

export default PlacesList