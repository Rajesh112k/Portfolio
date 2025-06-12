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
      <div className="hamburger-menu">
        <MenuIcon onClick={toggleDrawer(true)} />
      </div>

      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
        <div className="drawer-content">
          <ul>
            <li>
              <Link href="/">
                <Button className="nav-button" disableRipple sx={{ textTransform: 'none' }}>
                  <HomeOutlinedIcon className="nav-icon" />
                  <span className="nav-text">Home</span>
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <Button className="nav-button" disableRipple sx={{ textTransform: 'none' }}>
                  <Person2OutlinedIcon className="nav-icon" />
                  <span className="nav-text">About Me</span>
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <Button className="nav-button" disableRipple sx={{ textTransform: 'none' }}>
                  <BusinessCenterOutlinedIcon className="nav-icon" />
                  <span className="nav-text">Portfolio</span>
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <Button className="nav-button" disableRipple sx={{ textTransform: 'none' }}>
                  <EmailOutlinedIcon className="nav-icon" />
                  <span className="nav-text">Contact Me</span>
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>

      <ul className="desktop-nav">
        <li>
          <Link href="/">
            <Button className="nav-button" disableRipple sx={{ textTransform: 'none' }}>
              <HomeOutlinedIcon className="nav-icon" />
              <span className="nav-text">Home</span>
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <Button className="nav-button" disableRipple sx={{ textTransform: 'none' }}>
              <Person2OutlinedIcon className="nav-icon" />
              <span className="nav-text">About Me</span>
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <Button className="nav-button" disableRipple sx={{ textTransform: 'none' }}>
              <BusinessCenterOutlinedIcon className="nav-icon" />
              <span className="nav-text">Portfolio</span>
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <Button className="nav-button" disableRipple sx={{ textTransform: 'none' }}>
              <EmailOutlinedIcon className="nav-icon" />
              <span className="nav-text">Contact Me</span>
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;