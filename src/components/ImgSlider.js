import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../images/slider-badag.jpg";
import slide2 from "../images/slider-badging.jpg";
import './ImgSlider.css';

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
      <div className='container' >
        <Slider {...settings} className='slider'>
        <div>
          <img src={slide1} className='slide' alt="" />
        </div>
        <div>
          <img src={slide2} className='slide' alt="" />
        </div>
      </Slider>
      </div>
  );
};

export default ImgSlider;
