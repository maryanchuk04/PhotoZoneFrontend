import React,{useState} from 'react'
import './thirdStep.css'
import { IconButton, Button, Input } from '@mui/material';
import { PhotoCamera} from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import { uploadImage } from '../../../../Services/ImageUploader';

const ThirdSteps = ({NewLocationObject}) => {
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
  } 

const [image, setImage] = useState(defaultImage);


const [file,setFile] = useState({});

const HandleClose = () =>{
   setImage(defaultImage)
}





  return (
    <div className ={"image_part"}>
      <div className="main_image">
            <div className="image">
                <div className="close">
                    <IconButton color="primary" aria-label="upload picture" component="span" onClick ={()=>HandleClose()}>
                        <CloseIcon />
                    </IconButton>
                    
                </div>
                <img src={image} />
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
    </div>
  )
}

export default ThirdSteps