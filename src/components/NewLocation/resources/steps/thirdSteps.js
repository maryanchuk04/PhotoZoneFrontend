import React,{useState} from 'react'
import './thirdStep.css'
import { IconButton, Button, Input } from '@mui/material';
import { PhotoCamera} from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import { uploadImage } from '../../../../Services/ImageUploader';
import { ImageList, ImageListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ClockLoader} from 'react-spinners';


const ThirdSteps = ({setImages, images}) => {
    const [loading, setLoading] = useState(false);

  const defaultImage = 'https://eataway.com/images/default-image.gif';
  const Input = styled('input')({
      display: 'none',
    });



    const [file,setFile] = useState({});


    const handleDelete = (num) =>{
        console.log(loading);
        setLoading(true);
        setImages(images.filter(x=>x !== images[num]))
        setLoading(false);
        console.log(loading);
    }

    async function handleFileSelected(e){
        setLoading(true);
        const files = Object(e.currentTarget.files)[0]
        console.log(files);
        setFile(files);
        const res = await uploadImage(files);
        images.push(res);
        console.log(images);
        setImages(images);
        setLoading(false)
        
    } 


  return (
    <div className ={"image_part"}>
        <div className="main_image">
        <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" onChange = {(e)=>handleFileSelected(e)}  />
            <Button variant="contained" component="span">
                Upload Images
            </Button>
        </label>
        </div>
        <div className="images_List">
            {!loading ? images.length !== 0 ? 
            <ImageList sx={{ width: "100%", height: "100%" }} cols={3} rowHeight={"100%"}>
                {images?.map((item, index) => (
                    <ImageListItem key={item.img}>
                    <img
                        src={`${item}?w=164&h=164&fit=crop&auto=format`}
                        loading="lazy"
                        alt = ""
                        style ={{ margin :"10px auto"}}
                    />
                    <div className="delete">
                        <IconButton aria-label="Example">
                            <DeleteIcon sx ={{color : "white"}} onClick = {()=>handleDelete(index)} />
                        </IconButton>
                    </div>
                    </ImageListItem>
                ))
                }
            </ImageList> : <h1>Add images to place</h1>
            : <ClockLoader size= "150" css = {{margin : "auto" }} color={"#A254FF"}/>
        }
        </div>
        
    </div>
  )
}

export default ThirdSteps