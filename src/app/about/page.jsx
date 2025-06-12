"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FileDownload, BusinessCenter, School } from '@mui/icons-material';
import { SiMinutemailer } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out-quart'
    });
    
    return () => {
      AOS.refresh();
    };
  }, []);

  const skills = {
    languages: ['Java', 'Python', 'C/C++', 'SQL (PostgreSQL)', 'JavaScript', 'Kotlin', 'Swift', 'HTML/CSS', 'GraphQL', 'PLSQL'],
    frameworks: ['React', 'Spring Boot', 'Spring MVC', 'Node.js', 'Vue.js', 'JUnit', 'WordPress', 'Material UI', 'pandas', 'NumPy', 'Matplotlib'],
    tools: ['Git', 'Docker', 'Google Cloud Platform', 'Visual Studio', 'PyCharm', 'Eclipse', 'Android Studio', 'Xcode', 'Oracle Responsys', 'Postman', 'Dreamweaver', 'Netlify', 'MongoDB', 'Microsoft Excel', 'Power BI', 'JIRA', 'Confluence']
  };

  return (
    <section className="about-section">
      <div className="container">
        {/* Personal Info Section */}
        <div className="section-header" data-aos="fade-up">
          <h1 className="main-title">
            <span className="gradient-text">About Me</span>
          </h1>
          <div className="accent-line" data-aos="zoom-in"></div>
        </div>

        <div className="personal-info" data-aos="fade-up" data-aos-delay="100">
          <div className="info-card" data-aos="fade-right">
            <div className="info-content">
              <h4>First Name: <span>Rajesh Kumar Reddy</span></h4>
              <h4>Last Name: <span>Avula</span></h4>
              <h4>Age: <span>25</span></h4>
              <h4>Nationality: <span>Indian</span></h4>
              <h4>Freelance: <span>Available</span></h4>
            </div>
          </div>

          <div className="info-card" data-aos="fade-left">
            <div className="info-content">
              <h4>Address: <span>India</span></h4>
              <h4>Phone: <span>+1 9303334205</span></h4>
              <svg width="0" height="0">
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#80cbc4" />
                  <stop offset="100%" stopColor="#64B5F6" />
                </linearGradient>
              </svg>
              <h4>Email: <span><a href="mailto:avula.rajesh.kumar.reddy@gmail.com"><SiMinutemailer style={{ fill: 'url(#grad)', marginLeft: '8px' }}/></a></span></h4>
              <h4>GitHub: <span><a href="https://github.com/Rajesh112k"><FaGithub style={{ fill: 'url(#grad)', marginLeft: '8px' }} /></a></span></h4>
              <h4>Languages: <span>Telugu, English, Hindi, Kannada</span></h4>
            </div>
          </div>
        </div>

        <div className="download-btn" data-aos="fade-up" data-aos-delay="200">
          <a 
            href="/Rajesh_kumar_cv.pdf" 
            download="Rajesh_Kumar_CV.pdf"
            className="action-btn primary"
          >
            DOWNLOAD CV
            <span className="btn-icon">
              <FileDownload fontSize="small" />
            </span>
          </a>
        </div>

        {/* Stats Section */}
        <div className="stats-section" data-aos="fade-up" data-aos-delay="300">
          <div className="stat-card" data-aos="zoom-in">
            <h3>2+</h3>
            <p>Years of Industry Experience</p>
          </div>
          <div className="stat-card" data-aos="zoom-in" data-aos-delay="100">
            <h3>10+</h3>
            <p>Major Projects Completed</p>
          </div>
          <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>10+</h3>
            <p>Programming Languages Mastered</p>
          </div>
          <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
            <h3>5+</h3>
            <p>Technology Certifications</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="section-header" data-aos="fade-up">
          <h1 className="main-title">
            <span className="gradient-text">My Skills</span>
          </h1>
          <div className="accent-line" data-aos="zoom-in"></div>
        </div>

        <div className="skills-container" data-aos="fade-up" data-aos-delay="100">
          <div className="skill-category" data-aos="fade-up">
            <h3 className="skill-category-title">Languages</h3>
            <div className="skill-tags">
              {skills.languages.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category" data-aos="fade-up" data-aos-delay="100">
            <h3 className="skill-category-title">Frameworks & Libraries</h3>
            <div className="skill-tags">
              {skills.frameworks.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category" data-aos="fade-up" data-aos-delay="200">
            <h3 className="skill-category-title">Developer Tools</h3>
            <div className="skill-tags">
              {skills.tools.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience & Education Section */}
        <div className="section-header" data-aos="fade-up">
          <h1 className="main-title">
            <span className="gradient-text">Experience & Education</span>
          </h1>
          <div className="accent-line" data-aos="zoom-in"></div>
        </div>

        <div className="timeline-section">
          <div className="timeline-column">
            <div className="timeline-item" data-aos="fade-right">
              <div className="timeline-icon">
                <BusinessCenter />
              </div>
              <div className="timeline-content">
                <span className="timeline-date">2023-PRESENT</span>
                <h4>Graduate Teaching Assistant - Indiana University</h4>
                <p>
                  Assisted students in software engineering concepts through lab sessions, project debugging, 
                  and assignment evaluation. Conducted review sessions and refined course materials.
                </p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-right" data-aos-delay="100">
              <div className="timeline-icon">
                <BusinessCenter />
              </div>
              <div className="timeline-content">
                <span className="timeline-date">2021-2023</span>
                <h4>Software Engineer - Oracle</h4>
                <p>
                  Conducted in-depth analysis on Oracle Marketing Cloud campaigns, optimizing email performance 
                  by analyzing over 5,000 data points. Developed marketing campaigns using A/B Testing.
                </p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-right" data-aos-delay="200">
              <div className="timeline-icon">
                <BusinessCenter />
              </div>
              <div className="timeline-content">
                <span className="timeline-date">Jan 2021 - May 2021</span>
                <h4>Software Engineer Intern - Evertz Pvt Limited</h4>
                <p>
                  Developed user interactions using Vue.js and implemented object-oriented design patterns 
                  for web pages. Gained experience in broadcasting concepts.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-column">
            <div className="timeline-item" data-aos="fade-left">
              <div className="timeline-icon">
                <School />
              </div>
              <div className="timeline-content">
                <span className="timeline-date">2023-PRESENT</span>
                <h4>M.S. in Computer Science - Indiana University</h4>
                <p>
                  Pursuing a Master's degree in Computer Science with a current CGPA of 3.84/4.00. Engaging in 
                  research and projects related to data mining and machine learning.
                </p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-left" data-aos-delay="100">
              <div className="timeline-icon">
                <School />
              </div>
              <div className="timeline-content">
                <span className="timeline-date">2017-2021</span>
                <h4>B.E. in Information Science - B.M.S Institute of Technology</h4>
                <p>
                  Earned a Bachelor's degree in Information Science and Engineering with a CGPA of 8.51/10.00. 
                  Gained strong expertise in software development and web technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;