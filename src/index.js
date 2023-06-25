import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// i will change this later

import HomePage from './DemoHomePage/HomePage.js';
import NewHome from './DemoHomePage/NewHome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewHome />
  </React.StrictMode>
);

reportWebVitals();
