import Web3 from "web3";
import solc from "solc"
import dotenv from "dotenv";
import uint8 from "./tools/uint8.js"
import getBalanceValue from "./methods/getBalanceValue.js"

//Require Dotenv
dotenv.config({})

const web3 = new Web3(process.env.BSC_NETWORK)
const account = web3.eth.accounts.privateKeyToAccount(uint8(process.env.PRIVATE_KEY));
web3.eth.accounts.wallet.add(account);

const currentAddress = web3.eth.accounts.wallet[0].address

//COIN Value
getBalanceValue(web3).then(res =>{
	console.log(res)
}).catch(err=>{
	console.log(err)
})