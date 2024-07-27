import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import netflixlogo from './../../Assets/logo.png';
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";


const Navbar = () => {
const navRef=useRef();

useEffect(()=>{
    window.addEventListener('scroll',()=>{
        navRef.current?.classList.toggle("nav-dark", window.scrollY >= 80);
    })
},[])

  return (
    <div ref={navRef} className='navbar'>
        <div className='navbar-left'>
            <img src={netflixlogo} alt='' className='navbar-logo'/>
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Language</li>
            </ul>
        </div>
        <div className='navbar-right'>
                <IoSearch className='icons'/>
                <p>Children</p>
                <FaRegBell className='icons'/>
            <div className='navbar-profile'>
                <CgProfile  className='profile'/>
                <IoMdArrowDropdown />
                <div className='dropdown'>
                    <p>Sign Out Of Netflix</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;