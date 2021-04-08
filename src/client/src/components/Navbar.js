import React, { Component } from "react"
import "./Header.css"

class Navbar extends Component {

  render() {
    if(this.props.currentPage === "Home") {
      return (
        <ul data-testid="homepage-active-navbar">
          <li className = "active" onClick={() => this.props.handlePageChange("Home")}>Home</li>
          <li onClick={() => this.props.handlePageChange("CreateProject")}>Create Project</li>
          <li onClick={() => this.props.handlePageChange("ViewProject")}>View Projects</li>
          <li onClick={() => this.props.handlePageChange("About")}>About</li>
        </ul>
      )
    }
    if (this.props.currentPage === "CreateProject") {
      return (
        <ul data-testid="create-project-page-active-navbar">
          <li onClick={() => this.props.handlePageChange("Home")}>Home</li>
          <li className = "active" onClick={() => this.props.handlePageChange("CreateProject")}>Create Project</li>
          <li onClick={() => this.props.handlePageChange("ViewProject")}>View Projects</li>
          <li onClick={() => this.props.handlePageChange("About")}>About</li>
        </ul>
      )
    }
    if (this.props.currentPage === "ViewProject") {
      return (
        <ul data-testid="view-projects-page-active-navbar">
          <li onClick={() => this.props.handlePageChange("Home")}>Home</li>
          <li onClick={() => this.props.handlePageChange("CreateProject")}>Create Project</li>
          <li className = "active" onClick={() => this.props.handlePageChange("ViewProject")}>View Projects</li>
          <li onClick={() => this.props.handlePageChange("About")}>About</li>
        </ul>
      )
    }
    return (
      <ul data-testid="about-page-active-navbar">
        <li onClick={() => this.props.handlePageChange("Home")}>Home</li>
        <li onClick={() => this.props.handlePageChange("CreateProject")}>Create Project</li>
        <li onClick={() => this.props.handlePageChange("ViewProject")}>View Projects</li>
        <li className = "active" onClick={() => this.props.handlePageChange("About")}>About</li>
      </ul>
    )
  }
}

export default Navbar
