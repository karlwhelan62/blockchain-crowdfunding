// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.0 < 0.8.0;
pragma experimental ABIEncoderV2;

// Importing OpenZeppelin's SafeMath Implementation
import './SafeMath.sol';

contract Projects{

  using SafeMath for uint256;
  // Defines a refrence type to define a project
  struct Project {
    address creatorAccount;
    bytes32 name;
    bytes32 description;
    bytes32 videoLink;
    uint fundingGoal;
    uint amountRaised;
    uint projectEndTime;
  }

  // number of projectsTabl
  // used as an donate_index
  uint numProjects;

  // maps an id number to a project
  mapping (uint => Project) projects;

  // Set to true at the end, by default initialised to false
  // bool[] ended;

  // contructor code is only run when the contract is created
  function createProject(bytes32 _name,
                         bytes32 _description,
                         bytes32 _videoLink,
                         uint _fundingGoal,
                         uint _projectEndTime) public payable returns (bool){

    numProjects++;
    projects[numProjects] = Project(
       {
         creatorAccount: msg.sender,
         name: _name,
         description: _description,
         videoLink: _videoLink,
         fundingGoal: _fundingGoal,
         amountRaised: 0,
         projectEndTime: _projectEndTime
       }
    );
    return true;
  }

  function returnProjects() public view returns (Project[] memory) {

    Project[] memory projectArray = new Project[](numProjects);

    for (uint i = 0; i < numProjects; i ++) {
      projectArray[i] = projects[i + 1];
    }

    return projectArray;
  }

  function donateToProject(uint key) public payable returns (bool){
    require(block.timestamp <= projects[key + 1].projectEndTime, "Project has ended");
    projects[key + 1].amountRaised = projects[key + 1].amountRaised.add(msg.value);
    return true;
  }

  function getContractBalance() public view returns (uint) {
    return address(this).balance;
  }

//  function goalMeet(uint i) view public returns (bool) {
//    if (amountsRaised[i] >= fundingGoals[i]) {
//      return true;
//    }
//    return false;
//  }
}
