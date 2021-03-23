import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { recipeLike } from "../../Store/recipeLike";
import blank from '../../media/blank.png'
import full from '../../media/full.png'
import EditRecipeModal from "./EditRecipe.js"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { createRecipe, deleteRecipe } from '../../Store/recipes'


import './style/ModalRecipe.css'
import './style/addplus.scss'

export default function ModalRecipe({ recipes }) {
    const [tabIndex, setTabIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [photo, setPhoto] = useState('')
    let history = useHistory()

    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const { id } = useParams()
    const likeHandler = () => {
        const like = { userId: user.id, recipeId: recipes.id };
        setIsLiked(!isLiked);
        dispatch(recipeLike(like));
    };

    const likeCount = () => {
        if (recipes.likesUsers.length === 1) {
            return "PERSON ";
        } else {
            return "PEOPLE ";
        }
    };
    const removeRecipe = async (e) => {
        await dispatch(deleteRecipe(recipes.id));
    };
    useEffect(() => {
        if (recipes) {
            if (recipes.likesUsers.includes(user.id)) {
                setIsLiked(true);
            } else setIsLiked(false);
        }
    }, [setIsLiked, recipes, user]);

    const stealRecipe = async () => {
        let userId
        if (user) {
            userId = user.id
        }
        const description = recipes.description
        const instructions = recipes.instructions
        const type = recipes.type
        const name = recipes.name
        const imagePath = recipes.imagePath
        const date_created = recipes.date_created

        await dispatch(createRecipe({ userId, description, instructions, imagePath, type, name, date_created }));
        setShowModal(false)
        history.push(`/profile/${user.id}`);
    };


    return (
        <>
            <div className="modContainer">
                <div className="data">
                    <h2 className="headline">{recipes.name}</h2>
                    <img
                        className="like"
                        src={isLiked ? full : blank}
                        alt='like button'
                        onClick={() => likeHandler()}
                    />
                    <p className='likes-count'>
                        {recipes.likesUsers.length + " " + likeCount() + "LIKED THIS "}
                    </p>
                    <p className='createdAt'>Created {recipes.date_created}</p>

                </div>
                <Tabs className="modTab"
                    selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>

                    <TabList className="tabGrid" style={{ listStyleType: 'none' }}>

                        <Tab className="tabAlign10"><h2>Description</h2></Tab>
                        <Tab className="tabAlign10"><h2>Instructions</h2></Tab>
                        {/* <Tab className="tabAlign10"><h2>Steps</h2></Tab>
                        <Tab className="tabAlign10"><h2>Media</h2></Tab> */}

                    </TabList>

                    <TabPanel>
                        <div class="tabDivider">
                            <div className="tabContent">
                                <div className="left">
                                    <img src={recipes.imagePath} alt="recipe image" onClick={() => setShowModal(false)} />

                                </div>
                                <div className="right">
                                    <p style={{ textAlign: 'center' }}>Description</p>
                                    <p>{recipes.description}</p>
                                </div>
                                <div className="closeButton" onClick={() => setShowModal(false)}>
                                    <h2>Close Tab</h2>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div class="tabDivider">
                            <div className="tabContent">

                                <div className="left">
                                    <img src={recipes.imagePath} alt="recipe image" />
                                </div>
                                <div className="right">
                                    <p style={{ textAlign: 'center' }}>Instructions</p>
                                    <p>{recipes.instructions}</p>
                                </div>
                                <div className="closeButton" onClick={() => setShowModal(false)}>
                                    <h2>Close Tab</h2>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    {/* 
                    <TabPanel>
                        <div class="tabDivider">
                            <div className="tabContent">

                                <div className="left">
                                    <img src={recipes.imagePath} />
                                </div>
                                <div className="right">
                                    <p style={{ textAlign: 'center' }}>Steps</p>
                                    <p>{recipes.steps}</p>                                </div>
                            </div>

                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div class="tabDivider">
                            <div className="tabContent">

                                <div className="left">
                                    <img src={recipes.imagePath} />
                                </div>
                                <div className="right">
                                    {recipes.imagePath}
                                    {recipes.videoPath}
                                </div>

                            </div>
                        </div>
                    </TabPanel> */}

                    {user.id == id ?

                        <>< div className="exit" onClick={removeRecipe}>
                            <span class="left">
                                <span class="circle-left"></span>
                                <span class="circle-right"></span>
                            </span>
                            <span class="right">
                                <span class="circle-left"></span>
                                <span class="circle-right"></span>
                            </span>
                            <h4 style={{ position: 'absolute', margin: "10.3rem 0 0 0" }}>CUT RECIPE</h4>
                        </div>

                            <EditRecipeModal />
                        </>
                        :
                        <>
                            <div className="add" onClick={stealRecipe}>
                                <span class="left2">
                                    <span class="circle-left2"></span>
                                    <span class="circle-right2"></span>
                                </span>
                                <span class="right2">
                                    <span class="circle-left2"></span>
                                    <span class="circle-right2"></span>
                                </span>
                                <h4 style={{ position: 'absolute', margin: "10.3rem 0 0 1rem" }}>STEAL RECIPE</h4>
                            </div>

                        </>
                    }


                </Tabs>
            </div>

        </>
    );

}
