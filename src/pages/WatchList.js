import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "../components/MoviesList";
import classes from "./WatchList.module.css";

const WatchList = () => {
  const movies = useSelector((state) => state.movies.watchlist);
  localStorage.setItem("watchlist", JSON.stringify(movies));

  return (
    <div className="container">
      <div className={classes.watchlist}>
        {movies.length > 0 ? (
          <MoviesList movies={movies} heading={"watchList"} />
        ) : (
          <p className={classes.empty}>There are no movies</p>
        )}
      </div>
    </div>
  );
};

export default WatchList;
