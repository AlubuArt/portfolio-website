import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Resume from './Resume';
import Projects from './Projects/Projects';
import Quote from './Quote/Quote';
import ContactForm from './Contact/ContactForm';
import Footer from './Footer/Footer'
import contactForm1 from './Contact/contactForm1';

function Home() {
    return (
        <>
            <HeroSection/>
            <About />
            <Resume />
            <Projects />
            <Quote />
            <ContactForm />
            <contactForm1 />
            <Footer />

        </>
    )
}

export default Home
