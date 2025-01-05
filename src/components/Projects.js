import React from 'react';
import './Projects.css';
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';
import project4Image from '../assets/passwordGen.png';
import project5Image from '../assets/interviewCoachImage.png';
import project6Image from '../assets/foodDeliveryImage.png';
import project7Image from '../assets/mernServiceImage.png';

const Projects = () => {
  const projects = [
    
      {
        title: 'Interview Coach',
        description: 'A cutting-edge mock interview web app designed to prepare users for real-world interviews. Built with React, ShadCN, and Drizzle ORM, it integrates Gemini AI to simulate intelligent, adaptive interview scenarios. With Clerk for secure authentication, it offers a personalized experience, empowering users to improve their skills and confidence through realistic, AI-driven interview practice.',
        image: project5Image,
        link: 'http://example.com/interview-coach',
      },
      {
        title: 'Food Delivery Webapp',
        description: 'Developed a food delivery application using the MERN stack, featuring user authentication, a responsive interface, and real-time order tracking. Integrated secure payment processing (Stripe) and created an admin dashboard for managing users and orders.',
        image: project6Image,
      //  link: 'http://example.com/food-delivery',
      },
      {
        title: 'Computer Inventory Management System for College',
        description: 'This system was specifically created to manage all computer-related inventory for the college, from issuing inventory to various departments to scraping faulty inventory. It replaces the manual register-based system used in the college.',
        image: project1Image,
     //   link: 'http://example.com/computer-inventory',
      },
      {
        title: 'MERN Service-Based Website with Admin Panel',
        description: 'Developed a service-based website using the MERN stack featuring a fully authenticated and authorized admin panel. Implemented functionalities allowing admins to manage services (add, update, and delete), review user messages, and edit user data. The blog functionality was built using Next.js and MongoDB.',
        image: project7Image,
      //  link: 'http://example.com/mern-service',
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
      title: 'Password Genrator',
      description: 'Basic Website to generate password of different lenght using slider',
      image: project4Image ,
      link: 'https://passwordgenrator-ten.vercel.app/'
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
