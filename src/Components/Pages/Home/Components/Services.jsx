import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import img1 from "../../../../assests/img (1).jpg";
import img2 from "../../../../assests/img (2).jpg";
import img3 from "../../../../assests/img (3).jpg";
import img4 from "../../../../assests/img (4).jpg";
const Services = () => {
  const images = [img1, img2, img3, img4];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1424,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <>
      <h1 className="heading">Services</h1>
      <section className="services">
        <Slider {...settings}>
          {images.map((image) => {
            return(
            <div key={image}>
              <img src={image} alt="" />
            </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Services;
