import React, { Component } from "react"
import "./Header.css"
import Navbar from "./Navbar"

class Header extends Component {
  render() {

    return (
      <header data-testid="Header">
       <title>Crowdfunding DApp</title>
       <nav className="navbar">
        <div className= "appTitle">Blockchain Crowdfunding</div>
        <div onClick={() => {
          this.props.handleBurgerMenuClick(!this.props.burgerMenuClicked)
        }} className="burgerMenu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={"navbarLinks " + (this.props.burgerMenuClicked
                                          ? 'menuClicked' : '')}>
            <Navbar handlePageChange={this.props.handlePageChange}
                    currentPage={this.props.currentPage}/>
        </div>
       </nav>
      </header>
    )
  }
}

export default Header
