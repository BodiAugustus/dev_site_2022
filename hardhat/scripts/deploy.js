const { ethers } = require("hardhat")
require("dotenv").config({ path: ".env" })

async function main() {
    const profilePaymentsContract = await ethers.getContractFactory("ProfilePayments")

    const deployedProfilePaymentsContract = await profilePaymentsContract.deploy()

    console.log("ProfilePayments Contract Address:", deployedProfilePaymentsContract.address );
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1)
})