require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-deploy");
require("hardhat-deploy-ethers");

module.exports = {
  defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "HTTP://172.30.64.1:7545",
      chainId: 1337,
      accounts: [
        "001d22954d2b6b83e234e6f3ddf2f1cdac6ca311c60237331429b7504357c267",
      ],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // Index 0 from accounts
    },
  },
  solidity: "0.8.20",
};

