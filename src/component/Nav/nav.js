import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { FaToolbox } from 'react-icons/fa';
import './nav.css';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
function Nav() {
  return (
    <nav className="nav">
     <Link
    activeClass="active"
    to="header"
    spy={true}
    smooth={true}
    offset={-70}
    duration={200}
    className='link'
      >
        <AiOutlineHome />
      </Link>
      <Link
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
    duration={200}
    className='link'
      >
        <AiOutlineUser />
      </Link>
      <Link
    activeClass="active"
    to="experience"
    spy={true}
    smooth={true}
    offset={-70}
    duration={200}
    className='link'
      >
        <BiBook />
      </Link>
      <Link
    activeClass="active"
    to="portfolio"
    spy={true}
    smooth={true}
    offset={-70}
    duration={200}
    className='link'
      >
        <FaToolbox />
      </Link>
      <Link
    activeClass="active"
    to="services"
    spy={true}
    smooth={true}
    offset={-70}
    duration={200}
    className='link'
      >
        <RiServiceLine />
      </Link>
      <Link
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={200}
    className='link'
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
}

export default Nav