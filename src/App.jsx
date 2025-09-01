import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { UserContext } from "./UserContext";
import Elokuvalista from "./Elokuvakalista";
import ElokuvaLomake from "./elokuvalomake";
import ElokuvaHaku from "./Elokuvahaku";
import "./App.css";

const initialMovies = [
  { title: "Inception", year: "2010", genre: "Sci-Fi" },
  { title: "Parasite", year: "2019", genre: "Drama" },
  { title: "The Matrix", year: "1999", genre: "Action" },
];

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { username, setUsername } = useContext(UserContext);
  const [movies, setMovies] = useState(initialMovies);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(!username);
  const [usernameInput, setUsernameInput] = useState("");

  // Show username modal if username is empty
  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (usernameInput.trim()) {
      setUsername(usernameInput.trim());
      setShowModal(false);
    }
  };

  const addMovie = (movie) => setMovies([...movies, movie]);
  const deleteMovie = (index) =>
    setMovies(movies.filter((_, i) => i !== index));
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`app ${theme}`}>
      {/* Username Modal */}
      {showModal && (
        <div className="username-modal">
          <form onSubmit={handleUsernameSubmit} className="username-form">
            <label
              htmlFor="username"
              style={{ fontSize: "1.2rem", marginBottom: 12 }}
            >
              Kirjoita käyttäjänimesi:
            </label>
            <input
              id="username"
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              placeholder="Käyttäjänimi"
              autoFocus
              style={{ marginBottom: 12 }}
            />
            <button type="submit">Jatka</button>
          </form>
        </div>
      )}

      <h1 className="welcome">Tervetuloa, {username}!</h1>
      <button className="theme-btn" onClick={toggleTheme}>
        Vaihda teema
      </button>
      <div className="catalog-container">
        <ElokuvaLomake onAddMovie={addMovie} />
        <ElokuvaHaku search={search} onSearchChange={setSearch} />
        <Elokuvalista movies={filteredMovies} onDeleteMovie={deleteMovie} />
      </div>
    </div>
  );
}

export default App;
