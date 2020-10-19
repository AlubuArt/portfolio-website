
import "firebase/database";
import React from 'react';
import './App.css';
import About from './components/About';
import HeroSection from './components/HeroSection'
import Projects from './components/Projects/Projects';
import Quote from './components/Quote/Quote';
import ContactForm from './components/Contact/ContactForm'
import Footer from './components/Footer/Footer';
import { Link} from 'react-scroll'
import './components/navbar.css';
import { dbRef } from "./components/firebaseConfig";
import ExperienceCards from "./components/ExperienceCards/ExperienceCards";
import EducationCards from "./components/EducationCards/EducationCards";
import Skills from "./components/Skills";


class App extends React.Component{

    
    constructor(props) {
        super();

        this.state = {
            portfolioData: {}
        }

        this.getPortfolioData = this.getPortfolioData.bind(this);

    }

    componentDidMount() {
        this.getPortfolioData();
        
    }


     getPortfolioData = () => {
       dbRef.ref('/').on('value', snapshot => {
            const state = snapshot.val();
            this.setState({portfolioData: state})
            
        })
        
    }
        

    render() {

        
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
            <HeroSection data={this.state.portfolioData.HeroSection}/>
            <About data={this.state.portfolioData.About}/>
            <ExperienceCards data={this.state.portfolioData.resume}/>
            <EducationCards data={this.state.portfolioData.resume} />
            <Skills />
            <Projects data={this.state.portfolioData.projects}/>
            <Quote data={this.state.portfolioData.Quote} />
            <ContactForm />
            <Footer />
            </> 
        );
    }

}





export default App;
