import React, { useState, useEffect } from 'react';
import './nav.css'
import { RightNavItems } from './rightNavItems'
import { NavLink, useHistory, Link } from 'react-router-dom'
function Nav() {
    const [rightCurtain, setRightCurtain] = useState(true)

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
                    { /*take out after testing---> onClick={() => setRightCurtain(!rightCurtain)} */}
                    <ul className='nav-menu-items' onClick={() => setRightCurtain(!rightCurtain)}>
                        {RightNavItems.map((item, index) => {
                            return (
                                <li key={index} className={item.cName} id="underline">
                                    <Link to={item.path} style={{ textDecoration: 'none' }}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <nav id="left" className={rightCurtain ? 'left-nav-menu' : 'left-nav-menu active'} >
                    <div id="text" className="contact">
                        <p>Start a conversion  <a className="underline" href="">Opeyokan@gmail.com</a></p>

                    </div>
                    <div id="text" className="portfolio">
                        <h4>Jemy</h4>
                        <p>A digital experience to showcase my two passions: <br />Food and Programming </p>
                        <a className="portfolioAnchor" href="/">Visit my portfolio</a>
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