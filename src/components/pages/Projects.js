import React from "react";
import study from "../assets/StudyBuddy.png";
import favor from "../assets/FavorTrader.png";
import budget from "../assets/BudgetTracker.png";
import note from "../assets/NoteTaker.png";
import fitness from "../assets/FitnessChart.png";
import team from "../assets/TeamProfile.png";




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
                <div className="row row-cols-1 row-cols-md-2 g-4">


                    <div className="col">
                        <div className="card h-100 align-items-center ">
                            <img src={budget} className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Budget Tracker</h5>

                                <a href="https://github.com/angelicalorraine/Budget-Tracker" target="_blank"
                                    className="btn btn-outline-secondary">Repository</a>
                                <a href="https://budget-tracker-alh.herokuapp.com/" target="_blank" className="btn btn-outline-info">Launch App</a>
                            </div>
                        </div>
                    </div>



                    <div className="col">
                        <div className="card h-100 align-items-center">
                            <img src={note} className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Note Taker</h5>

                                <a href="https://github.com/angelicalorraine/Note-Taker" target="_blank"
                                    className="btn btn-outline-secondary">Repository</a>
                                <a href="https://note-taker-alh.herokuapp.com/" target="_blank"
                                    className="btn btn-outline-info">Launch App</a>
                            </div>
                        </div>
                    </div>


                    <div className="col">
                        <div className="card h-100 align-items-center">
                            <img src={fitness} className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Workout Tracker</h5>

                                <a href="https://github.com/angelicalorraine/Workout-Tracker" target="_blank"
                                    className="btn btn-outline-secondary">Repository</a>
                                <a href="https://workout-tracker-alh.herokuapp.com/" target="_blank"
                                    className="btn btn-outline-info">Launch App</a>
                            </div>
                        </div>
                    </div>


                    <div className="col">
                        <div className="card h-100 align-items-center">
                            <img src={team} className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Team Profile</h5>

                                <a href="https://github.com/angelicalorraine/Team-Profile-Generator" target="_blank"
                                    className="btn btn-outline-secondary">Repository</a>
                                <a href="https://angelicalorraine.github.io/Team-Profile-Generator/" target="_blank"
                                    className="btn btn-outline-info">Launch App</a>
                            </div>
                        </div>
                    </div>


                </div>





            </div>
        </div>
    );
}
