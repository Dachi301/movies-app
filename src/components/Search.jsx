import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import "./Search.css";

// DATAA
import MoviesData from "../data/MovieData/MovieData.json";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        className="search--field icon-rtl"
        onChange={handleChange}
      />

      <div className="search--container">
        <div className="movies--list">
          <hr className="search--container-line" />

          {MoviesData &&
            MoviesData.filter((movie) => {
              if (!searchTerm) {
                return true;
              } else if (
                movie.movieNameEN
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return true;
              } else if (
                movie.movieNameGE
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return true;
              } else {
                return false;
              }
            }).map((movie, id) => {
              return (
                <React.Fragment key={movie.id}>
                  <div className="movie--result" key={movie.id}>
                    <Link to={`movie/${movie.id}`} className="movie--nav-btn">
                      <div className="movie--container">
                        <div className="search--container-items search--container-margin">
                          <h3>
                            {movie.movieNameEN} / {movie.movieNameGE}
                          </h3>
                          <p>{movie.movieYear}</p>
                        </div>

                        <div className="search--container-items">
                          <img
                            src={require(`../assets/images/${movie.poster}`)}
                            alt="Search_container_result_image"
                            className="search--container-result-poster"
                          />
                        </div>
                      </div>
                    </Link>

                    <hr className="search--container-line" />
                  </div>
                </React.Fragment>
              );
            })}
        </div>

        <h3 className="search--container-result">
          ძიება<span className="auto-type">...</span>
        </h3>
      </div>
    </>
  );
}
