import React from 'react';
import './SkillsetList.css';
// import programmingpic from '../../Dependencies/programmingpic.png';

const SkillsetList = () => {
  return (
    <div className="skills-container">
      <h3 className="skills-main-title">Technologies I'm using:</h3>
      <h4 className="secondary-title">Frontend:</h4>
      <div className="img-container">
        <img
          className="programming-img"
          src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
          alt="React"
        />
        <img
          className="programming-img"
          src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
          alt="HTML"
        />
        <img
          className="programming-img"
          src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
          alt="CSS"
        />
        <img
          className="programming-img"
          src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
          alt="JavaScript"
        />
        <img
          className="programming-img"
          src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
          alt="Bootstrap"
        />
      </div>
      <h4 className="secondary-title">Backend:</h4>
      <div className="img-container">
        <img
          className="programming-img"
          src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue"
          alt="Python"
        />
        <img
          className="programming-img"
          src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
          alt="Flask"
        />
      </div>
      <h3 className="secondary-title">Technologies I'll be learning next:</h3>
      <div className="img-container">
        <img
          className="programming-img"
          src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
          alt="Node.js"
        />
        <img
          className="programming-img"
          src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
          alt="TypeScript"
        />
        <img
          className="programming-img"
          src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
          alt="Tailwind CSS"
        />
      </div>
    </div>
  );
};

export default SkillsetList;
