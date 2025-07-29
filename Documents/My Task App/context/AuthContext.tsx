import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';
import { registerUser, loginUser, loadCurrentUser, clearCurrentUser, updateUserProfile } from '../services/authService';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await loadCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Error loading user:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const loggedInUser = await loginUser(email, password);
      setUser(loggedInUser);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const register = async (name: string, email: string, password: string): Promise<void> => {
    try {
      const newUser = await registerUser(name, email, password);
      setUser(newUser);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await clearCurrentUser();
      setUser(null);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const updateProfile = async (updates: Partial<User>): Promise<void> => {
    if (!user) {
      throw new Error('No user logged in');
    }

    try {
      const updatedUser = await updateUserProfile(user.id, updates);
      setUser(updatedUser);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};