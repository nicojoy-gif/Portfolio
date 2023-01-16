import React from 'react';
import './header.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function HeaderSocials() {
  return (
    <div className="header-socials">
      <a href="https://www.linkedin.com/in/orji-onyi/" target='_blank'><FaLinkedin /></a>
      <a href="https://github.com/nicojoy-gif" target='_blank'><FaGithub /></a>
      <a href="https://www.instagram.com/j__maami" target='_blank'><FaInstagramSquare/></a>
    </div>
  );
}

export default HeaderSocials