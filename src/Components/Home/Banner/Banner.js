import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item id="carousel-item-1">
          <Carousel.Caption
            data-aos="fade-up"
            className="top-50 position-absolute"
          >
            <h1 className="display-2">Perfumo</h1>
            <p>The wait is over </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="carousel-item-2">
          <Carousel.Caption
            data-aos="fade-up"
            className="top-50 position-absolute"
          >
            <h1 className="display-2">Perfumo</h1>
            <p>Fresh and genuine fragrance in town.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="carousel-item-3">
          <Carousel.Caption
            data-aos="fade-up"
            className="top-50 position-absolute"
          >
            <h1 className="display-2">Perfumo</h1>
            <p>Keep yor sorrounding fresh</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
