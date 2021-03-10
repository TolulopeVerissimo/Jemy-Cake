import React, { useState } from 'react'
import { Modal } from '../../Context/Modal'
import RecipeForm from './RecipeForm'

function EditPostModal({ recipes }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="edit" onClick={() => setShowModal(true)} >
                <span class="left3">
                    <span class="circle-left3"></span>
                    <span class="circle-right3"></span>
                </span>
                <span class="right3">
                    <span class="circle-left3"></span>
                    <span class="circle-right3"></span>
                </span>
                <span class="middle3">
                    <span class="circle-left3"></span>
                    <span class="circle-right3"></span>
                </span>
                <h4 style={{ position: 'absolute', margin: "10.3rem 0 0 0" }}>EDIT IT</h4>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <RecipeForm recipes={recipes} edit={true} />
                </Modal>
            )}
        </>
    )
}

export default EditPostModal;
