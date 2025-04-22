"use client";

import React, { useState, useEffect } from 'react';
import DraftsIcon from '@mui/icons-material/Drafts';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Button from '@mui/material/Button';
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { useForm } from '@formspree/react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
  const [state, handleSubmit] = useForm("xldjwjoy");

  if (state.succeeded) {
    setTimeout(() => window.location.reload(), 3000);
    return (
      <h4 className='text-center text-white' style={{ paddingTop: '250px' }}>
        Thanks for reaching out! We'll be in touch shortly.
      </h4>
    );
  }

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true, // animation triggers once when scrolled into view
    });
  }, []);
  

  return (
    <section className="aboutPage contactPage">
      <div className="container">
      <div className="d-flex" data-aos="fade-down">
          <h1 className="hd text-center m-auto">
            LET’S <span>CONNECT</span>
            <span className="title-bg" style={{ fontSize: '118px', top: '-38px' }}>
              CONTACT
            </span>
          </h1>
        </div>

        <div className="row mt-5 contactinfo">
          {/* Left Section */}
          <div className="col-md-4 pr-md-5 mb-5 mb-md-0" data-aos="fade-right">
            <h3 className='text-white font-weight-bold mb-3'>We’d love to hear from you!</h3>
            <p className='text-white'>
              Whether you have a question, a business inquiry, or just want to say hi — my inbox is always open.
            </p>

            <div className="info">
              <div className="d-flex align-items-center info mt-4 w-100">
              <DraftsIcon />
              <div className="pl-3 d-flex flex-column">
                <span className="text-white-50">EMAIL</span>
                <label className="text-white">avula.rajesh.kumar.reddy@gmail.com</label>
              </div>
            </div>

            <div className="d-flex align-items-center info mt-3 mb-4 w-100">
              <ContactPhoneIcon />
              <div className="pl-3 d-flex flex-column">
                <span className="text-white-50">PHONE</span>
                <label className="text-white">+1 930-333-4205</label>
              </div>
            </div>
            </div>

            <div className="social-icons d-flex mt-4">
              {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedin].map((Icon, i) => (
                <Button key={i} className="mx-1 icon-btn" data-aos="zoom-in" data-aos-delay={`${i * 100}`} sx={{ minWidth: '40px', borderRadius: '50%', padding: '10px' }}>
                  <Icon size={18} />
                </Button>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-8" data-aos="fade-left">
          <form onSubmit={handleSubmit} data-aos="zoom-in">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <input type="text" name="name" id="name" placeholder='Your Name' className='input' required />
                </div>
                <div className="col-md-6 mb-4">
                  <input type="email" name="email" id="email" placeholder='Your Email' className='input' required />
                </div>
                <div className="col-md-6 mb-4">
                  <input type="text" name="subject" id="subject" placeholder='Subject' className='input' required/>
                </div>
                <div className="col-md-6 mb-4">
                  <input type="text" name="company" id="company" placeholder='Company (Optional)' className='input' />
                </div>
                <div className="col-md-12 mb-4">
                  <textarea placeholder='Your Message' className='input' id='message' name='message' rows="6" required />
                </div>
                <div className="col-md-12">
                  <Button
                    className="btn-common iconBtn font-weight-bold"
                    disableRipple
                    sx={{ textTransform: 'none' }}
                    type="submit"
                    disabled={state.submitting}
                  >
                    SUBMIT
                    <span className="icon d-flex align-items-center justify-content-center ml-2">
                      <BsFillSendFill />
                    </span>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
