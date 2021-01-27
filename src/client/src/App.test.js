import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App/>, div)
})

it("renders web 3 loading mesaage correctly", () => {
  const {getByTestId} = render(<App />);
  expect(getByTestId('NoWeb3')).toHaveTextContent
})
