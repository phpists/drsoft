import React from 'react';
import ReactDOM from 'react-dom';
import "./css/style.min.css";
import "./css/style.css";
import App from '../src/components/App.js';
import { BrowserRouter as Router } from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
