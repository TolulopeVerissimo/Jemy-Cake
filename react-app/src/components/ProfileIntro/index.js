import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from "react-redux";
import { logout } from "../../services/auth";
import { Modal } from '../../Context/Modal';
import gif from './../../saltbae.webp'
import LoginFormModal from './../Modals/LoginFormModal.js'
import './intro.css'

function ProfileIntro({ authenticated, setAuthenticated }) {
    let history = useHistory()
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state.session.user)
    const userId = useSelector(state => state.session.user?.id)

    const logoutNow = () => {
        logout()
        setAuthenticated(false)
        history.push('/')
    }

    const profileRedirect = () => {
        history.push(`/profile/${userId}`)
    }

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

                            {!authenticated ?
                                <>
                                    <button className="btn modo" onClick={() => { setShowModal(true) }}> PROFILE
                                    <div>
                                            <span className="icon-right"></span>
                                            <span className="icon-right.after"></span>
                                        </div>
                                    </button>
                                </>
                                :
                                <>
                                    <button className="btn modo" onClick={logoutNow}> LOG OUT
                                        <div>
                                            <span className="icon-right"></span>
                                            <span className="icon-right.after"></span>
                                        </div>
                                    </button>
                                    <button class="btn user-data">USER DATA</button>
                                </>
                            }
                        </div>

                    </div>
                    <div className="gifDiv">
                        {authenticated ? <img className="gifBae" src={user.profilePicture} style={{ cursor: 'pointer' }} onClick={profileRedirect}></img> : <img className="gifBae" src={gif} alt="loading..." />
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