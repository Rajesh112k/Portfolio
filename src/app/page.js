"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import userImage from '../assets/rajesh_kumar_photo1.jpeg';
import Image from 'next/image';
import { ArrowForward, FileDownload } from '@mui/icons-material';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out-quart'
    });
    
    // Clean up AOS when component unmounts
    return () => {
      AOS.refresh();
    };
  }, []);
  
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          
          {/* Image Column - Moved to right on desktop, top on mobile */}
          <div 
            className="hero-image" 
            data-aos="fade-up" 
            data-aos-delay="100"
            data-aos-offset="100"
          >
            <div className="image-wrapper">
              <Image 
                src={userImage} 
                alt="Rajesh Kumar Reddy Avula" 
                fill
                className="profile-image"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="image-glow"></div>
            </div>
          </div>

          {/* Text Column */}
          <div 
            className="hero-text" 
            data-aos="fade-up" 
            data-aos-delay="200"
            data-aos-offset="100"
          >
            <div className="title-group">
              <div 
                className="accent-line" 
                data-aos="zoom-in" 
                data-aos-delay="300"
              ></div>
              <h1 className="main-title">
                <span className="gradient-text">Rajesh Kumar Reddy Avula</span>
                <br />
                <TypeAnimation
                  sequence={[
                    'FULL STACK DEVELOPER',
                    1000,
                    'SOFTWARE ENGINEER',
                    1000,
                    'REACT SPECIALIST',
                    1000,
                    'CLOUD ARCHITECT',
                    1000,
                    'ML ENTHUSIAST',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  className="typing-text"
                  repeat={Infinity}
                  style={{ display: 'inline-block' }}
                />
              </h1>
            </div>

            <p 
              className="hero-description" 
              data-aos="fade-up" 
              data-aos-delay="400"
            >
              I am a passionate <span className="highlight">Full Stack Developer</span> with {' '}
              <span className="highlight">2+ years</span> of experience building scalable web applications. 
              I specialize in modern JavaScript frameworks and cloud-native architectures, delivering 
              high-performance solutions with elegant user interfaces.
            </p>

            <div 
              className="hero-actions" 
              data-aos="fade-up" 
              data-aos-delay="500"
            >
              <Link 
                href="/about" 
                className="action-btn primary"
                aria-label="Learn more about me"
              >
                ABOUT ME
                <span className="btn-icon">
                  <ArrowForward fontSize="small" />
                </span>
              </Link>

              <a 
                href="/Rajesh_kumar_cv.pdf" 
                download="Rajesh_Kumar_CV.pdf"
                className="action-btn secondary"
                aria-label="Download my CV"
              >
                DOWNLOAD CV
                <span className="btn-icon">
                  <FileDownload fontSize="small" />
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}