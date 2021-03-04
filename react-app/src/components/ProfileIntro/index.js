import React, { useState, useEffect } from 'react'
import { Modal } from '../../Context/Modal';
// import SVG from './SVG.js'
import gif from './../../saltbae.webp'
import './intro.css'
import ModalBack from '../../components/Modals/ModalBack.js'
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import LoginFormModal from './../Modals/LoginFormModal.js'
// https://labs.loupbrun.ca/buttons/
// https://codepen.io/vanderlanth/pen/LZWyGg
// const ReactCSSTG = CSSTransitionGroup;
import { useSelector } from "react-redux";




function ProfileIntro({ authenticated, setAuthenticated }) {
    const [showModal, setShowModal] = useState(false);
    const [Visible, setVisible] = useState(true)
    const user = useSelector(state => state.session.user)

    const onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isVisible: false
        }, function () {
            console.log(this.state.isVisible)
        });
        return false;
    }

    const remount = (e) => {
        setVisible(true)
        console.log(Visible)
        e.preventDefault()

    }

    let component = Visible ? <LoginFormModal style={{ position: 'absolute' }} onSubmit={onSubmit} key='modal' /> : <ModalBack onClick={remount} key='bringitback' />

    return (
        <>
            <div className="homePageProfileContainer" style={{ color: "white" }}>

                <h1 class="wordsTitle">Express Yourself.</h1>
                <h1 class="wordsTitle2">Accelerate Your Brand.</h1>
                {/* On click redirect */}
                {/* change this to a Modal that renders D3.js */}

                <div className="flex">
                    <div className="click">
                        <p class="wordsParagraph">Since the birth of Jemy,<pre />
                        we've generated hundreds of data points<pre /> to reflect the people's bellies'.
                        </p>
                        <div className="buttonDiv">

                            <button className="btn modo" onClick={() => { console.log('cleeek'); setShowModal(true) }}> PROFILE
                                <div>
                                    <span className="icon-right"></span>
                                    <span className="icon-right.after"></span>
                                </div>
                            </button>

                            <button class="btn user-data">USER DATA
                                <div>
                                    {/* <span className="icon-right"></span>
                                    <span className="icon-right.after"></span> */}
                                </div>
                            </button>

                        </div>
                    </div>
                    <div className="gifDiv">
                        {authenticated ? <img className="gifBae" src={user.profilePicture}></img> : <img className="gifBae" src={gif} alt="loading..." />
                        }
                    </div>
                </div>
                {showModal &&
                    (
                        <Modal onClose={() => setShowModal(false)}>
                            <LoginFormModal authenticated={authenticated}
                                setAuthenticated={setAuthenticated} />
                        </Modal>
                    )
                }






            </div>
        </>
    )
}
export default ProfileIntro