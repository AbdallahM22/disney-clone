import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "../components/MoviesList";
import classes from './Movies.module.css'

const Movies = () => {
  const movies = useSelector((state) => state.movies.movies);
  return (
    <div className="container">
      <div className={classes.movies}>{movies && <MoviesList movies={movies} heading={"Movies"} />}</div>
    </div>
  );
};

export default Movies;
