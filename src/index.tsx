import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css'; // Import Tailwind CSS
import App from './App'; // Import the main application component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure this matches the <div id="root"> in index.html
);