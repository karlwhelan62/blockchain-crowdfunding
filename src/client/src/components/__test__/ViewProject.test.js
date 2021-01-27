import React from 'react';
import ReactDOM from 'react-dom';
import ViewProject from '../ViewProject';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

const TestProject = {videoLink: "link",
                     name: "name",
                     description: "description",
                     fundingGoal: 10,
                     projectEndTime: "10/02/21"}

afterEach(cleanup)
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ViewProject project = {TestProject} />, div)
})

it("renders project object correctly", () => {
  const {getByTestId} = render(<ViewProject project = {TestProject}/>);
  expect(getByTestId('ProjectObject')).toHaveTextContent
})
