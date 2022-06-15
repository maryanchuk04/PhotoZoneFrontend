import React, { useEffect, useState } from 'react'
import './places.css'
import { ClockLoader } from 'react-spinners';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import { IconButton } from '@mui/material';
import TableRowsIcon from '@mui/icons-material/TableRows';
import TabsLayout from './TabsLayout';
import LayoutWithSlider from './LayoutWithSlider'
const PlacesList = ({places, loading}) => {
  const [layoutState, setLayoutState] = useState(0);
  useEffect(()=>{
    console.log(places);
  },[])

  useEffect(()=>{
    console.log(layoutState);

  },[layoutState])
  return (
    <div className = "place_list">
      <div className="chooseLayout">
        <IconButton onClick = {()=>setLayoutState(2)}><ArtTrackIcon htmlColor = "black"/></IconButton>
        <IconButton onClick = {()=>setLayoutState(1)}><TableRowsIcon htmlColor = "black"/></IconButton>
      </div>
      {
        layoutState===1 ? loading ?<div className = "loader"><ClockLoader size= "150" css = {{margin : "auto" }} color={"#A254FF"}/></div>  : <TabsLayout places = {places}/> : loading ? <div className = "loader"><ClockLoader size= "150" css = {{margin : "auto" }} color={"#A254FF"}/></div>  : <LayoutWithSlider places = {places}/>
      }
    </div>
  )
}

export default PlacesList