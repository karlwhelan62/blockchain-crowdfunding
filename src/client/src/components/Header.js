import React, { Component } from "react"
import "./Header.css"

class Header extends Component {
  render() {
    return (
      <header data-testid="Header" className="navbar">
       <title>Crowdfunding DApp</title>
       <div className ="HeadingContainer">
         <h1>Blockchain Crowdfunding</h1>
       </div>
      </header>
    )
  }
}

export default Header
