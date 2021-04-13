import React from 'react';
import ReactDOM from 'react-dom';
import MetamaskInfo from '../MetamaskInfo';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

afterEach(cleanup)
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MetamaskInfo />, div);
})

it("renders About Page component correctly", () => {
  const { getByTestId,
          getByText} = render(<MetamaskInfo />);

  expect(getByTestId('no-metamask')).toHaveTextContent

  // first heading
  expect(getByText("Instructions")).not.toBeNull();

  // second heading
  expect(getByText("If you have Metamask Installed")).not.toBeNull();

  // third heading
  expect(getByText("If you do not have Metamask installed please follow these instructions")).not.toBeNull();

  expect(getByTestId('metamask-links')).toHaveTextContent

  // the steps for installing metamask headings
  expect(getByText("Step 1")).not.toBeNull();
  expect(getByText("Step 2")).not.toBeNull();
  expect(getByText("Step 3")).not.toBeNull();
  expect(getByText("Step 4")).not.toBeNull();
})
