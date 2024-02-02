import React from 'react';
import ReactDOM from 'react-dom/client';

import { exampleData } from './helpers/exampleData.js';

import './main.css';

import updateColorScheme from './helpers/updateColorScheme.js';
import App from './App.jsx';

updateColorScheme();

if (!localStorage.getItem('projects')) {
  localStorage.setItem(JSON.stringify(exampleData));
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
