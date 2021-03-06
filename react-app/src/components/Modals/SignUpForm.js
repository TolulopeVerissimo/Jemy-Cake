import React from 'react'
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth.js';
import CakeLogo from './CakeLogo'

function SignUpFormModal({ authenticated, setAuthenticated }) {
    const [showModal, setShowModal] = useState(false);
    let history = useHistory()
    const loginRedirect = () => {
        history.push('/')
    }
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            const user = await signUp(name, username, email, password);
            if (!user.errors) {
                setAuthenticated(true);
            }
        }
    };

    const updateName = (e) => {
        setName(e.target.value);
    };
    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    if (authenticated) {
        return <Redirect to="/" />;
    }


    return (
        <>
            <Modal onClose={() => setShowModal(false)}>
                <div className="signUpForm">
                    <CakeLogo />
                    <form
                        onSubmit={onSignUp}>
                        <h2 className="signUpForm__title">SIGN UP</h2>
                        <div>
                            <label></label>
                            <div className="input">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    onChange={updateName}
                                    value={name}
                                />
                            </div>
                        </div>
                        <div>
                            <label></label>
                            <div className="input">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    onChange={updateUsername}
                                    value={username}
                                />
                            </div>
                        </div>
                        <div>
                            <label></label>
                            <div className="input">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="E-Mail"
                                    onChange={updateEmail}
                                    value={email}
                                />
                            </div>
                        </div>
                        <div>
                            <label></label>
                            <div className="input">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={updatePassword}
                                    value={password}
                                />
                            </div>
                        </div>
                        <div>
                            <label></label>
                            <input
                                type="password"
                                name="repeat_password"
                                placeholder="Confirm Password"
                                onChange={updateRepeatPassword}
                                value={repeatPassword}
                                required={true}
                            />
                        </div>
                        <button className="signUpForm__submit" type="submit">Sign Up</button>
                    </form>
                    <div className="logincontainer">
                        <span>Already have an account? </span>
                        <span onClick={loginRedirect} style={{ cursor: 'pointer', color: '#0095f6' }}>Log In </span>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default SignUpFormModal