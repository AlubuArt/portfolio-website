import React, {useState} from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import * as Scroll from 'react-scroll';
import './navbar.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <ul className="menu">
                        <li className="link-item">
                            <Link activeClass="active" to="herosection" spy={true} smooth={true} offset={50} duration={500} className="nav-links">
                            Home
                            </Link>
                        </li>
                        <li className="link-item">
                            <Link activeClass="active" to="" spy={true} smooth={true} offset={50} duration={500} className="nav-links">
                            About
                            </Link>
                        </li>
                        <li className="link-item">
                            <Link to="/Resume" className="nav-links">
                            Resume
                            </Link>
                        </li>
                        <li className="link-item">
                            <Link to="/projects" className="nav-links">
                            Projects
                            </Link>
                        </li>
                        <li className="link-item">
                            <Link to="/contact" className="nav-links">
                            Contact
                            </Link>
                        </li>
                    </ul>
                    
                    
                    

                </div>
            </nav>
        </div>
    )
}

export default Navbar;

