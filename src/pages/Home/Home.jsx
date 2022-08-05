// Styles
import './Home.css'
// Components
import React from 'react'
import Footer from '../../components/Footer'
import MoviesList from '../../components/MoviesList'
import NavBar from '../../components/NavBar'
import Slider from '../../components/Slider/Slider'

export default function Home({ funcNav }) {
  return (
    <>
      {/* <div className="navbar">
        <NavBar />
      </div> */}

      <div className="movie--image-content">
        <Slider />

        {/* <div className="text--content">
          <h1 className="movie--title">ფილმის სახელი (2022)</h1>
          <div className="rating--content">
            <i className="fa fa-imdb movie--imdb-icon"></i>

            <span className="movie--rating">7.5</span>
            <button className="watch--now-btn">უყურე ახლავე</button>
          </div>
        </div> */}
      </div>

      <MoviesList title={'ახალი დამატებული ფილმები'} />
      <MoviesList title={'პუპულარული ფილმები'} />
      <MoviesList title={'ტრეილერები'} />
    </>
  )
}
