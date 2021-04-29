import React, { useState } from 'react';
import { logout } from "../../services/auth";
import { useSelector } from 'react-redux'
import { RightNavItems } from './rightNavItems'
import { useHistory, Link } from 'react-router-dom'

import './nav.css'
function Nav({ authenticated, setAuthenticated }) {
    const [rightCurtain, setRightCurtain] = useState(true)
    let history = useHistory()
    const logoutNow = () => {
        logout()
        setAuthenticated(false)
        history.push('/')
    }
    const userId = useSelector(state => state.session.user?.id)

    const profileRedirect = () => {
        history.push(`/profile/${userId}`)
    }

    return (
        <>
            <div id="nav-container">
                <div className="toggle-icon" id={rightCurtain ? '' : 'pushed'} onClick={() => setRightCurtain(!rightCurtain)}  >

                    <h5 className="words" id={rightCurtain ? '' : 'pushed'}>Jemy</h5>
                    <span className="bar" id={rightCurtain ? '' : 'pushed'}></span>
                    <span className="bar" id={rightCurtain ? '' : 'pushed'}></span>
                    <span className="bar" id={rightCurtain ? '' : 'pushed'}></span>
                </div>
                <nav id="right" className={rightCurtain ? 'nav-menu' : 'nav-menu active'}>
                    <ul className='nav-menu-items' onClick={() => setRightCurtain(!rightCurtain)}>
                        {RightNavItems.map((item, index) => {
                            return (
                                <li key={index} className={item.cName} id="underline">
                                    <Link to={item.path} style={{ textDecoration: 'none' }}>
                                        <span style={{ textDecoration: 'none' }}>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                        {authenticated &&
                            <>
                                <li className='nav-text' id="underline" onClick={profileRedirect}>
                                    <span>P R O F I L E</span>
                                </li>
                                <li className='nav-text' id="underline" onClick={logoutNow}>
                                    <span>LOG OUT</span>
                                </li>
                            </>

                        }
                    </ul>
                </nav>
                <nav id="left" className={rightCurtain ? 'left-nav-menu' : 'left-nav-menu active'} >
                    <div id="text" className="contact">
                        <p>Start a conversion  <a className="underline" href="">Opeyokan@gmail.com</a></p>

                    </div>
                    <div id="text" className="portfolio">
                        <h4>Jemy</h4>
                        <p>A digital experience to showcase my two passions: <br />Food and Programming </p>
                        <a className="portfolioAnchor" href="https://tolulopeverissimo.github.io/">Visit my portfolio</a>
                    </div>
                    <div id="text" className="location">
                        <h4>Greater Philadelphia Area</h4><br />
                        <p>Write to me, Stick Stickly. <pre />PO box 963 New York City, <pre />New York State 10108</p>
                    </div>
                </nav>
            </div>

        </>
    )

}
export default Nav