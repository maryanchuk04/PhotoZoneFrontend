import React from 'react'
import './ButtonsAddNewLocation.css'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from '@mui/material';

const ButtonsAddNewLocation = () => {
    return (
    <div>
        <div id = "addNewLocationButton">
        <Tooltip title="Create new location" placement="top">
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        </div>
    </div>
  )
}

export default ButtonsAddNewLocation