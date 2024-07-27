import React from 'react';
import './Footer.css';
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-icons'>
          <FaFacebook className='footer-icon'/>
          <FaInstagram className='footer-icon'/>
          <FaTwitter className='footer-icon'/>
          <FaYoutube className='footer-icon'/>
        </div>
        <ul>
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms Of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Performances</li>
          <li>Corporate Information</li>
          <li>Contact Use</li>
        </ul>
        <p className='copyright-text'>&copy; 1997 - 2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer;