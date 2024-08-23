import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //For the Link to work the Browser router must be defined
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
);

