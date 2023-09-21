import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
// Adding bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
