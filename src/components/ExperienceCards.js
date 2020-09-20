import React from 'react'
import ResumeCard from './ResumeCard';
import './Resume.css';
import verticalLine from '/Users/jacobchristensen/Arbejde/code_projekter/website/portfolio/src/images/Path 8.png'
import horizontalLine from '../../src/images/Line 4.png'

function ExperienceCards() {
    return (
        <div className="container">
        <div className="main-container">
            <div className="side-container">
                <div className="title-text">
                    <h2>Experience</h2>
                    <img src={verticalLine} alt=""></img>
                </div>
                <div className="horizontalLine">
                    <img src={horizontalLine} alt=""></img>
                </div>

            </div>
            <div className="cards-container">
                <ResumeCard 
                title="UX & Web Consultant"
                company="Aalborg University"
                year="2019-2020"
                description="Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in. Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in."
                keyword1="User Experience"
                keyword2="Web development"
                keyword3="Google Tag Manager / SEO"/>
                <ResumeCard 
                title="UX & Web Consultant"
                company="Aalborg University"
                year="2019-2020"
                description="Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in. Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in."
                keyword1="User Experience"
                keyword2="Web development"
                keyword3="Google Tag Manager / SEO"/>
                <ResumeCard 
                title="UX & Web Consultant"
                company="Aalborg University"
                year="2019-2020"
                description="Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in. Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in."
                keyword1="User Experience"
                keyword2="Web development"
                keyword3="Google Tag Manager / SEO"/>
                <ResumeCard 
                title="UX & Web Consultant"
                company="Aalborg University"
                year="2019-2020"
                description="Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in. Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in."
                keyword1="User Experience"
                keyword2="Web development"
                keyword3="Google Tag Manager / SEO"/>
            </div>
        </div>
    </div>
    )
}

export default ExperienceCards;