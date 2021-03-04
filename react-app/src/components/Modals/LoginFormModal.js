import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../../Store/session';
import CakeLogo from './CakeLogo'
// import Input from './Input'
import { Modal } from '../../Context/Modal';
import SignUpFormModal from './../Modals/LoginFormModal.js'

import ModalBack from '../../components/Modals/ModalBack.js'


import './styles/login.sass'
import * as FaIcons from 'react-icons/fa';


function LoginFormModal({ authenticated, setAuthenticated }) {
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    // const [Visible, setVisible] = useState(true)
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const loginDemo = async (e) => {
        e.preventDefault()
        // const user = await dispatch(demoLogin())
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
                        {/* <Input type='text'
                    name='username'
                    placeholder='Johnny GQ'
                    onChange={setEmail}
                />
                <Input type='password'
                    name='password'
                    placeholder='password123abc'
                    onChange={setPassword}
                /> */}
                        <button className="shrink"> Sign In</button>
                    </form>
                    <button className="bubble" onClick={<SignUpFormModal />}> Sign Up</button>
                    <button className="bubble" type="submit" onClick={loginDemo} style={{ backgroundColor: 'green' }}>Demo</button>


                    {/* <div className="socials">

                <button className="tw" onClick={() => { console.log("Please remove.") }}><i className="fa fa-twitter"><FaIcons.FaTwitter /></i></button>
                <button className="fb" onClick={() => { console.log("Please remove.") }}><i className="fa fa-facebook"><FaIcons.FaFacebookSquare /></i></button>                    <br />
                <button className="google" onClick={() => { console.log("Please remove.") }}><i className="fa fa-twitter"><FaIcons.FaGoogle /></i></button>
                <button className="apple" onClick={() => { console.log("Please remove.") }}><i className="fa fa-apple"><FaIcons.FaApple /></i></button>
            </div> */}
                    <a href="#">Reset Password</a>
                </div>
            </Modal>
        </>
    )
}
export default LoginFormModal