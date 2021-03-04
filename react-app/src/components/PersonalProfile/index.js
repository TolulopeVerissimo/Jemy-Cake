import React, { useState, useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Combo from './Combination.js'
// import { getRecipes } from '../../Store/recipes'
import { getUsers } from '../../Store/user'
import { getFollowers } from '../../Store/follow.js'
import FollowUser from '../FollowUser'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import backDrop from "./../../media/410197.jpg"
// https://codepen.io/Lakston/pen/JgEpog?editors=1100
import image from "./../../media/poke.jpg"

import './cssForCircles.css'
import './photoRecipeGrid.css'
import './recipeBox.css'
// http://jsfiddle.net/5w3bE/107/
const numWords = require('num-words')

function PersonalProfile() {
    SwiperCore.use([Navigation])
    let cssProperties = {}
    cssProperties['--image'] = 'linearGradient(90deg, #aa90%, #dd930%, #99a70%, #dd990%, #a99100%)'
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }


    const user = useSelector(state => state.session.user)
    const users = useSelector(state => state.session.users)
    console.log("USERS", users)
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)
    const { id } = useParams()
    const recipes = []

    useEffect(() => {

        dispatch(getUsers())
        // dispatch(getRecipes())
        // dispatch(getFollowers(id))
        setLoaded(true)
    }, [dispatch])

    // if (recipes) {
    // 	for (let key in recipes) {
    // 		if (recipes[key].userId == id) {
    // 			userRecipes.push(recipes[key])
    // 		}
    // 	}

    debugger;
    return (

        <>

            {/* <div className="bodyDiv" style={{ backgroundImage: `url(${backDrop})` }}> */}
            <div className="bodyDiv" >

                <h1 style={{ color: 'white' }}>{user.biography}</h1>


                {/* 
                <div className="RecipeBox">
                    <Combo />
                </div> */}

                {/* <div className="moveTheFollowButton">
                    <FollowUser followedUserId={id} />
                </div> */}


                {/* <div className="cirContainer" >
                    {/* <div className="centerCircle" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center center" }}> */}
                {/* <div className="centerCircle" style={{ backgroundImage: `url('https://www.anime-planet.com/images/characters/ash-ketchum-2804.jpg?t=1541015853)`, backgroundSize: "cover", backgroundPosition: "center center" }}> */}
                {/* <div className="spinner One" style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/220px-Pok%C3%A9mon_Pikachu_art.png')`, backgroundSize: "cover", backgroundPosition: "center center" }}><button onClick={() => <Redirect to="/" />} /></div>
                        <div className="spinner Two" style={{ backgroundImage: `url('https://assets.pokemon.com//assets/cms2/img/video-games/_tiles/pokemon-sword-shield/distributions/pikachu/inline/world.png')`, backgroundSize: "cover", backgroundPosition: "center center" }}><button onClick={() => <Redirect to="/" />} /></div>
                        <div className="spinner Three" style={{ backgroundImage: `url('https://cdn.bulbagarden.net/upload/thumb/4/49/Ash_Pikachu.png/1200px-Ash_Pikachu.png')`, backgroundSize: "cover", backgroundPosition: "center center" }}><button onClick={() => <Redirect to="/" />} /></div>
                        <div className="spinner Four" style={{ backgroundImage: `url('https://media.gamestop.com/i/gamestop/11100921/Pokemon-Pikachu-Plush-24-in?$pdp$')`, backgroundSize: "cover", backgroundPosition: "center center" }}><button onClick={() => <Redirect to="/" />} /></div>
                        <div className="spinner Five" style={{ backgroundImage: `url('https://www.whats-on-netflix.com/wp-content/uploads/2019/05/Pokemon-Detective-Pikachu-Netflix.jpg')`, backgroundSize: "cover", backgroundPosition: "center center" }}><button onClick={() => <Redirect to="/" />} /></div> */}
                {/* </div> */}
                {/* </div>  */}

                <div className="cirContainer" >

                    <div className="centerCircle" style={{ backgroundImage: `url(${user.profilePicture})`, backgroundSize: "cover", backgroundPosition: "center center" }}>

                        {
                            users && users.map((el, idx) => {
                                debugger;
                                return (
                                    // <div className=`spinner ${idx}` > <img id="pictureCircle" src={el.ProfilePicture}>
                                    <div className={`spinner ${capitalize(numWords(idx + 1))}`} >
                                        <img id="pictureCircle" src={el.ProfilePicture} />
                                    </div>
                                )
                            }
                            )
                        }

                    </div>
                </div>

                {/* 
                <div className="PhotoGridsContainer">
                    <div className="PhotoGrid">
                        <Swiper className="gradientSpace" spaceBetween={10} slidesPerView={3} >

                            <article class="card">
                                <figure>
                                    <SwiperSlide>
                                        <img src="https://picsum.photos/id/103/500/250" alt="A pair of sneakers in a park." />
                                    </SwiperSlide>
                                </figure>
                            </article>

                            <article class="card">
                                <figure>
                                    <SwiperSlide>
                                        <img src="https://picsum.photos/id/104/500/250" alt="A dreamcatcher." />
                                    </SwiperSlide>

                                </figure>
                            </article>

                            <article class="card">
                                <figure style={{ cssProperties }}>
                                    <SwiperSlide>
                                        <img src="https://picsum.photos/id/106/500/250" alt="Flowers under a blue sky." />
                                    </SwiperSlide>
                                </figure>
                            </article>

                            <article className="card">
                                <figure style={{ cssProperties }}>
                                    <SwiperSlide>
                                        <img src="https://picsum.photos/id/103/500/250" alt="A pair of sneakers in a park." />
                                    </SwiperSlide>
                                </figure>
                            </article>

                            <article class="card">
                                <figure>
                                    <SwiperSlide>
                                        <img src="https://picsum.photos/id/104/500/250" alt="A dreamcatcher." />
                                    </SwiperSlide>

                                </figure>
                            </article>

                            <article class="card">
                                <figure style={{ cssProperties }}>
                                    <SwiperSlide>
                                        <img src="https://picsum.photos/id/106/500/250" alt="Flowers under a blue sky." />
                                    </SwiperSlide>
                                </figure>
                            </article> */}

                {/* {currentRecipeAlbum && currentRecipeAlbum.map(el=>(
                                <article className="card">
                                    <figure style={{ cssProperties }}>
                                    <SwiperSlide>
                                            <img className="swiper-slide__img lazyload" src={el} alt="" />
                                    </SwiperSlide>
                                 </figure>
                                 </article>
                        ))}
                        </Swiper >
                         */}
                {/* </Swiper >
                    </div>
                </div> */}
            </div>
        </>
    )
}
export default PersonalProfile