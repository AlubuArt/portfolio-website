
import "firebase/database";
import "firebase/analytics";
import React from 'react';
import './App.css';
import About from './sections/About/About';
import HeroSection from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects';
import Quote from './sections/Quote/Quote';
import Footer from './sections/Footer/Footer';
import './sections/Navbar/navbar.css';
import { dbRef } from "./sections/firebaseConfig";
import ExperienceCards from "./sections/Experiences/Experiences";
import EducationCards from "./sections/Education/Education";
import ContactForm1 from "./sections/Contact/ContactForm1";
import Navbar from "./sections/Navbar/Navbar";



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

    //just a comment - delete it

    render() {

        return (
            <>
            
                <Navbar />
                <HeroSection data={this.state.portfolioData.HeroSection}/>
                <About data={this.state.portfolioData.About}/>
                <Projects data={this.state.portfolioData.projects}/>
                <ExperienceCards data={this.state.portfolioData.resume}/>
                <EducationCards data={this.state.portfolioData.resume} />
                <Quote data={this.state.portfolioData.Quote} />
                <ContactForm1 />
                <Footer />
            </> 
        );
    }

}

export default App;
