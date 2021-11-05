import React,{useState, useEffect} from 'react'

import './Home.css'
import i18next from 'i18next';
import { Trans, useTranslation } from 'react-i18next'
import Cover from 'react-coverflow'
import DesciptionNFT from './DescriptionNFT'
import btnSignup from '../../Illustration/btn-signup.png'

import video1 from '../../Illustration/video/back-video-home2.mp4'
import video1Slide from '../../Illustration/video/RUBY.mp4'
import video2Slide from '../../Illustration/video/GOLD.mp4'
import video3Slide from '../../Illustration/video/MOONSTONE.mp4'
import video4Slide from '../../Illustration/video/RUBY2.mp4'
import video5Slide from '../../Illustration/video/HOMME_GA2.mp4'
import video6Slide from '../../Illustration/video/SOIREE_GA2.mp4'
import video7Slide from '../../Illustration/video/SURF_GA2.mp4'

import Discord from '../../Illustration/Icon/discorde.png'
import Telegram from '../../Illustration/Icon/telegram.png'
import Linkedin from '../../Illustration/Icon/linkedin.png'
import Instagram from '../../Illustration/Icon/instagram.png'
import Twitter from '../../Illustration/Icon/twitter.png'
import Medium from '../../Illustration/Icon/medium.png'

import imgRoadmapFr from '../../Illustration/roadmap/roadmapfr.jpg';
import imgRoadmapEn from '../../Illustration/roadmap/roadmapen.jpg';
import imgRoadmapJp from '../../Illustration/roadmap/roadmapjp.jpg';

import '../../Illustration/discover-torekko.png'
import { findMatchingRequiredOptions } from 'web3modal'


function Home(){ /*{contract}*/

    function findImg() {
            var img;
            if (i18n.language == "en" || i18n.language == "us") {
                img = imgRoadmapEn;
            } else if (i18n.language == "fr") {
                img = imgRoadmapFr;
            } else if (i18n.language == "jp") {
                img = imgRoadmapJp;
            }
            return (<img src={img} unselectable="on" id="bg" alt="draw"/>)
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

    /*
    const Search = () => {
        const [showResults, setShowResults] = React.useState(false)
        const onClick = () => setShowResults(true)
        return (
        <div>
            <input type="submit" value="Search" onClick={onClick} />
            { showResults ? <Results /> : null }
        </div>
        )
    }
    
    const Results = () => (
        <div id="results" className="search-results">
        Some Results
        </div>
    )
  
  ReactDOM.render(<Search />, document.querySelector("#container"))
*/
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
                    height={500}
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
                <h1><Trans>home.roadmap.title</Trans></h1>
                <div className='roadMapImg'>{findImg()}</div>
            </div>
            {/* Temporary commentaries
            <div className="team-container">
                put dans un autre fichier html
                <h2>
                    <p class="black"><Trans>home.team.title1</Trans>
                        <span class="red"><Trans>home.team.title2</Trans></span>
                    </p>
                </h2>
                <table>
                        <tr>
                            <td data-label="TextUnder1">
                                <img src={require('./../../Illustration/TeamPictures/pp-0.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic1</Trans></p>
                                <p><Trans>home.name.pic8.2</Trans></p>
                            </td>
                            <td data-label="TextUnder2">
                                <img src={require('./../../Illustration/TeamPictures/pp-1.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic2</Trans></p>
                                <p><Trans>home.name.pic8.2</Trans></p>
                            </td>
                            <td data-label="TextUnder3">
                                <img src={require('./../../Illustration/TeamPictures/pp-2.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic3</Trans></p>
                                <p><Trans>home.name.pic8.2</Trans></p>
                            </td>
                            <td data-label="Text4">
                                <img src={require('./../../Illustration/TeamPictures/pp-3.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic4</Trans></p>
                                <p><Trans>home.name.pic4.2</Trans></p>
                            </td>
                            <td data-label="Text5">
                                <img src={require('./../../Illustration/TeamPictures/pp-4.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic5</Trans></p>
                                <p><Trans>home.name.pic5.2</Trans></p>
                            </td>
                            <td data-label="TextUnder6">
                                <img src={require('./../../Illustration/TeamPictures/unknow.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic6</Trans></p>
                                <p><Trans>home.name.pic6.2</Trans></p>
                            </td>
                            <td data-label="TextUnder7">
                                <img src={require('./../../Illustration/TeamPictures/pp-6.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic7</Trans></p>
                                <p><Trans>home.name.pic7.2</Trans></p>
                            </td>
                            <td data-label="Text8">
                                <img src={require('./../../Illustration/TeamPictures/unknow.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic8</Trans></p>
                                <p><Trans>home.name.pic8.2</Trans></p>
                            </td>
                            <td data-label="Text9">
                                <img src={require('./../../Illustration/TeamPictures/pp-8.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic9</Trans></p>
                                <p><Trans>home.name.pic9.2</Trans></p>
                            </td>
                            <td data-label="Text10">
                                <img src={require('./../../Illustration/TeamPictures/pp-9.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic10</Trans></p>
                                <p><Trans>home.name.pic10.2</Trans></p>
                            </td>
                            <td data-label="Text11">
                                <img src={require('./../../Illustration/TeamPictures/pp-10.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic11</Trans></p>
                                <p><Trans>home.name.pic11.2</Trans></p>
                            </td>
                            <td data-label="Text12">
                                <img src={require('./../../Illustration/TeamPictures/unknow.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic12.2</Trans></p>
                                <p><Trans>home.name.pic12.2</Trans></p>
                            </td>
                            <td data-label="Text13">
                                <img src={require('./../../Illustration/TeamPictures/pp-12.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic13</Trans></p>
                                <p><Trans>home.name.pic13.2</Trans></p>
                            </td>
                            <td data-label="Text14">
                                <img src={require('./../../Illustration/TeamPictures/pp-13.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic14</Trans></p>
                                <p><Trans>home.name.pic14.2</Trans></p>
                            </td>
                            <td data-label="Text15">
                                <img src={require('./../../Illustration/TeamPictures/pp-14.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic15</Trans></p>
                                <p><Trans>home.name.pic15.2</Trans></p>
                            </td>
                            <td data-label="Text16">
                                <img src={require('./../../Illustration/TeamPictures/pp-15.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic16</Trans></p>
                                <p><Trans>home.name.pic16.2</Trans></p>
                            </td>
                            <td data-label="Text17">
                                <img src={require('./../../Illustration/TeamPictures/unknow.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic17</Trans></p>
                                <p><Trans>home.name.pic17.2</Trans></p>
                            </td>
                            <td data-label="Text18">
                                <img src={require('./../../Illustration/TeamPictures/pp-17.jpg').default} alt="draw"/>
                                <p class="name"><Trans>home.name.pic18</Trans></p>
                                <p><Trans>home.name.pic18.2</Trans></p>
                            </td>
                        </tr>
                    </table>
                    {/*!put dans un autre fichier html
            </div>

            <div className="pdfDowloader">

                <table>
                        <tr>
                            <td data-label="Text Left">
                                <h2 className="allign">Découvrez Torekko</h2>
                                <p>Téléchargez notre Pitchdeck, notre One-pager et notre Tokenomics en anglais</p>
                            </td>

                            <td>
                                <a href="https://www.sejda.com/share/efc42abefe42451d8eb7d8c7304ea058-kh6PMNwM53mf5cNPK_mN2ald8_F-MB2nNpvNcSKB8UCyFKjhjVmoR6mIqcTOuwYr">
                                <img src={require('./../../Illustration/home/PitchDeck.png').default} alt="draw"/>
                                </a>
                            </td>
                            <td >
                                <a href="https://www.sejda.com/share/b48735e2b79c47a6820a45f8e1141f62-a-Bwck1saWB3mM8nGrLRyqESzeKEMkgvIofdbAttIpThbj_hr1xeLYwoyC70q3RD">
                                <img src={require('./../../Illustration/home/One-Page.png').default} alt="draw"/>
                                </a>
                            </td>
                            <td >
                                <a href="https://www.sejda.com/share/20036164f27e774938bbeea7855f1484a2-98TBfd84h_OVqOi_NrR6hsWiKLMNODbFoQ5kr7C4RQia08Rgdy8NGLgjLMqUw596">
                                <img src={require('./../../Illustration/home/Tokenomics.png').default} alt="draw"/>
                                </a>
                            </td>
                            
                        </tr>
                </table>
            </div>
            <div className="update-mail">
                <div className="update-text">
                    <h2><Trans>home.email.title</Trans></h2>
                    <p><Trans>home.email.description</Trans></p>
                </div>
                <div className="update-form">
                    <p><Trans>home.email.enterEmail</Trans></p>
                    <form>
                        <label>
                            <input type="text" placeholder="...@..." name="name" />
                        </label>
                        <input type="image" src={btnSignup} alt="Submit" width="100" height="32"></input>
                    </form>
                </div>
            </div>*/}

            <div className="Partners" id="investor">
                <h1><Trans>home.partners.title</Trans></h1>
                <table>
                    <tr>
                        <td>
                                <a href='https://moonwhale.ventures' target="_blank">
                                    <img class="blueWhale" src={require('../../Illustration/partenaire/blueWhale.png').default} alt="draw"/>
                                </a>
                        </td>
                        <td bgcolor="black">
                                <a href='https://oddiyana.ventures' target="_blank">
                                    <img class="odyyana" src={require('../../Illustration/partenaire/Odyyana.png').default} alt="draw"/>
                                </a>
                        </td>
                        <td>
                                <a href='https://lavender.capital' target="_blank">
                                    <img class="blueWhale" src={require('../../Illustration/partenaire/lavender.png').default} alt="draw"/>
                                </a>
                        </td>
                        <td bgcolor="black">
                                <a href='https://roseon.finance' target="_blank">
                                    <img class="odyyana" src={require('../../Illustration/partenaire/roseon.png').default} alt="draw"/>
                                </a>
                        </td>
                        <td bgcolor="black">
                                <a href="https://www.fairumventures.com/"  target="_blank">
                                    <img class="blueWhale" src={require('../../Illustration/partenaire/fairum.png').default} alt="draw"/>
                                </a>
                        </td>
                        <td>
                                <a href='https://exnetworkcapital.com/' target="_blank">
                                    <img class="odyyana" src={require('../../Illustration/partenaire/exnetworkCapitak.png').default} alt="draw"/>
                                </a>
                        </td>
                        <td bgcolor="black">
                                <a href='https://lpi.finance/' target="_blank">
                                    <img class="odyyana" src={require('../../Illustration/partenaire/lpidao.png').default} alt="draw"/>
                                </a>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="icon-bar">
                <a className="socialmedia" href="https://www.instagram.com/torekkocom/" target="_blank"><img className="socialmedia_logo" src={Instagram} alt="Instagram" /></a>
                <a className="socialmedia" href="https://twitter.com/torekkocom?s=20" target="_blank"><img className="socialmedia_logo" src={Twitter} alt="Twitter" /></a>
                <a className="socialmedia" href="https://www.linkedin.com/company/torekko/" target="_blank"><img className="socialmedia_logo" src={Linkedin} alt="Linkedin" /></a>
                <a className="socialmedia" href="https://t.me/torekko" target="_blank"><img className="socialmedia_logo" src={Telegram} alt="Telegram" /></a>
                <a className="socialmedia" href="https://discord.gg/Tnwtu5YjDA" target="_blank"><img className="socialmedia_logo" src={Discord} alt="Discord" /></a>
                <a className="socialmedia" href="https://medium.com/@torekko" target="_blank"><img className="socialmedia_logo" src={Medium} alt="Medium" /></a>
            </div>
        </div>
    )
}

export default Home;
