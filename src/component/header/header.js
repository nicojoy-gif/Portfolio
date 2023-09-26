import React from 'react';
import Cta from './Cta';
import './header.css';
import ME from '../../assets/joy.JPG'
import HeaderSocials from './HeaderSocials';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header id='header'>
      <div className="container header-box">
        <section className="header">
          <h5>Hello I'm</h5>
          <h1>Orji Onyinyechi</h1>
          <h5>Frontend Developer</h5>
          <Cta />
          <div className="image">
            <img className="dp" src={ME} alt="Profile" />
          </div>
          
          <HeaderSocials />
        </section>
      </div>
      
    </header>

  );
}

export default Header