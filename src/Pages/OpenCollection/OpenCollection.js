import React from 'react'

import boosterHiver2021 from '../../Illustration/boosterhiver1.png'
import boosterType from '../../Illustration/packtorekko.png'
import Select from 'react-select'


import './OpenCollection.css'
import { FO, NA } from 'country-flag-icons/react/3x2'


function OpenCollection(){

    const max = 10;
    var names = ['boostertype2021.png', 'boostertype2021.png', 'boostertype2021.png'];

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ]

    const styles = {
        option: (provided, state) => ({
          ...provided,
          fontWeight: state.isSelected ? "bold" : "normal",
          color: "white",
          backgroundColor: state.data.color,
          fontSize: state.selectProps.myFontSize,
        })
      };


    return(

        <div className="OpenCollection">
           <div className="form-ETH_Mainnet">
                <label>
                    ETH Mainnet
                    <input type="text" name="ETH_Mainnet" disabled="disabled" placeholder="0xf7bdD3E931A5431868975E295cA689c9f8e76e01"/>
                </label>
            </div>
            <div className="monBooster">
                <h1>Mon Booster</h1>
                <div className="monBoosterBox">
                <img src={boosterHiver2021} alt="Pack {name}"/>
                <div className="description">
                    <p className="nom"><b>BOOSTER HIVER 2021</b></p>
                    <p className="nom-des"><b>RE-ZERO - Booster AUT. 2021</b></p>
                    <div className="description-bloc">
                        <p>DESCRIPTION</p>
                        <p className="des">Hoc inmaturo interitu ipse quoque sui pertaesus excessit e vita aetatis 
                            nono anno atque vicensimo cum quadriennio imperasset. natus apud Tuscos 
                            in Massa Veternensi, patre Constantio Constantini fratre imperatoris, 
                            matreque Galla sorore Rufini et Cerealis</p>
                    </div>
                    <div className="select-bloc">
                        <Select options={options} className="select"/>
                        <Select options={options} className="select" styles={styles}/>
                        <Select options={options} className="select" styles={styles}/>
                    </div>
                    <div className="bloc2-button">
                        <button className="info">INFOS</button>
                        <button className="open">OUVRIR</button>
                    </div>
                        
                </div>
            </div>
            </div>
            <div className="in-booster">
                <h2>Torekko obtenus dans ce booster</h2>
                <a href="/Mycollection/Torekko/1"><img className="torekko" src={boosterType} alt="alt"/></a>
                <a href="/Mycollection/Torekko/2"><img className="torekko" src={boosterType} alt="alt"/></a>
                <a href="/Mycollection/Torekko/3"><img className="torekko" src={boosterType} alt="alt"/></a>
            </div>
            
        </div>


        
    )
}

export default OpenCollection; 
