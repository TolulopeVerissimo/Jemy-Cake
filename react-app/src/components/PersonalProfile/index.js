import React, { useState, useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Combo from './Combination.js'


import Recipe from './recipe.js'
import * as recipeActions from "../../Store/recipes";
import { getUsers } from '../../Store/user'
import { getFollowers } from '../../Store/follow.js'
import Profile from './Profile.js'




import './cssForCircles.css'
import './photoRecipeGrid.css'
import './recipeBox.css'
// http://jsfiddle.net/5w3bE/107/
function PersonalProfile() {
    const user = useSelector(state => state.session.user)
    const users = useSelector(state => state.users)
    const recipe = useSelector(state => state.recipes)

    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)
    const { id } = useParams()

    useEffect(() => {

        dispatch(getUsers())
        dispatch(recipeActions.getRecipes());
        dispatch(getFollowers(id))
        setLoaded(true)
    }, [dispatch])

    return (

        <>
            {loaded &&
                <div>
                    <Profile users={users} user={user} followedUserId={id} />
                    <Recipe recipe={recipe} />
                    <Recipe recipe={recipe} />
                </div>
            }
        </>
    )
}
export default PersonalProfile