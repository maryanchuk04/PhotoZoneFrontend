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
        setLoading(true);
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
        <div className="placesss">
            {/* {loading ?  <div className = "loader"><ClockLoader size= "150" css = {{margin : "auto" }} color={"#A254FF"}/></div> :  */}
                <PlacesList places = {places} loading = {loading}/>
            
        </div>
       
    </div>
  )
}

export default PlacesPage