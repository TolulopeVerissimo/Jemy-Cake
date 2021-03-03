import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

import Combo from './Combination.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import backDrop from "./../../media/410197.jpg"
// https://codepen.io/Lakston/pen/JgEpog?editors=1100
import image from "./../../media/poke.jpg"

import './cssForCircles.css'
import './photoRecipeGrid.css'
import './recipeBox.css'
// http://jsfiddle.net/5w3bE/107/

function PersonalProfile(props) {


    SwiperCore.use([Navigation])
    let cssProperties = {}
    cssProperties['--image'] = 'linearGradient(90deg, #aa90%, #dd930%, #99a70%, #dd990%, #a99100%)'

    return (
        <>
            {/* <div className="bodyDiv" style={{ backgroundImage: `url(${backDrop})` }}> */}
            <div className="bodyDiv" >

                <div className="RecipeBox">
                    <Combo />
                </div>

                <div className="cirContainer" >
                    <div className="centerCircle" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center center" }}>
                        <div className="spinner One" style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/220px-Pok%C3%A9mon_Pikachu_art.png')`, backgroundSize: "cover", backgroundPosition: "center center" }}><button onClick={() => <Redirect to="/" />} /></div>
                        <div className="spinner Two" style={{ backgroundImage: `url('https://assets.pokemon.com//assets/cms2/img/video-games/_tiles/pokemon-sword-shield/distributions/pikachu/inline/world.png')`, backgroundSize: "cover", backgroundPosition: "center center" }}><button onClick={() => <Redirect to="/" />} /></div>
                        <div className="spinner Three" style={{ backgroundImage: `url('https://cdn.bulbagarden.net/upload/thumb/4/49/Ash_Pikachu.png/1200px-Ash_Pikachu.png')`, backgroundSize: "cover", backgroundPosition: "center center" }}><button onClick={() => <Redirect to="/" />} /></div>
                        <div className="spinner Four" style={{ backgroundImage: `url('https://media.gamestop.com/i/gamestop/11100921/Pokemon-Pikachu-Plush-24-in?$pdp$')`, backgroundSize: "cover", backgroundPosition: "center center" }}><button onClick={() => <Redirect to="/" />} /></div>
                        <div className="spinner Five" style={{ backgroundImage: `url('https://www.whats-on-netflix.com/wp-content/uploads/2019/05/Pokemon-Detective-Pikachu-Netflix.jpg')`, backgroundSize: "cover", backgroundPosition: "center center" }}><button onClick={() => <Redirect to="/" />} /></div>
                    </div>
                </div>

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
                                --image for reflection
                         {/* <figure style={{--image: "url(https://picsum.photos/id/106/500/250)"}}> */}
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
                                --image for reflection
                         {/* <figure style={{--image: "url(https://picsum.photos/id/106/500/250)"}}> */}
                                <figure style={{ cssProperties }}>
                                    <SwiperSlide>
                                        <img src="https://picsum.photos/id/106/500/250" alt="Flowers under a blue sky." />
                                    </SwiperSlide>
                                </figure>
                            </article>

                            {/* {currentRecipeAlbum && currentRecipeAlbum.map(el=>(
                                <article className="card">
                                    <figure style={{ cssProperties }}>
                                    <SwiperSlide>
                                            <img className="swiper-slide__img lazyload" src={el} alt="" />
                                    </SwiperSlide>
                                 </figure>
                                 </article>
                        ))} */}
                        </Swiper >
                    </div>
                </div>
            </div>
        </>
    )
}
export default PersonalProfile