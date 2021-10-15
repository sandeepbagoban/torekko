import React from 'react'
import { Slide } from 'react-slideshow-image'

import img1fr from './../../Illustration/homeSlide/bande-principale-1fr.jpg'
import img2fr from './../../Illustration/homeSlide/bande-principale-2fr.jpg'
import img3fr from './../../Illustration/homeSlide/bande-principale-3fr.jpg'
import img1en from './../../Illustration/homeSlide/bande-principale-1en.jpg'
import img2en from './../../Illustration/homeSlide/bande-principale-2en.jpg'
import img3en from './../../Illustration/homeSlide/bande-principale-3en.jpg'
import img1jp from './../../Illustration/homeSlide/bande-principale-1jp.jpg'
import img2jp from './../../Illustration/homeSlide/bande-principale-2jp.jpg'
import img3jp from './../../Illustration/homeSlide/bande-principale-3jp.jpg'

import i18 from 'i18next';

import 'react-slideshow-image/dist/styles.css'
import './Slide.css'

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows: true
}

function languageSelected() {
    if (i18.language == 'fr')
        return ([
            <img src={img1fr} alt="img1"/>,
            <img src={img2fr} alt="img2"/>,
            <img src={img3fr} alt="img3"/>
        ]);
    else if (i18.language == 'us' || i18.language == 'en')
        return ([
            <img src={img1en} alt="img1"/>,
            <img src={img2en} alt="img2"/>,
            <img src={img3en} alt="img3"/>
        ]);
    else if (i18.language == 'jp')
        return ([
            <img src={img1jp} alt="img1"/>,
            <img src={img2jp} alt="img2"/>,
            <img src={img3jp} alt="img3"/>
        ]);
    return ([
        <img src={img1en} alt="img1"/>,
        <img src={img2en} alt="img2"/>,
        <img src={img3en} alt="img3"/>
    ]);
}

const Slideshow = (mobile) => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                <div>
                    {languageSelected()[0]}
                </div>
                </div>
                <div className="each-slide">
                    <div>
                        {languageSelected()[1]}
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        {languageSelected()[2]}
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;