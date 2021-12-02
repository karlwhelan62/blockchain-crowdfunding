# Decentralised Application for Crowdfunding on a Blockchain

A fully decentralised crowdfunding platform built using blockchain technology and smart contracts. All transfers of funds are handled on a smart contract on a blockchain while project information is stored to the InterPlanetary File System, (IPFS. A peer-to-peer decentralised file system), in order to save on gas without sacrificing decentralisation or security. Includes a React web app UI for users to create, donate to and display projects. Can be run on the Ethereum Mainnet, any of its test networks or a personal ganache blockchain.

A live version of the UI connected to the Rinkeby test network is available here: 
https://master.d39obh4okrtcli.amplifyapp.com/

# Motivation

Crowdfunding on the web is very popular but it does have some issues currently. There are trust issues with projects not completing on time, or at all, or not delivering what they promised. The crowdfunding platforms also act as middlemen whom you must trust to transfer your funds appropriately. The majority, if not all, of these platforms also charge a percentage (generally between 3% - 5%) of all funds raised just to be the middleman in these exchanges of funds. Blockchain technology provides good solutions to these issues. All transfers of funds are fully traceable and transparent which helps with trust. Smart contracts with predefined rules can manage the transfer of funds without the need for a middleman or the prices they charge. The fully secure and decentralised nature of the blockchain protects against malicious actors and single points of failure which is particularly important when managing people's money.

## Installation of backend

To compile and deploy the smart contracts you must have truffle installed. Truffle is a development framework for blockchains.

`npm install truffle -g`

To deploy on a local blochain and/or to test this project you must have ganache installed. Ganache is a
personal blockchain for Ethereum development. You can either use the self-contained binary or the command line tool. See here: https://github.com/trufflesuite/ganache

Clone this repo and navigate to the /src folder. Compile the smart contracts using truffle:

`truffle compile`

You can deploy this smart contract to a local ganache blockchain running on port 8546 using:

`truffle migrate --network development`

or to the rinkeby testnet using:

`truffle migrate --network Rinkeby`

**Note** to deploy to the Rinkeby testnet you must have a local node running on your machine at port 8545. To see how to connect yourself to Rinkeby see here: https://www.rinkeby.io/#geth

This project can also be deployed to the Ethereum Mainet or any of its test networks using the truffle-config.js file in /src. For more info about how to do this and other configurations like changing the ports used see the truffle docs: https://www.trufflesuite.com/docs/truffle/reference/configuration

## Installation of frontend

Compiling the backend smart contracts will create a folder /src/client/src/builtContracts containing json files that the frontend needs to function. To install the frontend navigate to the /src/client folder and use:

`npm install`

To run the app in development mode use:

`npm start`

This will run the app here: http://localhost:3000/

To build the app for production use:

`npm run build`

This will build the app so it's ready for production and place the build files in /src/client/build.

## Testing Backend

To test the smart contracts you should run a local blockchain using ganache. For the purposes of the scalability testing your blockchain should have the maximum number of accounts which is 100. With that running and current directory being /src use:

`truffle test`

Information on the tests will be seen in the console. The results of the scalability and gas usage testing can be seen in the log files created when truffle test is ru. They are located in /src/test/logs.

## Testing frontend

To test the frontend you should also have a local ganache blockchain running (This helps us mock a web3 connection), the number of accounts does not matter in this case. from /src/client use:

`npm test`

 The details of the tests will be shown in the console.

## Technolgies used in this project

- Solidity
- React
- Truffle
- Ganache
- IPFS
- Metamask
- Javascript
- CSS
- Node
