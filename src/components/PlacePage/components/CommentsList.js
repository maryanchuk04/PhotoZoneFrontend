import React,{useEffect, useState}from 'react'
import Comment from './Comment'
import { ClockLoader } from 'react-spinners';
import { Divider } from '@mui/material';


const CommentsList = ({comments}) => {
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
    },[comments])
  return <>
   {comments.map((comment)=><Comment comment = {comment} setLoading= {setLoading}/>)}
   </>
}

export default CommentsList