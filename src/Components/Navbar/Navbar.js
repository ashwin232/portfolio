import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll';
import logo from '../../Assets/logo.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logop'/>

        <div className='Outer Heading'>
          <Link className='MenuList'>Home</Link>
          <Link className='MenuList'>About</Link>
          <Link className='MenuList'>Portfolio</Link>
        </div>
        <button className='desktopBtn'>
            <img src='' alt='' className='MenuImg'/>Contact Me
        </button>
    </nav>
  )
}

export default Navbar