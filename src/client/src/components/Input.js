import React, { Component } from "react";


class Input extends Component {
  render() {
    if (this.props.inputType === "number") {
      return (
        <div data-testid = "NumberInput">
          <label htmlFor={this.props.name}>{this.props.labelName}</label>
          <br/>
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
          <br/>
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
        <br/>
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
