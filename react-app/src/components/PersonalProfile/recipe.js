import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { recipeLike } from "../../Store/recipeLike";

// if (recipes) {
// 	for (let key in recipes) {
// 		if (recipes[key].userId == id) {
// 			userRecipes.push(recipes[key])
// 		}
// 	}
const recipesList = []
SwiperCore.use([Navigation])



function Recipe({ recipe, user }) {

    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();

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

    useEffect(() => {
        if (recipe) {
            if (recipe.likesUsers.includes(user.id)) {
                setIsLiked(true);
            } else setIsLiked(false);
        }
    })
    return (
        <>
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

        </>
    )
}
export default Recipe