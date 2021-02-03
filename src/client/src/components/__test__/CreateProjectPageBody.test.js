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
    "Enter the deatils of your proposed project bellow.")).not.toBeNull();

  // Name input
  expect(getByLabelText("The name of your project")).not.toBeNull();

  // Description input
  expect(getByLabelText("A breif description of the project")).not.toBeNull();

  // Video link input
  expect(getByLabelText("A link to your project video")).not.toBeNull();

  // Funding goal input
  expect(getByLabelText("The funding goal for this project (In Eth)")).not.toBeNull();

  // End date input
  expect(getByLabelText("The end date for the project")).not.toBeNull();
})
