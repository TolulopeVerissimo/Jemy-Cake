import React from 'react'
import './mouse.css'
function TrailingPlayButton() {
    window.addEventListener('load', () => {

        // let mX = 0 // let clientX = -100
        // let mY = 0 // let clientY = -100
        let mX = -100 // let clientX = -100
        let mY = -100 // let clientY = -100
        let xp = 0
        let yp = 0

        let circle = document.querySelector(".circle")
        //   innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        //request animation frame to pass in a render function
        //pass in callback to translate x and y, which gets rid of set interval
        document.addEventListener('mousemove', e => {
            // mX = e.offsetX - 30
            // mY = e.offsetY - 30 // remove the constant variables
            mX = e.offsetX
            mY = e.offsetY
        })


        //! Gets lost on tags and video
        setInterval(function () {

            // xp += ((mX - xp) / 6);
            // yp += ((mY - yp) / 6);
            xp += ((mX - xp) / 6);
            yp += ((mY - yp) / 6);
            // circle.style.transform = `translate(${mX}px, ${mY}px)`;
            circle.style.transform = `translate(${xp}px, ${yp}px)`;

            // circle.style.left = `${xp}`
            // circle.style.top = `${yp}`
        }, 35)

    })

    return (
        <>
            <svg id="circle" className="circle" version="1.1" id="play"
                style={{
                    xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", height: "100px", width: "100px",
                    viewBox: "0 0 100 100", enableBackground: "new 0 0 100 100", xmlSpace: "preserve"
                }}>
                <path className="stroke-solid" fill="none" stroke="#ddbe72" d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
    C97.3,23.7,75.7,2.3,49.9,2.5"/>
                <path className="icon" fill="#ddbe72" d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z" />
            </svg>
        </>
    )

}
export default TrailingPlayButton