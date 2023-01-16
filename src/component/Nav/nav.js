import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { FaToolbox } from 'react-icons/fa';
import './nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <NavLink
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        to="/"
      >
        <AiOutlineHome />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        to="/about"
      >
        <AiOutlineUser />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        to="/experience"
      >
        <BiBook />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        to="/portfolio"
      >
        <FaToolbox />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        to="/services"
      >
        <RiServiceLine />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        to="/contact"
      >
        <BiMessageSquareDetail />
      </NavLink>
    </nav>
  );
}

export default Nav