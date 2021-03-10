import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { recipeLike } from "../../Store/recipeLike";
import './style/recipe.css'
import Maps from './maps.js'
import SwipeCaro from './SwipeCaro';

function Recipe({ recipe, ingredient, users, followedUserId }) {
    const [clicked, setClicked] = useState(true)
    const [isLiked, setIsLiked] = useState(false);
    const [loaded, setLoaded] = useState(false)

    const dispatch = useDispatch();
    const { id } = useParams()

    const likeHandler = () => {
        const like = { userId: user.id, recipeId: recipe.id };
        setIsLiked(!isLiked);
        dispatch(recipeLike(like));
    };

    const likeCount = () => {
        if (recipe.likesUsers.length === 1) {
            return "other";
        } else {
            return "others";
        }
    };
    const recipesList = []

    const user = useSelector(state => state.session.user)
    const userId = useSelector(state => state.session.user.id)
    const follows = useSelector(state => state.follows)

    useEffect(() => {
        if (recipe) {
            if (recipe.likesUsers.includes(user.id)) {
                setIsLiked(true);
            } else setIsLiked(false);
        }
    })
    useEffect(() => {
        if (recipe && ingredient) {
            setLoaded(true)
        }
    }, [recipe, ingredient])

    return (
        <>
            { userId == id ?
                <>
                    <div className={clicked ? "ellipseToggle" : "ellipseClicked"}
                        onClick={() => setClicked(!clicked)}>
                        {clicked ? <h1 className="recipeWordsH1">Click for Recipes</h1> : <h1 className="recipeWordsH1">Close Recipes</h1>}
                    </div>

                    {!clicked &&
                        <>
                            <div className="mapsMove">
                                <Maps />
                            </div>
                        </>
                    }
                </>
                :
                <>
                    <div className="sCar">
                        <SwipeCaro recipe={recipe} />
                    </div>
                    {/* <div></div> */}
                </>
            }
        </>
    )
}
export default Recipe