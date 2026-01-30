import React, { useState, useEffect } from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import HeartHealthDashboard from './components/HeartHealthDashboard';
import { authService } from './services/authService';
import './styles/animations.css';

function App() {
  const [view, setView] = useState('login');
  const [user, setUser] = useState(null);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (token && savedUser && savedUser !== 'undefined' && savedUser !== 'null') {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setView('dashboard');
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.clear();
      }
    }
  }, []);

  const handleLoginSuccess = (response) => {
    console.log('Login success:', response);
    setUser(response.user);
    setView('dashboard');
  };

  const handleRegisterSuccess = () => {
    setView('login');
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    
    try {
      // Call logout API
      await authService.logout();
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout error:', error);
      // Continue with logout even if API call fails
    } finally {
      // Clear state and redirect to login
      setUser(null);
      setView('login');
      setLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen">
      {view === 'login' && (
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen py-12 px-4">
          <Login
            onSwitchToRegister={() => setView('register')}
            onLoginSuccess={handleLoginSuccess}
          />
        </div>
      )}
      
      {view === 'register' && (
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen py-12 px-4">
          <Register
            onSwitchToLogin={() => setView('login')}
            onRegisterSuccess={handleRegisterSuccess}
          />
        </div>
      )}
      
      {view === 'dashboard' && user && (
        <HeartHealthDashboard 
          user={user} 
          onLogout={handleLogout}
          loggingOut={loggingOut}
        />
      )}
    </div>
  );
}

export default App;