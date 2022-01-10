//https://eth-ropsten.alchemyapi.io/v2/luhxQ1K4-4R6q9Tc9VosiHGMimujznOR

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: { 
      url: 'https://eth-ropsten.alchemyapi.io/v2/luhxQ1K4-4R6q9Tc9VosiHGMimujznOR',
      accounts : ['d8dde3e45c7b66347d24920e37db87e5131c2d5c71daed197ae523c42e7b7583']
    }
  }
}