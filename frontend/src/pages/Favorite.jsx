import React from "react";
import "../css/Favorite.css";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../Contexts";
function Favorites() {
  const { favorites } = useMovieContext();
if(favorites.length === 0) {
  return (
    <div className="favorite-empty">
      <h2>No Favorite Movies Found Yet at here.</h2>
      <p>Start adding movies to your favorites and they will appear.</p>
    </div>
  );
}

return (
<div className="favorites-grid">
 {favorites.map((movie) => ( <MovieCard movie={movie} key={movie.imdbID} /> ))}
 </div> );



}
export default Favorites;
