import React from 'react'
import { Alert } from '@mui/material'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const AlertWrapper = (props) => {

  return <Alert action ={<IconButton
        aria-label="close"
        color={props.color}
        size="small"
        onClick={() => {
          props.close();
        }}
        
      >
        <CloseIcon fontSize="inherit" />
      </IconButton> }  sx ={{position: "absolute", bottom: "10px", left : "5px", width : "200px"}} severity ='error'>{props.children}</Alert>


   
 
}

export default AlertWrapper