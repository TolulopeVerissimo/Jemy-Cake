import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../../Store/session';
import CakeLogo from './CakeLogo'
import { Modal } from '../../Context/Modal';
import SignUpFormModal from './../Modals/LoginFormModal.js'
import './styles/login.sass'

function LoginFormModal({ authenticated, setAuthenticated }) {
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const loginDemo = async (e) => {
        e.preventDefault()
        const user = await dispatch(login('demo@aa.io', 'demo'))
        if (!user.errors) {
            setAuthenticated(true)
        } else {
            setErrors(user.errors)
        }

    }

    const onLogin = async (e) => {
        e.preventDefault();
        const user = await dispatch(login(email, password));
        if (!user.errors) {
            setAuthenticated(true);
        } else {
            setErrors(user.errors);
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    if (authenticated) {
        return <Redirect to="/" />;
    }

    return (
        <>
            <Modal onClose={() => setShowModal(false)}>
                <div className="login">
                    <CakeLogo />
                    <form onSubmit={onLogin}>
                        <div>
                            {errors.map((error) => (
                                <div className="errorMsg">{error}</div>
                            ))}
                        </div>
                        <div className="input">
                            <label htmlFor="email"></label>
                            <input
                                name="email"
                                type="text"
                                placeholder="Email"
                                className="loginForm__textField"
                                value={email}
                                onChange={updateEmail}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="password"></label>
                            <input
                                name="password"
                                type="password"
                                placeholder="password123abc"
                                className="loginForm__textField"
                                value={password}
                                onChange={updatePassword}
                            />

                        </div>

                        <button className="shrink"> Sign In</button>
                    </form>
                    <button className="bubble" style={{ cursor: 'pointer' }} onClick={() => {
                        {
                            showModal &&
                                (
                                    <Modal onClose={() => setShowModal(false)}>
                                        <SignUpFormModal authenticated={authenticated}
                                            setAuthenticated={setAuthenticated} />
                                    </Modal>
                                )
                        }

                    }


                    }> Sign Up</button>

                    <button className="bubble" type="submit" onClick={loginDemo} style={{ backgroundColor: 'green' }}>Demo</button>

                    <a href="#">Reset Password</a>
                </div>
            </Modal>
        </>
    )
}
export default LoginFormModal