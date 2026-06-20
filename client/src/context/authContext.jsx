import { createContext, useState, useEffect, useMemo } from 'react';
import axiosInstance from '../api/axiosInstance.jsx'

// Create the core context
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Optional: Check if a user session exists on app mount/refresh
    useEffect(() => {
        const checkUserSession = async () => {
            try {
                // Assuming you have a /me or /profile endpoint to verify the cookie
                const response = await axiosInstance.get('/auth/me');
                if (response.data.success) {
                    setUser(response.data.user);
                }
            } catch (err) {
                // If token is expired or missing, user stays null gracefully
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkUserSession();
    }, []);

    // 1. REGISTER ACTION
    const register = async (userData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.post('/auth/register', userData);
            if (response.data.success) {
                setUser(response.data.user);
                return { success: true };
            }
        } catch (err) {
            const errMsg = err.response?.data?.error || err.response?.data?.errors?.[0] || "Registration failed";
            setError(errMsg);
            return { success: false, error: errMsg };
        } finally {
            setLoading(false);
        }
    };

    // 2. LOGIN ACTION
    const login = async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.post('/auth/login', credentials);
            if (response.data.success) {
                setUser(response.data.user);
                return { success: true };
            }
        } catch (err) {

            const errMsg = err.response?.data?.message || err.response?.data?.errors[0] || "Login failed";
            setError(errMsg);
            return { success: false, error: errMsg };
        } finally {
            setLoading(false);
        }
    };

    // 3. LOGOUT ACTION
    const logout = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.post('/auth/logout');
            if (response.data.success) {
                setUser(null); // Clear local global state
                return { success: true };
            }
        } catch (err) {
            console.error("Logout failed:", err);
        } finally {
            setUser(null)
            setLoading(false);
        }
    };

    const value = useMemo(() => ({
        user,
        loading,
        error,
        login,
        register,
        logout,
        setError
    }), [user, loading, error]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};