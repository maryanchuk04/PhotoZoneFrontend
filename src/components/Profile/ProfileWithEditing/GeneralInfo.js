import React, { useState } from 'react'
import { TextField,Select, Button } from '@mui/material'
import './profile.css'
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MenuItem } from '@mui/material';

const GeneralInfo = ({userData}) => {
    const [date, setDate]=useState(userData.birthday);
    console.log(userData)
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


  return (
    <div className ="generalInfo">
        <h1 style ={{textAlign:"center", marginTop : "10px"}}>General Information</h1>
        <div className="generalInfoContainer">
            <div className="inline">
                <div className="editfield">
                    <h3>Edit User Name</h3> <TextField
                    id="demo-helper-text-misaligned"
                    label="User name"
                    defaultValue ={userData.userName}
                />
                </div>
                <div className="editfield">
                    <h3>Edit FullName</h3> <TextField
                    id="demo-helper-text-misaligned"
                    label="Full name"
                    defaultValue = {userData.fullName}
                />
                </div>
            </div>
            <div className="inline">
                <div className="editfield">
                        <h3>Edit Phone Number</h3>
                        <TextField
                        id="demo-helper-text-misaligned"
                        label="Phone number"
                        defaultValue = {userData.phone}
                        />
                </div>
                <div className="editfield">
                        <h3>Edit Date of Birth</h3>
                        <LocalizationProvider dateAdapter ={AdapterDateFns}>
                            <DatePicker      
                                label="Date of birth"
                                onAccept ={()=>console.log(date)}
                                views={['year', 'month', 'day']}
                                defaultValue={userData.birthday}
                                value ={date}
                                showToolbar ={true}
                                onChange={(newValue) => {
                                    setDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                </div>
                </div>
                <div className="inline">
                    <div className="editfield">
                        <h3>Edit gender</h3>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            sx ={{width : "100%"}}
                            defaultValue ={userData.gender}       
                            >
                                <MenuItem value={0}>Male</MenuItem>
                                <MenuItem value={1}>Female</MenuItem>
                                <MenuItem value={2}>Other</MenuItem>
                            </Select>
                        
                        
                        <div className="othe">
                            <h3>Interests, Hobbies, and something about you:</h3>
                            <TextField
                            id="outlined-multiline-static"
                            label="Write about yourself"
                            multiline
                            rows={10}
                            defaultValue ={userData.hobby}
                            />

                        </div>
                    </div>
                    <div className="editfield">
                        <h2>Account information</h2>
                       
                        <div className="changeEmail">
                        <h3>Edit Email</h3>
                            <TextField
                            id="demo-helper-text-misaligned"
                            label="Email Address"
                            type ='email'
                            defaultValue ={userData.email}
                            />
                            <Button variant="contained">Change Email</Button>
                        </div>
                        <div className="changePassword">
                            <h3>Change Password</h3>
                            <TextField
                            id="demo-helper-text-misaligned"
                            label="Password"
                            type ='password'
                            />
                            <TextField
                            id="demo-helper-text-misaligned"
                            label="Confirm Password"
                            type ='password'
                            />
                            {/* Open Modal with input numbers for confirm this from post*/}
                            <Button variant="contained">Change Password</Button>
                        </div>
                    </div>
                </div>
            
                

        </div>
    </div>
  )
}

export default GeneralInfo