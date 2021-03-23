import React from 'react'
import placeHolderLogo from '../../placeholder-logo.png'
import './styles/logo.sass'
function CakeLogo() {
    return (
        <div className="cake">
            <img src={placeHolderLogo} alt="logo"></img>
            <br /><br /><span>SAY JEMY!</span>
        </div>
    )
}
export default CakeLogo