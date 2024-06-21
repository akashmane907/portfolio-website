import React from 'react';
import './Skills.css';

import htmlIcon from '../assets/HTML.svg';
import cssIcon from '../assets/CSS.svg';
import jsIcon from '../assets/JavaScript.svg';
import MySql from '../assets/MySQL.svg';
import reactIcon from '../assets/React.svg';
import nodeIcon from '../assets/NodeJS.svg';
import PHP from '../assets/PHP.svg';
import C from '../assets/CPP.svg';
import Python from '../assets/Python.svg';
import Github from '../assets/Github.svg';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'PHP', icon: PHP },
    { name: 'Python', icon: Python },
    { name: 'React', icon: reactIcon },
    { name: 'Node.js', icon: nodeIcon },
    { name: 'MySql', icon: MySql },
    { name: 'Cpp', icon: C },
    { name: 'Github', icon: Github },
    
    // Add more skills here
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <h2 className="skill-name">{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
