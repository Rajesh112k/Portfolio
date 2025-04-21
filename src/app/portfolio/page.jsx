"use client"
import Image from 'next/image';
import React from 'react';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import LinkIcon from '@mui/icons-material/Link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const projects = [
  {
    title: 'Savory Stories',
    image: project4,
    link: 'https://github.com/Rajesh112k/Savory-Stories',
    tech: ['Expo', 'Firebase', 'Spoonacular API', 'React Native'],
    description: 'A mobile recipe book app with Firebase Authentication and Spoonacular API integration.',
  },
  {
    title: 'Rentr',
    image: project1,
    link: 'https://github.com/Rajesh112k/Rentr',
    tech: ['React.js', 'MongoDB', 'Node.js', 'Express'],
    description: 'An online home rental marketplace enabling users to list, rent, and manage property listings.',
  },
  {
    title: 'Reddit Relevance Analysis',
    image: project2,
    link: 'https://github.com/Rajesh112k/Reddit-Comments-to-Post-Relevance-Analysis',
    tech: ['Python', 'NLP', 'Pandas', 'Matplotlib'],
    description: 'Analyzed Reddit threads to assess the semantic relevance between posts and their comments using NLP techniques.',
  },
  {
    title: 'Gradebook App',
    image: project3,
    link: 'https://github.com/Rajesh112k/Gradebook-App',
    tech: ['Firebase', 'React Native', 'Expo'],
    description: 'An intuitive mobile app for teachers to manage student grades, bonuses, and attendance.',
  },
];

const skills = [
  'React', 'React Native', 'Expo', 'Firebase', 'MongoDB',
  'Node.js', 'Express', 'Python', 'NLP', 'HTML5', 'CSS3',
  'JavaScript', 'MySQL', 'Git', 'Bootstrap', 'Pandas', 'Matplotlib',
];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div data-aos="fade-in">
      <section className="portfolioPage">
      <div className="container-fluid">
        <div className="d-flex">
        <h1 className="hd text-center m-auto" data-aos="fade-down">
            MY <span>PORTFOLIO</span>
            <span className="title-bg">WORKS</span>
          </h1>
        </div>

        <p className="intro text-center mt-4 text-light" data-aos="fade-up" data-aos-delay="200">
          I'm a software engineer with a passion for building full-stack web and mobile applications.
          My interests lie at the intersection of intuitive UI/UX design and efficient backend systems.
          I enjoy taking ideas from concept to execution and solving real-world problems with code.
        </p>

        <div className="wrapper mt-5 d-flex align-items-center justify-content-center flex-wrap">
  {projects.map((proj, index) => (
    <div
      className="box position-relative"
      key={index}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <Image
        src={proj.image}
        alt={proj.title}
        layout="responsive"
        objectFit="cover"
        className="project-image"
      />
      <div className="overlay d-flex align-items-center justify-content-center flex-column">
        <a href={proj.link} target="_blank" rel="noreferrer">
          <LinkIcon fontSize="large" className="link-icon" />
        </a>
        <p className="proj-desc">{proj.description}</p>
        <div className="tech-stack mt-2 mb-5 pb-3">
          {proj.tech.map((t, i) => (
            <span className="badge tech-badge mx-1" key={i}>{t}</span>
          ))}
        </div>
        <h3 className=' pb-3'>{proj.title}</h3>
      </div>
    </div>
  ))}
</div>


<div className="text-center mt-5" data-aos="zoom-in" data-aos-delay="400">

          <a
            href="https://github.com/Rajesh112k"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary portfolio-btn"
          >
            View Full Portfolio
          </a>
        </div>

        <div className="skills-section mt-5 text-center">
        <h2 className="text-light mb-4" data-aos="fade-right">Tools & Technologies</h2>
          <div className="d-flex justify-content-center flex-wrap">
          {skills.map((skill, idx) => (
  <span
    className="badge skill-badge m-2"
    key={idx}
    data-aos="zoom-in"
    data-aos-delay={idx * 50}
  >
    {skill}
  </span>
))}

          </div>
        </div>
      </div>
    </section>
</div>

    
  );
};

export default Portfolio;
