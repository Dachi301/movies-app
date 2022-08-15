import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Typed from 'typed.js'

// Styles
import './Search.css'

// DATAA
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from '../config/db'

import MoviesData from '../data/MovieData/MovieData.json'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState([])

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    const typed = new Typed('.auto-type', {
      strings: ['..', '.'],
      typeSpeed: 500,
      backSpeed: 500,
      loop: true
    })
  }, [])

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
      <input
        type="text"
        className="search--field icon-rtl"
        onChange={handleChange}
      />

      <div className="search--container">
        <div className="movies--list">
          <hr className="search--container-line" />

          {data &&
            data
              .filter(movie => {
                if (!searchTerm) {
                  return ''
                } else if (
                  movie['movie_title_eng']
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return movie['movie_title_eng']
                } else if (
                  movie['movie_title_ge']
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return movie['movie_title_ge']
                }
              })
              .map((movie, key) => {
                return (
                  <React.Fragment key={key}>
                    <div className="movie--result">
                      <Link to={`movie/${movie.id}`} className="movie--nav-btn">
                        <div className="movie--container">
                          <div className="search--container-items search--container-margin">
                            <h3>
                              {movie.movie_title_eng} / {movie.movie_title_ge}
                            </h3>
                            <p>{movie.movie_year}</p>
                          </div>

                          <div className="search--container-items">
                            <img
                              src={`${movie.poster}`}
                              alt="Search_container_result_image"
                              className="search--container-result-poster"
                            />
                          </div>
                        </div>
                      </Link>

                      <hr className="search--container-line" />
                    </div>
                  </React.Fragment>
                )
              })}
        </div>

        <h3 className="search--container-result">
          ძიება<span className="auto-type">...</span>
        </h3>
      </div>
    </>
  )
}
