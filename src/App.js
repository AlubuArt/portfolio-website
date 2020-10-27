
import "firebase/database";
import "firebase/analytics";
import React from 'react';
import './App.css';
import About from './components/About';
import HeroSection from './components/HeroSection'
import Projects from './components/Projects/Projects';
import Quote from './components/Quote/Quote';
import Footer from './components/Footer/Footer';
import { Link} from 'react-scroll'
import './components/navbar.css';
import { dbRef } from "./components/firebaseConfig";
import ExperienceCards from "./components/ExperienceCards/ExperienceCards";
import EducationCards from "./components/EducationCards/EducationCards";
import ContactForm1 from "./components/Contact/ContactForm1";



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
                                    Hjem
                                    </Link>
                                </li>
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
                            </ul>
                        </div>
                    </nav>
                    
            <HeroSection data={this.state.portfolioData.HeroSection}/>
            <About data={this.state.portfolioData.About}/>
            <ExperienceCards data={this.state.portfolioData.resume}/>
            <EducationCards data={this.state.portfolioData.resume} />
            
            <Projects data={this.state.portfolioData.projects}/>
            <Quote data={this.state.portfolioData.Quote} />
            <ContactForm1 />
            <Footer />
            </> 
        );
    }

}

export default App;
