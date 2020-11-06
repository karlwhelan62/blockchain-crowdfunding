# School of Computing &mdash; Year 4 Project Proposal Form

## SECTION A

|                     |                   |
|---------------------|-------------------|
|Project Title:       | Trustworthy Crowdfunding     |
|Student 1 Name:      | Karl Whelan       |
|Student 1 ID:        | 15561423            |
|Project Supervisor:  | Geoff Hamilton          |


## SECTION B


### Introduction


Crowdfunding is currently a popular way for creators to raise money to finance projects. There is a trust issue with crowdfunding though. The majority of crowdfunding projects do not deliver on time and many never deliver at all. Every crowdfunding platform also charges fees, between 3 and 5 % of all raised funding, and they act as a middle man whom you must trust to transfer your donated funds appropriately.  

### Outline


The proposed project is to create a decentralised application, implemented using blockchain technology and smart contracts, that will act as a crowdfunding platform to allow creators to start projects and allow backers to invest in the project. 

This is a good solution for the problems with crowdfunding due to how traceable and transparent each donation and money transfer is on a blockchain. It adds an accountability trail and allows users to see if funds are being used to fulfill the explicit goals of the project. 

It also removes the need for a middle man as smart contracts with predifined rules can dictate how and when it is appopriate to transfer funds.

There are several different types or models of crowdfunding. The scope of this project initially will be to focus on the kickstarter model. This means creators can set funding goals, the featrues of the project and a time period in which to complete the project. They can also set rewards for certain donation sizes. Kickstarter only pays out after the fudning goal of the project is reached. If the funding goal of the project is exceeded the creator has the option to add more goals to improve the project (These are called “stretch goals”).

If time permits I can also move on to implementing a patreon model, which involves periodical payments to content creators in return for exclusive digital content and / or a gofundme model, which involves raising money for emergency and charitable causes.

The main technology used in this project is the blockchain and when deciding on the best one to use there were a number of considerations.

The blockchain needs to be public, to allow anyone to donate and view where funds are going. It needs to have a good track record of security as we are dealing with people's money. It needs to have smart contract functionality and it should have a good adoption rate and community support, so there are less likely to be bugs and it will be supported in the future. 

Scalability is also a big consideration.  Blockchains suffer from what is called “the scalability trilemma”. This means in order for a project to be scalable one of three considerations must be sacrificed in order to prioritise the other two. The three considerations are speed, security and
decentralisation. I think for this project speed is the least important. This is because
These are long term projects being financed. There is no need for transactions to be
instantaneous like they might need to be for trading stocks or gambling on sports or
similar.

I think the Ethereum blockchain best meets those requirements so i will be using that.

In a blockchain network every client browser communicates with its own instance of the
application, there is no main server. The user will need to download geth, which is the official
client software provided by Ethereum, and use it to download a light node which will download a copy of the blockchain and make
them a node on the network.

There is a javascript library called web3.js which can interact with geth nodes. I can use this to
build a web based front end, with HTML, CSS and javascript, that users can interact with. They can use this to create projects, set goals and donate to projects with the complexity of the blockchain being abstracted from them.

If time permits it could also be possible to have metrics for users to view the status of projects, donations or how funds are being spent. To get this info we can call read only functions coded within smart contracts to return values that then can be formatted in a visually interesting and informative way.

Smart contracts will be written and compiled into bytecode using Solidity which is a programming language for writing smart contracts. Safe development, deployment and testing will be done using ganache locally which is a personalised blockchain for rapid ethereum dapp development. Rinkeby is a test blockchain where all ether used is fake. This can be used as essentially a staging server.


### Background


The idea came from having a general interest in learning more about blockchains and decentralised application development. Good candidates for decentralised applications are applications that would benefit from, being decentralized in the first place, having a tamper proof log of activity and having the ability to securely transfer money or digital assets. I thought that a crowdfunding platform was a perfect candidate since it could benefit from all those things.

### Achievements


The project will allow creators to create projects, set funding goals and set rewards for donation sizes. It will also allow backers to invest in projects and see the status of ongoing projects. The users will be project creators who require funding to achieve their ideas and backers who are interested in funding these projects.

### Justification


Answered above.

### Programming language(s)


Solidity for writing and compiling smart contracts. Html, CSS and javascript for the web based front end that users interact with.

### Programming tools / Tech stack


The ethereum tech stack has 5 levels.

Level 1 is the Ethereum Virtual Machine which is a state machine running on thousands of nodes and accepts bytecode.

Level 2 is smart contracts. These are executable programs  written in specific programming languages, in this case solidity, and compiled into bytecode. Smart contracts provide public functions which dapps can interact with.

Level 3 is Ethereum nodes. These are computers running an ethereum client which allows them to connect to the blockchain. The client I will be using is geth.

Level 4 is client APIs that allow user end applications to communicate with the blockchain. I will be using a JavaScript API called web3.js that allows font ends to connect with geth nodes.

Level 5 is the user facing application. I will be making a web based front end using HTML, CSS and JavaScript. 

For development and testing i will be using ganache which is software allowing users to run a personal blockchain locally for testing purposes. I will also be using Rinkeby which is a public testing blockchain on which all currency is fake.


### Hardware


Downloading and running a blockchain node requires a large amount of SSD space.

### Learning Challenges


All the programming languages, tools and the tech stack are new to me so I will have to learn to work with them. It will also be a new challenge to prototype, test and deploy to the blockchain.

### Breakdown of work

Not applicable as this is an idividual project.
