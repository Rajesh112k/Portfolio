"use client";
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import userImage from '../assets/rajesh_kumar_photo1.jpg';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }, []);
  
  return (
    <>
      <section className="homePage">
  <div className="container-fluid">
    <div className="row align-items-center wrapper">

      <div className="col-md-4 col-sm-12" data-aos="fade-right">
        <div className="imgWrap">
          <Image src={userImage} alt="Rajesh Kumar" />
        </div>
      </div>

      <div className="col-md-8 col-sm-12 text-wrapper" data-aos="fade-left">
        <div className="d-flex ">
          <span className="line" data-aos="zoom-in" data-aos-delay="200"></span>
          <h1 className="text-white font-weight-bold" data-aos="fade-up" data-aos-delay="300">
            <span className="text-common">I am Rajesh Kumar Reddy Avula.</span>
            <br />
            <TypeAnimation
              sequence={[
                'FULL STACK WEB DEVELOPER',
                1000,
                'WEB DESIGNER',
                1000,
                'SOFTWARE ENGINEER',
                1000,
                'REACT DEVELOPER',
                1000,
                'MACHINE LEARNING ENTHUSIAST',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
        </div>

        <p className="text-white" data-aos="fade-up" data-aos-delay="500">
          I am a passionate Full Stack and Software Developer with{' '}
          <b style={{ color: '#64B5F6', fontWeight: 'bold' }}>three</b> years of experience in building scalable web and software applications. Proficient in JavaScript, React, Node.js, and Python, I enjoy creating seamless user experiences and optimizing backend performance.
        </p>

        <br />
        <div className="d-flex align-items-center btns" data-aos="fade-up" data-aos-delay="600">
          <Link href="/about">
            <Button className="btn-common iconBtn font-weight-bold" disableRipple sx={{ textTransform: 'none' }}>
              ABOUT ME
              <span className="icon d-flex align-items-center justify-content-center">
                <ArrowForwardIcon />
              </span>
            </Button>
          </Link>

          <Button
            className="btn-common iconBtn ml-4 font-weight-bold"
            disableRipple
            sx={{ textTransform: 'none' }}
            download="Rajesh_kumar_cv.pdf"
            href="/Rajesh_kumar_cv.pdf"
          >
            DOWNLOAD CV
            <span className="icon d-flex align-items-center justify-content-center">
              <FileDownloadOutlinedIcon />
            </span>
          </Button>
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  );
}
