const Projects = artifacts.require("Projects");
const fs = require('fs');
const time = require('./utils.js');

/*
Because these tests are for scalablity they should be run against a ganache
instance with a 100 generated accounts.
*/

const euroToEth = 1870;
const testHash = "Qmtttttttttttttttt";
const testFundingGoal = 1000.000;
const today = new Date();
const testProjectEndDate = Math.floor(today / 1000) + 50000000;

const formatKeyString = async function(array) {
  newString = "";
  for(var i = 0; i < array.length; i++) {
    x = 20 - array[i].length;
    x = " ".repeat(x);
    newString = newString + "|" + array[i] + x ;
  }
  return newString;
}

const formatValueString = async function(array) {
  newString = "";
  for(var i = 0; i < array.length; i++) {
    x = 20 - array[i].toString().length;
    x = " ".repeat(x);
    newString = newString + "|" + array[i] + x ;
  }
  return newString;
}

const fetchTransactionGas = async function(transactionHash, i){
  transaction = await web3.eth.getTransaction(transactionHash);
  transactionReceipt = await web3.eth.getTransactionReceipt(transactionHash);
  transactionCost = transactionReceipt.gasUsed * transaction.gasPrice;
  results = {
    'transactionNumber': i,
    'GasUsed': transactionReceipt.gasUsed,
    'GasPrice': await web3.utils.fromWei(transaction.gasPrice, 'gwei'),
    'Exchange rate': euroToEth,
    'Cost in Ether': web3.utils.fromWei(transactionCost.toString(), 'ether'),
    'Cost in Euro': web3.utils.fromWei(transactionCost.toString(),
                    'ether') * euroToEth
  }
  return results;
}

const createProjectScalabilityTest = async function (numOfProjects, accounts) {
  let contractInstance = await Projects.deployed();
  gasResults = [];

  for(var i = 0; i < numOfProjects; i++) {
    receipt = await contractInstance.createProject(testHash,
                                                   testFundingGoal,
                                                   testProjectEndDate,
                                                   {from: accounts[i],
                                                    gasPrice: 1000000000});
    if(i === 0 || (i + 1) % 10 === 0){
      gasResults.push(await fetchTransactionGas(receipt.receipt.transactionHash,
                      i));
    };
  };

  var keys = await formatKeyString(Object.keys(gasResults[0]));
  var stringArray = [keys];

  for (var i = 0; i < gasResults.length; i++) {
      stringArray.push(await formatValueString(Object.values(gasResults[i])));
  }

  fs.writeFileSync('./test/logs/create-project-function-scalability.log',
                   stringArray.join("\n"));
};

const donateToOneProjectScalabilityTest = async function (numOfProjects,
                                                          accounts) {
  let contractInstance = await Projects.deployed();
  gasResults = [];

  for(var i = 1; i < numOfProjects; i++) {
    receipt = await contractInstance.donateToProject(0,
                                                   {from: accounts[i],
                                                    value: 1,
                                                    gasPrice: 1000000000});
    if(i === 1 || (i + 1) % 10 === 0){
      gasResults.push(await fetchTransactionGas(receipt.receipt.transactionHash,
                      i));
    };
  };

  var keys = await formatKeyString(Object.keys(gasResults[0]));
  var stringArray = [keys];

  for (var i = 0; i < gasResults.length; i++) {
      stringArray.push(await formatValueString(Object.values(gasResults[i])));
  }

  fs.writeFileSync('./test/logs/donate-to-project-function-scalability.log',
                   stringArray.join("\n"));
};

const donateToAllProjectScalabilityTest = async function (numOfProjects,
                                                          accounts) {
  let contractInstance = await Projects.deployed();
  gasResults = [];

  for(var i = 1; i < numOfProjects; i++) {
    receipt = await contractInstance.donateToProject(i-1,
                                                   {from: accounts[i],
                                                    value: 1,
                                                    gasPrice: 1000000000});
    if(i === 1 || (i + 1) % 10 === 0){
      gasResults.push(await fetchTransactionGas(receipt.receipt.transactionHash,
                      i));
    };
  };

  var keys = await formatKeyString(Object.keys(gasResults[0]));
  var stringArray = [keys];

  for (var i = 0; i < gasResults.length; i++) {
      stringArray.push(await formatValueString(Object.values(gasResults[i])));
  }

  fs.writeFileSync('./test/logs/donate-to-all-project-function-scalability.log',
                   stringArray.join("\n"));
};


contract('Scalability', async accounts => {
  describe('Scalability test', function(){
    it('tests creating 100 projects', async function(){
      await createProjectScalabilityTest(100, accounts);
    });
    it('tests donating 99 times to 1 project', async function(){
      await donateToOneProjectScalabilityTest(100, accounts);
    });
    it('tests donating 1 time to 99 projects', async function(){
      await donateToAllProjectScalabilityTest(100, accounts);
    });
  });
});
