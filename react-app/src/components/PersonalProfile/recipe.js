import React, { useState, useEffect, } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { recipeLike } from "../../Store/recipeLike";
import './style/recipe.css'
import Maps from './maps.js'
import MapBox from './mapbox.js'
import SwipeCaro from './SwipeCaro';

function Recipe({ recipe, ingredient, users, followedUserId }) {
    const [clicked, setClicked] = useState(true)
    const [isLiked, setIsLiked] = useState(false);
    const [loaded, setLoaded] = useState(false)

    const dispatch = useDispatch();
    const { id } = useParams()
    let history = useHistory();


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
    const profileReroute = () => {
        history.push(`/profile/${userId}`)
    }

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
                        {clicked ? <h1 className="recipeWordsH1">Click for Recipe Map</h1> : <h1 className="recipeWordsH1">Close Recipes</h1>}
                    </div>

                    {/* {
                        !clicked &&
                        <>
                            <div className="mapsMove">
                                <div id='map'>
                                    <MapBox />
                                </div>
                                <div class='sidebar'>
                                    <div class='heading'>
                                        <h1>Our locations</h1>
                                    </div>

                                    <div id='listings' class='listings'>
                                    </div>
                                </div>
                            </div>
                        </>
                    } */}
                </>
                :
                <>
                    <div className={clicked ? "ellipseToggle" : "ellipseClicked"} onClick={profileReroute}>
                        <h1 className="recipeWordsH1" onClick={profileReroute}>Reroute to your profile!</h1>
                    </div>


                    {/* <div className="sCar">
                        <SwipeCaro recipe={recipe} />
                    </div> */}

                </>
            }
        </>
    )
}
export default Recipe