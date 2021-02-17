import React, { Component } from "react"
import Input from "./Input"
import "./CreateProjectPageBody.css"

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
      <div data-testid="CreateProjectPage">
      {this.props.willShowLoader && <span className="loader-wrapper">
                                        <h2>Block Mining..........</h2>
                                        <div class="loader"></div>
                                    </span>}
        <div className="wrapper">
          <div className="title">
            <h1>Create Project Form</h1>
          </div>
          <div className="table-responsive">
            <form className="project-form" onSubmit={this.props.createProject}>
              <div className="small-input-feilds">
                <Input handleChange={this.props.handleChange}
                       labelName="Project Name"
                       name= "projectName"
                       inputType="text"/>
                <Input handleChange={this.props.handleChange}
                       labelName="Video Link"
                       name = "projectVideoLink"
                       inputType="text"/>
                <Input handleChange={this.props.handleChange}
                       labelName="Funding Goal (Eth)"
                       name = "projectFundingGoal"
                       inputType="number"/>
                <Input handleChange={this.props.handleChange}
                       labelName="End Date"
                       name = "projectLength"
                       inputType="date"
                       minDate={this.getTomorrowsDate()}/>
              </div>
              <div className="large-input-feild">
                <Input handleChange={this.props.handleChange}
                       labelName="Project Description"
                       name = "projectDescription"
                       inputType="text"/>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateProjectPageBody
