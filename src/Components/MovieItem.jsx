// src/components/MovieItem.jsx
function MovieItem({ title, year, genre }) {
  return (
    <div className="movie-item">
      <h2>{title}</h2>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </div>
  );
}

export default MovieItem;


