import React,{useEffect, useState, setState} from 'react'

import './App.css';

import Home from './Pages/Home/Home'
import BuyBooster from './Pages/BuyBooster/BuyBooster'
import AchatBooster from './Pages/AchatBooster/AchatBooster'
import MyCollection from './Pages/MyCollection/MyCollection'
import InfoTorekko from './Pages/InfoTorekko/InfoTorekko'
import OpenCollection from './Pages/OpenCollection/OpenCollection'
//import Collection from './Pages/fr/Collection'
import Staking from './Pages/Staking/InitAccount'
import Drop from './Pages/Drop/Drop'
import MarketPlace from './Pages/MarketPlace/MarketPlace'
import Navigation from './Composant/Navigation/Navigation'
import Footer from './Composant/Footer/Footer'
import Erreur404 from './Pages/404/404'

import test from './Pages/test'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useTranslation, initReactI18next} from "react-i18next"; 
import {connexion} from './Composant/Walletconnection'
 
var Web3 = require('web3');





function App() {
  var abi = require("./json/Collectibles_abi.json")
  /*var webb = new Web3('https://rinkeby.infura.io/v3/97c1c74d45ee46769f91f51b0a08a6f7')
  var contractAdress = '0x90d276cc7537947c67E0128AF854D3118654797e'
  var abi = require("./json/Collectibles_abi.json")
  var contract = new webb.eth.Contract(abi, contractAdress)*/
  //contract.methods.name().call().then(console.log);//(err, result) => {console.log("res "+result)})*/
  //contract.methods.assembleBooster([1],1).call();

  //.Init()
  //webb.eth.getBalance('0xcA8Fa8f0b631EcdB18Cda619C4Fc9d197c8aFfCa', (err,bal) => { console.log(bal+" Balance") })
  const [contract, setContract] = useState();
  
  useEffect(() => {
    var webb = new Web3('https://rinkeby.infura.io/v3/97c1c74d45ee46769f91f51b0a08a6f7')
    var contractAdress = '0x90d276cc7537947c67E0128AF854D3118654797e'
    
    setContract(new webb.eth.Contract(abi, contractAdress));
    //console.log(contract)
    //connexion()
}, [])

useEffect(() => {
}, [contract])
  
  return (
    <div className="App">
      <Navigation/>
      <Router>
          <Switch>
            <Route path='/' exact component={() => <Home contract={contract} />} />
            <Route path='/BuyBooster' exact component={BuyBooster}/>
            <Route path='/BuyBooster/booster:name/:id' exact component={AchatBooster}/>

            <Route path='/Mycollection' exact component={MyCollection}/>
            <Route path='/Mycollection/:id' exact component={OpenCollection}/>
            <Route path='/Mycollection/Torekko/:id' exact component={InfoTorekko}/>

            <Route path='/Staking' exact component={Staking}/>
            <Route path='/MarketPlace' exact component={MarketPlace}/>
            <Route path='/Drop' exact component={Drop}/>

            <Route path='/' component={Erreur404}/>
           
            {/* <Route path='/Collection/:slug' exact component={Collection}/> */}
            <Route path='/test' component={test}/>
            
            
          </Switch>
      </Router>
      <Footer/>

    </div>
  );
}

export default App;
