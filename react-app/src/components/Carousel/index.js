import React from 'react'
// https://swiperjs.com/react#installation
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './PCaro.css'

function PCaro() {

    // const swiper = new Swiper('.swiper-container', {
    //     speed: 400,
    //     spaceBetween: 100,
    // });
    // const swiper = document.querySelector('.swiper-container').swiper;
    // swiper.slideNext();
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    return (
        <div className="space">


            <Swiper
                className="pic-space"
                spaceBetween={25}
                slidesPerView={3}
                navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >

                <div className="grid">
                    <div className="swiper-container swiper-container-horizontal">
                        <div className="swiper-wrapper" style={{ transitionDuration: " 0ms", transform: "translate3d(-4017.03px, 0px, 0px)" }}>
                            <div className="confinement">
                                <SwiperSlide>
                                    <div className="swiper-slide swiper-slide--wide swiper-slide-duplicate" data-swiper-slide-index="0" style={{ marginRight: "0px" }}>
                                        <img className="swiper-slide__img lazyload" src="https://www.useyournoodles.eu/wp-content/uploads/how-to-take-the-perfect-action-shot-in-food-photograpy-3.jpg" alt="" />
                                    </div>
                                </SwiperSlide>


                                <SwiperSlide>
                                    <div className="swiper-slide swiper-slide--portrait swiper-slide-duplicate" data-swiper-slide-index="1" style={{ marginRight: "40px" }}>
                                        <img className="swiper-slide__img lazyload" src="https://www.useyournoodles.eu/wp-content/uploads/repetition_in_food_photography_symetrical_repetition-2-700x1050.jpg" alt="" />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="swiper-slide swiper-slide--wide swiper-slide-duplicate" data-swiper-slide-index="2" style={{ marginRight: "40px" }}>
                                        <img className="swiper-slide__img lazyload" src="https://www.useyournoodles.eu/wp-content/uploads/repetition_in_food_photography_symetrical_repetition-1-700x1050.jpg" alt="" />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="swiper-slide swiper-slide--portrait swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="3" style={{ marginRight: "40px" }}>
                                        <img className="swiper-slide__img lazyload" src="https://www.useyournoodles.eu/wp-content/uploads/repetition_in_food_photography_symetrical_repetition-4-700x1050.jpg" alt="" />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="swiper-slide swiper-slide--square swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="4" style={{ marginRight: "40px" }}>
                                        <img className="swiper-slide__img lazyloaded" src="https://www.useyournoodles.eu/wp-content/uploads/how-to-take-the-perfect-action-shot-in-food-photograpy.jpg" alt="" />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="swiper-slide swiper-slide--portrait swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="5" style={{ marginRight: "40px" }}>
                                        <img className="swiper-slide__img lazyloaded" src="https://www.useyournoodles.eu/wp-content/uploads/repetition_in_food_photography_symetrical_repetition-5-700x1050.jpg" alt="" />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="swiper-slide swiper-slide--wide" data-swiper-slide-index="6" style={{ marginRight: "40px" }}>
                                        <img className="swiper-slide__img lazyloaded" src="https://www.useyournoodles.eu/wp-content/uploads/how-to-take-the-perfect-action-shot-in-food-photograpy-1a.jpg" alt="" />
                                    </div>
                                </SwiperSlide>

                                <div className="swiper-slide swiper-slide--portrait" data-swiper-slide-index="7" style={{ marginRight: "40px" }}>
                                    <img className="swiper-slide__img lazyloaded" src="https://cdn.fstoppers.com/wp-content/uploads/2013/12/Action_Food_Styled_bread_pudding.jpg" alt="" />
                                </div>
                                <div className="swiper-slide swiper-slide--wide" data-swiper-slide-index="8" style={{ marginRight: "40px" }}>
                                    <img className="swiper-slide__img lazyloaded" src="https://zios.com/media/zios-lifestyle-shots-kitchen-fire.jpg" alt="" />
                                </div>

                                <div className="swiper-slide swiper-slide--portrait swiper-slide-prev" data-swiper-slide-index="9" style={{ marginRight: "40px" }}>
                                    <img className="swiper-slide__img lazyloaded" src="https://www.useyournoodles.eu/wp-content/uploads/repetition_in_food_photography_symetrical_repetition-4-700x1050.jpg" alt="" />
                                </div>


                                <div className="swiper-slide swiper-slide--square swiper-slide-active" data-swiper-slide-index="10" style={{ marginRight: "40px" }}>
                                    <img className="swiper-slide__img lazyloaded" src="https://www.useyournoodles.eu/wp-content/uploads/how-to-take-the-perfect-action-shot-in-food-photograpy.jpg" alt="" />
                                </div>


                                <div className="swiper-slide swiper-slide--portrait swiper-slide-next" data-swiper-slide-index="11" style={{ marginRight: "40px" }}>
                                    <img className="swiper-slide__img lazyloaded" src="https://tinyurl.com/4uzq7pdh" alt="" src="https://tinyurl.com/4uzq7pdh" />
                                </div>


                                <div className="swiper-slide swiper-slide--wide swiper-slide-duplicate" data-swiper-slide-index="12" style={{ marginRight: "40px" }}>
                                    <img className="swiper-slide__img lazyloaded" src="https://www.useyournoodles.eu/wp-content/uploads/how-to-take-the-perfect-action-shot-in-food-photograpy-3.jpg" alt="" />
                                </div>

                                <div className="swiper-slide swiper-slide--portrait swiper-slide-duplicate" data-swiper-slide-index="13" style={{ marginRight: "40px" }}>
                                    <img className="swiper-slide__img lazyloaded" src="https://cdn.fstoppers.com/wp-content/uploads/2013/12/Action_Food_Styled_bread_pudding.jpg" alt="" />
                                </div>

                                <div className="swiper-slide swiper-slide--wide swiper-slide-duplicate" data-swiper-slide-index="14" style={{ marginRight: "40px" }}>
                                    <img className="swiper-slide__img lazyload" src="https://zios.com/media/zios-lifestyle-shots-kitchen-fire.jpg" alt="" />
                                </div>

                                <div className="swiper-slide swiper-slide--portrait swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="15" style={{ marginRight: "40px" }}>
                                    <img className="swiper-slide__img lazyload" src="https://www.useyournoodles.eu/wp-content/uploads/repetition_in_food_photography_symetrical_repetition-4-700x1050.jpg" alt="" />
                                </div>

                                <div className="swiper-slide swiper-slide--square swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="16" style={{ marginRight: "40px" }}>
                                    <img className="swiper-slide__img lazyload" src="https://www.useyournoodles.eu/wp-content/uploads/how-to-take-the-perfect-action-shot-in-food-photograpy.jpg" alt="" />
                                </div>

                                <div className="swiper-slide swiper-slide--portrait swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="17" style={{ marginRight: "40px" }}>
                                    <img className="swiper-slide__img lazyload" src="https://tinyurl.com/4uzq7pdh" alt="" />
                                </div>
                            </div>


                            <div className="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide"></div>
                            <div className="swiper-button-next" tabindex="0" role="button" aria-label="Next slide"></div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div >
                    </div>
                </div >
            </Swiper >
        </div>
    )
}
export default PCaro