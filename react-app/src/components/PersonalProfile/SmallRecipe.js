import React, { useState } from 'react'
import './small.css'
import { Modal } from '../../Context/Modal'
// import ModalRecipe from './modalClickPost'

export default function SmallPost({ recipes, users }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="ppContainer">
            <article className="card">
                <figure>
                    <img src={recipes.imagePath} key={recipes.id} alt="recipe!" onClick={() => { setShowModal(true) }
                    } />
                    {showModal
                        && (<Modal onClose={() => {
                            setShowModal(false)
                        }}>
                            {/* <ModalRecipe recipes={recipes} users={users} /> */}
                        </Modal>
                        )}

                </figure>
            </article>
        </div>
    )
}
