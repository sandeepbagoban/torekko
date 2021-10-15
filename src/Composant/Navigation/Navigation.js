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
    { id: 2, text: t('navigation.buyBooster'), link: "/" },
    { id: 3, text: t('navigation.myCollection'), link: "/" },
    { id: 4, text: t('navigation.staking'), link: "/" },
    { id: 5, text: t('navigation.marketPlace'), link: "/" },
    { id: 6, text: t('navigation.drop'), link: "/" },
    //{ id: 7, text: t('navigation.blog'), link: "/Blog" }
    
  ];

  //Afficher la class active sur le menu
  const [activeId, setActiveId] = useState();



  return(
    
      <section className="ftco-section navigation sticky">		
      <div className="container">
        <div className="row justify-content-end">
          <div className="col">
            <a className="navbar-brand"><img className="navbarbrand" src={Logo} alt="Torekko-logo"/></a>
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
            <div className="justify-content-center">
            <div className=" center-block">
              <ul className="navbar-nav d-flex justify-content-center liste-menu">
                {MenuValues.map((val) => (
                  <li className={activeId === val.id ? " nav-item" : "nav-item"} onClick={() => setActiveId(val.id)}>
                    <a className="nav-link text-nowrap isDisabled">{val.text}</a>
                  </li>
                ))}

                <li className="nav-item">
                  <a href="https://medium.com/@torekko" className="animated">
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

{/*<nav className="navigation">
      <div className="col">
            <a className="navbar-brand" href="/home"><img className="navbarbrand" src={Logo} alt="Torekko-logo"/></a>
          </div>
      <div class="navbar navbar-light navbar-expand-md justify-content-md-center justify-content-start">
      <button class="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
              <span class="navbar-toggler-icon"></span>
            </button>
        <div class="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
            
            <ul class="menu navbar-nav mx-auto text-md-center">
              {MenuValues.map((val) => (
                <li className={activeId === val.id ? "active font-weight-bold nav-item" : "nav-item"} onClick={() => setActiveId(val.id)}>
                  <a href={val.link} className="nav-link text-nowrap">{val.text}</a>
                  </li>
              ))}
                
            </ul>
            <ul class="nav navbar-nav justify-content-md-center flex-nowrap">
                <li class="nav-item"><a class="nav-link" href=""></a>
                  <ReactCountryFlag
                    className="flag-icon"
                    countryCode="FR"
                    aria-label="France"
                    onClick={()=>i18next.changeLanguage('fr')}/>
                </li>
                <li class="nav-item"><a class="nav-link" href=""></a>
                  <ReactCountryFlag
                    className="flag-icon"
                    countryCode="US"
                    aria-label="United States"
                    onClick={()=>i18next.changeLanguage('us')}/>
                </li>
                <li class="nav-item"><a class="nav-link" href=""></a>
                  <ReactCountryFlag
                  className="flag-icon"
                  countryCode="JP"
                  aria-label="Japan"
                  onClick={()=>i18next.changeLanguage('jp')}/>
                </li>
                <li class="nav-item"><a class="nav-link" href=""><i class="fa fa-twitter"></i></a> </li>
            </ul>
        </div>
      </div>
      </nav>*/}
      