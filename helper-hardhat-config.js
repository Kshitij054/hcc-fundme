const networkConfig = {
    4: {
        name: "rikeby",
        ethUsdPriceFeed: "",
    }
}

const { network } = require("hardhat")
const DECIMALS = 8
const INITIAL_ANSWER = 20000000000


const developmentChain = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChain,
    DECIMALS,
    INITIAL_ANSWER,
}