import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  // Initialize app data
  useEffect(() => {
    // Simulate fetching user data
    const fetchUserData = async () => {
      try {
        // In a real app, you would fetch from an API
        const userData = JSON.parse(localStorage.getItem('user')) || null;
        setUser(userData);
        
        // Fetch courses
        const coursesData = [
          // Course data would be here
        ];
        setCourses(coursesData);
      } catch (error) {
        console.error('Error loading app data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const addNotification = (notification) => {
    setNotifications([...notifications, notification]);
    // Auto-remove notification after 5 seconds
    setTimeout(() => {
      setNotifications(notifications.filter(n => n.id !== notification.id));
    }, 5000);
  };

  const value = {
    user,
    loading,
    courses,
    notifications,
    login,
    logout,
    addNotification,
    updateUser: setUser
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};