import React,{useEffect, useState, setState} from 'react'
import Web3Modal from "web3modal";
import Fortmatic from "fortmatic";
import WalletConnectProvider from "@walletconnect/web3-provider";
var Web3 = require('web3');

export async function connexion(){
    const providerOptions = {
      fortmatic: {
        package: Fortmatic, // required
        options: {
          key: "pk_live_623E80CA4A59D331" // required
        }
      },
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "INFURA_ID" // required
        }
      }
    };
    
    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
      theme: {
        zIndex:"100000",
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      }
    });
  
    try{
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);
    }
    catch(error){
    }
}

