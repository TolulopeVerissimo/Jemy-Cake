import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";



import Recipe from './recipe.js'
import * as recipeActions from "../../Store/recipes";
import * as ingredientActions from "../../Store/ingredients";
import { getUsers } from '../../Store/user'
import { getFollowers } from '../../Store/follow.js'
import Profile from './Profile.js'
import { getProfile } from '../../Store/profile'






// http://jsfiddle.net/5w3bE/107/
function PersonalProfile() {
    const user = useSelector(state => state.session.user)
    const users = useSelector(state => state.users)
    const recipe = useSelector(action => action.recipes)
    const ingredient = useSelector(state => state.ingredients)
    const profiles = useSelector(state => state.profiles)

    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)
    const { id } = useParams()

    useEffect(() => {

        dispatch(getUsers())
        dispatch(recipeActions.getRecipes());
        dispatch(ingredientActions.getIngredients());
        dispatch(getProfile(id))
        dispatch(getFollowers(id))
        setLoaded(true)
    }, [dispatch])

    return (

        <>
            {loaded &&
                <div>
                    <Profile users={users} user={user} profile={profiles[id]} followedUserId={id} recipe={recipe} ingredient={ingredient} />
                </div>
            }
        </>
    )
}
export default PersonalProfile