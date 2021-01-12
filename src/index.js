import React from 'react';
import ReactDOM from 'react-dom';
import "./css/style.min.css";
import "./css/style.css";
import "./css/popup.css";
import App from '../src/components/App.js';
import { HashRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
