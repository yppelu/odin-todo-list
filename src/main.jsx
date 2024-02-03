import React from 'react';
import ReactDOM from 'react-dom/client';

import './main.css';

import updateColorScheme from './helpers/updateColorScheme.js';
import App from './App.jsx';

updateColorScheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
