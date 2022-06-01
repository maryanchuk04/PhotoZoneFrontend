import React from 'react';
import PropTypes from 'prop-types';
import './PlacePreviewCard.css';
import {Link} from 'react-router-dom'

const PlacePreviewCard = (props) => {
    console.log(props.place.Image)
    return (
        <div className="place">
            <Link to ="#">
            <div className="preview_card">
                    <div className="image"><img src={props.place.Image} alt={props.place.Title}/></div>
                    <div className="card_info">
                        <h2>{props.place.Title}</h2>
                        <h3>{props.place.Description}</h3>
                        <div className="location_info">
                            <h4><i className="fas fa-map-marker-alt"></i>{props.place.Location}</h4>
                        </div>
                    </div>
            </div>
            </Link>
        </div>
    );
}

export default PlacePreviewCard;