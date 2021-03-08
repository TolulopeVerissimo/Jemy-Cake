import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom';
import Recipe from './recipe.js'
import FollowUser from '../FollowUser'
import backDrop from "./../../media/410197.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// https://codepen.io/Lakston/pen/JgEpog?editors=1100
import image from "./../../media/poke.jpg"
import './cssForCircles.css'
import './profile.css'

function Profile({ authenticated, user, profile, users, recipes, ingredient, pantry }) {

    const numWords = require('num-words')
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const [tabIndex, setTabIndex] = useState(0);
    const followsList = []
    const userRecipes = []

    const { id } = useParams()
    // const recipes = useSelector(state => state.recipes)

    if (recipes) {
        for (let key in recipes) {
            if (recipes[key].userId == id) {
                userRecipes.push(recipes[key])
            }
        }
    }
    if (recipes) {
        for (let key in recipes) {
            if (recipes[key].userId == id) {
                userRecipes.push(recipes[key])
            }
        }
    }

    return (
        <>

            {/* <div className="bodyDiv" style={{ backgroundImage: `url(${backDrop})` }}> */}
            <div className="bodyDiv" >

                <h1 style={{ color: 'white' }}>{user.biography}</h1>


                {/* {user.id != profile.id && < div className="moveTheFollowButton">
                    <FollowUser followedUserId={followedUserId} />
                </div>} */}


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
                <div className="recipeTabs">
                    <Tabs
                        selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                        <TabList className="tabGrid" style={{ listStyleType: 'none' }}>
                            <Tab><h2>Pantry</h2></Tab>
                            <Tab className="tabAlign1"><h2>Recipes</h2></Tab>
                            <Tab className="tabAlign2"><h2>What Can I Make</h2></Tab>
                        </TabList>

                        <TabPanel>
                            <h2>TAB 1 CONTENT</h2>
                        </TabPanel>

                        <TabPanel>
                            <div className="gridContainer">
                                {/* {userRecipes &&
                                    userRecipes.map((post) => <SmallPost post={post} user={user} />)
                                } */}
                                {userRecipes &&
                                    userRecipes.map((post) => {
                                        return (
                                            <img src={post.imagePath} key={post.id} alt="ig post" />
                                        )
                                    })
                                }
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <h2>TAB 3 CONTENT</h2>
                        </TabPanel>

                    </Tabs>


                </div>

                <div className="EllipseDrawer">
                    <Recipe recipes={recipes} ingredient={ingredient} pantry={pantry} followedUserId={id} />
                </div>


            </div>

        </>
    )
}
export default Profile