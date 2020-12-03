// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.16 < 0.8.0;

contract Projects{

  // sets 2 state variables of type uint (insigned interger of 256 bits)
  // one for the funding goal and one for the ammount raised so far
  uint[] public fundingGoals;
  uint[] public amountsRaised;
  uint public index;
  bytes32[] public names;
  bytes32[] public descriptions;
  bytes32[] public videoLinks;
  // project end time in absolute unix timestamp format
  uint[] public projectEndTimes;
  // Set to true at the end, by default initialised to false
  // bool[] ended;

  // contructor code is only run when the contract is created
  function CreateProject(bytes32 name,
                         bytes32 description,
                         bytes32 videoLink,
                         uint fundingGoal,
                         uint projectLength) public {
    names.push(name);
    descriptions.push(description);
    videoLinks.push(videoLink);
    fundingGoals.push(fundingGoal);
    amountsRaised.push(0);
    projectEndTimes.push(projectLength);
    index ++;
  }

  function returnProjects() view public returns (bytes32[] memory,
                                                 bytes32[] memory,
                                                 bytes32[] memory,
                                                 uint[] memory,
                                                 uint[] memory,
                                                 uint[] memory,
                                                 uint) {
    return (names,
            descriptions,
            videoLinks,
            fundingGoals,
            amountsRaised,
            projectEndTimes,
            index);
  }

  function donateToProject(uint x, uint i) public {
    require(block.timestamp <= projectEndTimes[i], "Project has ended");
    amountsRaised[i] += x;
  }

  function goalMeet(uint i) view public returns (bool) {
    if (amountsRaised[i] >= fundingGoals[i]) {
      return true;
    }
    return false;
  }
}
