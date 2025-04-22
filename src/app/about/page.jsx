"use client"
import Button from '@mui/material/Button';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import { SiMinutemailer } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { SkillProgress } from './SkillProgress';

const About =() =>{
    useEffect(() => {
        AOS.init({ duration: 1200, once: false });
      }, []);
 
    return(
        <section className="aboutPage">
            <div className="container-fluid">
                <div className="d-flex">
                <h1 className="hd text-center m-auto" data-aos="fade-up">ABOUT <span>ME</span>
                <span className="title-bg">resume</span>    </h1>
                </div>

                <div className="row mt-5 aboutWrapper">
                    <div className="col part1">
                        <h2 className="text-white">PERSONAL INFOS</h2>
                        <div className="row">
                        <div className="card col mr-3 mt-3 p-5" data-aos="fade-right">
                                <div className="d-flex flex-column h-100 justify-content-center">
                                <h4>First Name: <span>Rajesh Kumar Reddy</span></h4>
                                <h4>Last Name: <span>Avula</span></h4>
                                <h4>Age: <span>25</span></h4>
                                <h4>Nationality: <span>Indian</span></h4>
                                <h4>Freelance: <span>Available</span></h4></div> 
                            </div>
                            <div className="card col mt-3 p-5" data-aos="fade-left">
                                <h4>Address: <span>India</span></h4>
                                <h4>phone: <span>+1 9303334205</span></h4>
                                <svg width="0" height="0">
  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor="#00bcd4" />
    <stop offset="100%" stopColor="#1565C0" />
  </linearGradient>
</svg>
                                <h4>Email: <span className='d-inline'><a href="mailto:avula.rajesh.kumar.reddy@gmail.com" >Rajesh <SiMinutemailer style={{ fill: 'url(#grad)', fontSize: '20px', marginLeft: '5px' }}/></a></span></h4>
                                <h4>github: <span className='d-inline'><a href="https://github.com/Rajesh112k" >Github <FaGithub style={{ fill: 'url(#grad)', fontSize: '20px', marginLeft: '5px' }} /> </a></span></h4>
                                <h4>Languages: <span>Telugu, English, Hindi, Kannada</span></h4>
                            </div>
                        </div>
                        <br />
                        <Button className="btn-common iconBtn font-weight-bold mb-5" disableRipple sx={{ textTransform: 'none' }} download="Rajesh_kumar_cv.pdf"
            href="/Rajesh_kumar_cv.pdf">
  DOWNLOAD CV 
  <span className="icon d-flex align-items-center justify-content-center">
    <FileDownloadOutlinedIcon />
  </span>
</Button>
                    </div>
                    <div className="col part2">
    <div className="boxes">
    <div className="box" data-aos="zoom-in">
            <span className="count d-flex">2 <span className='ml-2'>+</span></span>
            <div className="d-flex mt-2">
                <span className="line mr-3"></span>
                <h4>YEARS OF INDUSTRY EXPERIENCE</h4>
            </div>
        </div>
        <div className="box" data-aos="zoom-in">
            <span className="count d-flex">5 <span className='ml-2'>+</span></span>
            <div className="d-flex mt-2">
                <span className="line mr-3"></span>
                <h4>MAJOR PROJECTS COMPLETED</h4>
            </div>
        </div>
        <div className="box" data-aos="zoom-in">
            <span className="count d-flex">10 <span className='ml-2'>+</span></span>
            <div className="d-flex mt-2">
                <span className="line mr-3"></span>
                <h4>PROGRAMMING LANGUAGES MASTERED</h4>
            </div>
        </div>
        <div className="box" data-aos="zoom-in">
            <span className="count d-flex">5 <span className='ml-2'>+</span></span>
            <div className="d-flex mt-2">
                <span className="line mr-3"></span>
                <h4>TECHNOLOGY CERTIFICATIONS</h4>
            </div>
        </div>
    </div>
</div>

                </div>
                <br /> <br /><br />
                <div className="d-flex">
                    <span className="divider"></span>
                </div>

                
                {/* skill section  */}
                <div className="skillsection mt-5">
                    <h2 className="text-white text-center">MY SKILLS</h2>

                    <div className="row">
  <SkillProgress label="PYTHON" targetValue={75} />
  <SkillProgress label="REACT" targetValue={85} />
  <SkillProgress label="REACT-NATIVE" targetValue={80} />
  <SkillProgress label="KOTLIN" targetValue={70} />
  <SkillProgress label="Java" targetValue={70} />
  <SkillProgress label="JAVASCRIPT" targetValue={66} />
  <SkillProgress label="SQL" targetValue={70} />
  <SkillProgress label="HTML" targetValue={70} />
</div>



                </div>

                <br /> <br /><br />
                <div className="d-flex">
                    <span className="divider"></span>
                </div>
                <br /><br />


                <div className="experienceSection">
                <h2 className="text-white text-center" data-aos="zoom-in">Experience and Education</h2>


    <div className="row">
        <div className="col-md-6">
        <div className="box d-flex" data-aos="fade-right">
                <div className="left">
                    <span className="icon rounded-circle d-flex align-items-center justify-content-center">
                        <BusinessCenterIcon />
                    </span>
                </div>
                <div className="right pl-4">
                    <span className="badge badge-default">2023-PRESENT</span>
                    <h4 className='mt-3 mb-3'>Graduate Teaching Assistant &nbsp;- &nbsp; <span>Indiana University</span></h4>
                    <p className="text-white">
                        Assisted students in software engineering concepts through lab sessions, project debugging, 
                        and assignment evaluation. Conducted review sessions and refined course materials to enhance student understanding.
                    </p>
                </div>
            </div>
            <div className="box d-flex" data-aos="fade-right" data-aos-delay="100">
                <div className="left">
                    <span className="icon rounded-circle d-flex align-items-center justify-content-center">
                        <BusinessCenterIcon />
                    </span>
                </div>
                <div className="right pl-4">
                    <span className="badge badge-default">2021-2023</span>
                    <h4 className='mt-3 mb-3'>Software Engineer &nbsp;- &nbsp; <span>Oracle</span></h4>
                    <p className="text-white">
                        Conducted in-depth analysis on Oracle Marketing Cloud campaigns, optimizing email performance by analyzing over 5,000 data points. 
                        Developed marketing campaigns using A/B Testing, MVT, and suppression strategies while collaborating with cross-functional teams.
                    </p>
                </div>
            </div>
            <div className="box d-flex" data-aos="fade-right" data-aos-delay="200">
                <div className="left">
                    <span className="icon rounded-circle d-flex align-items-center justify-content-center">
                        <BusinessCenterIcon />
                    </span>
                </div>
                <div className="right pl-4">
                    <span className="badge badge-default">Jan 2021 - May 2021</span>
                    <h4 className='mt-3 mb-3'>Software Engineer Intern &nbsp;- &nbsp; <span>Evertz Pvt Limited</span></h4>
                    <p className="text-white">
                        Developed user interactions using Vue.js and implemented object-oriented design patterns for 
                        web pages. Gained experience in broadcasting concepts while contributing to the company website.
                    </p>
                </div>
            </div>
        </div>

        <div className="col-md-6 d-flex flex-column justify-content-center">
        <div className="box d-flex" data-aos="fade-left">
                <div className="left">
                    <span className="icon rounded-circle d-flex align-items-center justify-content-center">
                        <SchoolIcon />
                    </span>
                </div>
                <div className="right pl-4">
                    <span className="badge badge-default">2023-PRESENT</span>
                    <h4 className='mt-3 mb-3'>Master of Science in Computer Science &nbsp;- &nbsp; <span>Indiana University</span></h4>
                    <p className="text-white">
                        Pursuing a Master's degree in Computer Science with a current CGPA of 3.84/4.00. Engaging in 
                        research and projects related to data mining, machine learning, and web development.
                    </p>
                </div>
            </div>
            <div className="box d-flex" data-aos="fade-left" data-aos-delay="100">
                <div className="left">
                    <span className="icon rounded-circle d-flex align-items-center justify-content-center">
                        <SchoolIcon />
                    </span>
                </div>
                <div className="right pl-4">
                    <span className="badge badge-default">2017-2021</span>
                    <h4 className='mt-3 mb-3'>Bachelor's in Information Science &nbsp;- &nbsp; <span>B.M.S Institute of Technology and Management</span></h4>
                    <p className="text-white">
                        Earned a Bachelor's degree in Information Science and Engineering with a CGPA of 8.51/10.00. 
                        Gained strong expertise in software development, data analysis, and web technologies.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

            </div>
        </section>
    )
}
export default About;