import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Movie from "./Components/Movie/Movie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Switch>
        <div className="app">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Movie} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
