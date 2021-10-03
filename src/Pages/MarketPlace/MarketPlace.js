import React,{useState} from 'react'

import boosterHiver2021 from '../../Illustration/boosterhiver1.png'
import Select from 'react-select'

import './MarketPlace.css'


function MarketPlace(){

    const max = 10;
    var names = ['ANASTASIA.png', 'ANASTASIA.png', 'ANASTASIA.png', 'ANASTASIA.png', 'ANASTASIA.png', 'ANASTASIA.png'];

    const options = [
        { value: 'option1', label: 'option1' },
        { value: 'option2', label: 'option2' },
        { value: 'option3', label: 'option3' },
    ]


    return(
        <div className="MarketPlace">
            <h1>Market<span>place</span></h1>
            <div className="block-card">
                <div className="caracteristique">
                    <Select options={options} className="select"/>
                    <Select options={options} className="select"/>
                    <Select options={options} className="select"/>
                </div>
                <div className="card">
                    {names.map(function(name, index){
                        return <img style={{width:'20%',minWidth:'300px',padding:'0px 20px'}} src={require('../../Illustration/'+name).default}/>;
                    })}
                </div>
                
            </div>
            
        </div>

        
    )
}

export default MarketPlace; 
