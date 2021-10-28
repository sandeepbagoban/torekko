import * as Web3 from 'web3'
import { OpenSeaPort, Network, OpenSeaAsset } from 'opensea-js'
import Asset from 'opensea-js'
import { WyvernSchemaName } from "opensea-js/lib/types"

import React,{useState} from 'react'
import Select from 'react-select'
import './MarketPlace.css'
import './MarketPlace.js'

/*
const opensea = require("opensea-js");
const OpenSeaPort = opensea.OpenSeaPort;
const Network = opensea.Network;
const MnemonicWalletSubprovider = require("@0x/subproviders")
  .MnemonicWalletSubprovider;
const RPCSubprovider = require("web3-provider-engine/subproviders/rpc");
const Web3ProviderEngine = require("web3-provider-engine");
*/
/*
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')

const asset = {
    tokenAddress: "0x06012c8cf97bead5deae237070f9587f8e7a266d", // CryptoKitties
    tokenId: "1", // Token ID
}
const seaport = new OpenSeaPort(provider, {
    networkName: Network.Main
})
const balance = await seaport.api.getAssetBalance({
    accountAddress,
    asset,
})
const ownsKitty = balance.greaterThan(0)
*/

const accountAddress = "0x1234..."//de leur ntf

async function Back() {
    
    console.log("zboub");
}
export default Back