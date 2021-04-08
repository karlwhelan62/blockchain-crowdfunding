import React, { Component } from "react"
import "./AboutPage.css"

class AboutPage extends Component {

  render() {
    return (
      <div data-testid="About">
        <h2>About</h2>
        <p>This project is a decentralised application(Dapp), implemented using blockchain technology and smart contracts, which acts as a crowdfunding platform. This platform allows creators with new ideas for projects to advertise these projects to the communities that may then fund them.</p>
        <p>Crowdfunding is currently a popular way for creators to raise money but there are trust issues with the way most platforms are run that a blockchain can help solve. Most crowdfunding projects do not deliver on time and some never deliver at all. Every crowdfunding platform also charges fees, between 3 and 5% of all raised funding, and they act as a middle man you must trust to handle the transfer of funds appropriately.</p>
        <p>When crowdfunding on a blockchain every transaction is transparent and traceable, which helps with trust, and smart contracts with predefined rules manage the transfer of funds so there's no middleman to trust, and no charges for using the platform. The blockchain network is also large, decentralized and encrypted protecting it from malicious attackers and single points of failure. This level of security is important when managing people's money.</p>
        <p className="bold">This application is currently a proof of concept in that it is a fully functional platform but it is running on a test network, (the Rinkeby Testnet), where all the funds pledged and donated are fake. This allows users to interact with the platform without spending real money. The projects section is currently populated with example projects (taken from kickstarter) to give an idea of what the application will look like running on the Ethereum mainnet and populated with actual projects.</p>
        <h2>How to use this site</h2>
        <p>You can navigate to the various pages of this site to get a feel of the frontend for this application. If you have test funds in your Metamask wallet you can try creating a project or donating to an existing project to get a feel of how that works. For instructions on how to get test funds see below.</p>
      </div>
    )
  }
}

export default AboutPage
