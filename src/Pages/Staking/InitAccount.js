import React from 'react'

import metaMask from '../../Illustration/icon-metamask.png'

import ReactPlayer from 'react-player'


import './staking.css'

import { useHistory } from 'react-router-dom'


function InitAccount(){

    function changeColor(){
        
    }

    return(

        <div className="initAccount">
            <h1>Staking <b>$TRK</b></h1>
            <div className="initAccount-block1">
                <p>Hoc inmaturo interitu ipse quoque sui pertaesus excessit e vita aetatis nono anno atque vicensimo cum quadriennio imperasset.
                     natus apud Tuscos in Massa Veternensi, patre Constantio Constantini fratre imperatoris, matreque Galla sorore Rufini et Cerealis, 
                     quos trabeae consulares nobilitarunt et praefecturae.Hoc inmaturo interitu ipse quoque sui pertaesus excessit e vita aetatis nono 
                     anno atque vicensimo cum quadriennio imperasset. natus apud Tuscos in Massa Veternensi, patre Constantio Constantini fratre imperatoris, 
                     matreque Galla sorore Rufini et Cerealis, quos trabeae consulares nobilitarunt et praefecturae.Hoc inmaturo interitu ipse quoque sui 
                     pertaesus excessit e vita aetatis nono anno atque vicensimo cum quadriennio imperasset. natus apud Tuscos in Massa Veternensi, patre 
                     Constantio Constantini fratre imperatoris, matreque Galla sorore Rufini et Cerealis, quos trabeae consulares nobilitarunt et praefecturae.</p>
                     <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                        width='35%'
                        height='250px'
                    />
            </div>
            <div className="initAccount-block2">
                <h1>Connect your <b>wallet</b></h1>
                <div className="wallet">
                    <div className="block-image"><div className="cercle"></div><img src={metaMask} onClick={changeColor("Metamask")}/></div>
                    <div className="block-image"><div className="cercle"></div><img src={metaMask} onClick={changeColor("Coinbase")}/></div>
                    <div className="block-image"><div className="cercle"></div><img src={metaMask} onClick={changeColor("WalletConnect")}/></div>
                </div>
                <button className="connect-button">Connect</button>
                
            </div>
        </div>

    )
}

export default InitAccount;