import React, {useState} from 'react'
import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import boosterHiver2021 from '../../Illustration/boosterhiver1.png'
import pDeamon from '../../Illustration/partenaire/partenaire-deamon.png'
import pHorimiya from '../../Illustration/partenaire/partenaire-horimiya.png'
import pHunter from '../../Illustration/partenaire/partenaire-hunter.png'
import pZero from '../../Illustration/partenaire/partenaire-zero.png'
import pJujustu from '../../Illustration/partenaire/partenaire-jujutsu.png'
import partenaire from '../../Illustration/partenaire/partenaire.png'
import laphydre from '../../Illustration/laphydre.png'
import collaborateur from '../../Illustration/ce-moment.png'




import './AchatBooster.css'


function AchatBooster(){

    const { name, id } = useParams();
    const [nbBooster, addStateBooster] = useState(0);

    const addBooster = () => {
        addStateBooster(nbBooster + 1)
    };
    const lessBooster = () => {
        if(nbBooster > 1){
            addStateBooster(nbBooster - 1)
        }
        
    };

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 0 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return(
        <div className="Achatbooster">
            <div className="achat">
                <img src={boosterHiver2021} alt="Pack {name}"/>
                <div className="description">
                    <h1>Booster <span>{name}</span></h1>
                    <hr className="line"/><h2>7 Torreko NFTs</h2><hr className="line"/>
                    <h3>LA SAISON</h3>
                    <p className="description-saison">Hoc inmaturo interitu ipse quoque sui pertaesus excessit e vita aetatis 
                    nono anno atque vicensimo cum quadriennio imperasset. natus apud Tuscos 
                    in Massa Veternensi, patre Constantio Constantini fratre imperatoris, 
                    matreque Galla sorore Rufini et Cerealis</p>
                    <div className="bloc">
                        <p className="solde">SOLDE DU COMPTE<br/>00000 $TRK</p>
                        <p className="prix">PRIX DU BOOSTER<br/>00000 $TRK</p>
                    </div>
                    <div className="nombreBooster">
                        <p>Nombre de Booster(s):</p>
                        <div className='noselect form'>
                            <a onClick={lessBooster}>-</a>
                            <span>{nbBooster}</span>
                            <a onClick={addBooster}>+</a>
                            <button type="submit" value="BUY BOOSTER">BUY BOOSTER</button>
                        </div>
                    </div>
                </div>

                    {/* <div style={{display:"inline-block",width:'110%',fontSize:'20px'}}>
                        <p style={{float:'left',marginLeft:'5%'}}>Nombre de Booster(s): </p>
                        <div className='noselect' style={{marginTop:'15px',paddingRight:'50px'}}>
                            <a  onClick={lessBooster} style={{color:'white',backgroundColor:'black',borderRadius:'10px',padding: '5px 15px',marginRight:'10px',userSelect:'none',cursor:'pointer'}}>-</a>
                            <span style={{backgroundColor:'white',color:'red',padding:'5px 25px',borderRadius:'10px'}}>{nbBooster}</span>
                            <span onClick={addBooster} style={{color:'white',backgroundColor:'black',borderRadius:'10px',padding: '5px 15px',marginLeft:'10px',userSelect:'none',cursor:'pointer'}}>+</span>
                            <button style={{backgroundColor:'black',color:'white',borderStyle:'none',fontSize:'20px',padding: '5px 25px',borderRadius:'10px',marginLeft:'10px'}} type="submit" value="BUY BOOSTER">BUY BOOSTER</button>
                        </div>
                    </div> */}
            </div>
            <img style={{width:'100%'}} src={collaborateur}/>
            <div className='dispoBooster'>
                <p>Quelques Torreko <b>disponible dans ce booster</b></p>
                <Carousel responsive={responsive}>
                    <div><img src={laphydre}/></div>
                    <div><img src={laphydre}/></div>
                    <div><img src={laphydre}/></div>
                    <div><img src={laphydre}/></div>                    
                </Carousel>
            </div>
            
        </div>

        
    )
}

export default AchatBooster; 
