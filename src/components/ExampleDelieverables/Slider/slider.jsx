import "./slider.css";
import React from "react";
import Slider from "react-slick";
import Page1 from "../page1.jpg";
import Page2 from "../page2.jpg";
import Page3 from "../page3.jpg";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const SliderFunc = () => {
  return (
    <div className = 'carousel'>
      <Slider {...settings}>
        <div>
          <img src={Page1} alt="" />
        </div>
        <div>
          <img src={Page2} alt="" />
        </div>
        <div>
          <img src={Page3} alt="" />
        </div>
      </Slider>
    </div>
  );
};
