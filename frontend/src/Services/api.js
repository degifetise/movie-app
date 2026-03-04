const API_KEY = "cbe4a9e9";

export const getPopularMovies = async (query) => {
try {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
  const data = await response.json();

if(data.Response === "True") {
  return data.Search;
}else {
  console.error("Error:", data.Error);
  return [];
}
}catch(err) {
  console.error("Fetch failed", err);
  return [];
}
}