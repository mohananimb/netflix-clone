import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../Requests/axios";
const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await axios.get(fetchURL);
      setMovies(data.data.results);
    }

    getData();
  }, [fetchURL]);
  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>
      <div className="row__posters">
        {movies.map((movie, i) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
