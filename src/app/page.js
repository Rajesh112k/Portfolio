"use client"
import Button from '@mui/material/Button';
import userImage from'../assets/rajesh_kumar_photo1.jpg'
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { TypeAnimation } from 'react-type-animation';``
import Link from 'next/link';
export default function Home() {
  return (
    <>
    <section className="homePage">
      <div className="container-fluid">

        <div className="row align-items-center wrapper">
          <div className="col-md-4">
            <div className="imgWrap">
              <Image src={userImage} alt=''/>
            </div>
          </div>

          <div className="col-md-8">
            <div className="d-flex">
              <span className="line mr-5"></span>
              <h1 className='text-white font-weight-bold'><span className="text-common">I'm Rajesh Kumar Reddy Avula. <br /></span>
            <span>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'WEB DESIGNER',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'WEB DEVELOPER',
        1000,
        'FULL STACK WEB DEVELOPER',
        1000,
        'REACT DEVELOPER',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
    </span></h1>
            
            </div>
            <p className="text-white">I am a passionate Full Stack and Software Developer with <b style={{color:"#fa5b0f;", fontWeight:"bold"}}>three</b> experience in building scalable web and software applications. Proficient in JavaScript, React, Node.js, and Python, I enjoy creating seamless user experiences and optimizing backend performance. </p>
            <br />
            <div className="d-flex align-items-center">
              <Link href={'/about'}>
              <Button className="btn-common iconBtn font-weight-bold" disableRipple sx={{ textTransform: 'none' }}>
  ABOUT ME 
  <span className="icon d-flex align-items-center justify-content-center">
    <ArrowForwardIcon />
  </span>
</Button>
              </Link>
            

<Button className="btn-common iconBtn ml-4 font-weight-bold" disableRipple sx={{ textTransform: 'none' }} download="RajeshKumarReddy_CV.pdf" href="/RajeshKumarReddy_CV.pdf">
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
