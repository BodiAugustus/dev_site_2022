
const HDWalletProvider = require("@truffle/hdwallet-provider")
const keys = require ("./keys.json")
module.exports = {
    contracts_build_directory: "./public/contracts",
    networks: {
      development: {
       host: "127.0.0.1",     // Localhost (default: none)
       port: 7545,            // Standard Ethereum port (default: none)
       network_id: "*",       // Any network (default: none)    
    },
    ropsten: {
      provider: () =>
      new HDWalletProvider({
        mnemonic: {
          phrase: keys.MNEMONIC
        },
        providerOrUrl: `https://ropsten.infura.io/v3/${keys.INFURA_PROJECT_ID}`,

      }),
      network_id: 3,
      gas: 5500000, //Gas limit
      gasPrice:  120000000000, //Price per unit
      confirmations: 2, //mined blocks before deployment
      timeoutBlocks: 200, //mined blocks before deployment times out
      // skipDryRun: true,
    }  
  },
  compilers: {
    solc: {
      version: "0.8.10",    
    }
  },

};
//https://eth-ropsten.alchemyapi.io/v2/vn6GVBdUaQvEdf9MJhv76WG-Cet_h1BB