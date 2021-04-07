
import "firebase/database";
import "firebase/analytics";
import React from 'react';
import './App.css';
import About from './components/About';
import HeroSection from './components/HeroSection'
import Projects from './components/Projects/Projects';
import Quote from './components/Quote/Quote';
import Footer from './components/Footer/Footer';
import './components/navbar.css';
import { dbRef } from "./components/firebaseConfig";
import ExperienceCards from "./components/ExperienceCards/ExperienceCards";
import EducationCards from "./components/EducationCards/EducationCards";
import ContactForm1 from "./components/Contact/ContactForm1";
import Navbar from "./components/Navbar";



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
