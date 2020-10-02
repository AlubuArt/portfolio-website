import React from 'react';
import './App.css';
import About from './components/About';
import HeroSection from './components/HeroSection'
import Resume from './components/Resume';
import Projects from './components/Projects/Projects';
import Quote from './components/Quote/Quote';
import ContactForm from './components/Contact/ContactForm'
import Footer from './components/Footer/Footer';
import { Link, animateScroll as scroll } from 'react-scroll'
import './components/navbar.css';


function App() {
  return (
    <>
    <nav className="navbar">
                <div className="navbar-container">
                    <ul className="menu">
                        <li className="link-item">
                            <Link activeClass="active" to="hero-container" spy={true} smooth={true} offset={50} duration={500} className="nav-links">
                            Home
                            </Link>
                        </li>
                        <li className="link-item">
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} className="nav-links">
                            About
                            </Link>
                        </li>
                        <li className="link-item">
                            <Link activeClass="active" to="cards-container" spy={true} smooth={true} offset={-120} duration={500} className="nav-links">
                            Resume
                            </Link>
                        </li>
                        <li className="link-item">
                            <Link activeClass="active" to="projects-container" spy={true} smooth={true} offset={-30} duration={500} className="nav-links">
                            Projects
                            </Link>
                        </li>
                        <li className="link-item">
                            <Link activeClass="active" to="contact-container" spy={true} smooth={true} offset={-30} duration={500} className="nav-links">
                            Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
      <HeroSection  />
      <About />
      <Resume  />
      <Projects />
      <Quote />
      <ContactForm />
      <Footer />
    </> 
  );
}

export default App;
