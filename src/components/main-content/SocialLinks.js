import React from 'react';
import classes from './SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <div className={classes['links-container']}>
      <a href="https://github.com/OGreeni">
        <img
          className={classes['link-badge']}
          src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
"
          alt="GitHub"
        />
      </a>
      <a href="https://www.linkedin.com/in/omri-green-880091240/">
        <img
          className={classes['link-badge']}
          src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
"
          alt="LinkedIn"
        />
      </a>
      <a href="https://twitter.com/About63Dogs">
        <img
          className={classes['link-badge']}
          src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
"
          alt="Twitter"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
