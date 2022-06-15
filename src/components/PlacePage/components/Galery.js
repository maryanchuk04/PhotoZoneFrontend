import React, { useEffect } from 'react'
import Slider from 'react-slick';
import '../placePage.css';


const Galery = ({images,mainImage}) => {
    const settings = {
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      };

    return <Slider {...settings} className = "galerySlider">
        <img src={mainImage} alt={'main'} />
        {
            images.map((item)=>
            <div className="imagesGal">
                <img src = {item.image} alt = "Galery"/>
            </div>)
        }
        
    </Slider>
}

export default Galery