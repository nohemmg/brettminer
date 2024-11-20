import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppProvider from './AppProvider';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);


reportWebVitals();
