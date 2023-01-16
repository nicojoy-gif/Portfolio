import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css';
function Experience() {
  return (
    <section>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="frontend-box">
          <h3>Frontend Development</h3>
          <div className="frontend">
            <article className="frontend-lists">
              <BsPatchCheckFill className="front-icon" />
              <div className="frontend-list">
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="frontend-lists">
              <BsPatchCheckFill className="front-icon" />
              <div className="frontend-list">
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="frontend-lists">
              <BsPatchCheckFill className="front-icon" />
              <div className="frontend-list">
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="frontend-lists">
              <BsPatchCheckFill className="front-icon" />
              <div className="frontend-list">
                <h4>REACT</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="frontend-lists">
              <BsPatchCheckFill className="front-icon" />
              <div className="frontend-list">
                <h4>VUE</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="frontend-lists">
              <BsPatchCheckFill className="front-icon" />
              <div className="frontend-list">
                <h4>BOOTSTRAP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="frontend-box">
          <h3>Soft Skills</h3>
          <div className="frontend">
            <article className="frontend-lists">
              <BsPatchCheckFill className="front-icon" />
              <div className="frontend-list">
                <h4>ADAPTABILITY</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="frontend-lists">
              <BsPatchCheckFill className="front-icon" />
              <div className="frontend-list">
                <h4>COMMUNICATION</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="frontend-lists">
              <BsPatchCheckFill className="front-icon" />
              <div className="frontend-list">
                <h4>CREATIVITY</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="frontend-lists">
              <BsPatchCheckFill className="front-icon" />
              <div className="frontend-list">
                <h4>TEAMWORK</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="frontend-lists">
              <BsPatchCheckFill className="front-icon" />
              <div className="frontend-list">
                <h4>PROBLEM SOLVING</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;