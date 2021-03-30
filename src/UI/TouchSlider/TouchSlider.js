import React from 'react'
import './TouchSlider.css' // change classes eg pagination color



// Swiper
import SwiperCore, { EffectCoverflow, Navigation, Pagination, EffectCube, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

// Import Swiper modules
import 'swiper/components/navigation/navigation.scss'// navigations => arrows
import 'swiper/components/pagination/pagination.scss'// paginations => bottom dots
import 'swiper/components/effect-coverflow/effect-coverflow.scss'// effect coverflow
import 'swiper/components/effect-cube/effect-cube.scss'// effect cube



// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectCoverflow, EffectCube, Autoplay]);


/* Description:
1. npm i swiper
2. npm install node-sass => must reload npm start
3. import { Swiper, SwiperSlide } from 'swiper/react'; import 'swiper/swiper.scss';
4. in props push itemsArray with all slides
*/

const TouchSlider = props => {
    return (
        <Swiper
            style={{ padding: "2rem 0 2rem 0" }}

            speed={1000}
            autoplay={{ delay: 2000 }}

            // effect="coverflow" // cube or coverflow

            spaceBetween={32} // margin

            slidesPerView={1}
            breakpoints={{
                500: { slidesPerView: 2, }, // when window width is >= 500px
                800: { slidesPerView: 3, }, // when window width is >= 800px
            }}

            loop={true}

            navigation
            pagination={{ clickable: true }}

        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {props.itemsArray.map((item, index) =>

                // slider item
                <SwiperSlide key={index} onClick={() => "console.log(item)"}>
                    <a href={item.props.href} className="swiper-slider-ontainer-custom" target="_blank" rel="noopener noreferrer">
                        {item}
                    </a>
                </SwiperSlide>)}

        </Swiper>
    )
}

export default TouchSlider
