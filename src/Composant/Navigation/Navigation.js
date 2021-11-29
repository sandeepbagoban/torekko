import React, { useState, Link } from 'react'

import ReactCountryFlag from "react-country-flag"
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";

import i18next from 'i18next';
import { useTranslation } from 'react-i18next'
import useScrollPosition from '@react-hook/window-scroll'

import './Navigation.css'


const Navigation = () => {

  //Module de traduction
  const { t, i18n } = useTranslation();



  //Element de la bar de menu
  const MenuValues = [
    { id: 1, text: t('navigation.discover-torekko'), link: "#discover" },
    { id: 2, text: t('navigation.attribut'), link: "#attribut" },
    { id: 3, text: t('navigation.booster-drop'), link: "#booster-drop" },
    { id: 4, text: t('navigation.roadmap'), link: "#roadmap" },
    { id: 5, text: t('navigation.investor'), link: "#investor" },
  ];

  //Afficher la class active sur le menu
  const [activeId, setActiveId] = useState();
  const scrollY = useScrollPosition(60 /*fps*/)



  return (
    <nav class={scrollY === 0 ? "navigation navbar navbar-expand-md w-100" : "navigation navbar navbar-expand-md w-100 navScroll"}>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
          <a className="nav-link" href="#"><img className="logo" src={require('../../Illustration/logo-torreko.png').default} alt="logo" /></a>
        </ul>
      </div>
      <div class="mx-auto order-0 navbar-collapse collapse dual-collapse2">
        <ul class="navbar-nav mr-auto">
          {MenuValues.map((val) => (
            <li className={activeId === val.id ? " nav-item" : "nav-item"} onClick={() => setActiveId(val.id)}>
              <a href={val.link} id={val.link} className="navbar-link nav-link text-nowrap">{val.text}</a>
            </li>
          ))}

          <li className="nav-item">
            <a href="https://vesting.torekko.com/" className="navbar-link nav-link text-nowrap">
              Vesting
            </a>
          </li>
          <li className="nav-item">
            <a href="https://medium.com/@torekko" className="animated" target="_blank">
              <span className="span1">M</span>
              <span className="span2">e</span>
              <span className="span3">d</span>
              <span className="span4">i</span>
              <span className="span5">u</span>
              <span className="span6">m</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto flags-icons text-nowrap">
          <li class="nav-item">
            <ReactCountryFlag
              className="flag-icon"
              countryCode="FR"
              aria-label="France"
              onClick={() => i18next.changeLanguage('fr')}
            />
          </li>
          <li class="nav-item">
            <ReactCountryFlag
              className="flag-icon"
              countryCode="US"
              aria-label="United States"
              onClick={() => i18next.changeLanguage('us')}
            />
          </li>
          <li class="nav-item">
            <ReactCountryFlag
              className="flag-icon"
              countryCode="JP"
              aria-label="Japan"
              onClick={() => i18next.changeLanguage('jp')}
            />
          </li>
        </ul>
      </div>
    </nav>
  )
}




export default Navigation;