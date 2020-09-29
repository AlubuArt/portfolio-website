import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Resume from './Resume';
import Projects from './Projects/Projects';
import Quote from './Quote/Quote';
import ContactForm from './Contact/ContactForm';
import Footer from './Footer/Footer'

function Home() {
    return (
        <>
            <HeroSection />
            <About />
            <Resume />
            <Projects />
            <Quote />
            <ContactForm />
            <Footer />

        </>
    )
}

export default Home
