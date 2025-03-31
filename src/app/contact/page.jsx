"use client"

import React, { useState } from 'react'
import DraftsIcon from '@mui/icons-material/Drafts';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Button from '@mui/material/Button';
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { useForm,  } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xldjwjoy");
    const [msg,sendMsg] = useState("");
    if(state.succeeded){
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return <h4 className='text-center text-white' style={{paddingTop:'250px'}}>Thanks for joining</h4>
    }

  return (
    <>
    
      <section className="aboutPage contactPage">
            <div className="container">
                <div className="d-flex">
                <h1 className="hd text-center m-auto">GET IN <span>TOUCH</span>
                <span className="title-bg" style = {{fontSize:'118px', top:'-38px'}}>CONTACT US</span>    </h1>
                </div>

                <div className="row mt-5  contactinfo">
                    <div className="col-md-4">
                        <h3 className='text-white font-weight-bold'>Feel free to get in touch with me.</h3>
                        <p className='text-white'> I am always open to discuss new projects, creative ideas or opportunities to be part of your vision</p>

                        <br />

                        <div className="d-flex align-items-center info">
                        <DraftsIcon />
                        <div className="pl-3 d-flex flex-column">
                            <span>MAIL ME</span>
                            <label>avula.rajesh.kumar.reddy@gmail.com</label>
                            
                        </div>
                        </div>

                        <div className="d-flex align-items-center info mt-3 mb-3">
                        <ContactPhoneIcon />
                        <div className="pl-3 d-flex flex-column">
                            <span>CALL ME</span>
                            <label>+1 9303334205</label>
                            
                        </div>
                        </div>

                        <ul className="list list-inline socials">
                            <li className="list-inline-item">
                                <Button><FaFacebookF /></Button>
                            </li>
                            <li className="list-inline-item">
                                <Button><FaTwitter /></Button>
                            </li>
                            <li className="list-inline-item">
                                <Button><FaYoutube /></Button>
                            </li>
                            <li className="list-inline-item">
                                <Button><FaLinkedin /></Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8">
                        <form action="" onSubmit={handleSubmit}>
                        
                            <div className="row">
                                <div className="col">
                                    <input type="text" name="name" id="name" placeholder='YOUR NAME' className='input'/>
                                </div>
                                <div className="col">
                                    <input type="text" name="email" id="email" placeholder='YOUR EMAIL' className='input'/>
                                </div>
                                <div className="col">
                                    <input type="text" name="subject" id="subject" placeholder='YOUR SUBJECT' className='input'/>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <textarea placeholder='YOUR MESSAGE' className='input' id='message' name='message'></textarea>
                                    <br /> <br />
                                <Button className="btn-common iconBtn font-weight-bold" disableRipple sx={{ textTransform: 'none' }} type="submit" disabled={state.submitting} download="RajeshKumarReddy_CV.pdf" href="/RajeshKumarReddy_CV.pdf">
  SUBMIT
  <span className="icon d-flex align-items-center justify-content-center">
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
    </>
  )
}

export default Contact
