import React from "react";
import study from "../assets/StudyBuddy.png";
import favor from "../assets/FavorTrader.png";
import "../styles/home.css";

export default function Project() {
    return (
        <div className="container">
            <div id="projectCont" className="container d-flex justify-content-center">
                <div className="row projects ">
                    <h2> Project Info</h2>

                    {/* Study Budy Project */}

                    <div className="card mb-3 ">
                        <div className="row g-0 study align-items-center">
                            <div className="col-md-6">
                                <img src={study} className="project" alt="..." />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body studydesc">
                                    <h4 className="card-title">Studdy Buddy: Project 1</h4>
                                    <p className="card-text ">
                                        Our knowledge and newly learned skills were put to the test by
                                        creating a web application from scratch. We conceived and
                                        executed a design and integrated data received from multiple server-side API requests.</p>
                                    <p className="card-text">
                                        Study Buddy was built with the developer in mind, we are
                                        committed to being lifelong students. When searching a
                                        question or topic and the results will show you only resolved results from StackOverflow along with suggested tutorials!
                                    </p>
                                    <a href="https://github.com/angelicalorraine/Study_Buddy"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-outline-secondary">Repository</a>
                                    <a href="https://angelicalorraine.github.io/Study_Buddy/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-outline-info">Launch App</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Favor Trader*/}
                    <div className="card mb-3 ">
                        <div className="row g-0 study align-items-center">
                            <div className="col-md-6">
                                <img src={favor} className="project" alt="..." /></div>
                            <div className="col-md-6">
                                <div className="card-body studydesc">
                                    <h4 className="card-title">Favor Trader: Project 2</h4>
                                    <p className="card-text ">Our knowledge and newly learned skills were put to the test by creating a full stack web application. We conceived and executed a design using the MVC paradigm, create a server-side API, add user authentication, and connect to a database.</p>
                                    <p className="card-text">Favor Trader is a neighborhood bartering platform for favors. It contains an Activity Feed where all user’s favors needs are listed. To begin trading, each user will need to log in or sign up and create a user profile.</p>
                                    <a href="https://github.com/angelicalorraine/Favor-Trader" target="_blank"
                                        className="btn btn-outline-secondary">Repository</a>
                                    <a href="https://favortrader.herokuapp.com/" target="_blank" className="btn btn-outline-info">Launch App</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <div className="container d-flex justify-content-center ">
                <div className="row row-cols-1 row-cols-md-3 g-4">


                    <div className="col">
                        <div className="card h-100 align-items-center ">
                            <img src="Images/ForeWeather (1).png" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Fore-Weather</h5>
                                <p className="card-text">This homeworks challenge was to build a weather dashboard that will run in the browser
                                    and feature dynamically updated HTML and CSS. The main aspect of this assignment was accessing a Server-side API to retrieve data, which was OpenWeather API</p>
                                <a href="https://github.com/angelicalorraine/Fore-Weather" target="_blank"
                                    className="btn btn-outline-secondary">Repository</a>
                                <a href="https://angelicalorraine.github.io/Fore-Weather/" target="_blank" className="btn btn-outline-info">Launch App</a>
                            </div>
                        </div>
                    </div>



                    <div className="col">
                        <div className="card h-100 align-items-center">
                            <img src="Images/InQUIZition.png" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">In-QUIZ-ition</h5>
                                <p className="card-text">This assignment was to build a timed coding quiz with multiple-choice questions. This app
                                    will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code. Also saving your score and initials in the local storage.</p>
                                <a href="https://github.com/angelicalorraine/In-QUIZ-ition" target="_blank"
                                    className="btn btn-outline-secondary">Repository</a>
                                <a href="https://angelicalorraine.github.io/In-QUIZ-ition/" target="_blank"
                                    className="btn btn-outline-info">Launch App</a>
                            </div>
                        </div>
                    </div>


                    <div className="col">
                        <div className="card h-100 align-items-center">
                            <img src="Images/daily-sched.png" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Daily Agenda</h5>
                                <p className="card-text">This is a creation of a simple calendar application that allows a user to save events for
                                    each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.</p>
                                <a href="https://github.com/angelicalorraine/Angelicas-Agenda" target="_blank"
                                    className="btn btn-outline-secondary">Repository</a>
                                <a href="https://angelicalorraine.github.io/Angelicas-Agenda/" target="_blank"
                                    className="btn btn-outline-info">Launch App</a>
                            </div>
                        </div>
                    </div>


                </div>





            </div>
        </div>
    );
}
