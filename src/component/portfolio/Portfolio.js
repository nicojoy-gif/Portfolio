import React from 'react';
import './portfolio.css';
import Data from './Data';

function Portfolio() {
  return (
    <section>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio-container'>
        {Data.map((item, index) => {return (
          <article key={index} className="portfolio-item">
            <div className="portfolio-img">
              <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <div className="portfolio">
              <a
                href={item.github}
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href={item.liveDemo}
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        )})}
</div>

    </section>

  )
}

export default Portfolio