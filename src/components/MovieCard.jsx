import "./MovieCard.css";

import moviesData from "../data/MovieData/MovieData.json";

export default function MovieCard({title}) {
  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function removeLastComma(index, items) {
    return index === items.length - 1 ? "" : ", ";
  }

  return (
    <>
      {title === 'პოპულარული ფილმები' ? (
          moviesData.sort((a, b) => a.votes - b.votes).map((movieData) => {
            return (
                <div className="movie--container" key={movieData.id}>
                  <img
                      src={require(`../assets/images/${movieData.poster}`)}
                      className="poster"
                      alt="poster"
                  />
                  <button className="poster-watch--btn">
                    <a
                        className="play--btn-homepage"
                        href={`/movie/${movieData.id}`}
                    >
                      <span className="material-symbols-outlined">play_arrow</span>
                    </a>
                  </button>
                  <button className="imdb--rating">IMDB: {movieData.rating}</button>
                  <div className="movie--info">
                    <h3 className="movie--title">
                      {movieData.movieNameEN} / {movieData.movieNameGE}
                    </h3>

                    <p className="movie--year">
                      წელი: <span>{movieData.movieYear}</span>
                    </p>
                    <p>
                      ქვეყანა: <span>{movieData.movieCountry}</span>
                    </p>
                    <p>
                      ჟანრი:{" "}
                      {movieData.genre.map((movieDataGenre, index) => (
                          <span key={index}>
                      {movieDataGenre}
                            {removeLastComma(index, movieData.genre)}
                    </span>
                      ))}
                    </p>
                    <p>
                      რეჟისორი:{" "}
                      {movieData.director.map((movieDirector, index) => (
                          <span key={index}>
                      {movieDirector}
                            {removeLastComma(index, movieData.director)}
                    </span>
                      ))}
                    </p>
                    <p>
                      როლებში:{" "}
                      {movieData.actors.map((movieActor, index) => (
                          <span key={index}>
                      {movieActor}
                            {removeLastComma(index, movieData.actors)}
                    </span>
                      ))}
                    </p>
                    <p>
                      მოკლე აღწერა:{" "}
                      <span>{truncate(movieData.description, 155)}</span>
                    </p>
                  </div>
                </div>
            );
          })
      ) : (
          moviesData.map((movieData) => {
            return (
                <div className="movie--container" key={movieData.id}>
                  <img
                      src={require(`../assets/images/${movieData.poster}`)}
                      className="poster"
                      alt="poster"
                  />
                  <button className="poster-watch--btn">
                    <a
                        className="play--btn-homepage"
                        href={`/movie/${movieData.id}`}
                    >
                      <span className="material-symbols-outlined">play_arrow</span>
                    </a>
                  </button>
                  <button className="imdb--rating">IMDB: {movieData.rating}</button>
                  <div className="movie--info">
                    <h3 className="movie--title">
                      {movieData.movieNameEN} / {movieData.movieNameGE}
                    </h3>

                    <p className="movie--year">
                      წელი: <span>{movieData.movieYear}</span>
                    </p>
                    <p>
                      ქვეყანა: <span>{movieData.movieCountry}</span>
                    </p>
                    <p>
                      ჟანრი:{" "}
                      {movieData.genre.map((movieDataGenre, index) => (
                          <span key={index}>
                      {movieDataGenre}
                            {removeLastComma(index, movieData.genre)}
                    </span>
                      ))}
                    </p>
                    <p>
                      რეჟისორი:{" "}
                      {movieData.director.map((movieDirector, index) => (
                          <span key={index}>
                      {movieDirector}
                            {removeLastComma(index, movieData.director)}
                    </span>
                      ))}
                    </p>
                    <p>
                      როლებში:{" "}
                      {movieData.actors.map((movieActor, index) => (
                          <span key={index}>
                      {movieActor}
                            {removeLastComma(index, movieData.actors)}
                    </span>
                      ))}
                    </p>
                    <p>
                      მოკლე აღწერა:{" "}
                      <span>{truncate(movieData.description, 155)}</span>
                    </p>
                  </div>
                </div>
            );
          })
      )}
    </>
  );
}
