import React, { useState } from 'react'
import './style/small.css'
// import './style/smallPantry.css'
import ModalPantry from './ModalPantry.js'

export default function SmallPantry({ recipes, users, pantry, pantryName }) {
    const [isShown, setIsShown] = useState(false)


    const [showModal, setShowModal] = useState(false);
    return (
        <div className="ppContainer" onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <article className="card">
                <figure>
                    <img src={pantry} alt="Pantry Item!" key={pantry.id} />
                    {isShown && <ModalPantry pantry={pantry} pantryName={pantryName} setShowModal={setShowModal} />}
                </figure>
            </article>
        </div>
    )
}
