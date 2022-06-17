import { Divider, IconButton, Rating, TextField, Badge } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Galery from './components/Galery';
import './placePage.css';
import UserShortInfoLine from '../Subscribers/userShortInfoLine';
import MapWithOnePoint from '../Maps/MapWithOnePoint';
import SendIcon from '@mui/icons-material/Send';
import {Button} from '@mui/material'
import CommentsList from './components/CommentsList';
import { Avatar } from '@mui/material';
import PlaceService from '../../Services/PlaceService';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import { ClockLoader } from 'react-spinners';
import { uploadImage } from '../../Services/ImageUploader';
import useMedia from 'use-media';


const Place = ({place, user}) => {
    const [file,setFile] = useState();
    const [imageLoading, setImageLoading] = useState(false);
    const [image,setImage]= useState('http://zetsoft.uz/images/default-image.png');
    const placeService = new PlaceService();
    const [comments, setComments] = useState(place?.comments);

    const [commentField, setCommentField] = useState("");

    const media  = useMedia({maxWidth : "426px"})
    useEffect(()=>{
        console.log(place)
    },[])

    const Input = styled('input')({
        display: 'none',
      });

    const SendComment = (e) =>{
        e.preventDefault();
        const data = {
            commentText : commentField
        }
        placeService.writeComment(place.id, data).then((res)=>{
            console.log(res);
            setComments(res.data)
            if(res.status === 200){
                setCommentField('');
            }
        })

    }

    async function handleFileSelected(e){
        setImageLoading(true);

        const files = Object(e.currentTarget.files)[0]
        console.log(files)
        setFile(files);
        const res = await uploadImage(files);
        placeService.addImageToPlace(place.id,{ image : res}).then((result)=>{
            console.log(result);
            setImage(res);
            setImageLoading(false);
        });

        
    } 

    

  return (
    <div className = "onePlace">
        <div className="title">
            <h1>{place.title}</h1>
        </div>
        <div className="mainInfo">
            <div className="gal">
                <Galery images = {place.images} mainImage = {place.mainImage}/>
            </div>
            
           <div className="info">
               <p className = "description">{place.description}</p>
                <div className="rating">
                    <div className="inline">
                        <p>Average rating : </p><Rating value = {place.rate} readOnly/>
                    </div> 
                    <p>Please, evaluate this location :</p>
                    <Rating onChange={(e)=>console.log(e.target.value)}/>
                </div>
                <div className="userData">
                    <p style ={{fontWeight : 500}} className = "owner">Owner information :</p>
                    <Divider/>
                    <UserShortInfoLine user = {user} showButtons = {false} i/>
                    <Divider/>
                </div>
           </div>

        </div>
        <div className="locationInfo">
            <div className="title">
                <Divider>
                    <h2>Location Information</h2>
                </Divider>
            </div>
            <div className="mapcontainer">
                <MapWithOnePoint center = {{lat : place?.location?.latitude, lng : place?.location?.longitude}} locationName = {place.location.locationName}/>
            </div>
            
        </div>
        <div className="uploadNewImage">
            <h2 style ={{margin : "20px 0"}}>Upload new image for this location</h2>
            <div className="image">
                {imageLoading ? <div className = "loader"><ClockLoader size= "150" css = {{margin : "auto" }} color={"#A254FF"}/></div> : <img src={image} alt='image' />}
                <div className="icon">
                    <IconButton><CloseIcon/></IconButton>
                </div>
            </div>
            <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" onChange = {(e)=>handleFileSelected(e)} />
                    <Button variant = "contained" endIcon = {<AddAPhotoIcon/>} aria-label="upload picture" component="span">Upload new photo</Button>
                </label>
        </div>
        <div className="comments">
                <div className="title">
                    {place?.comments?.length === 0? <h2>Comment`s</h2> : <h2>Comment`s ({place?.comments?.length})</h2>}
                </div>
                <form className="writeComment" onSubmit = {(e)=>SendComment(e)}>
                    <Avatar src = {user.avatar} alt={user.userName} sx={{ width: 60, height: 60 }}/>
                    <TextField variant = "outlined" sx ={{width : "100%"}} placeholder = {"Write your comment..."} value = {commentField} onChange = {(e)=>setCommentField(e.target.value)} required/>
                    {!media ? 
                        <Button variant="contained" endIcon={<SendIcon />} sx ={{width : "100%"}} type = 'submit' >
                        Send
                    </Button> : 
                    <Button variant="contained" endIcon={<SendIcon />} sx ={{height : "100%", width : "80%", margin : "0 auto"}} type = 'submit' >
                    </Button>}
                </form>
                <div className="listComments">
                {
                    place?.comments?.length === 0 ? <h1 style = {{textAlign : "center", margin:"auto"}}>Write first comment...</h1>
                    : <>
                        <CommentsList comments = {comments}/>
                    </>
                    
                }
                </div>
                
            </div>
    </div>
  )
}

export default Place