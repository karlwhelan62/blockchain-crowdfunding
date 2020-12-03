web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
var account;
web3.eth.getAccounts().then((f) => {
 account = f[0];
})

abi = JSON.parse('[{"inputs":[{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"bytes32","name":"description","type":"bytes32"},{"internalType":"bytes32","name":"videoLink","type":"bytes32"},{"internalType":"uint256","name":"fundingGoal","type":"uint256"},{"internalType":"uint256","name":"projectLength","type":"uint256"}],"name":"CreateProject","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"amountsRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"descriptions","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"donateToProject","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"fundingGoals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"goalMeet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"index","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"names","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectEndTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"returnProjects","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"videoLinks","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}]')

contract = new web3.eth.Contract(abi);
contract.options.address = "0x355A9D36602d2ecD680490a94c8f9d3E35daEC9F";

// This block sets the min length of a project to be 1 day
// Also stops users selcting dates in the past
var tomorrow = new Date();
var dd = tomorrow.getDate() + 1;
var mm = tomorrow.getMonth()+1;
var yyyy = tomorrow.getFullYear();
 if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

tomorrow = yyyy+'-'+mm+'-'+dd;
document.getElementById("projectLength").setAttribute("min", tomorrow);



function CreateProject() {

 var x = document.getElementById('project attributes');

 contract.methods.CreateProject(web3.utils.asciiToHex(x.elements[0].value),
                                web3.utils.asciiToHex(x.elements[1].value),
                                web3.utils.asciiToHex(x.elements[2].value),
                                x.elements[3].value,
                                Math.floor(x.elements[4].valueAsNumber / 1000)).send({from: account, gas:1500000}).then((f) => console.log(f))};
