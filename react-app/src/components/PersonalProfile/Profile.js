import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom';
import Recipe from './recipe.js'
import SmallRecipe from './SmallRecipe.js'
import SmallPantry from './SmallPantry.js'
import FollowUser from '../FollowUser'
import backDrop from "./../../media/410197.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// https://codepen.io/Lakston/pen/JgEpog?editors=1100
import image from "./../../media/poke.jpg"
import './style/cssForCircles.css'
import './style/profile.css'
function Profile({ profile, followedUserId, users, recipes, ingredient, pantry }) {

    const numWords = require('num-words')
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    const [tabIndex, setTabIndex] = useState(0);
    const followsList = []
    const userRecipes = []
    const userPantries = []
    const pantryImages = []
    let imgArr = []
    const pantryName = []
    const { id } = useParams()
    const user = useSelector(state => state.session.user)
    const follows = useSelector(state => state.follows)

    if (pantry) {
        for (let key in pantry) {
            if (pantry[key].userId == id) {
                pantryName.push(pantry[key].name)
                userPantries.push(pantry[key])
                pantryImages.push(pantry[key].image)


                if (pantryImages) {
                    // 'https://spoonacular.com/cdn/ingredients_500x500/beef-brisket.png,https://spoonacular.com/cdn/ingredients_500x500/sliced-carrot.png,https://spoonacular.com/cdn/ingredients_500x500/parsnip.jpg,https://spoonacular.com/cdn/ingredients_500x500/None,https://spoonacular.com/cdn/ingredients_500x500/garlic.png,https://spoonacular.com/cdn/ingredients_500x500/guinness.png,https://spoonacular.com/cdn/ingredients_500x500/beef-broth.png,https://spoonacular.com/cdn/ingredients_500x500/seasoning.png,https://spoonacular.com/cdn/ingredients_500x500/light-brown-sugar.jpg,https://spoonacular.com/cdn/ingredients_500x500/bay-leaves.jpg,https://spoonacular.com/cdn/ingredients_500x500/regular-mustard.jpg';
                    let str = pantryImages[0]
                    const regex = /,/g;
                    for (let i = 0; i < 10; i++) {
                        const seek = str.search(regex)
                        imgArr.push(str.slice(0, seek + 1))
                        str = str.slice(seek + 1)
                    }
                    for (let i = 0; i < 1; i++) {
                        imgArr[0] = imgArr[0].slice(1)

                    }
                    for (let i = 0; i < imgArr.length; i++) {
                        imgArr[i] = imgArr[i].slice(0, imgArr[i].length - 1)
                    }
                }

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

    if (follows) {
        for (let key in follows) {

            if (follows[key].userId == id) {
                console.log(follows[key])

                // for (let [k, v] of Object.entries(followsList[key]) 
                //     console.log(v)

                followsList.push(follows[key])
            }
        }
    }

    return (
        <>
            {/* <div className="bodyDiv" style={{ backgroundImage: `url(${backDrop})` }}> */}


            < div className="bodyDiv" >

                <h1 style={{ color: 'white' }}>{users[id].biography}</h1>


                {user.id != id &&
                    <FollowUser followedUserId={followedUserId} />
                }


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

                    <div className="centerCircle" style={{ backgroundImage: `url(${users[id].profilePicture})`, backgroundSize: "cover", backgroundPosition: "center center" }}>
                        {
                            followsList && followsList.map((el, idx) => {
                                return (
                                    // <div className=`spinner ${idx}` > <img id="pictureCircle" src={el.ProfilePicture}>
                                    <div className={`spinner ${capitalize(numWords(idx + 1))}`} >
                                        <img id="pictureCircle" src={el.ProfilePicture} alt={el.username} />
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
                            <Tab className="tabAlign1"><h2>Recipes</h2></Tab>
                            {user.id == id &&
                                <>
                                    <Tab><h2>Pantry</h2></Tab>
                                    <Tab className="tabAlign2"><h2>What Can I Make</h2></Tab>
                                </>
                            }
                        </TabList>

                        <TabPanel className="tabcontent">
                            <div className="gridContainer">
                                {userRecipes &&
                                    userRecipes.map((recipes) => <SmallRecipe recipes={recipes} users={users} />)
                                }
                            </div>
                        </TabPanel>
                        {user.id == id &&
                            <>
                                <TabPanel className="tabcontent">
                                    <div className="gridContainer2">
                                        {imgArr &&
                                            imgArr.map((items) => <SmallPantry pantryName={pantryName} pantry={items} recipes={recipes} users={users} />)
                                        }
                                    </div>
                                </TabPanel>

                                <TabPanel className="tabcontent">
                                    <h2>TAB 3 CONTENT</h2>
                                </TabPanel>
                            </>}
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