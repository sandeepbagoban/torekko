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
            <div className="EnCeMoment">
                <p><Trans>home.moment</Trans></p>
                <div class="marquee-rtl">
                    <div>
                    <img src={collaborateur} />
                    </div>
                </div>
            </div>
            <div className="Discover">
                <h1><Trans>home.discover.title</Trans></h1>
                <div className="discover-body">
                    <img className="openbox" src={require('../../Illustration/discover-torekko.png').default} alt="discover"/>
                    <p><Trans>home.discover</Trans></p>
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
        </div>

    )
}

export default Home;