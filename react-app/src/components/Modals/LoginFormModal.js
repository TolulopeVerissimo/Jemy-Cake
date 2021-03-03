import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../../Store/session';
import CakeLogo from './CakeLogo'
import Input from './Input'

import './styles/login.sass'
import * as FaIcons from 'react-icons/fa';


function LoginFormModal(props) {

    const [Visible, setVisible] = useState(true)
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

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
        <div className="login">
            <CakeLogo />
            <form onSubmit={onLogin}>
                <div>
                    {errors.map((error) => (
                        <div>{error}</div>
                    ))}
                </div>

                <Input type='text'
                    name='username'
                    placeholder='Johnny GQ'
                    onChange={setEmail}
                />
                <Input type='password'
                    name='password'
                    placeholder='password123abc'
                    onChange={setPassword}
                />
                <button className="shrink"> Sign In</button>
                <button className="bubble"> Sign Up</button>
            </form>
            <div className="socials">

                <button className="tw" onClick={() => { console.log("Please remove.") }}><i className="fa fa-twitter"><FaIcons.FaTwitter /></i></button>
                <button className="fb" onClick={() => { console.log("Please remove.") }}><i className="fa fa-facebook"><FaIcons.FaFacebookSquare /></i></button>                    <br />
                <button className="google" onClick={() => { console.log("Please remove.") }}><i className="fa fa-twitter"><FaIcons.FaGoogle /></i></button>
                <button className="apple" onClick={() => { console.log("Please remove.") }}><i className="fa fa-apple"><FaIcons.FaApple /></i></button>
            </div>
            <a href="#">Reset Password</a>
        </div>
    )
}
export default LoginFormModal