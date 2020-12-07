// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.16 < 0.8.0;
pragma experimental ABIEncoderV2;

contract Projects{

  // Defines a refrence type to define a project
  struct Project {
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
  function CreateProject(bytes32 _name,
                         bytes32 _description,
                         bytes32 _videoLink,
                         uint _fundingGoal,
                         uint _projectEndTime) public {

    numProjects++;
    projects[numProjects] = Project(
       {
         name: _name,
         description: _description,
         videoLink: _videoLink,
         fundingGoal: _fundingGoal,
         amountRaised: 0,
         projectEndTime: _projectEndTime
       }
    );
  }

  function returnProjects() public view returns (Project[] memory) {

    Project[] memory projectArray = new Project[](numProjects);

    for (uint i = 0; i < numProjects; i ++) {
      projectArray[i] = projects[i + 1];
    }

    return projectArray;
  }

  function donateToProject(uint x, uint i) public {
    require(block.timestamp <= projects[i + 1].projectEndTime, "Project has ended");
    projects[i + 1].amountRaised += x;
  }

//  function goalMeet(uint i) view public returns (bool) {
//    if (amountsRaised[i] >= fundingGoals[i]) {
//      return true;
//    }
//    return false;
//  }
}
