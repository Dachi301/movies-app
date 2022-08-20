// fff
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Firebase
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy
} from 'firebase/firestore'
import { db } from '../../config/db'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
// Components
import images from '../../data/SliderData/dataSlider'

// styles
import './Slider.css'

export default function Slider() {
  const [data, setData] = useState([])

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, 'movies'),
      snapshot => {
        let list = []
        snapshot.docs.forEach(doc => {
          list.push({ id: doc.id, ...doc.data() })
        })
        setData(list)
      },
      error => {
        console.log(error)
      }
    )

    return () => {
      unsub()
    }
  }, [])

  console.log(data)

  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
    >
      {data &&
        data.map(movie => {
          return (
            <div className="slider" key={movie.id}>
              <div className="slide">
                <div className="text--content">
                  <h1 className="movie--title">
                    {movie.movie_title_ge} ({movie.movie_year})
                  </h1>
                  <div className="rating--content">
                    <i className="fa fa-imdb movie--imdb-icon"></i>

                    <span className="movie--rating">{movie.movie_imdb}</span>
                    <Link to={`/movie/${movie.id}`}>
                      <button className="watch--now-btn">უყურე ახლავე</button>
                    </Link>
                  </div>
                </div>
                <img
                  src={`${movie.cover}`}
                  alt="slider_image"
                  className="carousel--image"
                />
              </div>
            </div>
          )
        })}
    </Carousel>
  )
}
