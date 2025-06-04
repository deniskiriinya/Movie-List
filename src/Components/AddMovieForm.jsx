import { useState } from "react";

function AddMovieForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !genre || !year) {
      alert("Please fill in all fields.");
      return;
    }

    onAdd({ title, genre, year });
    setTitle("");
    setGenre("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <h2>Add a New Movie</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;

