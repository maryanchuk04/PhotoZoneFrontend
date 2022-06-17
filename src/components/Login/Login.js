import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button,DialogContentText} from '@mui/material'
import AboutWebSite from'./AboutWebSite';
import './login.css';
import LoginForm from './LoginForm';


export const Login = ({isOpen, onClose}) => {
    
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');

    
  return (
    <div>
        <Dialog
        sx ={{padding : 0}}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={isOpen}
        onClose={onClose} 
      >
        <DialogContent sx ={{padding : 0}}>
            <div className="login_content">
                <AboutWebSite/>
                <LoginForm onClose={onClose}/>
            </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
