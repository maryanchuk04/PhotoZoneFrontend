import React, {useState} from 'react'
import './feedback.css'
import { TextField, Rating } from '@mui/material'
import UserService from '../../Services/UserService';
const Feedback = () => {
  const [rating, setRating] = useState("");
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Feedback, setFeedback] = useState("")
  let userService = new UserService();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data ={
      email : Email,
      userName : Name,
      text : Feedback
    } 
    userService.sendFeedback(data).then((res)=>{
        if(res.status === 200){
          window.location.reload();
        }
    });

    setEmail("");
    setName("");
    setRating("");
    setFeedback("");
  }

  return (
    <form className ="feedback-form" onSubmit = {(e)=>handleSubmit(e)}>
        <h1>Please send feedback!</h1>
        <h3>Rate us : </h3>
        <Rating
                name="simple-controlled"
                onChange={(event, newValue) => {
                  setRating(event.target.value);
                }}
                value = {Rating}
        />
        <TextField
          id="outlined-textarea"
          label="Email"
          placeholder="Email"
          multiline
          onChange ={(e)=>setEmail(e.target.value)}
          required
          value = {Email}
        />
        <TextField
          id="outlined-textarea"
          label="Name"
          placeholder="Name"
          onChange ={(e)=>setName(e.target.value)}
          multiline
          required
          value = {Name}
        />
        <TextField
          id="outlined-multiline-static"
          label="Feedback"
          multiline
          rows={4}
          onChange ={(e)=>setFeedback(e.target.value)}
          required
          value = {Feedback}
        />
        <button id = "SendFeedback" type = 'submit'>Send</button>
    </form>
  )
}

export default Feedback