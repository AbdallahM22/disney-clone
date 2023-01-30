import React from "react";
import classes from "./Viewer.module.css";
import disneyImg from "../images/viewers-disney.png";
import disneyVideo from '../videos/1564674844-disney.mp4';
import marvelImg from "../images/viewers-marvel.png";
import marvelVideo from '../videos/1564676115-marvel.mp4';
import nationalImg from "../images/viewers-national.png";
import nationalVideo from '../videos/1564676296-national-geographic.mp4';
import pixarImg from "../images/viewers-pixar.png";
import pixarVideo from '../videos/1564676714-pixar.mp4';
import starImg from "../images/viewers-starwars.png";
import startVideo from '../videos/1608229455-star-wars.mp4';

const Viewers = () => {
  return (
    <div className="container">
      <div className={classes.viewers}>
        <div className={classes.viewer}>
          <img src={disneyImg} alt="" />
          <video className={classes.video} muted={true} autoPlay={true} loop={true}>
            <source src={disneyVideo} ></source>
          </video>
        </div>
        <div className={classes.viewer}>
          <img src={marvelImg} alt="" />
          <video className={classes.video} muted={true} autoPlay={true} loop={true}>
            <source src={marvelVideo} ></source>
          </video>
        </div>
        <div className={classes.viewer}>
          <img src={nationalImg} alt="" />
          <video className={classes.video} muted={true} autoPlay={true} loop={true}>
            <source src={nationalVideo} ></source>
          </video>
        </div>
        <div className={classes.viewer}>
          <img src={pixarImg} alt="" />
          <video className={classes.video} muted={true} autoPlay={true} loop={true}>
            <source src={pixarVideo} ></source>
          </video>
        </div>
        <div className={classes.viewer}>
          <img src={starImg} alt="" />
          <video className={classes.video} muted={true} autoPlay={true} loop={true}>
            <source src={startVideo} ></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default Viewers;
