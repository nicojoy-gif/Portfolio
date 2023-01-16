import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

function Services() {
  return (
    <section>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        
        <article className="services">
          <div className="services-head">
            <h3>Web Development</h3>
        </div>
            <ul className="services-lists">
              <li className="services-list">
                <BiCheck className="service-check" />
                <p>Optimize User Experience</p>
              </li>
              <li className="services-list">
                <BiCheck className="service-check" />
                <p>Bring Concepts to life using HTML, CSS and JS</p>
              </li>
              <li className="services-list">
                <BiCheck className="service-check" />
                <p>Follow SEO best practices</p>
              </li>
              <li className="services-list">
                <BiCheck className="service-check" />
                <p>Implement design on mobile website</p>
              </li>
              <li className="services-list">
                <BiCheck className="service-check" />
                <p>Develop and maintain the user interface</p>
              </li>
            </ul>
        </article>
        
  </div>
    </section>
  );
}

export default Services;