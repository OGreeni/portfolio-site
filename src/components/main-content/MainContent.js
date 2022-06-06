import React from 'react';
import Title from './Title';
import SkillsetList from './SkillsetList';
import SocialLinks from './SocialLinks';
import classes from './MainContent.module.css';

const MainContent = () => {
  return (
    <>
      <SocialLinks />
      <Title />
      <div className={classes['dividing-line-container']}>
        <div className={classes['dividing-line']} />
      </div>
      <SkillsetList />
    </>
  );
};

export default MainContent;
