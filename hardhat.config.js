require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
require("dotenv").config()
require('hardhat-deploy');
/** @type import('hardhat/config').HardhatUserConfig */
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.8" }, // Add this line
      { version: "0.8.0" },
      { version: "0.6.6" },
    ],
  },
  etherscan: {
    apiKey: "GYVY3UM76ZA4ZXQJ22DYQWWRYUA5T3RIUN",
  },
  defaultNetworks: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    }
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
  },
  namedAccounts: {
    deployer: {
      default: 0, // Account 0 in the list of accounts
    },
  },
};
