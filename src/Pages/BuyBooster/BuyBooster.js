import React, { useState, useEffect } from 'react'
import boosterHiver from '../../Illustration/booster-hiver.png'
import boosterHiver2021 from '../../Illustration/booster-hiver-2021.png'


import './BuyBooster.css'


function BuyBooster(){
    

    const showMoreItems = () =>{
        setVisible(Object.keys(items).length)//(prevValue)=> prevValue+6
    }
    const showLessItems = () =>{
        setVisible(3)
    }

    const [items, setItems] = useState([])
    const [visible, setVisible] = useState(3)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setItems(data))
    }, [])



    return(

        <div className="BuyBooster">
            <div className="presentation-booster">
                <h1>Les Boosters de <b>SAISON</b></h1>
                <a href="/BuyBooster/boosterHiver/0001"><img src={boosterHiver}/></a>
                <a href="/BuyBooster/boosterMagique/0002"><img src={boosterHiver}/></a>
            </div>
            <div className="booster-moment">
                <h1>Les Boosters du <b>MOMENT</b></h1>
                <div className="div-booster">
                    <p className="nv">Les nouveautés</p>
                    <a><p className="voir">En voir +/</p></a>
                </div>
                <a><img src={boosterHiver2021}/></a>
                <a><img src={boosterHiver2021}/></a>
                <a><img src={boosterHiver2021}/></a>
            </div>
            <div className="booster-moment" style={{backgroundColor:'#38383C'}}>
                <div className="div-booster">
                    <p className="nv" style={{color:'white'}}>Les plus populaires</p>
                    <p className="voir" style={{color:'white'}}>En voir +/</p>
                </div>
                <a><img src={boosterHiver2021}/></a>
                <img src={boosterHiver2021}/>
                <img src={boosterHiver2021}/>
            </div>
            <div className="booster-moment">
                <div className="div-booster">
                    <p className="nv">Les saisons précédente</p>
                    <p className="voir">En voir +/</p>
                </div>
                <img src={boosterHiver2021}/>
                <img src={boosterHiver2021}/>
                <img src={boosterHiver2021}/>
            </div>

            <div>
            <button onClick={showMoreItems}>Voir plus</button>
                {items.slice(0,visible).map(item => (
                    <div>
                        <p>{item.id}</p>
                    </div>

                    ))
                }
                <button onClick={showLessItems}>Voir Moins</button>
            </div>
        </div>

        
    )
}

export default BuyBooster;