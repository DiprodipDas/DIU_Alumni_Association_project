// src/context/AlumniAuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AlumniAuthContext = createContext();

export const useAlumniAuth = () => useContext(AlumniAuthContext);

export const AlumniAuthProvider = ({ children }) => {
  const [alumniUser, setAlumniUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Detect route changes

  const API_BASE = "http://localhost:8081";

  const checkAlumniAuth = async () => {
    try {
      setLoading(true); // Optional: brief loading state on navigation
      const res = await fetch(`${API_BASE}/api/alumni/me`, {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        setAlumniUser(data.alumni || data);
      } else {
        setAlumniUser(null);
      }
    } catch (err) {
      setAlumniUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Re-check authentication on every route change
  useEffect(() => {
    checkAlumniAuth();
  }, [location.pathname]);

  const logout = async () => {
    try {
      await fetch(`${API_BASE}/api/alumni/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setAlumniUser(null);
    }
  };

  const value = {
    alumniUser,
    isAlumniAuthenticated: !!alumniUser,
    alumniLoading: loading,
    alumniLogout: logout,
    refreshAlumni: checkAlumniAuth, // Optional: manual refresh
  };

  return (
    <AlumniAuthContext.Provider value={value}>
      {children}
    </AlumniAuthContext.Provider>
  );
};