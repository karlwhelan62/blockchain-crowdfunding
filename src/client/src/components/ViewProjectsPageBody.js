import React, { Component } from "react"
import ViewProject from "./ViewProject"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ViewProjectsPageBody.css"

// Styling arrows to click bewtweem projects.
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "100px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "100px", zIndex: 1 }}
      onClick={onClick}
    />
  );
}

class ViewProjectsPageBody extends Component {

  render() {

    // The options for the project slideshow.
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      SlidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }

    if (!this.props.projectsMap) {
      return (<div data-testid="ViewProjectsNoMap">Loading Projects......</div>)
    }

    // Build and display a list of projects. only display active projects.
    let projectsArray = []
    for(var project of this.props.projectsMap) {
       if (project.projectIsOver === false) {
         projectsArray.push(<ViewProject key={project.key}
                                         project={project}
                                         donateToProject={this.props.donateToProject}
                                         handleChange={this.props.handleChange}/>)
       }
    }

    return (
      <div className="view-project-background" data-testid="ViewProjects">
        {this.props.willShowLoader && <span>
                                          <h2>Block Mining..........</h2>
                                          <div className="loader"></div>
                                      </span>}
        <Slider {...settings}>
          {projectsArray}
        </Slider>
      </div>
    )
  }
}

export default ViewProjectsPageBody
