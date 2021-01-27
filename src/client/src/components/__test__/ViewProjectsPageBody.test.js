import React from 'react';
import ReactDOM from 'react-dom';
import ViewProjectsPageBody from '../ViewProjectsPageBody';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

const TestProjectMapOneElement = [{videoLink: "link",
                                   name: "name",
                                   description: "description",
                                   fundingGoal: 10,
                                   projectEndTime: "10/02/21",
                                   key: 0}]

const TestProjectMapThreeElements = [{videoLink: "link 1",
                                      name: "name 1",
                                      description: "description 1",
                                      fundingGoal: 10,
                                      projectEndTime: "10/02/21",
                                      key: 0},
                                     {videoLink: "link 2",
                                      name: "name 2",
                                      description: "description 2",
                                      fundingGoal: 10,
                                      projectEndTime: "10/02/21",
                                      key: 1},
                                     {videoLink: "link 3",
                                      name: "name 3",
                                      description: "description 3",
                                      fundingGoal: 10,
                                      projectEndTime: "10/02/21",
                                      key: 2}]

afterEach(cleanup)
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ViewProjectsPageBody />, div)
})

it("renders loading message when project maps prop is null", () => {
  const {getByTestId} = render(<ViewProjectsPageBody projectsMap = {null}/>);
  expect(getByTestId('ViewProjectsNoMap')).toHaveTextContent
})

it("renders view projects component correctly with 1 project in the array", () => {
  const {getByTestId} = render(<ViewProjectsPageBody projectsMap = {TestProjectMapOneElement}/>);
  expect(getByTestId('ViewProjects')).toHaveTextContent
})

it("renders view projects component correctly with more than 1 project in the array", () => {
  const {getByTestId} = render(<ViewProjectsPageBody projectsMap = {TestProjectMapThreeElements}/>);
  expect(getByTestId('ViewProjects')).toHaveTextContent
})
