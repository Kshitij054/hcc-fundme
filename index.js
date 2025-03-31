

import { ethers } from "./ethers-5.6.esm.min.js"
import { abi, contractAddress } from "./constants.js"
// import { log } from "console";
// import { type } from "os";


const connectButton = document.getElementById("connectButton");
const fundButton = document.getElementById("fundButton");
const balanceButton = document.getElementById("balanceButton");
const withdrawButton = document.getElementById("withdrawButton");


connectButton.onclick = connect;
fundButton.onclick = fund;
balanceButton.onclick = getBalance;
withdrawButton.onclick = withdraw;

document.getElementById("contractAddress").innerText = contractAddress;


async function connect() {
    if (typeof window.ethereum !== "undefined") {
        console.log("I see a MetaMask!");
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        document.getElementById("accountAddress").innerText = accounts[0]; // Display sender's address
        connectButton.innerHTML = "Connected!";
    } else {
        connectButton.innerHTML = "Please install MetaMask";
    }
}
async function fund() {

    const ethAmount = document.getElementById("ethAmount").value;
    console.log(`funding with ${ethAmount} ......`);
    if (typeof window.ethereum !== "undefined") {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        console.log(signer);
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try {
            const transactionResponse = await contract.fund({ value: ethers.utils.parseEther(ethAmount), })
            await listenForTransaction(transactionResponse, provider)
        }
        catch (error) {
            console.log(error)
        }
    }
}

async function getBalance() {
    if (typeof window.ethereum != "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const balance = await provider.getBalance(contractAddress)
        console.log(ethers.utils.formatEther(balance))
    }
}
async function withdraw() {
    if (typeof window.ethereum != "undefined") {
        console.log("withdrawing.....");

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner();
        console.log(signer);
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try {
            const transactionResponse = await contract.withdraw();
            await listenForTransaction(transactionResponse, provider);
        } catch (error) {
            console.log(error);
        }
    }
}

function listenForTransaction(transactionResponse, provider) {
    console.log(`mining ${transactionResponse.hash}...`)
    return new Promise((resolve, reject) => {
        provider.once(transactionResponse.hash, async (txReceipt) => {
            await provider.waitForTransaction(transactionResponse.hash);
            console.log(`Completed with ${txReceipt.confirmations} confirmations`);
            resolve();
        })
    })

}


