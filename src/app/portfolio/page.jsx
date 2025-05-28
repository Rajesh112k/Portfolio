"use client"
import Image from 'next/image';
import React, { useEffect } from 'react';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import LinkIcon from '@mui/icons-material/Link';
import { Code, Star, GitHub } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: 'Savory Stories',
    image: project4,
    link: 'https://github.com/Rajesh112k/Savory-Stories',
    tech: ['Expo', 'Firebase', 'Spoonacular API', 'React Native'],
    description: 'A mobile recipe book app with Firebase Authentication and Spoonacular API integration that allows users to browse, save, and share recipes with a beautiful interactive interface.',
    features: [
      'Cross-platform (iOS/Android)',
      'Camera upload for personal recipes',
      'Personalized dietary filters',
      'Firebase authentication',
      'Social sharing features'
    ]
  },
  {
    title: 'Rentr',
    image: project1,
    link: 'https://github.com/Rajesh112k/Rentr',
    tech: ['React.js', 'MongoDB', 'Node.js', 'Express', 'Material UI'],
    description: 'A comprehensive home rental marketplace solution featuring property listings, user accounts, and integrated messaging system with robust search functionality.',
    features: [
      'Cloud-hosted on Netlify',
      'Tested with 200+ users',
      'Secure authentication flow',
      'Mobile-first responsive design',
      'Real-time messaging system'
    ]
  },
  {
    title: 'Reddit Relevance Analysis',
    image: project2,
    link: 'https://github.com/Rajesh112k/Reddit-Comments-to-Post-Relevance-Analysis',
    tech: ['Python', 'NLP', 'Pandas', 'Matplotlib', 'Scikit-learn'],
    description: 'Advanced NLP analysis of Reddit threads to assess semantic relevance between posts and comments using machine learning techniques.',
    features: [
      'TF-IDF embeddings',
      'Semantic similarity scoring',
      'Sentiment polarity analysis',
      'Cluster coherence metrics',
      'Custom relevance classification'
    ]
  },
  {
    title: 'Gradebook App',
    image: project3,
    link: 'https://github.com/Rajesh112k/Gradebook-App',
    tech: ['Firebase', 'React Native', 'Expo', 'Firestore'],
    description: 'Comprehensive grade management solution for educators with student tracking, attendance, and bonus point systems.',
    features: [
      'Intuitive teacher dashboard',
      'Grade calculation engine',
      'Attendance tracking',
      'Bonus point system',
      'Data export capabilities'
    ]
  },
];

const skills = [
  { name: 'React', level: 90 },
  { name: 'React Native', level: 85 },
  { name: 'Java', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'Firebase', level: 80 },
  { name: 'NLP', level: 70 },
  { name: 'AWS', level: 75 },
  { name: 'Docker', level: 70 },
  { name: 'Git', level: 85 },
  { name: 'SQL', level: 80 },
];

const certifications = [
  {
    name: 'AWS Certified Developer-Associate',
    issuer: 'Amazon Web Services',
    date: '2023',
    icon: 'aws'
  },
  {
    name: 'Oracle Java SE 8 Associate',
    issuer: 'Oracle',
    date: '2022',
    icon: 'java'
  },
  {
    name: 'Oracle Database SQL Certified',
    issuer: 'Oracle',
    date: '2022',
    icon: 'database'
  },
  {
    name: 'Oracle Responsys Marketing',
    issuer: 'Oracle',
    date: '2021',
    icon: 'marketing'
  }
];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out-quart'
    });
  }, []);

  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container-fluid">
          <div className="hero-content">
            <h1 className="hd" data-aos="fade-down">
              MY <span>PORTFOLIO</span>
              <span className="title-bg">CREATIONS</span>
            </h1>
            
            <div className="hero-text" data-aos="fade-up" data-aos-delay="200">
              <p>
                I'm a <span className="highlight">Software Engineer</span> specializing in full-stack development with expertise in React, 
                React Native, and cloud technologies. My work combines elegant design with robust architecture 
                to deliver exceptional user experiences.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Certifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="portfolio-projects">
        <div className="container-fluid">
          <div className="section-header" data-aos="fade-right">
            <h2 className="section-title">
              <span className="icon"><Code /></span>
              Featured Projects
            </h2>
            <p className="section-subtitle">
              Selected works demonstrating my technical expertise and problem-solving approach
            </p>
          </div>
          
          <div className="projects-column">
            {projects.map((proj, index) => (
              <div 
                className="project-item" 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="project-content">
                  <div className="project-header">
                    <h3>{proj.title}</h3>
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="project-link"
                      aria-label={`View ${proj.title} on GitHub`}
                    >
                      <GitHub className="github-icon" />
                      <span>View Code</span>
                    </a>
                  </div>
                  
                  <p className="project-description">{proj.description}</p>
                  
                  <div className="project-features">
                    <h4 className="features-title">
                      <span className="highlight">Key Features</span>
                    </h4>
                    <ul>
                      {proj.features.map((feature, i) => (
                        <li key={i}>
                          <span className="feature-icon">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-tech">
                    <h4 className="tech-title">
                      <span className="highlight">Technologies</span>
                    </h4>
                    <div className="tech-tags">
                      {proj.tech.map((t, i) => (
                        <span className="tech-tag" key={i}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="project-media">
                  <div className="image-container">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      layout="fill"
                      objectFit="cover"
                      className="project-image"
                    />
                  </div>
                  <div className="image-overlay"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="portfolio-skills">
        <div className="container-fluid">
          <div className="section-header" data-aos="fade-right">
            <h2 className="section-title">
              <span className="icon"><Star /></span>
              Technical Expertise
            </h2>
            <p className="section-subtitle">
              My proficiency across key technologies and frameworks
            </p>
          </div>
          
          <div className="skills-visual">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="portfolio-certifications">
        <div className="container-fluid">
          <div className="section-header" data-aos="fade-right">
            <h2 className="section-title">
              <span className="icon"><Star /></span>
              Certifications
            </h2>
            <p className="section-subtitle">
              Validated expertise through industry-recognized certifications
            </p>
          </div>
          
          <div className="certs-grid">
            {certifications.map((cert, index) => (
              <div 
                className="cert-card" 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`cert-badge ${cert.icon}`}></div>
                <h3>{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="container-fluid">
          <div className="cta-content" data-aos="zoom-in">
            <h2>Let's Build Something Exceptional</h2>
            <p>
              I'm currently available for new opportunities and collaborations. 
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
            <div className="cta-buttons">
              <a 
                href="https://github.com/Rajesh112k" 
                target="_blank" 
                rel="noreferrer"
                className="btn-common iconBtn"
              >
                Explore Full Portfolio
                <span className="icon">
                  <GitHub />
                </span>
              </a>
              <a 
                href="mailto:avula.rajesh.kumar.reddy@gmail.com" 
                className="btn-common"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;