import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// All we need to do here is render the main component
//
// Depending on React Router conventions, <App> might also
// be wrapped in a main route -- however for now this is an SPA.
// TODO: add React Router

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
