import React from 'react';
import ME from '../../assets/joy.JPG';
import { Link } from 'react-router-dom';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-image">
            <img src={ME} alt="Profile" />
          </div>
          </div>
          <div className="about-box">
            <div className="about-cards">
              <article className="about-card">
                <FaAward className='about-icon'/>
                <h3>Experience</h3>
                <h5>1+ Years Working</h5>
              </article>
              <article className="about-card">
                <FiUsers className='about-icon' />
                <h3>Clients</h3>
                <h5>1+ Worldwide</h5>
              </article>
              <article className="about-card">
                <FaAward className='about-icon' />
                <h3>Projects</h3>
                <h5>15+ Completed</h5>
              </article>
            </div>
            <div className="about-text">
              <p>I love combining the worlds of logic and creative designs to make eye-catching accessible, and user-friendly websites and applications.
            </p></div>
            <Link to="/contact">
              <button className="btn btn-primary">Let's Talk</button>
            </Link>
        </div>
        </div>
    </section>
  )
}

export default About;