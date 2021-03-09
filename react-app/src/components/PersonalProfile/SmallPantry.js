import React, { useState } from 'react'
import './small.css'
import { Modal } from '../../Context/Modal'
// import ModalRecipe from './modalClickPost'

export default function SmallPantry({ recipes, users, pantry, pantryName }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="ppContainer">
            <article className="card">
                <figure>
                    <img src={pantry} key={pantry.id} alt="Pantry Item!" onClick={() => { setShowModal(true) }
                    } />
                    {showModal
                        && (<Modal onClose={() => { setShowModal(false) }}>
                            {/* <ModalRecipe recipes={recipes} users={users} /> */}
                        </Modal>
                        )}
                </figure>
            </article>
        </div>
    )
}
