import React from "react";
import { Link } from 'react-router-dom';
import classes from "./MoviesList.module.css";

const Movies = ({movies , heading }) => {
  return (
    <>
      <h3 className={classes.heading}>{heading}</h3>
      <div className={classes.movies}>
        {movies.map((movie)=> <Link key={movie.id} to={`/details/${movie.id}`} className={classes.movie}>
          <img src={movie.cardImg} alt="" />
        </Link>)}
      </div>
    </>
  );
};

export default Movies;
