// styles
import "./Slider.css";

// fff
import * as React from "react";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "glider-js/glider.min.css";

// Components
import images from "../../data/SliderData/dataSlider";

export default function Slider() {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
    >
      {images.map((obj, i) => {
        return (
          <div className="slider" key={obj.id}>
            <div key={obj.id} className="slide">
              <div className="text--content">
                <h1 className="movie--title">
                  {obj.movie} ({obj.year})
                </h1>
                <div className="rating--content">
                  <a href={obj.imdbPage} target="_blank" rel="noreferrer">
                    <i className="fa fa-imdb movie--imdb-icon"></i>
                  </a>

                  <span className="movie--rating">{obj.rating}</span>
                  <Link to={`/movie/${obj.id}`}>
                    <button className="watch--now-btn">უყურე ახლავე</button>
                  </Link>
                </div>
              </div>
              <img
                src={require(`../../assets/images/${obj.image}`)}
                alt="slider_image"
                className="carousel--image"
              />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
