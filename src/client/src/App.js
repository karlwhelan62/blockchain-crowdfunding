import React, { Component } from "react";
import Projects from './contract/Projects.json'
import getWeb3 from "./getWeb3"
import Header from "./components/Header"
import CreateProjectPageBody from "./components/CreateProjectPageBody"
import ViewProjectsPageBody from "./components/ViewProjectsPageBody"

import "./App.css";

// instantiate web3 + contracts instants
class App extends Component {
  constructor() {
    super()
    this.handleButton1Click = this.handleButton1Click.bind(this)
    this.handleButton2Click = this.handleButton2Click.bind(this)
    this.createProject = this.createProject.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.retreiveProjects = this.retreiveProjects.bind(this)
    this.donateToProject = this.donateToProject.bind(this)
  }
  state = {pagenumber:0,
           projectsMap: null,
           web3: null,
           accounts:null,
           contracts:null,
           donationAmount: null,
           doantionKey: null,
           projectName: "",
           projectDescription: "",
           projectVideoLink: "",
           projectFundingGoal: 0,
           projectLength: 0};

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
      this.state.contract.methods.createProject(
        this.state.web3.utils.asciiToHex(this.state.projectName),
        this.state.web3.utils.asciiToHex(this.state.projectDescription),
        this.state.web3.utils.asciiToHex(this.state.projectVideoLink),
        this.state.projectFundingGoal,
        Math.floor(convertToDate.valueOf() / 1000)).send(
          {from: this.state.accounts[0], gas:1500000})
          .then(f => alert("Project Creation Successful"))
          .catch(err => (
            alert("Project Creation Failed! See console for details"),
            console.log(err)
          ))
    } catch(error) {
      alert("project Creation Failed! See console for details")
      console.log(error)
    }
  }

  donateToProject = async (projectKey) => {

    try {
      await this.state.contract.methods.donateToProject(
        this.state.donationAmount, projectKey).send({from: this.state.accounts[0],
                                                     gas:1500000})
        .then(f => alert("Project Donation Successful"))
        .catch(err => (
          alert("Project Doantion Failed! See console for details"),
          console.log(err)
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


  handleButton1Click() {
    this.setState(prevState => {
      if(prevState.pagenumber === 0) {
        return {pagenumber: 1}
      }
      return {pagenumber: 0}
    })
  }

  handleButton2Click() {
    this.setState(prevState => {
      if(prevState.pagenumber === 0) {
        this.retreiveProjects()
        return {pagenumber: 2}
      }
      return {pagenumber: 0}
    })
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {

    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract......</div>;
    }
    if (this.state.pagenumber === 0) {
      return (
        <div className="App">
          <Header />
          <button onClick={this.handleButton1Click}>Create Project</button>
          <hr/>
          <button onClick={this.handleButton2Click}>View Projects</button>
          <hr/>
          <h1>Connected to metasmask!</h1>
          <p>Your connected account is: {this.state.accounts[0]}</p>
          <hr/>
        </div>
      )
    }
    if (this.state.pagenumber === 1) {
      return (
        <div className="App">
          <Header />
          <button onClick={this.handleButton1Click}>Back</button>
          <CreateProjectPageBody createProject={this.createProject}
                                 handleChange={this.handleChange}/>
        </div>
      );
    }
    return (
      <div className="App">
        <Header />
        <button onClick={this.handleButton2Click}>Back</button>
        <ViewProjectsPageBody projectsMap={this.state.projectsMap}
                              donateToProject={this.donateToProject}
                              handleChange={this.handleChange}/>
      </div>
    )
  }
}


export default App;
