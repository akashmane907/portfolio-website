import React from 'react';
import './Projects.css';
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';
import project4Image from '../assets/project4.png';

const Projects = () => {
  const projects = [
    {
      title: 'Computer Inventory Management System for College',
      description: 'This Project was created to replace the manual register based system used in our college to manage computer inventory',
      image: project1Image ,
      link: 'http://example.com/project1'
    },
    {
      title: 'Currency Converter',
      description: 'This Project was created to learn use of API',
      image: project2Image ,
      link: 'https://aquamarine-malasada-4fbbe2.netlify.app/'
    },
    {
      title: 'Games :)',
      description: 'These games are created as a fun project an learn various skills',
      image: project3Image ,
      link: 'https://courageous-hamster-f62a24.netlify.app/'
    },
    {
      title: 'Food Recepie Website',
      description: 'An appealing website to get recepies from',
      image: project4Image ,
      link: 'https://idyllic-croquembouche-5ea9ea.netlify.app/'
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
