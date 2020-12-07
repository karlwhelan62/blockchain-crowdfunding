web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
var account;
web3.eth.getAccounts().then((f) => {
 account = f[0];
})

abi = JSON.parse('[{"inputs":[{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"bytes32","name":"_description","type":"bytes32"},{"internalType":"bytes32","name":"_videoLink","type":"bytes32"},{"internalType":"uint256","name":"_fundingGoal","type":"uint256"},{"internalType":"uint256","name":"_projectEndTime","type":"uint256"}],"name":"CreateProject","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"donateToProject","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"returnProjects","outputs":[{"components":[{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"bytes32","name":"description","type":"bytes32"},{"internalType":"bytes32","name":"videoLink","type":"bytes32"},{"internalType":"uint256","name":"fundingGoal","type":"uint256"},{"internalType":"uint256","name":"amountRaised","type":"uint256"},{"internalType":"uint256","name":"projectEndTime","type":"uint256"}],"internalType":"struct Projects.Project[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"}]')

contract = new web3.eth.Contract(abi);
contract.options.address = "0xEb2EAa357bC9368Fee9ACCc6754acF1Ab4F5327e";
// update this contract address with your contract address

window.onload = DisplayProjects();

function DisplayProjects() {
  var x = contract.methods.returnProjects().call();
  x.then((f) => DisplayTable(f));
}

function Test(x) {
  for(i = 0; i < x.length; i++) {
    console.log(x[i][3]);
  }
}

function DisplayTable(x) {
  var bodyString = '';
  for(i = 0; i < x.length; i++) {
    bodyString += ('<tr><td>' + i +
                   '</td><td>' + web3.utils.hexToAscii(x[i][0]) +
                   '</td><td>' + web3.utils.hexToAscii(x[i][1]) +
                   '</td><td>' + web3.utils.hexToAscii(x[i][2]) +
                   '</td><td>' + x[i][3] +
                   '</td><td>' + x[i][4] +
                   '</td><td>' + new Date(x[i][5] * 1000).toLocaleDateString() + '</td></tr>');
  }
  $('.projectsTable tbody').html(bodyString);
}

function DonateToProject() {
  var x = document.getElementById("donate_index");
  var y = document.getElementById("donate_amount");

  contract.methods.donateToProject(y.value, x.value).send({from: account, gas:1500000}).then((f) => console.log(f));
}
