import React, { useState, useEffect } from 'react';
import './toast.css'


function Toast() {
    const [Load, setLoad] = useState(true)

    // useEffect(() => setLoad(!Load), [Load])
    return (
        <>
            <div className="toastContainer">
                <link href="//db.onlinewebfonts.com/c/13adb8ecf0b34eeb6dc616544371b8d5?family=Plain+Ultrathin" rel="stylesheet" type="text/css" />

                <div className="Opening">
                    {/* <h1 className={Load ? "noLoad" : "noLoad active"}   >Your Recipe Is Trending. </h1> */}
                    <h1>Your Recipe Is Trending. </h1>
                </div>
            </div>
        </>
    )
}
export default Toast