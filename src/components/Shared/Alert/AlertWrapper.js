import React from 'react'
import { Alert } from '@mui/material'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const AlertWrapper = (props) => {

  return <Alert action ={<IconButton
      aria-label="close"
      color="error"
      size="small"
      onClick={() => {
        props.close();
      }}
      
    >
      <CloseIcon fontSize="inherit" />
    </IconButton> }  sx ={{position: "absolute", bottom: 0, left : 0}} severity ='error'>{props.children}</Alert>

 
}

export default AlertWrapper