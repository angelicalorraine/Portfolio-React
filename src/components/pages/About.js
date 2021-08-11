import React from 'react';
import gel from "../assets/gel.png";

export default function About() {
    return (
        <div className="pages container-fluid">



            <div className="d-flex flex-row justify-content-center">
                <div className="d-flex" > <img className="gel" src={gel} ></img></div>

                <div className="d-flex m-3 flex-column" >

                    <p className="aboutme"> I am a passionate Full Stack Web Developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. I am dedicated and eager to continue to learn, improve and update my skill set and problem solving techniques. I look forward to continuously gaining knowledge from my peers and work collaboratively with others while being able to contribute to the technology industry.</p>
                </div>


            </div>


        </div >


    );
}

