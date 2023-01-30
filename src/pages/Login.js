import React from "react";
import { Link  } from "react-router-dom";
import classes from './Login.module.css';
import logoOne from '../images/cta-logo-one.svg';
import logoTwo from '../images/cta-logo-two.png';

const Login = () => {

  return (
    <div className={classes.login}>
      <img src={logoOne} alt='' className={classes.logo}/>
      <Link className={classes.btn}>get all there</Link>
      <p className={classes.description}>Thousands of hours of series, movies &amp; originals from the world's greatest storytellers. Discover more than you’d ever imagined with new and exclusive originals streaming now. Endless entertainment. Stories for everyone. All series in one place. All movies in one place.</p>
      <img src={logoTwo} alt='' className={classes.logo}/>
    </div>
  )
}

export default Login;
