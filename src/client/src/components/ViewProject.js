import React, { Component} from "react"
import Input from "./Input"

class ViewProject extends Component {

  render() {

    let projectInfo = this.props.project.projectInfo.split(",")
    let embededdVideoUrl = "https://www.youtube.com/embed/".concat(projectInfo[2])

    return (
      <div data-testid="ProjectObject" className="ProjectObject">
        <div className="project-name-wrapper">
          <h2>Project Name</h2>
          <h4>{projectInfo[0]}</h4>
        </div>
        <h3>Project Video</h3>
        <iframe src={embededdVideoUrl}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'/>
        <br/>
        <h3>Project Description</h3>
        <p>{projectInfo[1]}</p>
        <br/>
        <div className="project-info-wrapper">
          <div>
            <h3>Funding Goal</h3>
            <p>{this.props.project.fundingGoal} Eth</p>
          </div>
          <div>
            <h3>Amount Pledged</h3>
            <p>{this.props.project.amountRaised} Eth</p>
          </div>
          <div>
            <h3>End Date</h3>
            <p>{this.props.project.projectEndTime}</p>
          </div>
        </div>
        <br/>
        <Input handleChange = {this.props.handleChange}
               labelName = "Donation Amount"
               name = "donationAmount"
               inputType = "number"/>
        <br/>
        <button onClick={() => {this.props.donateToProject(this.props.project.key)}
        }>Donate</button>
      </div>
    )
  }
}

export default ViewProject
