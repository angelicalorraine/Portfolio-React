import React from 'react';
import { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import "../styles/home.css";

export default function Contact() {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleInputChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is required.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <div className="pages container-fluid d-flex justify-content-center flex-column">
            <h2> Contact Info</h2>
            <div className="d-flex justify-content-center">
                <div className="form col-md-6 shadow-lg pt-4 m-5">
                    <form className="p-3 mr-2">
                        <div className="form-group">

                            <div className="form-row mb-2">

                                <input
                                    className="input-group form-control"
                                    value={name}
                                    name="Name"
                                    onBlur={handleInputChange}
                                    type="text"
                                    placeholder="Name"
                                />

                            </div>
                            <div className="form-row mb-2">
                                <input
                                    className="input-group form-control"
                                    value={email}
                                    name="email"
                                    onBlur={handleInputChange}
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="form-row mb-2">
                                <div className="input-group">
                                    <textarea className="form-control" defaultValue={message} placeholder="Message" onBlur={handleInputChange} ></textarea>
                                </div>
                            </div>

                            <button className=" btn btn-outline-info" type="button" onClick={handleFormSubmit}>Submit</button>
                        </div>
                    </form>
                    {errorMessage && (
                        <div >
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}