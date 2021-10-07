/*import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import mainLogo from '../../Illustration/logo-torreko.png'
import './Navigation.css'
import { slide as Menu } from 'react-burger-menu'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import useScrollPosition from '@react-hook/window-scroll'

import Flags from 'country-flag-icons/react/3x2'

import BurgerMenu from "./BurgerMenu";
import Hamburger from 'hamburger-react'

import i18next from 'i18next';
import { Trans, useTranslation } from 'react-i18next'





const Navigation = () => {


  var { height, width } = useWindowDimensions();
  const [isOpen, setOpen] = useState(false)
  
  function showSettings (event) {
    event.preventDefault();

  }
  const scrollY = useScrollPosition(60)
  //var classNameBurger = 'menu-plateform-mobile';

  const [classNameBurger, setclassNameBurger] = useState('menu-plateform-mobile');
  const { t, i18n } = useTranslation()


  
  
      if(width > 810){
        if(scrollY <= 0){
          return(
          <div className="Navigation">
            <div style={{right:'30px',position:'absolute',zIndex:'1000'}}>
              <Flags.FR title="Francais" className="flag-fr flags" onClick={()=>i18next.changeLanguage('fr')}/>
              <Flags.JP title="日本語" className="flag-jp flags"/>
              <Flags.GB title="English" className="flag-gb flags" onClick={()=>i18next.changeLanguage('en')}/>
            </div>
            <nav>
                  <img className="logo" src={mainLogo} alt="Logo" />
                  <div className="menu-plateform">
                    <ul className="liste">
                      <a href="/"><li className="items"><Trans>navigation.home</Trans></li></a>
                      <a href="/BuyBooster"><li className="items"><Trans>navigation.buyBooster</Trans></li></a>
                      <a href="/Mycollection"><li className="items"><Trans>navigation.myCollection</Trans></li></a>
                      <a href="/Staking"><li className="items"><Trans>navigation.staking</Trans></li></a>
                      <a href="/MarketPlace"><li className="items"><Trans>navigation.marketPlace</Trans></li></a>
                      <a href="/Drop"><li className="items"><Trans>navigation.drop</Trans></li></a>
                      <li className="items"><Trans>navigation.blog</Trans></li>
                    </ul>
                  </div>
            </nav>
          </div>
          )}
        else{
          return(
            <div className="Navigation">
              <div style={{right:'30px',position:'absolute',zIndex:'1000',marginTop:'10px'}}>
              <Flags.FR title="Francais" className="flag-fr flags" onClick={()=>i18next.changeLanguage('fr')}/>
              <Flags.JP title="日本語" className="flag-jp flags"/>
              <Flags.GB title="English" className="flag-gb flags" onClick={()=>i18next.changeLanguage('en')}/>
            </div>
              <nav>
                    <img className="logo-resize" src={mainLogo} alt="Logo" />
                    <div className="menu-plateform-resize">
                      <ul className="liste-resize">
                      <a href="/"><li className="items"><Trans>navigation.home</Trans></li></a>
                      <a href="/BuyBooster"><li className="items"><Trans>navigation.buyBooster</Trans></li></a>
                      <a href="/Mycollection"><li className="items"><Trans>navigation.myCollection</Trans></li></a>
                      <a href="/Staking"><li className="items"><Trans>navigation.staking</Trans></li></a>
                      <a href="/MarketPlace"><li className="items"><Trans>navigation.marketPlace</Trans></li></a>
                      <a href="/Drop"><li className="items"><Trans>navigation.drop</Trans></li></a>
                      <li className="items"><Trans>navigation.blog</Trans></li>
                      </ul>
                    </div>
              </nav>
            </div>
            )}
        
      }
        else{
          if (scrollY <= 0) {
            return(
              <div class="sticky-thc">
                <div className="humberger">
                  <Hamburger onToggle={toggled => {
                    if (toggled) {
                      setclassNameBurger('menu-plateform-mobile-down')
                      document.body.classList.add('fixed');
                      //classNameBurger = 'menu-plateform-mobile';
                      
                    } else {
                      setclassNameBurger('menu-plateform-mobile')
                      document.body.classList.remove('fixed');
                      //classNameBurger = 'menu-plateform-mobile-down';
                    }
                }} />
                </div>
                <img className="logo" src={mainLogo} alt="Logo" />
                <nav>
                    <div className={classNameBurger}>
                      <ul className="liste-resize-mobile">
                      <a href="/"><li className="items"><Trans>navigation.home</Trans></li></a>
                      <a href="/BuyBooster"><li className="items"><Trans>navigation.buyBooster</Trans></li></a>
                      <a href="/Mycollection"><li className="items"><Trans>navigation.myCollection</Trans></li></a>
                      <a href="/Staking"><li className="items"><Trans>navigation.staking</Trans></li></a>
                      <a href="/MarketPlace"><li className="items"><Trans>navigation.marketPlace</Trans></li></a>
                      <a href="/Drop"><li className="items"><Trans>navigation.drop</Trans></li></a>
                      <li className="items"><Trans>navigation.blog</Trans></li>
                        <li className="items">Blog</li>
                        <div style={{marginLeft:'-35px'}}>
                        <a href="/"><Flags.FR title="Francais" className="flag-fr flags"/></a>
                        <a href="/jp/"><Flags.JP title="日本語" className="flag-jp flags"/></a>
                        <a href="/en/"><Flags.GB title="English" className="flag-gb flags"/></a>
                        </div>
                      </ul>
                    </div>
              </nav>
                </div>
            )
          }
          else{
            return(
              <div class="sticky-thc-resize">
                <nav>
                  <div className="humberger">
                    <Hamburger onToggle={toggled => {
                      if (toggled) {
                        setclassNameBurger('menu-plateform-mobile-down')
                        document.body.classList.add('fixed');
                        //setclassNameFixed('fixed')
                        //classNameBurger = 'menu-plateform-mobile';
                        
                      } else {
                        setclassNameBurger('menu-plateform-mobile')
                        document.body.classList.remove('fixed');
                        //setclassNameFixed('')
                        //classNameBurger = 'menu-plateform-mobile-down';
                      }
                    }} />
                  </div>

                    <img className="logo-resize" src={mainLogo} alt="Logo" />
                    <div className={classNameBurger}>
                      <ul className="liste-resize-mobile">
                      <a href="/"><li className="items"><Trans>navigation.home</Trans></li></a>
                      <a href="/BuyBooster"><li className="items"><Trans>navigation.buyBooster</Trans></li></a>
                      <a href="/Mycollection"><li className="items"><Trans>navigation.myCollection</Trans></li></a>
                      <a href="/Staking"><li className="items"><Trans>navigation.staking</Trans></li></a>
                      <a href="/MarketPlace"><li className="items"><Trans>navigation.marketPlace</Trans></li></a>
                      <a href="/Drop"><li className="items"><Trans>navigation.drop</Trans></li></a>
                      <li className="items"><Trans>navigation.blog</Trans></li>
                        <li className="items">Blog</li>
                        <div style={{marginLeft:'-20px',marginTop:'20px'}}>
                        <a href="/"><Flags.FR title="Francais" className="flag-fr flags"/></a>
                        <a href="/jp/"><Flags.JP title="日本語" className="flag-jp flags"/></a>
                        <a href="/en/"><Flags.GB title="English" className="flag-gb flags"/></a>
                        </div>
                      </ul>
                    </div>
              </nav>
              </div>
            )    
          }
          
        }

}

export default Navigation;*/





import React, {useState} from 'react'

import ReactCountryFlag from "react-country-flag"
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";

import i18next from 'i18next';
import { useTranslation } from 'react-i18next'

import Logo from '../../Illustration/logo-torreko.png'

import './Navigation.css'







const Navigation = () => {

  //Module de traduction
  const { t, i18n } = useTranslation();

  //Element de la bar de menu
  const MenuValues = [
    { id: 1, text: t('navigation.home'), link: "/" },
    { id: 2, text: t('navigation.buyBooster'), link: "/BuyBooster" },
    { id: 3, text: t('navigation.myCollection'), link: "/MyCollection" },
    //{ id: 4, text: t('navigation.staking'), link: "/Staking" },
    //{ id: 5, text: t('navigation.marketPlace'), link: "/MarketPlace" },
    { id: 6, text: t('navigation.drop'), link: "/Drop" },
    { id: 7, text: t('navigation.blog'), link: "/Blog" }
    
  ];

  //Afficher la class active sur le menu
  const [activeId, setActiveId] = useState();



  return(
    <section className="ftco-section navigation sticky">		
      <div className="container">
        <div className="row justify-content-end">
          <div className="col">
            <a className="navbar-brand" href="/home"><img className="navbarbrand" src={Logo} alt="Torekko-logo"/></a>
          </div>
        </div>
        
      </div>
      <nav className="navbar navbar-expand-lg navbar-light" id="ftco-navbar">
        <div className="container-fluid">
        
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fa fa-bars"></span><GiHamburgerMenu/>
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
          <div className="container">
            <div className="row justify-content-end">
            <div className="col-md-4 center-block">
              <ul className="navbar-nav d-flex justify-content-center liste-menu">
                {MenuValues.map((val) => (
                  <li className={activeId === val.id ? "active font-weight-bold nav-item" : "nav-item"} onClick={() => setActiveId(val.id)}>
                    <a href={val.link} className="nav-link text-nowrap">{val.text}</a>
                  </li>
                ))}
              </ul>
              </div>
              <div className="col-md-4 flags-icons">
                <ReactCountryFlag
                  className="flag-icon"
                  countryCode="FR"
                  aria-label="France"
                  onClick={()=>i18next.changeLanguage('fr')}
                />
                <ReactCountryFlag
                  className="flag-icon"
                  countryCode="US"
                  aria-label="United States"
                  onClick={()=>i18next.changeLanguage('us')}
                />
                <ReactCountryFlag
                  className="flag-icon"
                  countryCode="JP"
                  aria-label="Japan"
                  onClick={()=>i18next.changeLanguage('jp')}
                />
            
              </div>

            </div>
            </div>
            
          </div>
        </div>
      </nav>
	</section>

  )   
}
          



export default Navigation;