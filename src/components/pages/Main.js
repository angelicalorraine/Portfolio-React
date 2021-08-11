import React from 'react';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Project from './Projects';
import "../styles/home.css";

function Main() {
    return (
        <div className="mainBody">
            <About />
            <Resume />
            <Project />
            <Contact />
        </div>
    );
}

export default Main;
