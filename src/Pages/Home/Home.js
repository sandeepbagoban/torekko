import React,{useState, useEffect} from 'react'

import './Home.css'
import { Trans, useTranslation } from 'react-i18next'
import Cover from 'react-coverflow'
import DesciptionNFT from './DescriptionNFT'

import video1 from '../../Illustration/video/back-video-home2.mp4'
import video1Slide from '../../Illustration/video/RUBY.mp4'
import video2Slide from '../../Illustration/video/GOLD.mp4'
import video3Slide from '../../Illustration/video/MOONSTONE.mp4'
import video4Slide from '../../Illustration/video/RUBY.mp4'
import video5Slide from '../../Illustration/video/HOMME_GA.mp4'
import video6Slide from '../../Illustration/video/SOIREE_GA.mp4'
import video7Slide from '../../Illustration/video/SURF_GA.mp4'
import video8Slide from '../../Illustration/video/GEISHA_GA.mp4'



function Home({contract}){
    var fn = function () {
        /* do you want */  
      }
   
    const { t, i18n } = useTranslation()
    const [active, setActive] = useState("socle");
    const [activeId, setActiveId] = useState(1);
    const [loading, setLoading] = useState(false);

    function setAttributElements(activeName, id){
        setActive(activeName); 
        setActiveId(id)
    }

    const Attributs = [
        { id: 1, text: t('home.attribut.socle.title'), activeName: "socle"},
        { id: 2, text: t('home.attribut.decor.title'), activeName: "decor"},
        { id: 3, text: t('home.attribut.personnage.title'), activeName: "personnage"},
        { id: 4, text: t('home.attribut.collection.title'), activeName: "collection"},
        { id: 5, text: t('home.attribut.details-bonus.title'), activeName: "details-bonus"},
        { id: 6, text: t('home.attribut.statistiques.title'), activeName: "statistiques"},        
      ];


    return(
        <div className="home">
            <div id="wrap_video">
                <div id="video_box" className="bg-black">
                    <div id="video_overlays">
                        <h1 className="principale-title"><Trans>home.title</Trans></h1>
                        <img className="principale-forteresse" src={require('../../Illustration/forteresse-home.png').default} alt="logo"/>
                    </div>
                    <div>
                        {/*<ReactPlayer
                            loop={true}
                            playing={true}
                            url={video}
                        />*/}
                        <video autoPlay loop muted>
                            <source className="principale-video" src={video1} type="video/mp4" />
                        </video>
                        {/*<ReactPlayer url={video} loop={true} playing={true}/>*/}
                    </div>
                </div>
            </div>
            <div className="discover bg-black bloc" id="discover">
                <h1 className="font-weight-bold text-white title"><Trans>home.discover.title</Trans></h1>
                <Cover
                    width={960}
                    height={480}
                    displayQuantityOfSide={2}
                    infiniteScroll={true}
                    navigation={false}
                    enableHeading={false}
                    enableScroll={false}
                    active={4}>
                    <video autoPlay loop muted><source className="slide-video" src={video1Slide} type="video/mp4" /></video>
                    <video autoPlay loop muted><source className="slide-video" src={video2Slide} type="video/mp4" /></video>
                    <video autoPlay loop muted><source className="slide-video" src={video3Slide} type="video/mp4" /></video>
                    <video autoPlay loop muted><source className="slide-video" src={video4Slide} type="video/mp4" /></video>
                    <video autoPlay loop muted><source className="slide-video" src={video5Slide} type="video/mp4" /></video>
                    <video autoPlay loop muted><source className="slide-video" src={video6Slide} type="video/mp4" /></video>
                    <video autoPlay loop muted><source className="slide-video" src={video7Slide} type="video/mp4" /></video>
                    <video autoPlay loop muted><source className="slide-video" src={video8Slide} type="video/mp4" /></video>
                </Cover>
            </div>
            <div className="attribut bloc" id="attribut">
                <h1 className="font-weight-bold title"><Trans>home.attribut.title</Trans></h1>
                <div class="container-fluid attribut-container">
                    <div class="row">
                        <div class="col-sm-3">
                            {Attributs.map((val) => (
                                <div className={activeId === val.id ? "active attribut-part" : "attribut-part"} onClick={() => setAttributElements(val.activeName,val.id)}>
                                    <p>{val.text}</p>
                                </div>
                            ))}
                        </div>
                        <div class="col-sm-9">
                        {Attributs.map((val) => (
                            <div>
                                {active === val.activeName && <DesciptionNFT title={val.activeName}/>}
                            </div>
                        ))}
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="boosterdrop" id="booster-drop">
                <div className="booster-etape">
                <h2 style={{color:'white',fontSize:'30px'}}><Trans>home.booster.title</Trans></h2>
                    <div className="booster-etape1">
                        <img src={require('../../Illustration/instructionBooster/buy-booster.png').default} alt="buy"/>
                        <p><Trans>home.booster.buybooster.title</Trans><br/>
                        <Trans>home.booster.buybooster</Trans></p>
                    </div>
                    <div className="booster-etape1">
                        <img src={require('../../Illustration/instructionBooster/exchange-booster.png').default} alt="changeCollection"/>
                        <p><Trans>home.booster.changeCollection.title</Trans><br/>
                        <Trans>home.booster.changeCollection</Trans></p>
                    </div>
                    <div className="booster-etape1">
                        <img src={require('../../Illustration/instructionBooster/open-booster.png').default} alt="open"/>
                        <p><Trans>home.booster.openBooster.title</Trans><br/>
                        <Trans>home.booster.openBooster</Trans></p>
                    </div>
                </div>
                <div className="drop-etape">
                    <h2 style={{color:'white',fontSize:'30px'}}><Trans>home.drop.title</Trans></h2>
                    <div className="booster-etape1">
                        <img src={require('../../Illustration/instructionBooster/own-trk.png').default} alt="own-torekko"/>
                        <p><Trans>home.drop.getTorekko.title</Trans><br/>
                        <Trans>home.drop.getTorekko</Trans></p>
                    </div>
                    <div className="booster-etape1">
                        <img src={require('../../Illustration/instructionBooster/give-email.png').default} alt="email"/>
                        <p><Trans>home.drop.giveEmail.title</Trans><br/>
                        <Trans>home.drop.giveEmail</Trans></p>
                    </div>
                    <div className="booster-etape1">
                        <img src={require('../../Illustration/instructionBooster/draw.png').default} alt="draw"/>
                        <p><Trans>home.drop.draw.title</Trans><br/>
                        <Trans>home.drop.draw</Trans></p>
                    </div>
                </div>
            </div>    
            <div className="RoadMap" id="roadmap">
                <h1>RoadMap</h1>

                <div className="ButtonUp">
                <table>
                        <tr>
                            <td>
                                <button class="button button1"><b><Trans>home.roadmap.button1</Trans>
                                    <br/><Trans>home.roadmap.button1.1</Trans></b>
                                    <br/><Trans>home.roadmap.button1.2</Trans>
                                </button><br/>
                                <img src={require('../../Illustration/barre-en-pointille.png').default} alt="draw"/>
                            </td>
                            <td>
                                <button class="button button2"><b><Trans>home.roadmap.button2</Trans>
                                    <br/><Trans>home.roadmap.button2.1</Trans></b>
                                    <br/><Trans>home.roadmap.button2.2</Trans>
                                </button><br/>
                                <img src={require('../../Illustration/barre-en-pointille.png').default} alt="draw"/>
                            </td>
                            <td>
                                <button class="button button3"><b><Trans>home.roadmap.button3</Trans>
                                    <br/><Trans>home.roadmap.button3.1</Trans></b>
                                    <br/><Trans>home.roadmap.button3.2</Trans>
                                </button><br/>
                                <img src={require('../../Illustration/barre-en-pointille.png').default} alt="draw"/>
                            </td>
                            <td>
                                <button class="button button4"><b><Trans>home.roadmap.button4</Trans>
                                    <br/><Trans>home.roadmap.button4.1</Trans></b>
                                    <br/><Trans>home.roadmap.button4.2</Trans>
                                </button><br/>
                                <img src={require('../../Illustration/barre-en-pointille.png').default} alt="draw"/>
                            </td>
                        </tr>
                    </table>
                </div>

                <img src={require('../../Illustration/roadMapBar.png').default} id="bg" alt="draw"/>
                
                <div className="ButtonUp">
                    <table>
                        <tr>
                            <td>
                                <img className="buttonDown" src={require('../../Illustration/barre-en-pointille.png').default} alt="draw"/><br/>
                                <button class="button button5"><b><Trans>home.roadmap.button5</Trans>
                                    <br/><Trans>home.roadmap.button5.1</Trans></b>
                                    <br/><Trans>home.roadmap.button5.2</Trans>
                                </button>
                            </td>
                            <td>
                                <img className="buttonDown"  src={require('../../Illustration/barre-en-pointille.png').default} alt="draw"/><br/>
                                <button class="button button6"><b><Trans>home.roadmap.button6</Trans>
                                    <br/><Trans>home.roadmap.button6.1</Trans></b>
                                    <br/><Trans>home.roadmap.button6.2</Trans>
                                </button>
                            </td>
                            <td>
                                <img className="buttonDown"  src={require('../../Illustration/barre-en-pointille.png').default} alt="draw"/><br/>
                                <button class="button button7"><b><Trans>home.roadmap.button7</Trans>
                                    <br/><Trans>home.roadmap.button7.1</Trans></b>
                                    <br/><Trans>home.roadmap.button7.2</Trans>
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
                
                <br/>
            </div>

            <div className="Partners" id="investor">
                <h1><Trans>home.partners.title</Trans></h1>
                <table>
                    <tr>
                        <td>
                            <img class="blueWhale" src={require('../../Illustration/partenaire/blueWhale.png').default} alt="draw"/>
                            <img class="odyyana" src={require('../../Illustration/partenaire/Odyyana.png').default} alt="draw"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}



export default Home;
