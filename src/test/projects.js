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
     var testFundingGoal = 10.000;
     var today = new Date();
     var testProjectLength = Math.floor(today / 1000) + 50000000;
     let result = await contractInstance.createProject(testName,
                                                       testDescription,
                                                       testVideoLink,
                                                       testFundingGoal,
                                                       testProjectLength);
     assert.equal(result.receipt.status, true, "Project creation failed");
   });

   it('Should create 3 more Projects correctly', async () => {
     let contractInstance = await Projects.deployed();
     var testName = web3.utils.asciiToHex("test name");
     var testDescription = web3.utils.asciiToHex("test description");
     var testVideoLink = web3.utils.asciiToHex("test video link");
     var testFundingGoal = 10.000;
     var today = new Date();
     var testProjectLength = Math.floor(today / 1000) + 50000000;
     let result1 = await contractInstance.createProject(testName,
                                                        testDescription,
                                                        testVideoLink,
                                                        testFundingGoal,
                                                        testProjectLength);
     let result2 = await contractInstance.createProject(testName,
                                                        testDescription,
                                                        testVideoLink,
                                                        testFundingGoal,
                                                        testProjectLength);
     let result3 = await contractInstance.createProject(testName,
                                                        testDescription,
                                                        testVideoLink,
                                                        testFundingGoal,
                                                        testProjectLength);
     assert.equal(result1.receipt.status, true, "Project creation failed");
     assert.equal(result2.receipt.status, true, "Project creation failed");
     assert.equal(result3.receipt.status, true, "Project creation failed");
   });

   it('Should return 4 projects in the correct format', async () => {
     let contractInstance = await Projects.deployed();
     let projectsMap = await contractInstance.returnProjects.call();
     assert.equal(projectsMap.length, 4, "Projects Map not the correct length");
     assert.equal(("creatorAccount" in projectsMap[1]),
                   true,
                   "Project missing creator account key");
     assert.equal(("name" in projectsMap[1]),
                   true,
                   "Project missing name key");
     assert.equal(("description" in projectsMap[1]),
                   true,
                   "Project missing description key");
     assert.equal(("videoLink" in projectsMap[1]),
                   true,
                   "Project missing video link key");
     assert.equal(("fundingGoal" in projectsMap[1]),
                   true,
                   "Project missing funding goal key");
     assert.equal(("amountRaised" in projectsMap[1]),
                   true,
                   "Project missing amount raised key");
     assert.equal(("projectEndTime" in projectsMap[1]),
                   true,
                   "Project missing project end time key");
   });

   it('Should donate 1 ether to each project', async () => {
     let contractInstance = await Projects.deployed();
     await contractInstance.donateToProject(0, {value: 1});
     await contractInstance.donateToProject(1, {value: 1});
     await contractInstance.donateToProject(2, {value: 1});
     await contractInstance.donateToProject(3, {value: 1});

     let projectsMap =  await contractInstance.returnProjects.call();
     assert.equal(projectsMap[0].amountRaised,
                  1,
                  "Ether not donated successfully to 1st project");
     assert.equal(projectsMap[1].amountRaised,
                  1,
                  "Ether not donated successfully to 2nd project");
     assert.equal(projectsMap[2].amountRaised,
                  1,
                  "Ether not donated successfully to 3rd project");
     assert.equal(projectsMap[3].amountRaised,
                  1,
                  "Ether not donated successfully to 4th project");
   });

   it('Should check that the balance of the contract is 4 eth', async () => {
     let contractInstance = await Projects.deployed();
     let balance = await contractInstance.getContractBalance.call();
     assert.equal(balance.toString(), "4", "Contract Balance not correct")
   })
 });
