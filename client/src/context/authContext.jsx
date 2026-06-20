import { createContext, useState, useEffect, useMemo } from "react";
import axiosInstance from "../api/axiosInstance.jsx";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");

      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to parse user from localStorage");
      localStorage.removeItem("user");
      return null;
    }
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Verify session on app load
  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const response = await axiosInstance.get("/auth/me");

        if (response.data.success) {
          setUser(response.data.user);

          localStorage.setItem(
            "user",
            JSON.stringify(response.data.user)
          );
        } else {
          setUser(null);
          localStorage.removeItem("user");
        }
      } catch (err) {
        setUser(null);
        localStorage.removeItem("user");
      } finally {
        setLoading(false);
      }
    };

    checkUserSession();
  }, []);

  // REGISTER
  const register = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post(
        "/auth/register",
        userData
      );

      if (response.data.success) {
        setUser(response.data.user);

        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        return { success: true };
      }
    } catch (err) {
      const errMsg =
        err.response?.data?.error ||
        err.response?.data?.errors?.[0] ||
        err.response?.data?.message ||
        "Registration failed";

      setError(errMsg);

      return {
        success: false,
        error: errMsg,
      };
    } finally {
      setLoading(false);
    }
  };

  // LOGIN
  const login = async (credentials) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post(
        "/auth/login",
        credentials
      );

      if (response.data.success) {
        setUser(response.data.user);

        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        return { success: true };
      }
    } catch (err) {
      const errMsg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        err.response?.data?.errors?.[0] ||
        "Login failed";

      setError(errMsg);

      return {
        success: false,
        error: errMsg,
      };
    } finally {
      setLoading(false);
    }
  };

  // LOGOUT
  const logout = async () => {
    setLoading(true);

    try {
      await axiosInstance.post("/auth/logout");
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setUser(null);
      localStorage.removeItem("user");
      setLoading(false);
    }
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      register,
      logout,
      setError,
    }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};