import React from 'react'

import './MyCollection.css'




function MyCollection(){

    const max = 10;
    var names = ['boostertype2021.png', 'boostertype2021.png', 'boostertype2021.png'];


    return(

        <div className="MyCollection">
            <div className="form-ETH_Mainnet">
                <label>
                    ETH Mainnet
                    <input type="text" name="ETH_Mainnet" disabled="disabled" placeholder="0xf7bdD3E931A5431868975E295cA689c9f8e76e01"/>
                </label>
            </div>
            <h1>Mes <b>Boosters</b></h1>
            {names.map(function(name, index){
                    return <a href="/MyCollection/001"><img  className="card" src={require('../../Illustration/'+name).default}/></a>;
                  })}
            
            <h1>Mes <b>Torreko</b></h1>
            {names.map(function(name, index){
                    return <img className="card" src={require('../../Illustration/'+name).default}/>;
                  })}
        </div>

        
    )
}

export default MyCollection; 
