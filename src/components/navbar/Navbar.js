import React from 'react';
import classes from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <div className={classes['main-nav-container']}>
      <nav className={classes['main-nav']}>
        <ul className={classes['list-items-container']}>
          <li className={classes['main-nav-item' /* add brand class */]}>
            <div>
              <a href="#">Omri Green</a>
            </div>
          </li>
          <div className={classes['main-nav-align-right']}>
            {props.navItems.map((navItem) => {
              return (
                <li className={classes['main-nav-item']}>
                  <a href="#">{navItem.title}</a>
                </li>
              );
            })}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
