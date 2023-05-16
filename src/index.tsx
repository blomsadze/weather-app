// hooks
import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App';

// utils
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
