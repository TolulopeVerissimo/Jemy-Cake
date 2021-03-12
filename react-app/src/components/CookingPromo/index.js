import React, { useState } from 'react';
import promoVid from './../../PromoVid.mp4'
import TrailingPlayButton from './playButton.js'
import './mouse.css'

function CookingPromo() {
    const [VideoBoolean, setVideoBoolean] = useState(true)

    window.addEventListener('load', () => {
        const vidPlayer = document.querySelector(".video")
        vidPlayer.muted = true
        vidPlayer.addEventListener('click', e => {
            //! vidPlayer.muted = true ? false : true
        })
    })

    return (
        <>
            {/* <TrailingPlayButton /> */}

            <video className="video"
                style={{ objectFit: 'contain' }} width="100%" height="100%" autoPlay loop muted
                id={VideoBoolean ? "" : "clicked"} //to lock video in place with overflow-y :hidden
            >
                <source src={promoVid} type="video/mp4"
                />
            </video>
        </>
    )
}
export default CookingPromo