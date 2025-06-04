function MovieItem({ title, year, genre, description }) {
  return (
    <div className="movie-item">
      <h2>{title}</h2>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  );
}

export default MovieItem;
