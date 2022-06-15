import { Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PlaceService from '../../Services/PlaceService'
import ListElement from './ListElement'
import './ListPlaces.css'
import {ClockLoader} from 'react-spinners'

const ListPlaces = ({locationLoad,center, loading}) => {
    let service = new PlaceService();
    const [places,setPlaces] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(()=>{
        service.getAllPlaces().then((res)=>{
            console.log(res.data);
            setPlaces(res.data);
            setLoad(false);
          })
        console.log(locationLoad)
    },[])

    useEffect(() => {
      console.log(locationLoad);
    
      
    }, [locationLoad])
    

  return (
    <div className ="places_list">
        <div className="placesListContainer">
            <div className="title">
                <h2>All places on Map!</h2>
            </div>
            {locationLoad ?  <div className = "loader"><ClockLoader size= "150" css = {{margin : "auto" }} color={"#A254FF"}/></div> :  
            <div className="list">
                {
                    places?.map((element)=>(
                        <>
                            <ListElement element ={element} center ={center} loading= {loading}/>
                            <Divider/> 
                        </>
                    ))
                }
            </div>
            }
        </div>
    </div>
  )
}

export default ListPlaces