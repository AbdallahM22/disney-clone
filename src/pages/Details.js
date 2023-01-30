import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../firebase";
import classes from "./Details.module.css";
import playImg from "../images/play-icon-black.png";
import trailerImg from "../images/play-icon-white.png";
import groupImg from "../images/group-icon.png";
import { addToWatchList,  removeFromWatchList } from "../store/moviesSlice";
import { useDispatch } from "react-redux";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [details, setDetails] = useState();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const fetchElementDetails = async () => {
      const docRef = doc(db, "movies", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDetails(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
      }
    };
    fetchElementDetails();
  }, []);
  useEffect(()=> {
    const watchlist = JSON.parse(localStorage.getItem('watchlist'));
    const added = watchlist.find(element=> element.id === id);
    setClicked(added?true: false);
  }, [])

  const addToWatchListHandler = ()=> {
    dispatch(addToWatchList({id ,...details}));
    setClicked(true);
  }
  const removeFromWatchListHandler = ()=> {
    dispatch(removeFromWatchList(id));
    setClicked(false);
  }
  return (
    <div className={classes.details}>
      {details && <img className={classes.background} src={details.backgroundImg} alt=''/>}
      <div className="container">
        {details && <div className={classes.content}>
          <img className={classes.logo} src={details.titleImg} alt="" />
          <div className={classes.controls}>
            <button href="/" className={classes.play_btn}>
              <img src={playImg} alt="" />
              <span>play</span>
            </button>
            <button href="/" className={classes.trailer_btn}>
              <img src={trailerImg} alt="" />
              <span>trailer</span>
            </button>
            <button className={classes.plus_btn} >
              {!clicked && <span onClick={addToWatchListHandler}>+</span>}
              {clicked && <span onClick={removeFromWatchListHandler}>-</span>}
            </button>
            <button href="/" className={classes.group_btn}>
              <img src={groupImg} alt="" />
            </button>
          </div>
          <p className={classes.info}>{details.subTitle}</p>
          <p className={classes.description}>{details.description}</p>
        </div>}
      </div>
    </div>
  );
};

export default Details;
