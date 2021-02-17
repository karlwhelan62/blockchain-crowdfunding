import React from 'react';
import ReactDOM from 'react-dom';
import CreateProjectPageBody from '../CreateProjectPageBody';
import { render, cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

afterEach(cleanup)
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CreateProjectPageBody />, div)
})

it("renders create project page component correctly", () => {
  const { getByTestId,
          getByText,
          getByLabelText } = render(<CreateProjectPageBody/>);

  expect(getByTestId('CreateProjectPage')).toHaveTextContent

  expect(getByText(
    "Create Project Form")).not.toBeNull();

  // Name input
  expect(getByLabelText("Project Name")).not.toBeNull();

  // Description input
  expect(getByLabelText("Video Link")).not.toBeNull();

  // Video link input
  expect(getByLabelText("Funding Goal (Eth)")).not.toBeNull();

  // Funding goal input
  expect(getByLabelText("End Date")).not.toBeNull();

  // End date input
  expect(getByLabelText("Project Description")).not.toBeNull();
})
