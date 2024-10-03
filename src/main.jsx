// main.jsx (or index.js)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import the Provider component
import App from './App'; // Import your main app component
import store from './store'; // Import the Redux store

// Render your app wrapped inside the Redux Provider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* This makes Redux store available to your app */}
    <App />
  </Provider>
);
