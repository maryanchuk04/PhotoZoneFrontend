import React, { useEffect, useState } from 'react';
import './places.css';
import { TextField } from '@mui/material';
import PlacesList from './PlacesList';
import PlaceService from '../../Services/PlaceService';
import {ClockLoader} from 'react-spinners'


const PlacesPage = () => {
    const [loading, setLoading] = useState(true);
    const [places, setPlaces] = useState([]);
    let placeService = new PlaceService();
    useEffect(()=>{
        placeService.getAllPlaces().then((res)=>{
            console.log(res);
            setPlaces(res.data);
            setLoading(false);
        })
    },[])

    const handleSearch = (value) =>{
        const data = {
            searchText : value
        }
        placeService.SearchPlaces(data).then((res)=>{
            console.log(res);
            
            setPlaces(res.data);
            setLoading(false);
        })
    }
  return (
    <div className = "places">
        <div className="search">
            <TextField variant = "outlined"  className ="inputSearch" placeholder = "Search..." onChange = {(e)=>handleSearch(e.target.value)} />
        </div>
        {loading ? <ClockLoader/> : 
            <PlacesList places = {places}/>
        }
    </div>
  )
}

export default PlacesPage