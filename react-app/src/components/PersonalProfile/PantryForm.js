import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import { useHistory } from 'react-router-dom'
import { getSignedRequest } from '../../services/upload'
import { createPantry, editPantry } from '../../Store/pantry'
import './style/PantryForm.css'


function PantryForm({ edit, pantryName, setShowModal, pantryId }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const [src, setSrc] = useState('')
    const [photo, setPhoto] = useState('')
    const [name, setName] = useState('')
    const { id } = useParams()
    const user = useSelector(state => state.session.user)
    const pantry = useSelector(state => state.pantries)
    let userId
    if (user) userId = user.id;
    console.log(pantry)

    const addCopy = async (e) => {
        const name = pantry.pantryId.name
        const image = pantry.pantryId.image
        await dispatch(createPantry({ name, userId, image }))
        setShowModal(false)
        history.push(`/profile/${user.id}`)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = pantry.pantryId.name
        const image = pantry.pantryId.image
        if (edit) await dispatch(editPantry(userId, name, image));

        else {
            const url = await getSignedRequest(photo);
            await dispatch(createPantry({ userId, name, url }));
        }
        setShowModal(false)
        history.push(`/profile/${id}`);
    };
    const readUrl = (e) => {
        if (e.target.files[0]) {
            const src = URL.createObjectURL(e.target.files[0])
            setSrc(src)
            setPhoto(e.target.files[0])
        }
    }
    return (
        <div className='pantriesform__container'>
            <h2 className='pantriesform__header'>{edit ? "Edit Recipe" : "New Recipe"}</h2>

            <form className='pantriesform' onSubmit={handleSubmit}>
                {src && <img className="pantriesform__image" src={src} />}
                {!edit &&
                    (
                        <div className='fileInput__container'>
                            <label className='pantriesform__label fileInput__label'>
                                Choose a Photo
                                <input
                                    type='file'
                                    className='pantriesform__input fileInput'
                                    onChange={readUrl}
                                />
                            </label>
                        </div>
                    )}
                <h2>Name</h2>
                <textarea
                    rows='5'
                    cols='33'
                    type='textarea'
                    value={name}
                    placeholder='Enter the name of the ingredient...'
                    onChange={(e) => setName(e.target.value)}
                />

                <div className='pantriesform__button-container'>
                    <button type='submit' className='pantriesform__button'>
                        {edit ? "Edit ingredient" : "Share ingredient"}
                    </button>
                    <button type='submit' className='pantriesform__button' onClick={addCopy}>
                        {edit ? "Add Copy" : "Share ingredient"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PantryForm;
