import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types';
import { validateEmail, validatePassword, validateName, generateId } from '../utils/validation';

const USERS_KEY = '@users';
const CURRENT_USER_KEY = '@current_user';

export const saveUsers = async (users: User[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users:', error);
    throw new Error('Failed to save user data');
  }
};

export const loadUsers = async (): Promise<User[]> => {
  try {
    const usersJson = await AsyncStorage.getItem(USERS_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
  } catch (error) {
    console.error('Error loading users:', error);
    return [];
  }
};

export const saveCurrentUser = async (user: User): Promise<void> => {
  try {
    await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.error('Error saving current user:', error);
    throw new Error('Failed to save session');
  }
};

export const loadCurrentUser = async (): Promise<User | null> => {
  try {
    const userJson = await AsyncStorage.getItem(CURRENT_USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  } catch (error) {
    console.error('Error loading current user:', error);
    return null;
  }
};

export const clearCurrentUser = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(CURRENT_USER_KEY);
  } catch (error) {
    console.error('Error clearing current user:', error);
  }
};

export const registerUser = async (name: string, email: string, password: string): Promise<User> => {
  // Validate inputs
  if (!validateEmail(email)) {
    throw new Error('Please enter a valid email address');
  }

  const nameError = validateName(name);
  if (nameError) {
    throw new Error(nameError);
  }

  const passwordError = validatePassword(password);
  if (passwordError) {
    throw new Error(passwordError);
  }

  // Check if user already exists
  const users = await loadUsers();
  const existingUser = users.find(user => user.email.toLowerCase() === email.toLowerCase());
  
  if (existingUser) {
    throw new Error('An account with this email already exists');
  }

  // Create new user
  const newUser: User = {
    id: generateId(),
    name: name.trim(),
    email: email.toLowerCase().trim(),
    password, // In production, this should be hashed
    createdAt: new Date().toISOString(),
  };

  // Save user
  users.push(newUser);
  await saveUsers(users);
  await saveCurrentUser(newUser);

  return newUser;
};

export const loginUser = async (email: string, password: string): Promise<User> => {
  // Validate email format
  if (!validateEmail(email)) {
    throw new Error('Please enter a valid email address');
  }

  if (!password.trim()) {
    throw new Error('Password is required');
  }

  // Find user
  const users = await loadUsers();
  const user = users.find(
    u => u.email.toLowerCase() === email.toLowerCase().trim() && u.password === password
  );

  if (!user) {
    throw new Error('Invalid email or password');
  }

  await saveCurrentUser(user);
  return user;
};

export const updateUserProfile = async (userId: string, updates: Partial<User>): Promise<User> => {
  const users = await loadUsers();
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    throw new Error('User not found');
  }

  // Validate email if being updated
  if (updates.email && !validateEmail(updates.email)) {
    throw new Error('Please enter a valid email address');
  }

  // Validate name if being updated
  if (updates.name) {
    const nameError = validateName(updates.name);
    if (nameError) {
      throw new Error(nameError);
    }
  }

  // Check if email is already taken by another user
  if (updates.email) {
    const emailExists = users.some(
      u => u.id !== userId && u.email.toLowerCase() === updates.email!.toLowerCase()
    );
    if (emailExists) {
      throw new Error('This email is already taken');
    }
  }

  // Update user
  const updatedUser = { ...users[userIndex], ...updates };
  users[userIndex] = updatedUser;
  
  await saveUsers(users);
  await saveCurrentUser(updatedUser);
  
  return updatedUser;
};