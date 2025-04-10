'use client'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import './nav.css';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

const Nav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  return (
    <nav>
      <div className="hamburger-menu mb-5 pb-5">
        <MenuIcon onClick={toggleDrawer(true)} />
      </div>

      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)} className='mt-5'>
        <ul>
          <li>
            <Link href="/">
              <Button className="btn-common iconBtn font-weight-bold" disableRipple sx={{ textTransform: 'none' }}>
                <span className="title mr-4">Home</span> 
                <span className="icon d-flex align-items-center justify-content-center">
                  <HomeOutlinedIcon />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <Button className="btn-common iconBtn font-weight-bold" disableRipple sx={{ textTransform: 'none' }}>
                <span className="title mr-4">About Me</span> 
                <span className="icon d-flex align-items-center justify-content-center">
                  <Person2OutlinedIcon />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <Button className="btn-common iconBtn font-weight-bold" disableRipple sx={{ textTransform: 'none' }}>
                <span className="title mr-4">Portfolio</span> 
                <span className="icon d-flex align-items-center justify-content-center">
                  <BusinessCenterOutlinedIcon />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <Button className="btn-common iconBtn font-weight-bold" disableRipple sx={{ textTransform: 'none' }}>
                <span className="title mr-4">Contact Me</span> 
                <span className="icon d-flex align-items-center justify-content-center">
                  <EmailOutlinedIcon />
                </span>
              </Button>
            </Link>
          </li>
        </ul>
      </Drawer>

      <ul className="desktop-nav">
        <li>
          <Link href="/">
            <Button className="btn-common iconBtn font-weight-bold" disableRipple sx={{ textTransform: 'none' }}>
              <span className="title">Home</span> 
              <span className="icon d-flex align-items-center justify-content-center">
                <HomeOutlinedIcon />
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <Button className="btn-common iconBtn font-weight-bold" disableRipple sx={{ textTransform: 'none' }}>
              <span className="title">ABOUT ME</span> 
              <span className="icon d-flex align-items-center justify-content-center">
                <Person2OutlinedIcon />
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <Button className="btn-common iconBtn font-weight-bold" disableRipple sx={{ textTransform: 'none' }}>
              <span className="title">Portfolio</span> 
              <span className="icon d-flex align-items-center justify-content-center">
                <BusinessCenterOutlinedIcon />
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <Button className="btn-common iconBtn font-weight-bold" disableRipple sx={{ textTransform: 'none' }}>
              <span className="title">Contact ME</span> 
              <span className="icon d-flex align-items-center justify-content-center">
                <EmailOutlinedIcon />
              </span>
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
