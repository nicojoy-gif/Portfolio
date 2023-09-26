import React from 'react';
import './header.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function HeaderSocials() {
  return (
    <div className="header-socials">
      <Link to="https://www.linkedin.com/in/orji-onyi/" target='_blank'><FaLinkedin /></Link>
      <Link to="https://github.com/nicojoy-gif" target='_blank'><FaGithub /></Link>
      <Link to="https://www.instagram.com/j__maami" target='_blank'><FaInstagramSquare/></Link>
    </div>
  );
}

export default HeaderSocials