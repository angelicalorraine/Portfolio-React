import React from 'react';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Project from './Projects';

function Main() {
    return (
        <div className="mainBody">
            <About />
            <Contact />
            <Resume />
            <Project />
        </div>
    );
}

export default Main;
