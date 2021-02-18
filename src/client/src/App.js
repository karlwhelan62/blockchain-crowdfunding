import React, { Component } from "react";
import Projects from './contract/Projects.json'
import getWeb3 from "./getWeb3"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import CreateProjectPageBody from "./components/CreateProjectPageBody"
import ViewProjectsPageBody from "./components/ViewProjectsPageBody"

import "./App.css";

// instantiate web3 + contracts instants
class App extends Component {
  constructor() {
    super()
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleBurgerMenuClick = this.handleBurgerMenuClick.bind(this)
    this.createProject = this.createProject.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.retreiveProjects = this.retreiveProjects.bind(this)
    this.donateToProject = this.donateToProject.bind(this)
    this.getBalance = this.getBalance.bind(this)
    this.state = {currentPage: 'Home',
                  burgerMenuClicked: false,
                  totalEthAmount: null,
                  projectsMap: null,
                  web3: null,
                  accounts:null,
                  contracts:null,
                  donationAmount: null,
                  projectName: "",
                  projectDescription: "",
                  projectVideoLink: "",
                  projectFundingGoal: 0,
                  projectLength: 0,
                  willShowLoader: false};
  }

  // executed once when the app loads
  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();

      const networkId = await web3.eth.net.getId();
      const deployedNetwork =  Projects.networks[networkId];
      const instance = new web3.eth.Contract(
        Projects.abi,
        deployedNetwork && deployedNetwork.address,
      );

      this.setState({ web3, accounts, contract: instance });
      this.getBalance();
    } catch(error) {
      // catch errors
      alert(
        'Failed to load web3, accounts, or contract. check console for details',
      );
      console.error(error);
    }
  };

  retreiveProjects = async () => {
    let x =  await this.state.contract.methods.returnProjects().call()
    for(let i = 0; i < x.length; i ++) {
      x[i].name = this.state.web3.utils.hexToAscii(x[i].name).replace(/\0/g, '')
      x[i].description = this.state.web3.utils.hexToAscii(x[i].description).replace(/\0/g, '')
      x[i].videoLink = this.state.web3.utils.hexToAscii(x[i].videoLink).replace(/\0/g, '')
      x[i].fundingGoal = this.state.web3.utils.fromWei(x[i].fundingGoal, 'ether')
      x[i].amountRaised = this.state.web3.utils.fromWei(x[i].amountRaised, 'ether')
      x[i].projectEndTime = new Date(x[i].projectEndTime * 1000).toLocaleDateString()
      x[i].key = i
    }

    this.setState({
      projectsMap: x
    })
  }

  createProject(event) {
    event.preventDefault()
    let convertToDate = new Date(this.state.projectLength)

    try {

      let weiValue = this.state.web3.utils.toWei(this.state.projectFundingGoal, 'ether')
      let videoId =  this.state.projectVideoLink.replace('https://youtu.be/', '')

      this.state.contract.methods.createProject(
        this.state.web3.utils.asciiToHex(this.state.projectName),
        this.state.web3.utils.asciiToHex(this.state.projectDescription),
        this.state.web3.utils.asciiToHex(videoId),
        weiValue,
        Math.floor(convertToDate.valueOf() / 1000)).send(
          {from: this.state.accounts[0]})
          .then(this.setState({willShowLoader: true}))
          .then(f => this.setState({willShowLoader: false}))
          .then(f => alert("Project Creation Successful"))
          .catch(err => (
            alert("Project Creation Failed! See console for details"),
            console.log(err),
            this.setState({willShowLoader: false})
          ))
    } catch(error) {
      alert("project Creation Failed! See console for details")
      console.log(error)
    }
  }

  donateToProject = async (projectKey) => {
    try {

      let weiValue = this.state.web3.utils.toWei(this.state.donationAmount, 'ether')

      await this.state.contract.methods.donateToProject(projectKey).send(
        {from: this.state.accounts[0],
         value: weiValue})
        .then(this.setState({willShowLoader: true}))
        .then(f => this.setState({willShowLoader: false}))
        .then(f => alert("Project Donation Successful"))
        .catch(err => (
          alert("Project Doantion Failed! See console for details"),
          console.log(err),
          this.setState({willShowLoader: false})
        ))
    } catch(error) {
      alert("Project Donation Failed! See console for details")
      console.log(error)
    }

    this.setState({
      projectsMap: null
    })
    this.retreiveProjects()
  }

  handlePageChange(newPage) {
    if (newPage === "ViewProject") {
      this.retreiveProjects()
    }
    if (newPage === "Home") {
      this.getBalance()
    }
    this.setState({
      currentPage: newPage
    })
  }

  handleBurgerMenuClick(bool) {
    this.setState({
      burgerMenuClicked: bool
    })
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  getBalance() {
    this.state.contract.methods.getContractBalance().call().then(
      f => this.setState({
        totalEthAmount: this.state.web3.utils.fromWei(f, 'ether')
      })
    )
  }

  render() {

    if (!this.state.web3) {
      return <div data-testid="NoWeb3" className="App">
              <h2>Loading Web3, accounts, and contract......</h2>
             </div>;
    }
    if (this.state.currentPage === 'Home') {
      return (
        <div className="App">
          <Header handlePageChange={this.handlePageChange}
                  handleBurgerMenuClick={this.handleBurgerMenuClick}
                  currentPage={this.state.currentPage}
                  burgerMenuClicked={this.state.burgerMenuClicked}/>
          <HomePage account={this.state.accounts[0]}
                    getBalance={this.getBalance}
                    totalEthAmount={this.state.totalEthAmount} />
        </div>
      )
    }
    if (this.state.currentPage === "CreateProject") {
      return (
        <div className="App">
          <Header handlePageChange={this.handlePageChange}
                  handleBurgerMenuClick={this.handleBurgerMenuClick}
                  currentPage={this.state.currentPage}
                  burgerMenuClicked={this.state.burgerMenuClicked}/>
          <CreateProjectPageBody createProject={this.createProject}
                                 handleChange={this.handleChange}
                                 willShowLoader={this.state.willShowLoader}/>
        </div>
      );
    }
    return (
      <div className="App">
        <Header handlePageChange={this.handlePageChange}
                handleBurgerMenuClick={this.handleBurgerMenuClick}
                currentPage={this.state.currentPage}
                burgerMenuClicked={this.state.burgerMenuClicked}/>
        <ViewProjectsPageBody projectsMap={this.state.projectsMap}
                              donateToProject={this.donateToProject}
                              handleChange={this.handleChange}
                              willShowLoader={this.state.willShowLoader}/>
      </div>
    )
  }
}


export default App;
