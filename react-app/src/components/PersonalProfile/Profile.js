import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom';
import Recipe from './recipe.js'
import SmallRecipe from './SmallRecipe.js'
import SmallPantry from './SmallPantry.js'
import FollowUser from '../FollowUser'
import backDrop from "./../../media/410197.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style/cssForCircles.css'
import './style/profile.css'
function Profile({ profile, followedUserId, users, recipes, ingredient, pantry }) {
    let history = useHistory()
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
    // const pantryName = []
    const { id } = useParams()
    const userId = useSelector(state => state.session.user?.id)
    const user = useSelector(state => state.session.user)
    const follows = useSelector(state => state.follows)

    const [pantryId, setPantryId] = useState()
    const [pantryName, setPantryName] = useState()

    if (pantry) {
        // console.log(pantry.id)
        for (let key in pantry) {
            if (pantry[key].userId == id) {
                // pantryName.push(pantry[key].name)
                if (!pantryId) setPantryId(key)
                if (!pantryName) setPantryName(pantry[key].name)

                userPantries.push(pantry[key])
                pantryImages.push(pantry[key].image)
                if (pantryImages) {
                    // console.log(pantryImages[0])
                    let str = pantryImages[0]
                    str = str.replace(/[{()}]/g, "")
                    let stringSplit = str.split(",")
                    for (let i = 0; i < 10; i++) {
                        imgArr.push(stringSplit[i])
                    }

                    // 'https://spoonacular.com/cdn/ingredients_500x500/beef-brisket.png,https://spoonacular.com/cdn/ingredients_500x500/sliced-carrot.png,https://spoonacular.com/cdn/ingredients_500x500/parsnip.jpg,https://spoonacular.com/cdn/ingredients_500x500/None,https://spoonacular.com/cdn/ingredients_500x500/garlic.png,https://spoonacular.com/cdn/ingredients_500x500/guinness.png,https://spoonacular.com/cdn/ingredients_500x500/beef-broth.png,https://spoonacular.com/cdn/ingredients_500x500/seasoning.png,https://spoonacular.com/cdn/ingredients_500x500/light-brown-sugar.jpg,https://spoonacular.com/cdn/ingredients_500x500/bay-leaves.jpg,https://spoonacular.com/cdn/ingredients_500x500/regular-mustard.jpg';
                    // let str = pantryImages[0]

                    // const regex = /,/g;
                    // for (let i = 0; i < 10; i++) {
                    //     const seek = str.search(regex)
                    //     imgArr.push(str.slice(0, seek + 1))
                    //     str = str.slice(seek + 1)
                    // }
                    // // for (let i = 0; i < 1; i++) {
                    // //     imgArr[0] = imgArr[0].slice(1)

                    // // }
                    // for (let i = 0; i < imgArr.length; i++) {
                    //     imgArr[i] = imgArr[i].slice(0, imgArr[i].length - 1)
                    // }
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
        for (let key in follows[id]) {
            followsList.push(follows[id][key])
        }
    }
    return (
        <>
            <div className="bodyDiv" style={{ backgroundImage: `url(${backDrop})`, zIndex: '-3' }}>
                {/* <div className="bodyDiv" > */}
                <h1 style={{ color: 'white' }}>{users[id].biography}</h1>

                {user.id != id &&
                    <FollowUser followedUserId={followedUserId} />
                }
                <div className="cirContainer">
                    <div className="centerCircle" style={{ backgroundImage: `url(${users[id].profilePicture})`, backgroundSize: "cover", backgroundPosition: "center center" }}>
                        {
                            followsList && followsList.map((el, idx) => {
                                return (
                                    <div className={`spinner ${capitalize(numWords(idx + 1))}`} style={{ cursor: 'pointer' }} >
                                        <img id="pictureCircle" src={el.profilePicture} alt={el.username} onClick={() => history.push(`/profile/${el.id}`)} />
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
                                            imgArr.map((items) => <SmallPantry pantryId={pantryId} pantryName={pantryName} pantry={items} recipes={recipes} users={users} />)
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