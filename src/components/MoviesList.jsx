import React from 'react'

import MovieCard from './MovieCard'

// Styles
import './MoviesList.css'

export default function MoviesList({ title, showMovieCard }) {
  return (
    <div className="movies--content">
      <h1 className="section--title">{title}</h1>

      <div className="movies--containers">
        {showMovieCard ? <MovieCard /> : null}
      </div>
    </div>
  )
}
