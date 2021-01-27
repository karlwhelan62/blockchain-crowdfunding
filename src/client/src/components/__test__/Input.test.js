import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../Input';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

afterEach(cleanup)
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Input />, div)
})

it("renders text input component correctly", () => {
  const {getByTestId} = render(<Input />);
  expect(getByTestId('TextInput')).toHaveTextContent
})

it("renders number input component correctly", () => {
  const {getByTestId} = render(<Input inputType="number"/>);
  expect(getByTestId('NumberInput')).toHaveTextContent
})

it("renders date input component correctly", () => {
  const {getByTestId} = render(<Input minDate="01/01/21"/>);
  expect(getByTestId('DateInput')).toHaveTextContent
})
