import React from 'react'

function ModalBack(props) {
    return (
        <button className="bringitback"
            onClick={props.onClick}
            key={props.className}>
            If you see this. This is a bug.
            It should redirect.
        </button>
    )
}
export default ModalBack