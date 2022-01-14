require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL,
      accounts: [ process.env.ROPSTEN_ACCOUNT_PRIVATE_KEY_1 ]
    }
  }
};
