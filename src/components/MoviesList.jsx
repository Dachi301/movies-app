// Styles
import MovieCard from './MovieCard'
import './MoviesList.css'

export default function MoviesList({ title }) {
  // const arr = [
  //   'batman_poster.jpg',
  //   'doctor_strange_posterrr.jpg',
  //   'halloween_kills_poster.jpg',
  //   'marry_me_poster.jpg',
  //   'scream_5_poster.jpg',
  //   'sonic_2_poster.jpg',
  //   'uncharted_poster.jpg',
  //   'ambulance_poster.jpg',
  //   'black_box_poster.jpg',
  //   'being_the_ricardos_poster.jpg',
  //   'banishing_poster.jpg',
  //   'adam_poster.jpg',
  //   'accursed_poster.jpg',
  //   'a_castle_for_christmas_poster.jpg',
  // ]

  return (
    <div className="movies--content">
      <h1 className="section--title">{title}</h1>

      <div className="movies--containers">
        <MovieCard />
      </div>
    </div>
  )
}
