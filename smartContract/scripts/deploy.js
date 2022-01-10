
const hre = require("hardhat");

const main = async () => {

  const Payments = await hre.ethers.getContractFactory("Payments");
  const payments = await Payments.deploy();

  await payments.deployed();

  console.log("Payments contract deployed to:", payments.address);
}

const runMain = async () => {
   try {
     await main();
     process.exit(0)
   } catch (error) {
     console.error(error)
     process.exit(1)
   }
}

runMain()
