import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Resume from './Resume';
import Projects from './Projects/Projects';
import Quote from './Quote/Quote';



function Home() {
    return (
        <div>
            <HeroSection />
            <About />
            <Resume />
            <Projects />
            <Quote />

        </div>
    )
}

export default Home
