import React from 'react'
import Button from '@mui/material/Button';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import './nav.css'
import Link from 'next/link';
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
        <Link href='/'>
        <Button className="btn-common iconBtn font-weight-bold" disableRipple sx={{ textTransform: 'none' }}>
  <span className="title">Home</span> 
  <span className="icon d-flex align-items-center justify-content-center">
    <HomeOutlinedIcon />
  </span>
</Button>
        </Link>
        </li>
        <li>
            <Link href='/about'>
        <Button className="btn-common iconBtn font-weight-bold" disableRipple sx={{ textTransform: 'none' }}>
  <span className="title">ABOUT ME</span> 
  <span className="icon d-flex align-items-center justify-content-center">
    <Person2OutlinedIcon />
  </span>
</Button></Link>
        </li>
        <li>
        <Link href='/portfolio'>
        <Button className="btn-common iconBtn font-weight-bold" disableRipple sx={{ textTransform: 'none' }}>
  <span className="title">Portfolio</span> 
  <span className="icon d-flex align-items-center justify-content-center">
    <BusinessCenterOutlinedIcon />
  </span>
</Button></Link>
        </li>
        <li>
        <Link href='/contact'>
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
  )
}

export default Nav
