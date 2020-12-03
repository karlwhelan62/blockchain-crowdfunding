web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
var account;
web3.eth.getAccounts().then((f) => {
 account = f[0];
})

abi = JSON.parse('[{"inputs":[{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"bytes32","name":"description","type":"bytes32"},{"internalType":"bytes32","name":"videoLink","type":"bytes32"},{"internalType":"uint256","name":"fundingGoal","type":"uint256"},{"internalType":"uint256","name":"projectLength","type":"uint256"}],"name":"CreateProject","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"amountsRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"descriptions","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"donateToProject","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"fundingGoals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"goalMeet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"index","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"names","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectEndTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"returnProjects","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"videoLinks","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}]')

contract = new web3.eth.Contract(abi);
contract.options.address = "0x355A9D36602d2ecD680490a94c8f9d3E35daEC9F";
// update this contract address with your contract address

window.onload = DisplayProjects();

function DisplayProjects() {
  var x = contract.methods.returnProjects().call();
  x.then((f) => DisplayTable(f));
}

function DisplayTable(x) {
  var names = x[0];
  var descriptions= x[1];
  var videoLinks = x[2];
  var fundingGoals = x[3];
  var amountsRaised = x[4];
  var projectEndTimes = x[5];

  var bodyString = '';
  $.each(fundingGoals, function(index, goal){
    bodyString += ('<tr><td>' + index +
                   '</td><td>' + web3.utils.hexToAscii(names[index]) +
                   '</td><td>' + web3.utils.hexToAscii(descriptions[index]) +
                   '</td><td>' + web3.utils.hexToAscii(videoLinks[index]) +
                   '</td><td>' + goal +
                   '</td><td>' + amountsRaised[index] +
                   '</td><td>' + new Date(projectEndTimes[index] * 1000).toLocaleDateString() + '</td></tr>');
  });
  $('.projectsTable tbody').html(bodyString);
}

function DonateToProject() {
  var x = document.getElementById("donate_index");
  var y = document.getElementById("donate_amount");

  contract.methods.donateToProject(y.value, x.value).send({from: account, gas:1500000}).then((f) => console.log(f));
}
