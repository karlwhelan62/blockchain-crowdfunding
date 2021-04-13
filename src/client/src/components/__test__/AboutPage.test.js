import React from 'react';
import ReactDOM from 'react-dom';
import AboutPage from '../AboutPage';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

afterEach(cleanup)
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AboutPage />, div);
})

it("renders About Page component correctly", () => {
  const { getByTestId,
          getByText} = render(<AboutPage/>);

  expect(getByTestId('About')).toHaveTextContent

  // first heading
  expect(getByText("About")).not.toBeNull();

  // second heading
  expect(getByText("How to use this site")).not.toBeNull();
})
