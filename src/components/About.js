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
            
<p> Hello! I’m Akash Mane, a software developer passionate about creating impactful solutions. Currently pursuing a Bachelor’s degree in Computer Engineering, I specialize in building intuitive web applications and solving real-world challenges using technologies like React.js, Next.js, MongoDB, and C/C++. I take pride in designing responsive interfaces and crafting efficient backend systems.
Beyond coding, I’m driven by curiosity and inspired by challenges. When I’m not exploring new technologies, I enjoy reading, watching movies, and brainstorming innovative ideas. Let’s connect and bring great ideas to life! 🌟

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
