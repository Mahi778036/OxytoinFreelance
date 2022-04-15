import React from 'react';
import classes from './Footer.module.css';
import footerImg from '../assets/1@2x.png';

export const Footer = () => {
  return (
    <div className={classes.footerContainer}>
        <h3>Built at</h3>
        <img src={footerImg} className={classes.footerImg} alt="footerLogo" />
        <p>All Rights Reseved</p>
    </div>
  )
}
