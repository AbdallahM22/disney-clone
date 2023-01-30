import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { collection, doc, getDocs } from "firebase/firestore";
// import db from '../firebase';

import ImgSlider from "../components/ImgSlider";
import { fetchMovies } from "../store/moviesSlice";
import classes from "./Home.module.css";
import MoviesList from "../components/MoviesList";
import Viewers from "../components/Viewers";

const Home = () => {
  const dispatch = useDispatch();
  const recommend = useSelector((state) => state.movies.recommend);
  const newDisney = useSelector((state) => state.movies.newDisney);
  const originals = useSelector((state) => state.movies.original);
  const trending = useSelector((state) => state.movies.trending);

  
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  
  return (
    <div className={classes.home}>
      <ImgSlider />
      <Viewers />
      <div className="container">
        {recommend && (
          <MoviesList movies={recommend} heading={"Recommended For You"} />
        )}
        {newDisney && <MoviesList movies={newDisney} heading={"New To Disney+"} />}
        {originals && <MoviesList movies={originals} heading={"Originals"} />}
        {trending && <MoviesList movies={trending} heading={"Trending"} />}
      </div>
    </div>
  );
};

export default Home;
