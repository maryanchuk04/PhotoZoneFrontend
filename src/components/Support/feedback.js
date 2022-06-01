import React from 'react'
import './feedback.css'
import { TextField, Rating } from '@mui/material'
const Feedback = () => {
  return (
    <form className ="feedback-form">
        <h1>Please send feedback!</h1>
        <h3>Rate us : </h3>
        <Rating
                name="simple-controlled"
                onChange={(event, newValue) => {
                }}
        />
        <TextField
          id="outlined-textarea"
          label="Email"
          placeholder="Email"
          multiline
        />
        <TextField
          id="outlined-textarea"
          label="Name"
          placeholder="Name"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Feedback"
          multiline
          rows={4}
        />
        <button id = "SendFeedback">Send</button>
    </form>
  )
}

export default Feedback