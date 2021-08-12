import React from 'react';
import gel from "../assets/gelly.png";
import "../styles/home.css";

export default function About() {
    return (
        <div className="pages container-fluid">



            <div className="row justify-content-center ">
                <div className="leftmain col-sm-auto" > <img className="gel" src={gel} ></img></div>

                <div className="rightmain col-sm mt-5" >
                    <div className="d-flex justify-content-center">
                        <p className="aboutme"> I am a passionate Full Stack Web Developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. I am dedicated and eager to continue to learn, improve and update my skill set and problem solving techniques. I look forward to continuously gaining knowledge from my peers and work collaboratively with others while being able to contribute to the technology industry.</p>
                    </div>
                    <div className="d-flex flex-row flex-wrap justify-content-center">

                        <div> <img className="cr-standard-grid-item-content__image" src="https://images.credly.com/size/250x250/images/109b65a3-b8c5-4802-95a4-3db2f1e5ef3a/6f5fb490753026eb192a66509fe7332c.png" width="200" alt="" height="200"></img></div>

                        <div>
                            <img className="cr-standard-grid-item-content__image" src="https://images.credly.com/size/200x200/images/8358353b-3c24-4b79-9fea-ff9c2c78f7d6/cac05207c7217149aaff5418f4cc94de.png" width="200" alt="" height="200"></img>
                        </div>

                        <div>
                            <img className="cr-standard-grid-item-content__image" src="https://images.credly.com/size/200x200/images/044c920a-57fa-488d-a70e-fc8d39de4bec/0e6480912dcc88d3ca1c400869a97034.png" width="200" alt="" height="200"></img>
                        </div>

                        <div>
                            <img className="cr-standard-grid-item-content__image" src="https://images.credly.com/size/200x200/images/f10424f9-0222-4611-8001-2fbdb9bf8471/d22b12279a8399e20d5722f5b15a0340.png" width="200" alt="" height="200"></img>
                        </div>



                    </div>
                </div>


            </div>


        </div >


    );
}

