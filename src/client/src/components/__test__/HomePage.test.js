import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../HomePage';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

afterEach(cleanup)
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HomePage />, div);
})

it("renders the top wrapper and it's content correctly", () => {
  const { getByTestId } = render(<HomePage />);
  expect(getByTestId('top-wrapper')).toHaveTextContent;
})

it("renders the middle wrapper and it's content correctly", () => {
  const { getByTestId } = render(<HomePage />);
  expect(getByTestId('middle-wrapper')).toHaveTextContent;
})

it("renders the bottom wrapper and it's content correctly", () => {
  const { getByTestId } = render(<HomePage />);
  expect(getByTestId('bottom-wrapper')).toHaveTextContent;
})
