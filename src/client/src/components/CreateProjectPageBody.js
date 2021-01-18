import React, { Component } from "react"
import Input from "./Input"

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
        <h1>Create Project</h1>
        <div className="table-responsive">
          <form onSubmit={this.props.createProject}>
            <Input handleChange={this.props.handleChange}
                   labelName="Project Name"
                   name= "projectName"
                   inputType="text"/>
            <Input handleChange={this.props.handleChange}
                   labelName="Project Description"
                   name = "projectDescription"
                   inputType="text"/>
            <Input handleChange={this.props.handleChange}
                   labelName="Video Link"
                   name = "projectVideoLink"
                   inputType="text"/>
            <Input handleChange={this.props.handleChange}
                   labelName="Funding Goal"
                   name = "projectFundingGoal"
                   inputType="number"/>
            <Input handleChange={this.props.handleChange}
                   labelName="Project Length"
                   name = "projectLength"
                   inputType="date"
                   minDate={this.getTomorrowsDate()}/>
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateProjectPageBody
