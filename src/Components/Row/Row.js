import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../Requests/axios";

import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

import { useHistory } from "react-router-dom";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [trailerURL, setURLTrailer] = useState("");

  useEffect(() => {
    async function getData() {
      const data = await axios.get(fetchURL);
      setMovies(data.data.results);
    }

    getData();
  }, [fetchURL]);

  const handleClick = (movie) => {
    history.push("/details", { ...movie });
  };

  const handleVideo = (movie) => {
    console.log(movie);
    if (trailerURL) {
      setURLTrailer("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setURLTrailer(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>
      <div className="row__posters">
        {movies.map((movie, i) => (
          <img
            onClick={() =>
              `${isLargeRow ? handleClick(movie) : handleVideo(movie)}`
            }
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
}

export default Row;
