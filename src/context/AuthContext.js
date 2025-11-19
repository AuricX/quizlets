import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: 'Student',
    email: 'student@example.com'
  });
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = (username, password) => {
    // Simple authentication - in real app, this would call an API
    setUser({ username, email: `${username}@example.com` });
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateProfile = (username, password) => {
    // Update user profile - in real app, this would call an API
    setUser({ ...user, username });
    return true;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated,
      login, 
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
