import React, { Component } from "react"
import "./Header.css"

class Navbar extends Component {

  render() {
    if(this.props.currentPage === "Home") {
      return (
        <ul>
          <li className = "active" onClick={() => this.props.handlePageChange("Home")}>Home</li>
          <li onClick={() => this.props.handlePageChange("CreateProject")}>Create Project</li>
          <li onClick={() => this.props.handlePageChange("ViewProject")}>View Projects</li>
        </ul>
      )
    }
    if (this.props.currentPage === "CreateProject") {
      return (
        <ul>
          <li onClick={() => this.props.handlePageChange("Home")}>Home</li>
          <li className = "active" onClick={() => this.props.handlePageChange("CreateProject")}>Create Project</li>
          <li onClick={() => this.props.handlePageChange("ViewProject")}>View Projects</li>
        </ul>
      )
    }
    return (
      <ul>
        <li onClick={() => this.props.handlePageChange("Home")}>Home</li>
        <li onClick={() => this.props.handlePageChange("CreateProject")}>Create Project</li>
        <li className = "active" onClick={() => this.props.handlePageChange("ViewProject")}>View Projects</li>
      </ul>
    )
  }
}

export default Navbar
