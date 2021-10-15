import React,{useEffect, useState} from 'react'

import collaborateur from '../../Illustration/ce-moment.png'
import btnSignup from '../../Illustration/btn-signup.png'
import './Home.css'

import Slide from '../../Composant/Slideshow/Slideshow'
import { Trans, useTranslation } from 'react-i18next'

import '../../Illustration/discover-torekko.png'


function Home({contract}){
    const { t, i18n } = useTranslation()
    const pathImage = '../../Illustration/'
    //contract.methods.symbol().call().then(console.log);
    //const [contract, setContract] = useState();

    useEffect(() => {
        if (contract) {
            contract.methods.symbol().call().then(console.log);
        }
        
    }, [contract])

    return(
        
        <div className="home">
            <div className="uniswap-bar">
                <span><Trans>home.info</Trans></span>
            </div>
            <Slide/>
            {/*
            <div className="EnCeMoment">
                <p><Trans>home.moment</Trans></p>
                <div class="marquee-rtl">
                    <div>
                    <img src={collaborateur} />
                    </div>
                </div>
            </div>
            */}

            <div className="Discover">
                <div className="discover-body">
                    <table>
                        <tr>
                            <td className="imgPart">
                                <video width="100%" height="100%" autoplay="true" muted loop>
                                    <source src={require('../../Illustration/video-1634231933.mp4').default} type="video/mp4" alt="discover"/>
                                    
                                </video>
                            </td>
                            <td classeName="textPart">
                                    <h1><Trans>home.discover.title</Trans></h1>
                                    <p><Trans>home.discover</Trans></p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="rarete">
                <h1><Trans>home.rarity</Trans></h1>
                <img src={require('../../Illustration/boosters/ruby-booster.png').default} alt="ruby-booster"/>
                <img src={require('../../Illustration/boosters/gold-booster.png').default} alt="gold-booster"/>
                <img src={require('../../Illustration/boosters/moonstone-booster.png').default} alt="moonstone-booster"/>
                <img src={require('../../Illustration/boosters/onyx-horsbooster.png').default} alt="onyx-booster"/>
            </div>
            <div className="booster">
                <h1><Trans>home.boosterPack.title</Trans></h1>
                <div className="bloc">
                    <p><Trans>home.boosterPack</Trans></p>
                    <img src={require('../../Illustration/3booster.png').default} alt="pack"/>
                </div>
            </div>
            <div className="boosterdrop">
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
                    !put dans un autre fichier html
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
            EMAIL PART
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
            </div>
            */}

            
            
            <div className="RoadMap">
                <h1>RoadMap</h1>

                <div className="ButtonUp">
                <table>
                        <tr>
                            <td>
                                <button class="button button1"><b><Trans>home.roadmap.button1</Trans>
                                    <br/><Trans>home.roadmap.button1.1</Trans></b>
                                    <br/><Trans>home.roadmap.button1.2</Trans>
                                </button><br/>
                                <img src={require('./../../Illustration/barre-en-pointille.png').default} alt="draw"/>
                            </td>
                            <td>
                                <button class="button button2"><b><Trans>home.roadmap.button2</Trans>
                                    <br/><Trans>home.roadmap.button2.1</Trans></b>
                                    <br/><Trans>home.roadmap.button2.2</Trans>
                                </button><br/>
                                <img src={require('./../../Illustration/barre-en-pointille.png').default} alt="draw"/>
                            </td>
                            <td>
                                <button class="button button3"><b><Trans>home.roadmap.button3</Trans>
                                    <br/><Trans>home.roadmap.button3.1</Trans></b>
                                    <br/><Trans>home.roadmap.button3.2</Trans>
                                </button><br/>
                                <img src={require('./../../Illustration/barre-en-pointille.png').default} alt="draw"/>
                            </td>
                            <td>
                                <button class="button button4"><b><Trans>home.roadmap.button4</Trans>
                                    <br/><Trans>home.roadmap.button4.1</Trans></b>
                                    <br/><Trans>home.roadmap.button4.2</Trans>
                                </button><br/>
                                <img src={require('./../../Illustration/barre-en-pointille.png').default} alt="draw"/>
                            </td>
                        </tr>
                    </table>
                </div>

                <img src={require('./../../Illustration/roadMapBar.png').default} id="bg" alt="draw"/>
                
                <div className="ButtonUp">
                    <table>
                        <tr>
                            <td>
                                <img className="buttonDown" src={require('./../../Illustration/barre-en-pointille.png').default} alt="draw"/><br/>
                                <button class="button button5"><b><Trans>home.roadmap.button5</Trans>
                                    <br/><Trans>home.roadmap.button5.1</Trans></b>
                                    <br/><Trans>home.roadmap.button5.2</Trans>
                                </button>
                            </td>
                            <td>
                                <img className="buttonDown"  src={require('./../../Illustration/barre-en-pointille.png').default} alt="draw"/><br/>
                                <button class="button button6"><b><Trans>home.roadmap.button6</Trans>
                                    <br/><Trans>home.roadmap.button6.1</Trans></b>
                                    <br/><Trans>home.roadmap.button6.2</Trans>
                                </button>
                            </td>
                            <td>
                                <img className="buttonDown"  src={require('./../../Illustration/barre-en-pointille.png').default} alt="draw"/><br/>
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

            <div className="Partners">
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