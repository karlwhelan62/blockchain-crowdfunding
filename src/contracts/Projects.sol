// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.0 < 0.8.0;
pragma experimental ABIEncoderV2;

// Importing OpenZeppelin's SafeMath Implementation
import './SafeMath.sol';

contract Projects{

  using SafeMath for uint256;

  // An iterable structure to keep track of a projects attributes
  struct Project {
    address payable creatorAccount;
    string projectInfoHash;
    uint fundingGoal;
    uint amountRaised;
    uint projectEndTime;
    bool projectIsOver;
  }

  // An iterable structure to keep track of all donations to a project
  struct Donations {
    mapping (address => uint) donationAmounts;
    address payable [] addressArray;
  }

  // number of projects
  // used as an donate_index
  uint numProjects;

  // maps an id number to a project
  mapping (uint => Project) projects;

  //maps an id number to a projects donation information
  mapping (uint => Donations) allDonations;

  // Set to true at the end, by default initialised to false
  // bool[] ended;

  // contructor code is only run when the contract is created
  function createProject(string memory _projectInfoHash,
                         uint _fundingGoal,
                         uint _projectEndTime) public payable returns (bool){

    projects[numProjects] = Project(
       {
         creatorAccount: msg.sender,
         projectInfoHash: _projectInfoHash,
         fundingGoal: _fundingGoal,
         amountRaised: 0,
         projectEndTime: _projectEndTime,
         projectIsOver: false
       }
    );

    allDonations[numProjects] = Donations(
      {
          addressArray: new address payable [](0)
      }
    );

    numProjects++;

    return true;
  }

  function returnProjects() public view returns (Project[] memory) {

    Project[] memory projectArray = new Project[](numProjects);

    for (uint i = 0; i < numProjects; i ++) {
      projectArray[i] = projects[i];
    }

    return projectArray;
  }

  function donateToProject(uint key) public payable returns (bool){
    require(msg.sender != projects[key].creatorAccount);
    allDonations[key].addressArray.push(msg.sender);
    allDonations[key].donationAmounts[msg.sender] = allDonations[key].donationAmounts[msg.sender].add(msg.value);
    projects[key].amountRaised = projects[key].amountRaised.add(msg.value);
    if (projectHasEnded(key)) {
      projects[key].projectIsOver = true;
      payRefunds(key);
    }
    if (fundingGoalReached(key)) {
      projects[key].projectIsOver = true;
      payOut(key);
    }
    return true;
  }

  function projectHasEnded(uint key) public view returns (bool) {
    if (block.timestamp >= projects[key].projectEndTime) {
      return true;
    }
    return false;
  }

  function fundingGoalReached(uint key) public view returns (bool) {
    if (projects[key].amountRaised >= projects[key].fundingGoal) {
      return true;
    }
    return false;
  }

  function payOut(uint key) internal returns (bool) {
    projects[key].creatorAccount.send(projects[key].amountRaised);
    return true;
  }

  function payRefunds(uint key) internal returns (bool) {

    for (uint i = 0; i < allDonations[key].addressArray.length; i ++) {
      allDonations[key].addressArray[i].send(allDonations[key].donationAmounts[allDonations[key].addressArray[i]]);
      allDonations[key].donationAmounts[allDonations[key].addressArray[i]] = 0;
    }

    return true;
  }

  function getContractBalance() public view returns (uint) {
    return address(this).balance;
  }
}
