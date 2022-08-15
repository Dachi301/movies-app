// React
import React from 'react'

import Plyr from 'plyr-react'
import 'plyr-react/plyr.css'

// Data
import { doc, getDoc } from 'firebase/firestore'

// Styles
import './Movie.css'

import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { db } from '../../config/db'
import { useState } from 'react'

export default function Movie() {
  const [data, setData] = useState([])
  const { id } = useParams()

  console.log(id)
  // const movie = MoviesData.filter(movie => movie.id === id)

  function removeLastComma(index, items) {
    return index === items.length - 1 ? '' : ', '
  }

  // console.log(id)
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'movies', id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setData(docSnap.data())
      } else {
        console.log('No such document!')
      }
    }

    return () => fetchData()
  }, [])

  console.log(data)

  const videoSrc = {
    type: 'video',

    sources: [
      {
        src: data.trailer,
        type: 'video/mp4'
      }
    ],
    poster: data.cover,
    tracks: [
      {
        kind: 'captions',
        label: 'English',
        srclang: 'en',
        src: '/path/to/captions.en.vtt',
        default: true
      },
      {
        kind: 'captions',
        label: 'French',
        srclang: 'fr',
        src: '/path/to/captions.fr.vtt'
      }
    ]
  }

  return (
    <>
      <div className="background--image-content">
        <img
          src={`${data.cover}`}
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
                  src={`${data.poster}`}
                  alt="Movie_Poster"
                  className="movie--page-poster"
                />
              </div>
              <div className="movie--page-details">
                <h1 className="movie--page-title">
                  {data.movie_title_eng} / {data.movie_title_ge}
                </h1>

                <p>
                  წელი: <span>{data.movie_year}</span>
                </p>
                <p>
                  ქვეყანა: <span>{data.movie_country}</span>
                </p>
                {/* <p>
                  ჟანრი:{' '}
                  {movieData.genre.map((movieDataGenre, index) => (
                    <span key={index}>
                      {movieDataGenre}
                      {removeLastComma(index, movieData.genre)}
                    </span>
                  ))}
                </p> */}
                <p>
                  რეჟისორი:{' '}
                  {data.directors &&
                    data.directors.map((movieDirector, index) => (
                      <span key={index}>
                        {movieDirector}
                        {removeLastComma(index, data.directors)}
                      </span>
                    ))}
                </p>
                <p>
                  როლებში:{' '}
                  {data.actors &&
                    data.actors.map((movieActor, index) => (
                      <span key={index}>
                        {movieActor}
                        {removeLastComma(index, data.actors)}
                      </span>
                    ))}
                </p>

                <p>
                  მოკლე აღწერა: <span>{data.movie_subject}</span>
                </p>

                <p>
                  IMDB: <span>{data.movie_imdb}</span>
                </p>

                <p>
                  IMDB ხმები: <span>{data.movie_votes}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video player */}
        <div className="movie--player-content">
          <Plyr source={videoSrc} />
        </div>

        <br />
      </div>
    </>
  )
}
