import React from "react";
import "../css/MovieCard.css";
import { useMovieContext } from "../Contexts";
function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.imdbID);
  function onFavorite(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.imdbID);
    else {
      addToFavorites(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavorite}
          >
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <div className="direct-link">
          <a
            href={`https://www.imdb.com/title/${movie.imdbID}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="imdb-link"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
