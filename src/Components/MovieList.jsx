

import MovieItem from "./MovieItem";

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        movies.map((movie, index) => (
          <MovieItem key={index} {...movie} />
        ))
      )}
    </div>
  );
}

export default MovieList;
