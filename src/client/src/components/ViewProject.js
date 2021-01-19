import React, { Component} from "react"
import Input from "./Input"

class ViewProject extends Component {

  render() {

    return (
      <div>
        <p>name: {this.props.project.name}</p>
        <br/>
        <p>description: {this.props.project.description}</p>
        <br/>
        <p>link: {this.props.project.videoLink}</p>
        <br/>
        <p>fundingGoal: {this.props.project.fundingGoal}</p>
        <br/>
        <p>end date: {this.props.project.projectEndTime}</p>
        <br/>
        <p>amount raised: {this.props.project.amountRaised}</p>
        <br/>
        <p>owner address: {this.props.project.creatorAccount}</p>
        <br/>
        <Input handleChange = {this.props.handleChange}
               labelName = "Donation Ammount"
               name = "donationAmount"
               inputType = "number"/>
        <button onClick={() => {this.props.donateToProject(this.props.project.key)}
        }>Donate</button>
        <hr/>
      </div>
    )
  }
}

export default ViewProject
