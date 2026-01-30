const API_BASE_URL = 'http://localhost:4000/api/v1';

export const authService = {
  register: async (data) => {
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || result.message || 'Registration failed');
      }
      
      return result.data || result;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },
  
  login: async (data) => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || result.message || 'Login failed');
      }
      
      const { token, user } = result.data;
      return { token, user };
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('No token found');
      }

      const response = await fetch(`${API_BASE_URL}/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || result.message || 'Logout failed');
      }
      
      // Clear localStorage regardless of API response
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      return result;
    } catch (error) {
      console.error('Logout error:', error);
      // Still clear localStorage even if API call fails
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      throw error;
    }
  },

  getProfile: async (token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || result.message || 'Failed to fetch profile');
      }
      
      return result.data || result;
    } catch (error) {
      console.error('Get profile error:', error);
      throw error;
    }
  },

  getUser: async (token, userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || result.message || 'Failed to fetch user');
      }
      
      return result.data || result;
    } catch (error) {
      console.error('Get user error:', error);
      throw error;
    }
  }
};