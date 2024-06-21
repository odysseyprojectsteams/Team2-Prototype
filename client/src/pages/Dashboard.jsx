import React from 'react';
import { Navbar, Welcome, Services, WelcomeToEn, Footer } from "../components"; // Ensure WelcomeToEn is correctly imported
import { useAuth } from '../contexts/AuthContext'; // Adjust the path as necessary

const Dashboard = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        {isAuthenticated ? (
          <>
            <Welcome />
            <Services />
          </>
        ) : (
          <WelcomeToEn />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
