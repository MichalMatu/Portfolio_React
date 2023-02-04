import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// impot BrowserRouter to wrap the App component and pass it to the ReactDOM.render method
import {BrowserRouter} from 'react-router-dom';

// ReactDom for rendering the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

