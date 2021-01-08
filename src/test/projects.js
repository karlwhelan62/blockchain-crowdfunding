const Projects = artifacts.require("Projects");

 contract('Projects', async accounts => {
   it('should deploy contract properly', async() => {
     let contractInstance = await Projects.deployed();
     assert(contractInstance.address !== "", "Contract is not deployed");
   });

   it('Should create a Project correctly', async () => {
     let contractInstance = await Projects.deployed();
     var testName = web3.utils.asciiToHex("test name");
     var testDescription = web3.utils.asciiToHex("test description");
     var testVideoLink = web3.utils.asciiToHex("test video link");
     var testFundingGoal = 900000;
     var today = new Date();
     var testProjectLength = Math.floor(today / 1000) + 50000000;
     let result = await contractInstance.createProject.call(testName,
                                                       testDescription,
                                                       testVideoLink,
                                                       testFundingGoal,
                                                       testProjectLength);
     assert(result == true, "Project creation failed");
   });
 });
