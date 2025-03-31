const { getNamedAccounts } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContractAt("FundMe", "0x939cc7Ae783a56eD73c770FcB31C1CeE8D94D079");
     console.log("Funding Contract")
    const transactionResponse = await fundMe.withdraw()

    await transactionResponse.wait()
    console.log("GOT IT BACK..")

}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })