const {ethers} = require('ethers');
require('dotenv').config();
const API_URL = process.env.API_URL;
const Private_key = process.env.PRIVATE_KEY;
const contractAddress = process.env.CONTRACT_ADDRESS;

const provider = new ethers.providers.JsonRpcProvider(API_URL);
const signer = new ethers.Wallet(Private_key, provider);
const {abi} = require("./artifacts/contracts/HelloWorld.sol/HelloWorld.json");
const contractInstance= new ethers.Contract(contractAddress, abi, signer);

async function tx() {
    const tx = await contractInstance.update("Updated Message");
    await tx.wait();
}

tx()