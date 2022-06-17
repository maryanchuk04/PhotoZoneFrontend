import React, { useState } from 'react'
import { TextField,Select, Button, IconButton } from '@mui/material'
import './profile.css'
import '../../../custom.css'
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MenuItem } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import UserService from '../../../Services/UserService';
import AlertWrapper from '../../Shared/Alert/AlertWrapper';
import useMedia from 'use-media';

const GeneralInfo = ({userData}) => {
    const media = useMedia({maxWidth : "426px"})
    const [date, setDate]=useState(userData.birthday);
    const [showAlert, setShowAlert] = useState(false);
    console.log(userData)
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState(userData.fullName || "");
    const [userName, setUserName] = useState(userData.userName || "");
    const [hobby, setHobby] = useState(userData.hobby || "");
    const [mail, setMail] = useState(userData.mail || "");
    const [phone, setPhone] = useState(userData.phone || "");
    const [location, setLocation] = useState(userData.location || "");
    const [gender, setGender] = useState(userData.gender || 0);
    let service = new UserService();


    const SaveInfo = (e) =>{
        e.preventDefault();
        const data = {
            userName : userName,
            fullName : fullName,
            hobby : hobby,
            phone: phone,
            gender : gender,
            location : location,
            birthday : date
        }
        console.log(data);
        service.SaveUserInfo(data).then((res)=>{
            console.log(res.data);
            if (res.status === 200){
                setShowAlert(true);
            }
        })
    }

  return !media ? <div className ="generalInfo">
  <div className="save">
      <IconButton color = "success" onClick = {(e)=>SaveInfo(e)}>
          <SaveIcon/>
      </IconButton>
  </div>
  <h1 style ={{textAlign:"center", marginTop : "10px"}}>General Information</h1>
  <div className="generalInfoContainer">
      <div className="inline">
          <div className="editfield">
              <h3>Edit User Name</h3> <TextField
              id="demo-helper-text-misaligned"
              label="User name"
              defaultValue ={userData.userName}
              onChange = {(e)=>setUserName(e.target.value)}
              sx={{width : "100%"}}
          />
          </div>
          <div className="editfield">
              <h3>Edit FullName</h3> <TextField
              id="demo-helper-text-misaligned"
              label="Full name"
              defaultValue = {userData.fullName}
              onChange = {(e)=>setFullName(e.target.value)}
              sx={{width : "100%"}}
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
                  onChange = {(e)=>setPhone(e.target.value)}
                  sx={{width : "100%"}}
                  />
          </div>
          <div className="editfield">
                  <h3>Edit Date of Birth</h3>
                  <LocalizationProvider dateAdapter ={AdapterDateFns}>
                      <DatePicker      
                          label="Date of birth"
                          onAccept ={()=>console.log(date)}
                          views={['year', 'month', 'day']}
                          format="dd/MM/yyyy"
                          defaultValue={userData.birthday}
                          value ={date}
                          showToolbar ={true}
                          onChange={(newValue) => {
                              setDate(newValue);
                          }}
                          renderInput={(params) => <TextField {...params}
                          sx={{width : "100%"}} />}
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
                      onChange = {(e)=>setGender(e.target.value)}
                      sx ={{width : "100%"}}
                      defaultValue ={userData.gender}       
                      >
                          <MenuItem value={0}>Male</MenuItem>
                          <MenuItem value={1}>Female</MenuItem>
                          <MenuItem value={2}>Other</MenuItem>
                  </Select>
                  <h3>Location</h3>
                  <TextField id="demo-helper-text-misaligned" defaultValue = {userData.location} sx={{width : "100%"}} label = "Location"  onChange = {(e)=>setLocation(e.target.value)}/> 
              </div>
               <div className="editfield">
                  <h3>Interests, Hobbies, and something about you:</h3>
                      <TextField
                          id="outlined-multiline-static"
                          label="Write about yourself"
                          multiline
                          rows={5}
                          onChange = {(e)=>setHobby(e.target.value)}
                          defaultValue ={userData.hobby}
                          sx={{width : "100%"}}
                      />
               </div>
          </div>
          
              <div className="editfield">
              <h2>Account information</h2>
                  <div className="changeEmail">
                      <h3 style = {{textAlign : "center"}}>Edit Email</h3>
                      <div className="emLine">
                          <TextField
                          id="demo-helper-text-misaligned"
                          label="Email Address"
                          type ='email'
                          defaultValue ={userData.email}
                          sx={{width : "100%"}}
                          />
                          <Button variant="contained" sx={{heigth : "100%"}}>Change Email</Button>
                      </div>  
                  </div>
                  <h3>Change Password</h3>
                  <div className="changePassword">
                      <TextField
                      id="demo-helper-text-misaligned"
                      label="Password"
                      type ='password'
                      sx={{width : "100%", margin : "10px 0"}}
                      />
                      <TextField
                      id="demo-helper-text-misaligned"
                      label="Confirm Password"
                      type ='password'
                      sx={{width : "100%", margin : "10px 0"}}
                      />
                      <Button variant="contained" sx={{heigth : "100%"}}>Change Password</Button>
                  </div>
              </div>
              {/* {
                  showAlert ? <div className = "alert">
                          <AlertWrapper color  = {"error"}>Save done!</AlertWrapper>
                      </div> : <></>
              } */}
  </div>
</div> : <>


<div className ="generalInfo">
  <div className="save">
      <IconButton color = "success" onClick = {(e)=>SaveInfo(e)}>
          <SaveIcon/>
      </IconButton>
  </div>
  <h1 style ={{textAlign:"center", marginTop : "10px"}}>General Information</h1>
  <div className="generalInfoContainer">
      <div className="inline">
          <div className="editfield">
              <h3>Edit User Name</h3> <TextField
              id="demo-helper-text-misaligned"
              label="User name"
              defaultValue ={userData.userName}
              onChange = {(e)=>setUserName(e.target.value)}
              sx={{width : "100%"}}
          />
          </div>
          <div className="editfield">
              <h3>Edit FullName</h3> <TextField
              id="demo-helper-text-misaligned"
              label="Full name"
              defaultValue = {userData.fullName}
              onChange = {(e)=>setFullName(e.target.value)}
              sx={{width : "100%"}}
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
                  onChange = {(e)=>setPhone(e.target.value)}
                  sx={{width : "100%"}}
                  />
          </div>
          <div className="editfield">
                  <h3>Edit Date of Birth</h3>
                  <LocalizationProvider dateAdapter ={AdapterDateFns}>
                      <DatePicker      
                          label="Date of birth"
                          onAccept ={()=>console.log(date)}
                          views={['year', 'month', 'day']}
                          format="dd/MM/yyyy"
                          defaultValue={userData.birthday}
                          value ={date}
                          showToolbar ={true}
                          onChange={(newValue) => {
                              setDate(newValue);
                          }}
                          renderInput={(params) => <TextField {...params}
                          sx={{width : "100%"}} />}
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
                      onChange = {(e)=>setGender(e.target.value)}
                      sx ={{width : "100%"}}
                      defaultValue ={userData.gender}       
                      >
                          <MenuItem value={0}>Male</MenuItem>
                          <MenuItem value={1}>Female</MenuItem>
                          <MenuItem value={2}>Other</MenuItem>
                  </Select>
                  <h3>Location</h3>
                  <TextField id="demo-helper-text-misaligned" defaultValue = {userData.location} sx={{width : "100%"}} label = "Location"  onChange = {(e)=>setLocation(e.target.value)}/> 
              </div>
               <div className="editfield">
                  <h3>Interests, Hobbies, and something about you:</h3>
                      <TextField
                          id="outlined-multiline-static"
                          label="Write about yourself"
                          multiline
                          rows={5}
                          onChange = {(e)=>setHobby(e.target.value)}
                          defaultValue ={userData.hobby}
                          sx={{width : "100%"}}
                      />
               </div>
          </div>
              
  </div>
</div> 


</> 
}

export default GeneralInfo