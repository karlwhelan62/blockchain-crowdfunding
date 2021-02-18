import React from 'react';
import ReactDOM from 'react-dom';
import ToolTipIcon from '../ToolTipIcon';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

afterEach(cleanup)
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ToolTipIcon />, div);
})
