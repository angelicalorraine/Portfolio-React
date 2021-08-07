import React from 'react';
import { useState } from 'react';
import { checkPassword, validateEmail } from '../utils/helpers';

export default function Contact() {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setPassword(inputValue);
        }
    };

    const handleFormSubmit = (e) => {

        e.preventDefault();

        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or username is invalid');

            return;

        }
        if (!checkPassword(password)) {
            setErrorMessage(
                `Choose a more secure password for the account: ${userName}`
            );
            return;
        }
        alert(`Hello ${userName}`);

        setUserName('');
        setPassword('');
        setEmail('');
    };

    return (
        <div className="pages container-fluid d-flex justify-content-center flex-column">
            <h2> Contact Info</h2>
            <div className="form col-md-6 shadow-lg pt-4 m-5">
                <form className="p-3 mr-2">
                    <div className="form-group">

                        <div className="form-row mb-2">

                            <input
                                className="input-group form-control"
                                value={userName}
                                name="userName"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Name"
                            />

                        </div>
                        <div className="form-row mb-2">
                            <input
                                className="input-group form-control"
                                value={email}
                                name="email"
                                onChange={handleInputChange}
                                type="email"
                                placeholder="Email"
                            />
                        </div>

                        <div className="form-row mb-2">
                            <div className="input-group">
                                <textarea className="form-control" placeholder="Message" aria-label="With textarea"></textarea>
                            </div>
                        </div>

                        <button className=" btn btn-outline-info" type="button" onClick={handleFormSubmit}>Submit</button>
                    </div>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    );
}