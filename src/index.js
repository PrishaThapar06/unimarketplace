import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import './App.css'
import { ClerkProvider } from '@clerk/clerk-react';

// const CLERK_PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

// if (!CLERK_PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }

ReactDOM.render(
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);
