// Styles
import "./Home.css";
// Components
import React from "react";
import MoviesList from "../../components/MoviesList";
import Slider from "../../components/Slider/Slider";

export default function Home({ funcNav }) {
  return (
    <>
      <div className="movie--image-content">
        <Slider />
      </div>

      <MoviesList title={"ახალი დამატებული ფილმები"} />
      <MoviesList title={"პოპულარული ფილმები"} />
      {/*<MoviesList title={"ტრეილერები"} />*/}
    </>
  );
}
