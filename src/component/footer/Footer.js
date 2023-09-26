import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <h1>ONYI</h1>
      </div>
      <ul className="footer-links">
        <NavLink to="/" className="footer-link">
          Home
        </NavLink>

        <NavLink to="/about" className="footer-link">
          About
        </NavLink>

        <NavLink to="/experience" className="footer-link">
          Experience
        </NavLink>

        <NavLink to="/portfolio" className="footer-link">
          Portfolio
        </NavLink>

        <NavLink to="/services" className="footer-link">
          Services
        </NavLink>

        <NavLink to="/contact" className="footer-link">
          Contact
        </NavLink>
      </ul>
      <div className="footer-social">
        <a href="https://facebook.com/orji.onyinyechi.90">
          <FaFacebookF className="footer-icon" />
        </a>
        <a href="https://instagram.com/">
          <AiOutlineInstagram className="footer-icon" />
        </a>
        <a href="https://twitter.com">
          <BsTwitter className="footer-icon" />
        </a>
      </div>
      <div className="footer-copyright">&#169;ONYI. All rights reserved.</div>
    </footer>
  );
}

export default Footer