// Styles
import MovieCard from "./MovieCard";
import "./MoviesList.css";

export default function MoviesList({ title }) {
  return (
    <div className="movies--content">
      <h1 className="section--title">{title}</h1>

      <div className="movies--containers">
        <MovieCard />
      </div>
    </div>
  );
}
