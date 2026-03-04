import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies } from "../Services/api";
import "../css/Home.css";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const results = await getPopularMovies("batman");
        setMovies(results);
      } catch (err) {
        console.log(err);
        setError("error happen");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);


  const HandleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery) {
      setError("Please specify name of movies you want to search");
      setTimeout(() => setError(null), 3000);
      return;
    }

    try {
      setLoading(true);
      const result = await getPopularMovies(searchQuery);
      setMovies(result);
    } catch (err) {
      setError("error happened", err);
    } finally {
      setLoading(false);
    }
  };

  const toggleLight = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? "home light" : "home dark"}>
      <form onSubmit={HandleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <div className="light-cont">
        <button onClick={toggleLight}>
          {isDarkMode ? (
            <i className="fas fa-moon"></i>
          ) : (
            <i className="fas fa-sun"></i>
          )}
        </button>
      </div>
      <div className="movies-grid">
        {error && <p>{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          movies
            .filter((movie) =>
              movie.Title.toLowerCase().includes(searchQuery.toLowerCase()),
            )
            .map((movie) => <MovieCard movie={movie} key={movie.imdbID} />)
        )}
      </div>
    </div>
  );
}
export default Home;
