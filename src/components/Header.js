import React, { useEffect, useState } from "react";
import {  signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import logoImg from "../images/logo.svg";
import userImg from '../images/user.png'
import homeImg from "../images/home-icon.svg";
// import searchImg from "../images/search-icon.svg";
import watchlistImg from "../images/watchlist-icon.svg";
import originalImg from "../images/original-icon.svg";
import moviesImg from "../images/movie-icon.svg";
import seriesImg from "../images/series-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/userSlice";

const Header = () => {
  
  const [isAuth, setIsAuth] = useState(false);
  const userInfo = useSelector(state=> state.user.user);
  const provider = new GoogleAuthProvider();

  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          id: user.uid,
          email: user.email,
          photo: user.photoURL
        }))
        setIsAuth(true)

      } else {
        setIsAuth(false)

      }
    });
  }, [])

  const loginHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        dispatch(login({
          id: user.uid,
          email: user.email,
          photo: user.photoURL
        }))
        navigate('/');
        // ...
      });
      
      
  };
  const logoutHandler = ()=> {
    signOut(auth).then(() => {
      dispatch(logout());
      navigate('/login');
    }).catch((error) => {
      // An error happened.
    });
  }
  
  return (
    <div className={classes.header}>
      <div className={`container ${classes.content}`}>
        <Link to="/" className={classes.logo}>
          <img src={logoImg} alt="" />
        </Link>
        {isAuth && (
          <>
            <div className={classes.nav}>
              <Link to="/" className={classes.nav_item}>
                <img src={homeImg} alt="" />
                <span>home</span>
              </Link>
              {/* <Link className={classes.nav_item}>
                <img src={searchImg} alt="" />
                <span>search</span>
              </Link> */}
              <Link to="/watchlist" className={classes.nav_item}>
                <img src={watchlistImg} alt="" />
                <span>watchlist</span>
              </Link>
              <Link to="/original" className={classes.nav_item}>
                <img src={originalImg} alt="" />
                <span>original</span>
              </Link>
              <Link to="/movies" className={classes.nav_item}>
                <img src={moviesImg} alt="" />
                <span>movies</span>
              </Link>
              <Link to="/series" className={classes.nav_item}>
                <img src={seriesImg} alt="" />
                <span>series</span>
              </Link>
            </div>
            <Link to="/login" className={classes.login_img} >
              <img src={userInfo.photo? userInfo.photo : userImg} alt="" onClick={logoutHandler}/>
            </Link>
          </>
        )}
        {!isAuth && <button onClick={loginHandler} className={classes.login}>Login</button>}
      </div>
    </div>
  );
};

export default Header;
