 const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "police car sword menu vocal custom betray chicken trouble boil soldier below";

module.exports = {
   contracts_build_directory: './client/src/builtContracts',

  networks: {
     development: {
      host: "127.0.0.1",
      port: 8546,
      network_id: "*",
     },
     
     rinkeby: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,
     network_id: 4,       // Rinkeby's id
     gas: 5500000,
     }
  },

  mocha: {
  },

  compilers: {
    solc: {
       version: "0.6.0",
    }
  }
};
