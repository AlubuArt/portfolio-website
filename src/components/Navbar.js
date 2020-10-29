import React from 'react';
import { Link } from 'react-scroll'
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
                <div className="navbar-container">
                            <ul className="menu">
                                
                                <li className="link-item">
                                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} className="nav-links">
                                    Hvem er jeg?
                                    </Link>
                                </li>
                                <li className="link-item">
                                    <Link activeClass="active" to="cards-container" spy={true} smooth={true} offset={-120} duration={500} className="nav-links">
                                    Resumè
                                    </Link>
                                </li>
                                <li className="link-item">
                                    <Link activeClass="active" to="projects-container" spy={true} smooth={true} offset={-30} duration={500} className="nav-links">
                                    Projekter
                                    </Link>
                                </li>
                                <li className="link-item">
                                    <Link activeClass="active" to="contact-container" spy={true} smooth={true} offset={-30} duration={500} className="nav-links">
                                    Kontakt
                                    </Link>
                                </li>
                                <li className="link-item">
                                    <Link activeClass="active" to="hero-container" spy={true} smooth={true} offset={50} duration={500} className="nav-links">
                                    Til toppen
                                    </Link>
                                </li>
                            </ul>
                        </div>
            </nav>
    )
}

export default Navbar;

