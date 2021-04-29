import React, { Component } from "react";
import ToolTipIcon from "./ToolTipIcon.js"

class Input extends Component {
  render() {
    if(this.props.labelName === "Donation Amount") {
      return (
        <div data-testid = "donation-amount">
          <div className="label-and-icon-wrapper">
            <label htmlFor={this.props.name}>{this.props.labelName}</label>
            <ToolTipIcon labelName={this.props.labelName}/>
          </div>
          <input type={this.props.inputType}
                 step="any"
                 id={this.props.name}
                 name={this.props.name}
                 min="0"
                 onChange={this.props.handleChange}
                 required></input>
        </div>
      )
    }
    if (this.props.labelName === "Project Description") {
      return (
        <div data-testid="description-input">
          <label htmlFor={this.props.name}>{this.props.labelName}</label>
          <ToolTipIcon labelName={this.props.labelName}/>
          <textarea type={this.props.inputType}
                    id={this.props.name}
                    name={this.props.name}
                    onChange={this.props.handleChange}
                    maxLength="3000"
                    required></textarea>
        </div>
      )
    }
    if (this.props.inputType === "number") {
      return (
        <div data-testid = "NumberInput">
          <label htmlFor={this.props.name}>{this.props.labelName}</label>
          <ToolTipIcon labelName={this.props.labelName}/>
          <input type={this.props.inputType}
                 step="any"
                 id={this.props.name}
                 name={this.props.name}
                 min="0"
                 onChange={this.props.handleChange}
                 required></input>
        </div>
      );
    }
    if (!this.props.minDate) {
      return (
        <div data-testid = "TextInput">
          <label htmlFor={this.props.name}>{this.props.labelName}</label>
          <ToolTipIcon labelName={this.props.labelName}/>
          <input type={this.props.inputType}
                 id={this.props.name}
                 name={this.props.name}
                 onChange={this.props.handleChange}
                 required></input>
        </div>
      );
    }
    return (
      <div data-testid = "DateInput">
        <label htmlFor={this.props.name}>{this.props.labelName}</label>
        <ToolTipIcon labelName={this.props.labelName}/>
        <input type={this.props.inputType}
               id = {this.props.name}
               name={this.props.name}
               min={this.props.minDate}
               onChange={this.props.handleChange}
               required></input>
      </div>
    );
  }
}

export default Input;
