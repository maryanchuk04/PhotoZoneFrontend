import React from 'react'
import './ButtonMyLocation.css'
import Maps, {ChangeLocation, ChangeView} from "../../Maps/Maps";
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';


function ButtonMyLocation({currentLocation, setCurrentLocation}) {
    const MyLocationClick = () => {
        console.log(currentLocation);
        setCurrentLocation(currentLocation);
    }

  return(
      <div id = "myLocationButton" onClick ={()=>MyLocationClick()}>
          <Fab variant="extended">
              <NavigationIcon sx={{ mr: 1 }} />
              My location
          </Fab>
      </div>
  )
}
export default ButtonMyLocation;