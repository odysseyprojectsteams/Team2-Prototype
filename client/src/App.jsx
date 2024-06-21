import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import './index.css';
import Register from './auth/Register';
import Login from './auth/Login';
import Dashboard from './pages/Dashboard';
import { useAuth } from './contexts/AuthContext';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Display the Dashboard at the root path without any authentication checks */}
        <Route
          path="/"
          element={<Dashboard />}
        />
        {/* Adjust login path to redirect to dashboard if already authenticated */}
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />}
        />
        {/* Ensure authenticated users can view the dashboard, or redirect to login */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        {/* Route for registration if not logged in */}
        <Route
          path="/register"
          element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
