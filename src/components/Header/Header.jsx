import React from 'react';
import classes from './Header.module.css';
import titleImg from '../../assets/titleImg.png'
import diamond from '../../assets/diamond.png';

export const Header = () => {
  return (
    
    <>
    <div className={classes.headerSection}>
      <figure className={classes.headerTitle}>
          <img src={titleImg} className={classes.logo} alt="title-logo" />
      </figure>
      <div className={classes.userInfo}>
          <div className={classes.circle}></div>
          <img src={diamond} alt="header_logo" className={classes.diamondImg} />
          <div className={classes.id}>
              0x2ec……….…..9bb6
          </div>
      </div>
    </div>
     <div className={classes.mainTextContainer}>
          <h1>Launch Staking</h1>
          <p>Launch a staking dashboard with your NFT collection as the underlying <br></br>& allow your community to earn utility tokens.</p>
       </div>
    </>
  )
}
