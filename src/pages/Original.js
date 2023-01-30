import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "../components/MoviesList";
import classes from './Movies.module.css'

const Original = () => {
  const movies = useSelector((state) => state.movies.original);
  return (
    <div className="container">
      <div className={classes.movies}>{movies && <MoviesList movies={movies} heading={"Original"} />}</div>
    </div>
  );
};

export default Original;