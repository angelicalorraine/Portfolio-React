import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../styles/home.css";

const skills = ["Front End Development", "Back End Development", "User Interface Design", "Web Design", "Visual Design", "User Experiene & Design Thinking", "Javascript", "NodeJS", "HTML and CSS", "Front-end Frameworks", "HTTP & REST", "SQL & MyQL", "MongoDB", "React"]

export default function Resume() {
    return (
        <div className="pages container">
            <h2> Resume Info</h2>
            <div className="container d-flex flex-column ">


                <div className=" d-flex flex-row flex-wrap justify-content-center">
                    <div className="skillsList">
                        <ListGroup className="">
                            {skills.map(item => (
                                <ListGroup.Item key={item.id} className=""><li>{item} </li></ListGroup.Item>

                            ))}

                        </ListGroup>
                    </div>
                    <div className="d-flex flex-wrap badges justify-content-center">
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