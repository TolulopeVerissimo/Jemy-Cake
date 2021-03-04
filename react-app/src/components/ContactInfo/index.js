import React, { useState, useEffect } from 'react';
import './info.css'
// import { Items } from './rightNavItems'
import { NavLink, useHistory, Link } from 'react-router-dom'

function ContactInfo(params) {
    return (
        <>
            <div className="overflowBuffer"></div>
            <div className="InfoContainer">
                <div className="goodbye">
                    <h3>Don't by shy, <br></br><strong>say yummy!</strong></h3>
                </div>
                <div className="u-relative u-fit " style={{ transform: "translateY(0px) scale(1) translateZ(0px)" }}>
                    <div className="u-relative u-fit u-flex u-align-items-c is-inverse is-white">
                        <div className="u-absolute u-pos-tl is-cursor-active" style={{ transform: "translateX(236.96px) translateY(425.98px) translateZ(0px)" }}>
                            <div className="c-transition c-hoverimage-cursor u-relative u-overflow-h u-force-3d">
                                {/* <div className="c-footer-img">
                                <img src="https://images.prismic.io/ouiwillportfolio%2F068bd087-6dee-410b-96c8-756ca9be39ef_salut.gif?auto=compress,format" srcSet="https://images.prismic.io/ouiwillportfolio%2F068bd087-6dee-410b-96c8-756ca9be39ef_salut.gif?auto=compress,format 2x" className="u-absolute u-pos-tl u-fit u-force-3d" />
                            </div> */}
                                <div className="u-absolute u-pos-tl u-fit">
                                    <div className="js-object-fit c-transition-content u-absolute u-pos-tl" style={{ width: "416px", height: "297px", transform: "translate(-109px, 0px) translateZ(0px)" }}>
                                        <div className="u-absolute u-pos-tl u-fit">
                                            <div className="c-transition-line-h"></div>
                                            <div className="c-transition-line-h"></div>
                                            <div className="c-transition-line-h"></div>
                                            <div className="c-transition-line-h"></div>
                                            <div className="c-transition-line-h"></div>
                                        </div>
                                        <div className="u-absolute u-pos-tl u-fit u-flex">
                                            <div className="c-transition-line-v"></div>
                                            <div className="c-transition-line-v"></div>
                                            <div className="c-transition-line-v"></div>
                                            <div className="c-transition-line-v"></div>
                                            <div className="c-transition-line-v"></div>
                                            <div className="c-transition-line-v"></div>
                                            <div className="c-transition-line-v"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="u-relative u-w32of42 u-offset-l-w5of42 | u-w16of22@sm u-offset-l-w3of22@sm">
                            <h3 className="c-footer-title t-h3 u-color--black u-font-ultrathin">Don't be shy,<br></br><a className="t-link js-hover-image" href="mailto:biz@ouiwill.com"><strong>say hi.</strong></a></h3>
                            <div className="u-flex u-flex-flow-row-wrap u-justify-content-sb u-marg-t-xl">
                                <div className="u-w5of32 | u-fit-w@sm">
                                    <address className="u-normal"><h4 className="t-text u-regular u-font-thin">San Diego</h4>
                                        <div className="c-wysiwyg t-text--sm u-marg-t-xs u-block u-color--gray"><p>4375 30th Street<br></br>San Diego CA, 92104</p> </div>
                                    </address>

                                    <address className="u-normal u-marg-t-md"><h4 className="t-text u-regular u-font-thin">Paris</h4>
                                        <div className="c-wysiwyg t-text--sm u-marg-t-xs u-block u-color--gray"><p>26 rue du Chalet<br></br>75010 Paris</p>
                                        </div>
                                    </address>
                                </div> <div className="u-w5of32 | u-hide@sm"><h4 className="t-text u-regular u-font-thin">Disrupt</h4> <div className="c-wysiwyg t-text--sm u-marg-t-xs u-color--gray"><p>A digital experience to showcase our approach to building tech</p>
                                </div> <a href="http://disrupt.ouiwill.com" rel="noopener" className="t-link--primary t-text u-marg-t-md u-inline-block">Visit the site</a></div> <div className="c-footer-biz u-w5of32 | u-fit-w@sm"><h4 className="t-text u-regular u-font-thin u-color--gray">Start a conversation</h4> <a href="mailto:biz@ouiwill.com" rel="noopener" className="t-link--primary t-text--xl u-marg-t-xs u-inline-block">biz@ouiwill.com</a> <p className="t-text--xs u-color--gray u-marg-t-lg | u-hide@sm">Click on "say hi" to start a conversation.</p>
                                </div>
                                <div className="u-w3of32"><ul className="c-footer-links t-list">
                                    <li>
                                        <a href="http://dribbble.com/ouiwill" rel="noopener" className="t-link--primary t-text">Dribbble</a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/ouiwill/" rel="noopener" className="t-link--primary t-text">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="http://twitter.com/ouiwillagency" rel="noopener" className="t-link--primary t-text">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="http://behance.net/ouiwill" rel="noopener" className="t-link--primary t-text">Behance</a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="text" className="location">
                    <h4>Greater Philadelphia Area</h4><br />
                    <p>Write to me, Stick Stickly. <pre />PO box 963 New York City, <pre />New York State 10108</p>
                </div>
                <div id="text" className="contact">
                    <p>Start a conversion </p>
                    <a href="">Opeyokan@gmail.com</a>
                    <p>Hover over "say yummy" to see something cool!</p>
                </div>
                <div id="text" className="portfolio">
                    <h4>Jemy</h4>
                    <p>A digital experience to showcase my two passions: <br />Food and Programming </p>
                    <a href="/">Visit my portfolio</a>
                </div>

            </div>
        </>
    )
}
export default ContactInfo