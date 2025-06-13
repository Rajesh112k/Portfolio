"use client"
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import project1 from '../../assets/project1.png';
import project3 from '../../assets/project2.png';
import project2 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/project5.png';
import aws from '../../assets/aws.png';
import oracle from '../../assets/oracle.jpg';
import { Code, Star, GitHub } from '@mui/icons-material';
import { ChevronLeft, ChevronRight } from 'react-feather';
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
  {
    title: 'Vybr - Ecommerce Platform',
    image: project5,
    link: 'https://github.com/Rajesh112k/Vybr',
    tech: ['React.js', 'Node.js', 'Firebase', 'Stripe API', 'Redux'],
    description: 'A modern e-commerce platform featuring seamless shopping experience with secure payments, personalized recommendations, and real-time inventory management.',
    features: [
      'Responsive design for all devices',
      'Secure Stripe payment integration',
      'User authentication & profile management',
      'Product search and filtering system',
      'Shopping cart with persistent storage',
      'Admin dashboard for inventory management',
      'Product review and rating system'
    ]
  }
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
    date: '2025',
    icon: 'aws'
  },
  {
    name: 'Oracle Java SE 8 Associate',
    issuer: 'Oracle',
    date: '2023',
    icon: 'java'
  },
  {
    name: 'Oracle Database SQL Certified',
    issuer: 'Oracle',
    date: '2023',
    icon: 'database'
  },
  {
    name: 'Oracle Responsys Marketing',
    issuer: 'Oracle',
    date: '2023',
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
  
  const [activeProject, setActiveProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollRef = useRef(null);
  const detailsRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? Math.max(0, scrollLeft - clientWidth / 2)
        : Math.min(scrollLeft + clientWidth / 2, scrollRef.current.scrollWidth - clientWidth);
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleProjectChange = (index) => {
    if (isAnimating || index === activeProject) return;
    
    setIsAnimating(true);
    setActiveProject(index);
    
    if (scrollRef.current) {
      const projectElement = scrollRef.current.children[index];
      if (projectElement) {
        const containerWidth = scrollRef.current.clientWidth;
        const projectLeft = projectElement.offsetLeft;
        const projectWidth = projectElement.offsetWidth;
        const scrollTo = projectLeft - (containerWidth / 2) + (projectWidth / 2);
        
        scrollRef.current.scrollTo({
          left: scrollTo,
          behavior: 'smooth'
        });
      }
    }

    setTimeout(() => setIsAnimating(false), 300);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handleProjectChange((activeProject - 1 + projects.length) % projects.length);
      } else if (e.key === 'ArrowRight') {
        handleProjectChange((activeProject + 1) % projects.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title" data-aos="fade-down">
              MY <span className="gradient-text">PORTFOLIO</span>
              <span className="title-bg">Works</span>
            </h1>
            
            <div className="hero-text" data-aos="fade-up">
              <p>
                I'm a <span className="highlight">Software Engineer</span> specializing in full-stack development with expertise in React, 
                React Native, and cloud technologies. My work combines elegant design with robust architecture 
                to deliver exceptional user experiences.
              </p>
              <div className="hero-stats">
                <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
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
        <div className="container">
          <div className="section-header" data-aos="fade">
            <h2 className="section-title">
              <span className="icon"><Code /></span>
              Featured Projects
            </h2>
            <p className="section-subtitle">
              Selected works demonstrating my technical expertise and problem-solving approach
            </p>
          </div>
          
          <div className="projects-carousel-container">
            <button 
              className="carousel-arrow left" 
              onClick={() => scroll('left')}
              aria-label="Scroll projects left"
              data-aos="fade-right"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="projects-carousel-wrapper">
              <div className="projects-carousel" ref={scrollRef}>
                {projects.map((proj, index) => (
                  <div
                    key={index}
                    className={`project-title ${index === activeProject ? 'active' : ''} ${isAnimating ? 'no-click' : ''}`}
                    onClick={() => handleProjectChange(index)}
                    aria-current={index === activeProject}
                    
                  >
                    {proj.title}
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="carousel-arrow right" 
              onClick={() => scroll('right')}
              aria-label="Scroll projects right"
              
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div 
            className={`project-details-container ${isAnimating ? 'fade-out' : 'fade-in'}`}
            ref={detailsRef}
            key={activeProject}
            
          >
            <div className="project-item">
              <div className="project-content-wrapper">
                <div className="project-content">
                  <div className="project-header">
                    <h3>{projects[activeProject].title}</h3>
                    <a 
                      href={projects[activeProject].link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="project-link"
                      aria-label={`View ${projects[activeProject].title} on GitHub`}
                    >
                      <GitHub className="github-icon" />
                      <span>View Code</span>
                    </a>
                  </div>
                  
                  <p className="project-description">{projects[activeProject].description}</p>
                  
                  <div className="project-features">
                    <h4 className="features-title">
                      <span className="highlight">Key Features</span>
                    </h4>
                    <ul>
                      {projects[activeProject].features.map((feature, i) => (
                        <li key={i} data-aos="fade-up" data-aos-delay={i * 50}>
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
                      {projects[activeProject].tech.map((t, i) => (
                        <span className="tech-tag" key={i} data-aos="fade-up" data-aos-delay={i * 50}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="project-media-wrapper">
                <div className="project-media">
                  <div className="image-container">
                    <Image
                      src={projects[activeProject].image}
                      alt={projects[activeProject].title}
                      fill
                      className="project-image"
                      priority
                      style={{
                        objectFit: 'cover', // This makes it behave like background-size: cover
                        objectPosition: 'center' // Optional: centers the image
                      }}
                    />
                  </div>
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="portfolio-skills">
        <div className="container">
          <div className="section-header" >
            <h2 className="section-title">
              <span className="icon"><Star /></span>
              Technical Expertise
            </h2>
            <p className="section-subtitle">
              My proficiency across key technologies and frameworks
            </p>
          </div>
          
          <div className="skills-visual" data-aos="fade-up">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index} >
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                    data-level={skill.level}
                  ></div>
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      {/* Certifications Section */}
<section className="portfolio-certifications">
  <div className="container">
    <div className="section-header" data-aos="fade">
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
          
        >
          <div className="cert-badge">
            {cert.issuer === 'Amazon Web Services' ? (
              <Image 
                src={aws} 
                alt="AWS Certified Developer-Associate" 
                width={80}
                height={80}
                className="cert-image"
              />
            ) : cert.issuer === 'Oracle' ? (
              <Image 
                src={oracle} 
                alt="Oracle Certified" 
                width={80}
                height={80}
                className="cert-image"
              />
            ) : (
              <div className={`default-icon ${cert.icon}`}></div>
            )}
          </div>
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
        <div className="container">
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