require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" })

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY

module.exports = {
  solidity: "0.8.10",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY]
    },
  },
}

//0x9A9eBC4D7e0B80cFe2793AaD4fD41eC98CceE376  contract address