import React, { useState } from "react";


import Web3 from "web3";
import Web3Modal from "web3modal";
import Portis from "@portis/web3";
import Fortmatic from "fortmatic";

import Torekko from "../Composant/Torekko/Torekko"
import json from "../Pages/metadatas.json"

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      torreko: {
        id: 12,
        firstName: "John",
        lastName: "Doe",
      },
    };
  }

  render(){
  return (
    <div style={{ marginTop:'130px',marginBottom:'130px'}}>
      <Torekko torekkoInfo = {json}/>
    </div>
  );
  }
}

export default Test;



