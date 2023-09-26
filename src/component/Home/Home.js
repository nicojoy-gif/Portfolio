import React from 'react'
import About from '../About/About'
import Contact from '../contact/Contact'
import Experience from '../experience/Experience'
import Portfolio from '../portfolio/Portfolio'
import Services from '../services/Services'
import Header from '../header/header'
import Footer from '../footer/Footer'

function Home() {
  return (
    <div>
<Header />
        <About />
        <Experience />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home