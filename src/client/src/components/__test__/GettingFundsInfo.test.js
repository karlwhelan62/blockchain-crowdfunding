import React from 'react';
import ReactDOM from 'react-dom';
import GettingFundsInfo from '../GettingFundsInfo';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

afterEach(cleanup)
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GettingFundsInfo />, div);
})

it("renders About Page component correctly", () => {
  const { getByTestId,
          getByText} = render(<GettingFundsInfo />);

  expect(getByTestId('getting-funds-info')).toHaveTextContent

  // first heading
  expect(getByText("How to get test ether")).not.toBeNull();

  // second heading
  expect(getByText("Using the faucet")).not.toBeNull();

  // the steps for getting ether funds from the faucet
  expect(getByText("Step 1")).not.toBeNull();
  expect(getByText("Step 2")).not.toBeNull();
  expect(getByText("Step 3")).not.toBeNull();

  // last heading
  expect(getByText("Alternatively")).not.toBeNull();
})
