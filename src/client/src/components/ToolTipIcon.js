import React, { Component } from "react";
import { FaInfoCircle } from 'react-icons/fa'
import Tippy from "@tippyjs/react"
import 'tippy.js/dist/tippy.css';

class ToolTipIcon extends Component {

  render () {

    const messages = {
      "Project Name": "This is the title of your project.",
      "Video Link": "This is a link to your project video. Only accepts youtube links currently.",
      "Funding Goal (Eth)": "This is your final funding goal in Ether. When this goal is reached the raised funds will be paid to your account.",
      "End Date": "This is date by which you aim to raise your funding goal. If the goal is not reached by this date the project will end and raised funds will be returned to the pledgers.",
      "Project Description": "Please provide a brief (<= 300 character) description of your project.",
      "Donation Amount": "This is the amount, in ether, that you pledge to donate to this project if the funding goal is reached by the end date of the project. If the project ends before that date your funds will be returned to you."
    }

    return (
      <Tippy content={messages[this.props.labelName]}
             trigger="mouseenter">
        <span className="tooltip">
          <FaInfoCircle className="info-icon"/>
        </span>
      </Tippy>
    )
  }
}

export default ToolTipIcon;
