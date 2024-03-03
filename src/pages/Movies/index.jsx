import { useEffect, useState } from "preact/hooks";
import "./styles.css";
import { TmdbApi } from "../../api/tmdb";

export function Movies() {
  const [query, setQuery] = useState("Аватар");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const tmdbApi = new TmdbApi();
    tmdbApi.search(query).then((data) => {
      console.log({ data });
      setMovies(data.results);
    });
  }, [query]);
  return (
    <div class="root">
      <input
        type="text"
        value={query}
        onInput={(e) => setQuery(e.target.value)}
      />
      <ul>
        {movies.map((movie) => (
          <li>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
