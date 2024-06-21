import React from 'react';
import './About.css';
import profileImage from '../assets/profile.jpg'; // Adjust the path accordingly

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h1 className="about-title">About Me</h1>
        <div className="about-content">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="about-text">
            <p>
              Hi, I'm Akash Mane, a passionate web developer with a love for creating beautiful and functional websites. 
              I specialize in front-end and Backend development and have experience with various web technologies.
            </p>
            <p>
              In my free time, I enjoy exploring nature, photography, and learning new technologies. 
              Feel free to browse through my projects and skills to know more about my work.
            </p>
           
          </div>
          <div className="resume-download">
          <a href="/resume.pdf" download className="button">Download Resume</a>
        </div>
        
          
        
        </div>
    
      </div>
    </section>
  );
};

export default About;
