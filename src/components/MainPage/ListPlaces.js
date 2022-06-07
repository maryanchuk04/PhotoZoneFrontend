import { Divider } from '@mui/material'
import React from 'react'
import ListElement from './ListElement'
import './ListPlaces.css'


const ListPlaces = ({places, center, loading}) => {
  return (
    <div className ="places_list">
        <div className="placesListContainer">
            <div className="title">
                <h2>All places on Map!</h2>
            </div>
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
        </div>
    </div>
  )
}

export default ListPlaces