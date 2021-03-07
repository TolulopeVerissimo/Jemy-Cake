import React, { useState, useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import Recipe from './recipe.js'
import FollowUser from '../FollowUser'
import backDrop from "./../../media/410197.jpg"
// https://codepen.io/Lakston/pen/JgEpog?editors=1100
import image from "./../../media/poke.jpg"


function Profile({ user, users, followedUserId, recipe, ingredient }) {

    const numWords = require('num-words')
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    const followsList = []
    return (
        <>

            {/* <div className="bodyDiv" style={{ backgroundImage: `url(${backDrop})` }}> */}
            <div className="bodyDiv" >

                <h1 style={{ color: 'white' }}>{user.biography}</h1>


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
                            followsList && followsList.map((el, idx) => {
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
                <div className="EllipseDrawer">
                    <Recipe recipe={recipe} followedUserId={followedUserId} />
                </div>


            </div>

        </>
    )
}
export default Profile