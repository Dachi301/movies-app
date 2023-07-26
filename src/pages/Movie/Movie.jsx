// Styles
import "./Movie.css";

// React
import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

// Data
import MoviesData from "../../data/MovieData/MovieData.json";

import { useParams } from "react-router-dom";

export default function Movie() {
  let { id } = useParams();
  id = Number(id);
  const movie = MoviesData.filter((movie) => movie.id === id);
  console.log(movie[0]);

  function removeLastComma(index, items) {
    return index === items.length - 1 ? "" : ", ";
  }

  const videoSrc = {
    type: "video",

    sources: [
      {
        src: require("../../assets/trailers/doctor_strange_trailer.mp4"),
        type: "video/mp4",
      },
    ],
    poster: require(`../../assets/images/${movie[0].cover}`),
    tracks: [
      {
        kind: "captions",
        label: "English",
        srclang: "en",
        src: "/path/to/captions.en.vtt",
        default: true,
      },
      {
        kind: "captions",
        label: "French",
        srclang: "fr",
        src: "/path/to/captions.fr.vtt",
      },
    ],
  };

  return (
    <>
      {MoviesData &&
        MoviesData.filter((movieData) => movieData.id === id).map(
          (movieData) => (
            <React.Fragment key={movieData.id}>
              <div className="background--image-content">
                <img
                  src={require(`../../assets/images/${movieData.cover}`)}
                  alt="movie_page_cover"
                  className="background--image"
                />
              </div>

              <div className="movie--page">
                <div className="movie--details">
                  {/* about */}
                  <div className="movie--details-container">
                    <div className="movie--details-content">
                      <div className="movie--poster-content">
                        <img
                          src={require(`../../assets/images/${movieData.poster}`)}
                          alt="Movie_Poster"
                          className="movie--page-poster"
                        />
                      </div>
                      <div className="movie--page-details">
                        <h1 className="movie--page-title">
                          {movieData.movieNameEN} / {movieData.movieNameGE}
                        </h1>

                        <p>
                          წელი: <span>{movieData.movieYear}</span>
                        </p>
                        <p>
                          ქვეყანა: <span>{movieData.movieCountry}</span>
                        </p>
                        <p>
                          ჟანრი:{" "}
                          {movieData.genre.map((movieDataGenre, index) => (
                            <span>
                              {movieDataGenre}
                              {removeLastComma(index, movieData.genre)}
                            </span>
                          ))}
                        </p>
                        <p>
                          რეჟისორი:{" "}
                          {movieData.director.map((movieDirector, index) => (
                            <span>
                              {movieDirector}
                              {removeLastComma(index, movieData.director)}
                            </span>
                          ))}
                        </p>
                        <p>
                          როლებში:{" "}
                          {movieData.actors.map((movieActor, index) => (
                            <span>
                              {movieActor}
                              {removeLastComma(index, movieData.actors)}
                            </span>
                          ))}
                        </p>

                        <p>
                          მოკლე აღწერა: <span>{movieData.description}</span>
                        </p>

                        <p>
                          IMDB: <span>{movieData.rating}</span>
                        </p>

                        <p>
                          IMDB ხმები: <span>{movieData.votes}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video player */}
                <div className="movie--player-content">
                  <Plyr source={videoSrc} />
                </div>

                {/* Comments */}
                <h1 className="comments--section-title">კომენტარები </h1>
              </div>
            </React.Fragment>
          )
        )}
    </>
  );
}
