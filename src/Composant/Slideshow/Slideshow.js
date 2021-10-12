import React from 'react'
import { Slide } from 'react-slideshow-image'

import img1fr from '../../Illustration/homeSlide/bande-principale-1fr.jpg'
import img2fr from '../../Illustration/homeSlide/bande-principale-2fr.jpg'
import img3fr from '../../Illustration/homeSlide/bande-principale-1fr.jpg'

import img1en from '../../Illustration/homeSlide/bande-principale-1en.jpg'
import img2en from '../../Illustration/homeSlide/bande-principale-2en.jpg'
import img3en from '../../Illustration/homeSlide/bande-principale-1en.jpg'

import img1jp from '../../Illustration/homeSlide/bande-principale-1jp.jpg'
import img2jp from '../../Illustration/homeSlide/bande-principale-2jp.jpg'
import img3jp from '../../Illustration/homeSlide/bande-principale-1jp.jpg'


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
    console.log(i18.language)
    if(i18.language == "fr"){
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
    if(i18.language == "us"){
        return (
            <div className="containerSlide">
                <Slide {...proprietes}>
                    <div className="each-slide">
                        <div>
                            <img src={img1en} alt="img1" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <img src={img2en} alt="img2" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <img src={img3en} alt="img3" />
                        </div>
                    </div>
                </Slide>
            </div>
        )
    }
    else{
        return (
            <div className="containerSlide">
                <Slide {...proprietes}>
                    <div className="each-slide">
                        <div>
                            <img src={img1jp} alt="img1" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <img src={img2jp} alt="img2" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <img src={img3jp} alt="img3" />
                        </div>
                    </div>
                </Slide>
            </div>
        )
    }
    
}

export default Slideshow;