const { network, getNamedAccounts, deployments } = require("hardhat")

const { developmentChain, DECIMALS, INITIAL_ANSWER } = require("../helper-hardhat-config")
const { Contract } = require("ethers")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    
    if (developmentChain.includes(network.name)) {
        log("local network detected ! deploying mock .. ")

        await deploy("MockV3Aggregator", {
            Contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER],
        })

        log("Mocks deployed!!")
        log("_________________________________________")
    }
}


module.exports.tags = ["all", "mocks"]
