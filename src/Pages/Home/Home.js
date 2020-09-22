import React from "react";
import Banner from "../../Components/Banner/Banner";
import Row from "../../Components/Row/Row";
import request from "../../Requests/request";

function Home() {
  return (
    <div>
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchURL={request.fetchTrending} />
      <Row title="Top Rated" fetchURL={request.fetchTopRated} />
      <Row title="Romance" fetchURL={request.fetchRomanceMovies} />
      <Row title="Horror" fetchURL={request.fetchHorrorMovies} />
      <Row title="Trending" fetchURL={request.fetchActionMovies} />
      <Row title="Comedy" fetchURL={request.fetchComedyMovies} />
      <Row title="Documentries" fetchURL={request.fetchDocumentries} />
    </div>
  );
}

export default Home;
