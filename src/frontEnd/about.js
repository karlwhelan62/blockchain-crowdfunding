web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
var account;
web3.eth.getAccounts().then((f) => {
 account = f[0];
})

abi = JSON.parse('[{"inputs":[{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"bytes32","name":"_description","type":"bytes32"},{"internalType":"bytes32","name":"_videoLink","type":"bytes32"},{"internalType":"uint256","name":"_fundingGoal","type":"uint256"},{"internalType":"uint256","name":"_projectEndTime","type":"uint256"}],"name":"CreateProject","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"donateToProject","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"returnProjects","outputs":[{"components":[{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"bytes32","name":"description","type":"bytes32"},{"internalType":"bytes32","name":"videoLink","type":"bytes32"},{"internalType":"uint256","name":"fundingGoal","type":"uint256"},{"internalType":"uint256","name":"amountRaised","type":"uint256"},{"internalType":"uint256","name":"projectEndTime","type":"uint256"}],"internalType":"struct Projects.Project[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"}]')

contract = new web3.eth.Contract(abi);
contract.options.address = "0x99b8A97E39483C4e08D046d9639513BD10412191";
// update this contract address with your contract address

window.onload = DisplayProjects();
var numProjects = 0;

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
  numProjects = x.length;
  var bodyString = '';
  for(i = 0; i < x.length; i++) {
    bodyString += ('<tr><td>' + (i + 1) +
                   '</td><td>' + web3.utils.hexToAscii(x[i][0]) +
                   '</td><td>' + web3.utils.hexToAscii(x[i][1]) +
                   '</td><td>' + web3.utils.hexToAscii(x[i][2]) +
                   '</td><td>' + x[i][3] +
                   '</td><td>' + x[i][4] +
                   '</td><td>' + new Date(x[i][5] * 1000).toLocaleDateString() + '</td></tr>');
  }
  $('.projectsTable tbody').html(bodyString);
}

function DonationIsValid(index, amount) {
  if (index <= 0 || index > numProjects) {
    alert("Please enter a valid project number");
    return false;
  }
  if (amount <= 0) {
    alert("Please enter a donation amount greater than zero");
    return false;
  }
  return true;
}

function DonateToProject() {
  var projectNumber = document.getElementById("donate_index").value;
  var donationAmount = document.getElementById("donate_amount").value;

  if (DonationIsValid(projectNumber, donationAmount)) {
    contract.methods.donateToProject(donationAmount, projectNumber - 1).send({from: account, gas:1500000}).then((f) => console.log(f));
  }
}
