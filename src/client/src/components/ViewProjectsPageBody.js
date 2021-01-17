import React, { Component } from "react"
import ViewProject from "./ViewProject"

class ViewProjectsPageBody extends Component {

  render() {
    if (!this.props.projectsMap) {
      return (<div>Loading Projects......</div>)
    }

    let projectsArray = []
    for(var project of this.props.projectsMap) {
       projectsArray.push(<ViewProject key={project.key}
                                       project={project}
                                       donateToProject={this.props.donateToProject}
                                       handleChange={this.props.handleChange}/>)
    }

    //const projectComponents = this.props.projectsMap.map(project =>
    //  <ViewProject project={project} />)

    return (
      <div>
        <h1>List of Projects</h1>
        <hr/>
        {projectsArray}
        <hr/>
      </div>
    )
  }
}

export default ViewProjectsPageBody
