import React, { Component } from "react"


class Input extends Component {
  render() {
    if (!this.props.minDate) {
      return (
        <div>
          <label>{this.props.labelName}</label>
          <br/>
          <input type={this.props.inputType}
                 name={this.props.name}
                 onChange={this.props.handleChange}
                 required></input>
          <hr/>
        </div>
      );
    }
    return (
      <div>
        <label>{this.props.labelName}</label>
        <br/>
        <input type={this.props.inputType}
               name={this.props.name}
               min={this.props.minDate}
               onChange={this.props.handleChange}
               required></input>
        <hr/>
      </div>
    );
  }
}

export default Input
