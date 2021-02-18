import React, { Component } from "react";
import "./HomePage.css"
import { MdSecurity } from 'react-icons/md'
import { FaHandshake } from 'react-icons/fa'
import { GiPathDistance } from 'react-icons/gi'

class HomePage extends Component {

  render() {

    return(
      <div className="home-page" data-testid="Homepage">
        <div data-testid="top-wrapper" className="top-wrapper">
          <div className="top-left-wrapper">
            <div className="app-info">
              <p>A fully decentralised crowdfunding platform on the Ethereum blockchain.</p>
              <h2>Connected to blockchain!</h2>
              <p>Your connected account is: {this.props.account}</p>
              </div>
           </div>
           <div className = "top-right-wrapper">
            <img src="ethereum-icon-2.jpg" alt="App Logo"/>
           </div>
        </div>
        <div className="title-wrapper">
          <h2>Why blockchain crowdfuding?</h2>
        </div>
        <div data-testid="middle-wrapper" className="middle-wrapper">
          <div className="middle-left-wrapper">
            <div className="box">
              <div className="heading-and-icon-wrapper">
                <h2>Secure</h2>
                <MdSecurity className="icon" />
              </div>
              <p>Ethreum is a large, decentralised and encrypted network. This keeps funds safe from malicious attacks and protects the platform form single point of failure</p>
            </div>
          </div>
          <div className="middle-center-wrapper">
            <div className="box">
              <div className="heading-and-icon-wrapper">
                <h2>No Middleman</h2>
                <FaHandshake className="icon" />
              </div>
              <p>Other crowdfunding platforms act as middle men you must trust to transfer raised funds appropriately. They also charge between 3-5 % of all raised funding to use their platform. With blockchain crowdfunding a smart contract handles the distribution of funds and there is no charge for using the platform.</p>
            </div>
          </div>
          <div className="middle-right-wrapper">
            <div className="box">
              <div className="heading-and-icon-wrapper">
                <h2>Traceable & Transparent</h2>
                <GiPathDistance className="icon" />
              </div>
              <p>Every transaction on the blockchain is transparent and traceable. Pledgers can see at all times where their funds are going and when they are transferred.</p>
            </div>
          </div>
        </div>
        <div data-testid="bottom-wrapper" className="bottom-wrapper">
          <div className="box">
            <h2>Total Ether Raised</h2>
            <p>{this.props.totalEthAmount} Eth</p>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;
