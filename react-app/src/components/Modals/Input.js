import React from 'react'
import './styles/input.sass'
function Input(props) {
    return (
        <div className="input">
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                required autoComplete="false"
            />
            <label for={props.name} />
        </div>
    )
}
export default Input