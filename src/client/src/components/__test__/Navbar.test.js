import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../Navbar';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"


afterEach(cleanup)
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Navbar />, div);
})

it("renders view projects page active navbar correctly", () => {
  const { getByTestId } = render(<Navbar />);

  expect(getByTestId('view-projects-page-active-navbar')).toHaveTextContent;
})

it("renders homepage active navbar correctly", () => {
  const { getByTestId } = render(<Navbar currentPage="Home"/>);

  expect(getByTestId('homepage-active-navbar')).toHaveTextContent;
})

it("renders create project page active navbar correctly", () => {
  const { getByTestId } = render(<Navbar currentPage="CreateProject"/>);

  expect(getByTestId('create-project-page-active-navbar')).toHaveTextContent;
})
