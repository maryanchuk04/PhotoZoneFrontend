import { Divider } from '@mui/material';
import React from 'react'
import './activities.css';
import { Link } from '@mui/material';

const PlaceActivity = ({place}) => {
  return (
    <div className = "activityPlace">
        <div className="title">
        <Divider sx={{width:'100%'}} >
            <h1><Link to = {`/place/${place.id}`}>{place.title}</Link></h1>
            </Divider>
        </div>
        <div className="main">
            <div className="image">
                <img src={place.mainImage} alt={place.title} />
            </div>
            <div className="info">
                <p>{place.description}</p>
                <div className="location">
                    <p><span>Location :</span></p>
                    <p>{place.location.locationName}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlaceActivity