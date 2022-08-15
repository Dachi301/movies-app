import React from 'react'

// import moviesData from '../data/MovieData/MovieData.json'

import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from '../config/db'

// Styles
import './MovieCard.css'
import { useEffect, useState } from 'react'

export default function MovieCard() {
  const [data, setData] = useState([])

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + '...' : str
  }

  function removeLastComma(index, items) {
    return index === items.length - 1 ? '' : ', '
  }

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
    <>
      {data &&
        data.map(movieData => {
          return (
            <div className="movie--container" key={movieData.id}>
              <img
                src={`${movieData.poster}`}
                className="poster"
                alt="poster"
              />
              <button className="poster-watch--btn">
                <a
                  className="play--btn-homepage"
                  href={`http://localhost:3000/movie/${movieData.id}`}
                >
                  <span className="material-symbols-outlined">play_arrow</span>
                </a>
              </button>
              <button className="imdb--rating">
                IMDB: {movieData.movie_imdb}
              </button>
              <div className="movie--info">
                <h3 className="movie--title">
                  {movieData.movie_title_eng} / {movieData.movie_title_ge}
                </h3>

                <p className="movie--year">
                  წელი: <span>{movieData.movie_year}</span>
                </p>
                <p>
                  ქვეყანა: <span>{movieData.movie_country}</span>
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
                  {movieData.directors.map((movieDirector, index) => (
                    <span key={index}>
                      {movieDirector}
                      {removeLastComma(index, movieData.directors)}
                    </span>
                  ))}
                </p>
                <p>
                  როლებში:{' '}
                  {movieData.actors.map((movieActor, index) => (
                    <span key={index}>
                      {movieActor}
                      {removeLastComma(index, movieData.actors)}
                    </span>
                  ))}
                </p>
                <p>
                  მოკლე აღწერა:{' '}
                  <span>{truncate(movieData.movie_subject, 155)}</span>
                </p>
              </div>
            </div>
          )
        })}
    </>
  )
}
