import React, { Component} from "react"
import Input from "./Input"

class ViewProject extends Component {

  render() {

    /* we have stored the project info has a list in IFPS and it's returned
    As a string. We want to split this string on commas now to convert it back
    to an array but in order to account for commas in the description we should
    only split on the first 2 occurences of a comma. These 3 lines will do that
    for us.*/
    let projectInfo = this.props.project.projectInfo.split(",")
    let projectInfoSpliced = projectInfo.splice(0, 2)
    projectInfoSpliced.push(projectInfo.join(","))

    let embededdVideoUrl = "https://www.youtube.com/embed/".concat(projectInfoSpliced[1])

    return (
      <div data-testid="ProjectObject" className="ProjectObject">
        <div className="project-name-wrapper">
          <h2>Project Name</h2>
          <h4>{projectInfoSpliced[0]}</h4>
        </div>
        <h3>Project Video</h3>
        <iframe src={embededdVideoUrl}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'/>
        <div className="project-description-wrapper">
          <h3>Project Description</h3>
          <p>{projectInfoSpliced[2]}</p>
        </div>
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
