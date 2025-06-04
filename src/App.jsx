import { useState } from "react";
import MovieList from "./Components/MovieList";
import AddMovieForm from "./Components/AddMovieForm";
import "./index.css";

function App() {
  const [movies, setMovies] = useState([
    { title: "Mission:Impossible - The Final Reckoning ", year: 2025, genre: "Action" },
    { title: "F1", year: 2025, genre: "sports" },
    { title: "Polar X", year: 2008, genre: "Romance" },
  ]);

  const addMovie = (movie) => {
    setMovies((prevMovies) => [movie, ...prevMovies]);
  };

  return (
    <div>
      <h1>Movie List</h1>
      <AddMovieForm onAdd={addMovie} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
