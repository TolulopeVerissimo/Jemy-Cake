import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getSignedRequest } from '../../services/upload'
import { createRecipe, editRecipe, deleteRecipe } from '../../Store/recipes'
import './style/RecipeForm.css'


function RecipeForm({ edit, recipes, setShowModal }) {
  const history = useHistory()
  const dispatch = useDispatch()
  const [src, setSrc] = useState('')
  const [photo, setPhoto] = useState('')
  const [type, setType] = useState('')
  const [instructions, setInstructions] = useState('')
  const [description, setDescription] = useState('')
  const user = useSelector(state => state.session.user)
  let userId
  if (user) {
    userId = user.id;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (edit) {
      await dispatch(editRecipe(recipes?.id, description,));
    }
    else {
      const url = await getSignedRequest(photo);
      await dispatch(createRecipe({ userId, description, instructions, type, url }));
    }
    setShowModal(false)
    history.push(`/profile/${userId}`);
  };
  const readUrl = (e) => {
    if (e.target.files[0]) {
      const src = URL.createObjectURL(e.target.files[0])
      setSrc(src)
      setPhoto(e.target.files[0])
    }
  }
  return (
    <div className='recipesform__container'>
      <h2 className='recipesform__header'>{edit ? "Edit Recipe" : "New Recipe"}</h2>
      <form className='recipesform' onSubmit={handleSubmit}>
        {src && <img className="recipesform__image" src={src} />}
        {!edit && (
          <div className='fileInput__container'>
            <label className='recipesform__label fileInput__label'>
              Choose a Photo
              <input
                type='file'
                className='recipesform__input fileInput'
                onChange={readUrl}
              />
            </label>
          </div>
        )}
        <h2>Type</h2>
        <textarea
          rows='5'
          cols='33'
          type='textarea'
          value={type}
          placeholder='Enter the type of recipe this is...'
          onChange={(e) => setType(e.target.value)}
        />
        <h2>Description</h2>
        <textarea

          rows='5'
          cols='33'
          type='textarea'
          value={description}
          placeholder='Enter the description for this recipe...'
          onChange={(e) => setDescription(e.target.value)}
        />
        <h2>Instructions</h2>
        <textarea
          rows='5'
          cols='33'
          type='textarea'
          value={instructions}
          placeholder='Enter the instructions for this recipe...'
          onChange={(e) => setInstructions(e.target.value)}
        />


        <div className='recipesform__button-container'>
          <button type='submit' className='recipesform__button'>
            {edit ? "Edit Recipe" : "Share Recipe"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default RecipeForm;
