import React from 'react'
import { Slide } from 'react-slideshow-image'

import img1fr from '../../Illustration/homeSlide/bande-principale-1fr.jpg'
import img2fr from '../../Illustration/homeSlide/bande-principale-2fr.jpg'
import img3fr from '../../Illustration/homeSlide/bande-principale-1fr.jpg'


import i18 from 'i18next';

import 'react-slideshow-image/dist/styles.css'
import './Slide.css'

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows: true
}


const Slideshow = (mobile) => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={img1fr} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2fr} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3fr} alt="img3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;