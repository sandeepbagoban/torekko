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
    { id: 4, text: t('navigation.staking'), link: "/Staking" },
    { id: 5, text: t('navigation.marketPlace'), link: "/MarketPlace" },
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