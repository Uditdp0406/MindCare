import React, { useState, useEffect } from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/Dashboard';
import './styles/animations.css';

function App() {
  const [view, setView] = useState('login');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
      setView('dashboard');
    }
  }, []);

  const handleLoginSuccess = (response) => {
    setUser(response.user);
    setView('dashboard');
  };

  const handleRegisterSuccess = () => {
    setView('login');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setView('login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      {view === 'login' && (
        <Login
          onSwitchToRegister={() => setView('register')}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      
      {view === 'register' && (
        <Register
          onSwitchToLogin={() => setView('login')}
          onRegisterSuccess={handleRegisterSuccess}
        />
      )}
      
      {view === 'dashboard' && user && (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;