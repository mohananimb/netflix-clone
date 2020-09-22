import React from "react";
import "./Movie.css";
function Movie({ location }) {
  const baseURL = "https://image.tmdb.org/t/p/original/";

  const { state } = location;
  

  return (
    <div>
      <div className="movie">
        <img
          className="movie__img"
          src={`${baseURL}${state.poster_path}`}
          alt={state.orignal_name}
        />

        <div className="movie__infoRow">
          <div className="movie__info">
            <h1 className="movie__title">Title</h1>
            <h1>Released</h1>
            <h1>Origin</h1>
            <h1>Votes</h1>
            <h1>Popularity</h1>
            <h1 className="">Description</h1>
          </div>
          <div className="movie__info">
            <h1 className="movie__title">{state?.original_name}</h1>
            <h1>{state?.first_air_date}</h1>
            <h1>{`${state?.origin_country[0]}` || "US"}</h1>
            <h1>{state?.vote_count}</h1>
            <h1>{state?.popularity}</h1>
            <h1 className="movie__overview">{state?.overview}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Movie;
