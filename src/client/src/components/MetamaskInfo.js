import React, { Component } from "react"
import "./MetamaskInfo.css"

class MetamaskInfo extends Component {

  render() {
    return (
      <div data-testid="NoWeb3" className="metamask-background">
        <h2>Instructions</h2>
        <p>To use this application you must have the Metamask extension installed on your web browser.</p>
        <h3>If you have Metamask Installed</h3>
        <p>The extension should pop up allowing you to connect with an account. This may take a few seconds to load.</p>
        <h2>If you do not have Metamask installed please follow these instructions</h2>
        <p>Metamask is available for Chrome, Firefox and Microsoft Edge.</p>
        <div className="links-wrapper">
          <div className="left-link">
            <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="blank">Chrome Link</a>
          </div>
          <div className="center-link">
            <a href="https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/" target="blank">Firefox Link</a>
          </div>
          <div className="right-link">
            <a href="https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm?hl=en-US" target="blank">Edge Link</a>
          </div>
        </div>
        <h3>Step 1</h3>
        <p>Click the link relative to you and add the Metamask extension to your browser. When prompted select the option to create a new wallet.</p>
        <img src="create-new-wallet.png" alt="Shows how to create a new wallet in Metamask"/>
        <h3>Step 2</h3>
        <p>You can then choose to consent to usage data gathering or not and will be prompted to create a password. You will then be given the option to receive a mnemonic phrase which you can use to backup your account. Unless you plan to use this wallet on another device you can ignore this. </p>
        <img src="backup-phrase.png" alt="Shows the backup phrase section of the Metamask installation process." />
        <h3>Step 3</h3>
        <p>You will now be taken to the application and from here you should select the rinkeby test network from the dropdown menu as shown in the picture below.</p>
        <img src="select-rinkeby-network.png" alt="Shows how to select the rinkeby network in Metamask."/>
        <h3>Step 4</h3>
        <p>You are now connected to the rinkeby network and if you reload this page you can connect to the crowdfunding application. For instructions on how to receive test ether for your Metamask wallet see below or in the about section of the main application.</p>
      </div>
    )
  }
}

export default MetamaskInfo
