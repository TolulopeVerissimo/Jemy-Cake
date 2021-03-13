import React, { useState } from 'react'
import { Modal } from '../../Context/Modal'
import PantryForm from './PantryForm'

function EditPantryModal({ recipes }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="add" onClick={() => setShowModal(true)}>
                <span class="left2">
                    <span class="circle-left2"></span>
                    <span class="circle-right2"></span>
                </span>
                <span class="right2">
                    <span class="circle-left2"></span>
                    <span class="circle-right2"></span>
                </span>
                <h4 style={{ position: 'absolute', margin: "10.3rem 0 0 0" }}>ADD</h4>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className="hov">
                        <PantryForm recipes={recipes} edit={true} setShowModal={setShowModal} />
                    </div>
                </Modal>
            )}
        </>
    )
}

export default EditPantryModal;
