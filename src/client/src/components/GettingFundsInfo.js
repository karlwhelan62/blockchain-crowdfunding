import React, { Component } from "react"
import "./GettingFundsInfo.css"

class GettingFundsInfo extends Component {

  render() {
    return(
      <div data-testid="getting-funds-info" className="getting-funds-info-background">
        <h2>How to get test ether</h2>
        <p>If you want to test out creating a new project or donating to an existing one you will need to get some test ether. To do this you can either request ether from the rinkeby faucet or from the creator of this application. The faucet will deliver funds instantaneously but requires you to make a social media post requesting funds. Recieving ether from the applications creator will take longer but there is no need to make a social media post.</p>
        <h2>Using the faucet</h2>
        <h3>Step 1</h3>
        <p>Copy your account address from metamask as shown below.</p>
        <img src="copy-account-address.png" alt="Shows how to copy account address in Metamask"/>
        <h3>Step 2</h3>
        <p>Make a post on either facebook or twitter which contains your account address and copy the link to this post. Example twitter post shown below.</p>
        <img src="example-tweet.png" alt="Shows an example tweet with a wallet address and how to copy a link to said tweet"/>
        <h3>Step 3</h3>
        <p>Go to the rinkeby faucet webpage <a href="https://faucet.rinkeby.io/" target="blank"> here </a> and paste the link to your social media post. You can then select how much test ether you wish to recieve as shown below and you should recieve the ether in a few seconds.</p>
        <img src="rinkeby-faucet-page.png" alt="Shows how to request ether from rinkeby faucet" />
        <h2>Alternatively</h2>
        <p>If you don't want to go through all of that you can simply email your account address to the applcaition creator, karl.whelan26@mail.dcu.ie, and your account will recieve 3.5 test ether. It may take some time to respond to your email.</p>
      </div>
    )
  }
}

export default GettingFundsInfo
