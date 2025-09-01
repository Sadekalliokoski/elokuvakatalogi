function Elokuvalista({ movies, onDeleteMovie }) {
  return (
    <div className="elokuvalista">
      <ul>
        {movies.map((movie, idx) => (
          <li key={idx}>
            {movie.title} ({movie.year}) - {movie.genre}
            <button className="delete-btn" onClick={() => onDeleteMovie(idx)}>
              Poista
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Elokuvalista;
