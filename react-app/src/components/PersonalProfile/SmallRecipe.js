import React, { useState } from 'react'
import './style/small.css'
// import './smallRecipe.css'
import { Modal } from '../../Context/Modal'
import ModalRecipe from './ModalRecipe.js'

export default function SmallRecipe({ recipes, users }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="ppContainer2">
            <article className="card">
                <figure>
                    <img src={recipes.imagePath} key={recipes.id} alt="recipe!" onClick={() => {
                        setShowModal(true)
                    }
                    } />
                    {showModal
                        && (
                            <Modal onClose={() => setShowModal(false)}>
                                <ModalRecipe recipes={recipes} users={users} />
                            </Modal>
                        )}

                </figure>
            </article>
        </div>
    )
}
