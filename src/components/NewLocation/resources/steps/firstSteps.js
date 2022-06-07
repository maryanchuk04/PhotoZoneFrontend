import React,{useState} from 'react'
import { TextField,Rating } from '@mui/material'
import '../NewLocationForm.css'
import { Input, Button,IconButton } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import { uploadImage } from '../../../../Services/ImageUploader'
import CloseIcon from '@mui/icons-material/Close';

const FirstSteps = ({setUserName, setTitle, setDescription, setRating, setMainImage, userName,title,description,rating,mainImage}) => {
    


    const defaultImage = 'https://eataway.com/images/default-image.gif';
    const Input = styled('input')({
        display: 'none',
      });

    async function handleFileSelected(e){
        const files = Object(e.currentTarget.files)[0]
        console.log(files)
        setFile(files);
        const res = await uploadImage(files);
        setImage(res);
        setMainImage(res);
    } 

  const [image, setImage] = useState(defaultImage);


  const [file,setFile] = useState({});

 const HandleClose = () =>{
     setImage(defaultImage)
 }

  return (<>
    <form className="main_info_form" >
        <div className="main_info">
            <TextField
                id="filled-basic"
                label="UserName"
                variant="filled"
                sx ={{width: 220}}
                defaultValue = {userName || ""}
                required
                onChange = {(e)=>setUserName(e.target.value)}
            />
            <TextField
                id="filled-textarea"
                label="Title"
                multiline
                rows={2}
                variant="filled"
                sx ={{width: 220, marginTop : "10px"}}
                required
                defaultValue = {title || ""}
                onChange = {(e)=>setTitle(e.target.value)}
            />
            <TextField
                id="filled-multiline-static"
                label="Description"
                multiline
                rows={3}
                variant="filled"
                sx ={{width: 220,marginTop : "10px"}}
                defaultValue = {description || ""}
                onChange = {(e)=>setDescription(e.target.value)}
            />
            <div className="rating">
            <p>Rating</p>
            <Rating
                defaultValue = {rating || ""}
                name="simple-controlled"
                onChange={(event, newValue) => {
                    setRating(newValue);
                }}
            />
        </div>
        </div>
        <div className="main_image">
            <div className="image">
                <div className="close">
                    <IconButton color="primary" aria-label="upload picture" component="span" onClick ={()=>HandleClose()}>
                        <CloseIcon />
                    </IconButton> 
                </div>
                <img src={mainImage} alt = {title} />
            </div>
            <div className="main_upload_image">
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button variant="contained" component="span">
                        Upload
                    </Button>
                </label>
                <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" onChange = {(e)=>handleFileSelected(e)} />
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera fontSize={'20px'} />
                    </IconButton>
                </label>
            </div>
        </div>
    </form>
    
    </>
  )
}

export default FirstSteps