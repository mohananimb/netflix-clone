import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../Requests/axios";
import request from "../../Requests/request";
const baseURL = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);
  let over = "";
  useEffect(() => {
    async function getData() {
      const data = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        data.data.results[
          Math.floor(Math.random() * data.data.results.length - 1)
        ]
      );
      console.log(
        data.data.results[
          Math.floor(Math.random() * data.data.results.length - 1)
        ]
      );
    }
    getData();
  }, []);

  if (movie?.overview) {
    if (movie?.overview.length > 350) {
      over = movie?.overview.substr(0, 250) + "...";
    } else {
      over = movie?.overview;
    }
  }

  return (
    <header
      className="banner__poster"
      style={{
        backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{over}</h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
