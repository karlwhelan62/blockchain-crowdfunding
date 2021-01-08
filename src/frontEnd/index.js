web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
var account;
web3.eth.getAccounts().then((f) => {
 account = f[0];
})

abi = JSON.parse('[{"inputs":[{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"bytes32","name":"_description","type":"bytes32"},{"internalType":"bytes32","name":"_videoLink","type":"bytes32"},{"internalType":"uint256","name":"_fundingGoal","type":"uint256"},{"internalType":"uint256","name":"_projectEndTime","type":"uint256"}],"name":"createProject","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"donateToProject","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"returnProjects","outputs":[{"components":[{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"bytes32","name":"description","type":"bytes32"},{"internalType":"bytes32","name":"videoLink","type":"bytes32"},{"internalType":"uint256","name":"fundingGoal","type":"uint256"},{"internalType":"uint256","name":"amountRaised","type":"uint256"},{"internalType":"uint256","name":"projectEndTime","type":"uint256"}],"internalType":"struct Projects.Project[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"}]')

contract = new web3.eth.Contract(abi);
contract.options.address = "0x631F0b187fdD105Efd29fA12981Ad50CfbC8E8D5";

// This block sets the min length of a project to be 1 day
// Also stops users selcting dates in the past
var tomorrow = new Date();
var dd = tomorrow.getDate() + 1;
var mm = tomorrow.getMonth() + 1;
var yyyy = tomorrow.getFullYear();
 if(dd < 10){
        dd='0'+dd
    }
    if(mm < 10){
        mm='0'+mm
    }

tomorrow = yyyy+'-'+mm+'-'+dd;

document.getElementById("projectLength").setAttribute("min", tomorrow);

// validate form elements
function checkFormElements(formElements) {
  for (var i = 0; i < formElements.length; i++) {
    // find if feilds are left blank
    if (formElements[i].value == "") {
      alert("Please fill out all required feilds");
      return false;
    }
  }
  // check that funding goal is greater than zero
  if (formElements[3].value <= 0) {
    alert("Please add a funding goal that is greater than 0");
    return false;
  }
  return true;
}

function CreateProject() {

 var formElements = document.getElementById('project attributes');

 // send attributes to smart contract IF they are valid
 if (checkFormElements(formElements)) {
   contract.methods.createProject(web3.utils.asciiToHex(formElements.elements[0].value),
                                  web3.utils.asciiToHex(formElements.elements[1].value),
                                  web3.utils.asciiToHex(formElements.elements[2].value),
                                  formElements.elements[3].value,
                                  Math.floor(formElements.elements[4].valueAsNumber / 1000)).send({from: account, gas:1500000}).then((f) => console.log(f));
  }
}
