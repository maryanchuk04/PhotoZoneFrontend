import { Divider } from '@mui/material'
import React from 'react'
import PlaceLine from '../PlaceComponent/PlaceLine'
import './places.css'
const TabsLayout = ({places}) => {
  return (
    <div className = "place_tabs">
        <Divider/>
        {
            
            places?.map((place)=>
            <>
                <PlaceLine place = {place}/>
                <Divider/>
            </>
            )
        }
    </div>
  )
}

export default TabsLayout