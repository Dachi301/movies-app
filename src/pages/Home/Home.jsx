// Styles
import './Home.css'
// Components
import React from 'react'
import { useState } from 'react'
import MoviesList from '../../components/MoviesList'
import Slider from '../../components/Slider/Slider'

import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from '../../config/db'
import { useEffect } from 'react'

export default function Home() {
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

  // console.log(data)
  return (
    <>
      <div className="movie--image-content">
        <Slider />
      </div>

      <MoviesList title={'ახალი დამატებული ფილმები'} showMovieCard={true} />

      <div className="movies--content">
        <h1 className="section--title">პოპულარული ფილმები</h1>

        <div className="movies--containers">
          {' '}
          {data &&
            data
              .sort(
                (a, b) => Number(b['movie_votes']) - Number(a['movie_votes'])
              )

              .map(movieData => {
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
                        <span className="material-symbols-outlined">
                          play_arrow
                        </span>
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
                        IMDB ხმები: <span>{movieData.movie_votes}</span>
                      </p>
                      <p>
                        მოკლე აღწერა:{' '}
                        <span>{truncate(movieData.movie_subject, 155)}</span>
                      </p>
                    </div>
                  </div>
                )
              })}
        </div>
      </div>

      <div className="movies--content">
        <h1 className="section--title">ფილმები რეიტინგის მიხედვით</h1>

        <div className="movies--containers">
          {data &&
            data
              .sort((a, b) => Number(b['movie_imdb']) - Number(a['movie_imdb']))

              .map(movieData => {
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
                        <span className="material-symbols-outlined">
                          play_arrow
                        </span>
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
                        IMDB ხმები: <span>{movieData.movie_votes}</span>
                      </p>
                      <p>
                        მოკლე აღწერა:{' '}
                        <span>{truncate(movieData.movie_subject, 155)}</span>
                      </p>
                    </div>
                  </div>
                )
              })}
        </div>
      </div>
    </>
  )
}

// {data &&
//   data.map(movieData => {
//     return (
//       <div className="movie--container" key={movieData.id}>
//         <img
//           src={`${movieData.poster}`}
//           className="poster"
//           alt="poster"
//         />
//         <button className="poster-watch--btn">
//           <a
//             className="play--btn-homepage"
//             href={`http://localhost:3000/movie/${movieData.id}`}
//           >
//             <span className="material-symbols-outlined">play_arrow</span>
//           </a>
//         </button>
//         <button className="imdb--rating">
//           IMDB: {movieData.movie_imdb}
//         </button>
//         <div className="movie--info">
//           <h3 className="movie--title">
//             {movieData.movie_title_eng} / {movieData.movie_title_ge}
//           </h3>

//           <p className="movie--year">
//             წელი: <span>{movieData.movie_year}</span>
//           </p>
//           <p>
//             ქვეყანა: <span>{movieData.movie_country}</span>
//           </p>
//           {/* <p>
//             ჟანრი:{' '}
//             {movieData.genre.map((movieDataGenre, index) => (
//               <span key={index}>
//                 {movieDataGenre}
//                 {removeLastComma(index, movieData.genre)}
//               </span>
//             ))}
//           </p> */}
//           <p>
//             რეჟისორი:{' '}
//             {movieData.directors.map((movieDirector, index) => (
//               <span key={index}>
//                 {movieDirector}
//                 {removeLastComma(index, movieData.directors)}
//               </span>
//             ))}
//           </p>
//           <p>
//             როლებში:{' '}
//             {movieData.actors.map((movieActor, index) => (
//               <span key={index}>
//                 {movieActor}
//                 {removeLastComma(index, movieData.actors)}
//               </span>
//             ))}
//           </p>
//           <p>
//             მოკლე აღწერა:{' '}
//             <span>{truncate(movieData.movie_subject, 155)}</span>
//           </p>
//         </div>
//       </div>
//     )
//   })}
