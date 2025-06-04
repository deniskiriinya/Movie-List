import { useState } from "react";
import MovieList from "./Components/MovieList";
import AddMovieForm from "./Components/AddMovieForm";
import "./index.css";

function App() {
 const [movies, setMovies] = useState([
  {
    title: "Mission: Impossible - Fallout",
    year: 2018,
    genre: "Action",
    description: "Ethan Hunt and his IMF team must track down stolen plutonium while being pursued by a CIA assassin."
  },
  {
    title: "F1",
    year: 2025,
    genre: "Sports",
    description: "A formula one driver comes out of retirement to mentor and team up with a younger driver."
  },
  {
    title: "Swagger",
    year: 2023,
    genre: "Drama",
    description: "A young basketball player navigates the challenges of adolescence while pursuing his dreams."
  },
  {
    title: "The Matrix Resurrections",
    year: 2021,
    genre: "Sci-Fi",
    description: "Neo returns to the Matrix to confront a new threat and uncover the truth about his past."
  }
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
