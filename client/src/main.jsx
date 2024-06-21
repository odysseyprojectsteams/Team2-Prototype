import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./index.css";

import { AuthProvider } from './contexts/AuthContext.jsx';
// Ensure you have imported TransactionsProvider if you're using it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>

        <App />
    
    </AuthProvider>
  </React.StrictMode>
);
