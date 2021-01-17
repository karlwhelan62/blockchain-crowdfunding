import React, { Component } from "react"
import "./Header.css"

class Header extends Component {
  render() {
    return (
      <header className="navbar">
       <title>Crowdfunding DApp</title>
       <link href='https://fonts.googleapis.com/css?family=Open Sans:400,700'
             rel='stylesheet'
             type='text/css'></link>
       <link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
             rel='stylesheet'
             type='text/css'></link>
      </header>
    )
  }
}

export default Header
