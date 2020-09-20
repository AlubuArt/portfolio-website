import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <ul className="menu">
                        <li className="link-item">
                            <Link to="/" className="nav-links">
                            Home
                            </Link>
                        </li>
                        <li className="link-item">
                            <Link to="/about" className="nav-links">
                            About
                            </Link>
                        </li>
                        <li className="link-item">
                            <Link to="/resume" className="nav-links">
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

