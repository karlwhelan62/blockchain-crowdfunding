import React, { Component } from "react"
import Input from "./Input"
import "../App.css"

class CreateProjectPageBody extends Component {

  getTomorrowsDate() {
    let tomorrow = new Date();
    let dd = tomorrow.getDate() + 1;
    let mm = tomorrow.getMonth() + 1;
    const yyyy = tomorrow.getFullYear();
     if(dd < 10){
            dd='0'+dd
        }
        if(mm < 10){
            mm='0'+mm
        }

    tomorrow = yyyy+'-'+mm+'-'+dd;
    return tomorrow;
  }



  render() {
    return (
      <div>
        <p>Enter the deatils of your proposed project bellow.</p>
        <div className="table-responsive">
          <form onSubmit={this.props.createProject}>
            <Input handleChange={this.props.handleChange}
                   labelName="The name of your project"
                   name= "projectName"
                   inputType="text"/>
            <Input handleChange={this.props.handleChange}
                   labelName="A breif description of the project"
                   name = "projectDescription"
                   inputType="text"/>
            <Input handleChange={this.props.handleChange}
                   labelName="A link to your project video"
                   name = "projectVideoLink"
                   inputType="text"/>
            <Input handleChange={this.props.handleChange}
                   labelName="The funding goal for this project (In Eth)"
                   name = "projectFundingGoal"
                   inputType="number"/>
            <Input handleChange={this.props.handleChange}
                   labelName="The end date for the project"
                   name = "projectLength"
                   inputType="date"
                   minDate={this.getTomorrowsDate()}/>
            <br/>
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateProjectPageBody
