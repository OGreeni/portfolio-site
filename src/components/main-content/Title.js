import React from 'react';
import profilepic from '../../Dependencies/profilepic.jpg';
import classes from './Title.module.css';

const Title = () => {
  return (
    <div className={classes.container}>
      <div className={classes['title-image-container']}>
        <h1 className={classes.title}>
          Hi! I'm Omri <span className={classes['last-name']}>Green</span>
        </h1>
        <img
          className={classes['profile-pic']}
          src={profilepic}
          alt="profile-pic"
        ></img>
      </div>
      <h2 className={classes.description}>
        I'm a <span className={classes['age-text']}>17</span>-year-old
        programmer from New Jersey
      </h2>
    </div>
  );
};

export default Title;
