import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

afterEach(cleanup)
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header/>, div);
})

it("renders header correctly", () => {
  const { getByTestId, getByText } = render(<Header />);

  expect(getByTestId('Header')).toHaveTextContent;
  expect(getByText("Crowdfunding DApp")).not.toBeNull();
  expect(getByText("Blockchain Crowdfunding")).not.toBeNull();
})
