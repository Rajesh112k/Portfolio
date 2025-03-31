import Image from 'next/image'
import React from 'react'
import projectImg from '../../assets/project.jpg'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'
import LinkIcon from '@mui/icons-material/Link';

const Portfolio = () => {
  return (
    <>
      <section className="portfolioPage">
            <div className="container-fluid">
                <div className="d-flex">
                <h1 className="hd text-center m-auto">MY <span>PORTFOLIO</span>
                <span className="title-bg">WORKS</span>    </h1>
                </div>

                <div className="wrapper mt-5 d-flex align-items-center justify-content-center">
                <div className="box">
                       <Image src={project4}   /> 
                       <div className="overlay d-flex align-items-center justify-content-center">
                       <a href="https://github.com/Rajesh112k/Savory-Stories"><LinkIcon /></a>
                        <h3>Savory Stories</h3>
                       </div>
                    </div>
                    <div className="box">
                       <Image src={project1}   /> 
                       <div className="overlay d-flex align-items-center justify-content-center">
                       <a href="https://github.com/Rajesh112k/Rentr"><LinkIcon /></a>
                        <h3>Rentr</h3>
                       </div>
                    </div>
                    <div className="box">
                       <Image src={project2}   /> 
                       <div className="overlay d-flex align-items-center justify-content-center">
                        <a href="https://github.com/Rajesh112k/Reddit-Comments-to-Post-Relevance-Analysis"><LinkIcon /></a>
                        <h3>Reddit-Comments-to-Post-Relevance-Analysis</h3>
                       </div>
                    </div>
                    <div className="box">
                       <Image src={project3}   /> 
                       <div className="overlay d-flex align-items-center justify-content-center">
                       <a href="https://github.com/Rajesh112k/Gradebook-App"><LinkIcon /></a>
                        <h3>Gradebook App</h3>
                       </div>
                    </div>
                    
                    <div className="box">
                       <Image src={projectImg}   /> 
                       <div className="overlay d-flex align-items-center justify-content-center">
                       <a href="https://github.com/Rajesh112k/Savory-Stories"><LinkIcon /></a>
                        <h3>Project 1</h3>
                       </div>
                    </div>
                    <div className="box">
                       <Image src={projectImg}   /> 
                       <div className="overlay d-flex align-items-center justify-content-center">
                       <a href="https://github.com/Rajesh112k/Savory-Stories"><LinkIcon /></a>
                        <h3>Project 1</h3>
                       </div>
                    </div>
                    
                </div>
                </div>
                </section>
    </>
  )
}

export default Portfolio
