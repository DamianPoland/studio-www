import React from 'react'
import style from './Carousel.module.css'

/*
description => no library, only css
1. add array in props with imgs => must be props.array and in array => array.img
2. aspect ratio of image change in css in box: width and padding-top
3. if 6 photoos then translateX(100%) and in css in box: width and padding-top increase , 8 photos translateX(150%)
*/

const Carousel = props => {
    return (
        <div className={style.boxContainer}>
            <div className={style.box}>
                {props.array.map((item, index) => {
                    return (
                        <span style={{ transform: `rotateY(${index * (360 / props.array.length)}deg) rotateY(-90deg) translateX(150%) rotateY(90deg)` }} key={`${item.img}`} >
                            <img src={item.img} alt={`${item.text}`} />
                        </span>
                    )
                })}
            </div >
        </div>
    )
}

export default Carousel


