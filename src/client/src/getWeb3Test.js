import Web3 from "web3";

/* This is a mock web3 used for tests. Connects us straight to a local
blockchain without locaing for Metamask*/
const getWeb3Test = () =>
  new Promise((resolve, reject) => {

    const provider = new Web3.providers.HttpProvider(
      "http://127.0.0.1:8546"
    );
    const web3 = new Web3(provider);
    resolve(web3);
  });

export default getWeb3Test;
