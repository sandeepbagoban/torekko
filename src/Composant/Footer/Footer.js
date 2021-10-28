import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import mainLogo from '../../Illustration/logo-torreko.png'
import Discord from '../../Illustration/Icon/discorde.png'
import Telegram from '../../Illustration/Icon/telegram.png'
import Linkedin from '../../Illustration/Icon/linkedin.png'
import Instagram from '../../Illustration/Icon/instagram.png'
import Twitter from '../../Illustration/Icon/twitter.png'
import './Footer.css'

import { Trans, useTranslation } from 'react-i18next'




function Footer() {

    const { t, i18n } = useTranslation()


    return (
        <footer class="footer">
            <div class="footer__addr">
                <h1 class="footer__logo">TOREKKO</h1>

                <h2>Contact</h2>

                <address>
                    <a class="footer__btn" href="mailto:email@torekko.com">email@torekko.com</a>
                </address>


                <div class='square-box'>
                    <div class='square-content'>
                        <a className="socialmedia" href="https://t.me/torekkoann" target="_blank"><img className="socialmedia_logo" src={Telegram} alt="Telegram" />
                            <h5 class="socialmedia_text" href="https://t.me/torekkoann" target="_blank">Join our community !</h5>
                        </a>
                    </div>
                </div>

                


            </div>

            {/* <ul class="footer__nav">
        <li class="nav__item">
        <h2 class="nav__title"><Trans>footer.project</Trans></h2>

        <ul class="nav__ul">
            <li>
            <a href="https://www.google.com"><Trans>footer.project.presentation</Trans></a>
            </li>

            <li>
            <a href="#"><Trans>footer.project.whitepaper</Trans></a>
            </li>
                
            <li>
            <a href="#"><Trans>footer.project.pitchdeck</Trans></a>
            </li>
        </ul>
        </li>
        
        <li class="nav__item">
        <h2 class="nav__title"><Trans>footer.assets</Trans></h2>

        <ul class="nav__ul">
            <li>
            <a href="#"><Trans>footer.assets.roadmap</Trans></a>
            </li>

            <li>
            <a href="#"><Trans>footer.assets.team</Trans></a>
            </li>
                
            <li>
            <a href="#"><Trans>footer.assets.team</Trans></a>
            </li>
        </ul>
        </li>

        <li class="nav__item">
        <h2 class="nav__title"><Trans>footer.aboutus</Trans></h2>

        <ul class="nav__ul">
            <li>
            <a href="#"><Trans>footer.aboutus.partners</Trans></a>
            </li>

            <li>
            <a href="#"><Trans>footer.aboutus.beneficiaries</Trans></a>
            </li>
                
            <li>
            <a href="#"><Trans>footer.aboutus.contactus</Trans></a>
            </li>
        </ul>
        </li>
        
        
    </ul> */}

            <div class="legal">
                <p>&copy; 2021 TOREKKO. All rights reserved.</p>

                <div class="legal__links">
                    <a href="#">CGV - Mentions légales</a>
                </div>
            </div>
        </footer >
    )
}

export default Footer;