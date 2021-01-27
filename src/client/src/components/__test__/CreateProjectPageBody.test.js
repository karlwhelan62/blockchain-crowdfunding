import React from 'react';
import ReactDOM from 'react-dom';
import CreateProjectPageBody from '../CreateProjectPageBody';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

afterEach(cleanup)
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CreateProjectPageBody />, div)
})

it("renders create project page component correctly", () => {
  const {getByTestId} = render(<CreateProjectPageBody/>);
  expect(getByTestId('CreateProjectPage')).toHaveTextContent
})
