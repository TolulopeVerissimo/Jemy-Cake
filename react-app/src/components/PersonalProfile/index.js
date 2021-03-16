import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Profile from './Profile.js'
import { getUsers } from '../../Store/user'
import { getProfile } from '../../Store/profile'
import { getFollowers } from '../../Store/follow.js'
import { getRecipes, getMissingItems } from '../../Store/recipes'
import { getIngredients } from '../../Store/ingredients'
import { getPantries } from '../../Store/pantry'
function PersonalProfile() {
    const { id } = useParams()
    const [loaded, setLoaded] = useState(false)

    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)
    const users = useSelector(state => state.users)
    const recipes = useSelector(state => state.recipes)
    const ingredient = useSelector(state => state.ingredients)
    const profiles = useSelector(state => state.profiles)
    const pantry = useSelector(state => state.pantries)

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getProfile(id))
        dispatch(getRecipes(id))
        dispatch(getIngredients(id))
        dispatch(getPantries(id))
        // dispatch(getMissingItems(id))
        dispatch(getFollowers(id))
    }, [dispatch])

    useEffect(() => {
        if (recipes && users && ingredient && profiles && users[id] && pantry) {
            setLoaded(true)
        }
    }, [recipes, users, ingredient, profiles, id, pantry])

    if (!loaded) {
        return null
    }
    return (
        <>
            {loaded &&
                <div>
                    <Profile users={users} user={user}
                        profile={profiles[id]} followedUserId={id}
                        recipes={recipes} ingredient={ingredient} pantry={pantry} />
                </div>
            }
        </>
    )
}
export default PersonalProfile