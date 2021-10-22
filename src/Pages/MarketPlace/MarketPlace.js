import React,{useState} from 'react'

import boosterHiver2021 from '../../Illustration/boosterhiver1.png'
import Select from 'react-select'

import './MarketPlace.css'
import './MarketPlaceBack.js'

function MarketPlace(){

    const max = 10;
    var names = ['ANASTASIA.png', 'ANASTASIA.png', 'ANASTASIA.png', 'ANASTASIA.png', 'ANASTASIA.png', 'ANASTASIA.png'];

    const headers = [
        { label: 'Status', value: 'HeaderStatus' },
        { label: 'Prix', value: 'HeaderPrix' },
        { label: 'Collection', value: 'HeaderCollection' },
        { label: 'Tout les items', value: 'HeaderItems' },
        { label: 'Sort by', value: 'HeaderSort' },
    ]
    const optionsStatus = [
        { label: 'good', value: 'status1' },
        { label: 'mid', value: 'status2' },
        { label: 'bad', value: 'status3' },
    ]
    const optionsPrix = [
        { label: '10~50$', value: 'price1' },
        { label: '50~100$', value: 'price2' },
        { label: '>100$', value: 'price3' },
    ]
    const optionsCollection = [
        { label: 'Eté', value: 'collection1' },
        { label: 'Automne', value: 'collection2' },
        { label: 'Hiver', value: 'collection3' },
    ]

    const callApi = () => {
        console.log("call api")
    }
    

    return(
        <div className="MarketPlace">
            <h1>Market<span>place</span></h1>

            <button onClick={callApi}>CALL API</button>
                
                <div className="fields">
                    <Select defaultValue= {headers[3]} options={optionsStatus} className="selectBig"/>
                    <Select defaultValue={headers[4]} options={optionsPrix} className="selectBig"/>
                </div>
            <div className="block-card">
                <div className="caracteristique">
                    <Select defaultValue= {headers[0]} options={optionsStatus} className="select"/>
                    <Select defaultValue={headers[1]} options={optionsPrix} className="select"/>
                    <Select defaultValue={headers[2]} options={optionsCollection} className="select"/>
                </div>
                <div className="card">
                    <div className="text">
                        <p>{names.length} results</p>
                    </div>
                    <table>
                        <tr>
                            <td>
                                {names.map(function(name, index){
                                    return <img style={{width:'30%',minWidth:'200px',padding:'20px 10px'}} src={require('../../Illustration/'+name).default}/>;
                                })}
                                {/*<r>...#ruby</r>,
                                <r>funder edition</r>,
                                <r>000 000</r>*/}
                            </td>
                            
                        </tr>
                    </table>
                    
                </div>
                
            </div>
            
        </div>

        
    )
}

export default MarketPlace; 



const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
  const MyComponent = () => (
    <Select options={options} />
  )