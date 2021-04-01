import React from 'react'
import './TouchSlider.css' // change classes eg pagination color



// Swiper
import SwiperCore, { EffectCoverflow, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

// Import Swiper modules
import 'swiper/components/navigation/navigation.scss'// navigations => arrows
import 'swiper/components/effect-coverflow/effect-coverflow.scss'// effect coverflow

// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation, Autoplay]);


/* Description:
1. npm i swiper
2. npm install node-sass => must reload npm start
3. import { Swiper, SwiperSlide } from 'swiper/react'; import 'swiper/swiper.scss';
4. in props push itemsArray with all slides
*/

const TouchSlider = props => {
    return (
        <Swiper
            style={{ padding: "2rem 0 3rem 0" }}

            effect="coverflow" // cube or coverflow

            speed={1000}
            autoplay={{ delay: 2000 }}

            // effect="coverflow" // cube or coverflow

            spaceBetween={8} // margin

            slidesPerView={3}
            // breakpoints={{
            //     1000: { slidesPerView: 5, },
            //     1920: { slidesPerView: 7, },
            // }}

            loop={true}

        // navigation

        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {props.itemsArray.map((item, index) =>

                // slider item
                <SwiperSlide key={index} onClick={() => "console.log(item)"}>
                    <div className="swiper-slider-ontainer-custom">
                        {item}
                    </div>
                </SwiperSlide>)}

        </Swiper>
    )
}

export default TouchSlider
