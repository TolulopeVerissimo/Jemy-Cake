import React, { useState } from 'react'
import './style/small.css'
import ModalPantry from './ModalPantry.js'

export default function SmallPantry({ recipes, users, pantry, pantryName, pantryId }) {
    const [isShown, setIsShown] = useState(false)
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="ppContainer" onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <article className="card">
                <figure>
                    <img src={pantry} alt="Pantry Item!" key={pantry?.id} />
                    {isShown &&
                        <ModalPantry pantry={pantry} pantryId={pantryId} pantryName={pantryName} setShowModal={setShowModal} />
                    }
                </figure>
            </article>
        </div>
    )
}

