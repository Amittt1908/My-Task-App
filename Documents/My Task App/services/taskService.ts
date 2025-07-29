import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task, TaskStats } from '../types';
import { generateId } from '../utils/validation';
import { scheduleTaskNotification, cancelNotification } from './notificationService';

const TASKS_KEY = '@tasks';

export const saveTasks = async (tasks: Task[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks:', error);
    throw new Error('Failed to save tasks');
  }
};

export const loadTasks = async (): Promise<Task[]> => {
  try {
    const tasksJson = await AsyncStorage.getItem(TASKS_KEY);
    return tasksJson ? JSON.parse(tasksJson) : [];
  } catch (error) {
    console.error('Error loading tasks:', error);
    return [];
  }
};

export const createTask = async (
  userId: string,
  taskData: Omit<Task, 'id' | 'createdAt' | 'userId' | 'notificationId'>
): Promise<Task> => {
  try {
    // Schedule notification
    const notificationId = await scheduleTaskNotification(taskData.title, taskData.dueDate);
    
    const newTask: Task = {
      id: generateId(),
      ...taskData,
      userId,
      createdAt: new Date().toISOString(),
      notificationId: notificationId || undefined,
    };

    const tasks = await loadTasks();
    tasks.push(newTask);
    await saveTasks(tasks);
    
    return newTask;
  } catch (error) {
    console.error('Error creating task:', error);
    throw new Error('Failed to create task');
  }
};

export const updateTask = async (taskId: string, updates: Partial<Task>): Promise<Task> => {
  try {
    const tasks = await loadTasks();
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex === -1) {
      throw new Error('Task not found');
    }

    const updatedTask = { ...tasks[taskIndex], ...updates };
    tasks[taskIndex] = updatedTask;
    
    await saveTasks(tasks);
    return updatedTask;
  } catch (error) {
    console.error('Error updating task:', error);
    throw new Error('Failed to update task');
  }
};

export const deleteTask = async (taskId: string): Promise<void> => {
  try {
    const tasks = await loadTasks();
    const task = tasks.find(t => t.id === taskId);
    
    // Cancel notification if exists
    if (task?.notificationId) {
      await cancelNotification(task.notificationId);
    }
    
    const filteredTasks = tasks.filter(t => t.id !== taskId);
    await saveTasks(filteredTasks);
  } catch (error) {
    console.error('Error deleting task:', error);
    throw new Error('Failed to delete task');
  }
};

export const toggleTaskCompletion = async (taskId: string): Promise<Task> => {
  try {
    const tasks = await loadTasks();
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex === -1) {
      throw new Error('Task not found');
    }

    const task = tasks[taskIndex];
    const updatedTask = { ...task, completed: !task.completed };

    // Cancel notification if task is being marked complete
    if (!task.completed && task.notificationId) {
      await cancelNotification(task.notificationId);
      updatedTask.notificationId = undefined;
    }

    tasks[taskIndex] = updatedTask;
    await saveTasks(tasks);
    
    return updatedTask;
  } catch (error) {
    console.error('Error toggling task completion:', error);
    throw new Error('Failed to update task');
  }
};

export const getUserTasks = async (userId: string): Promise<Task[]> => {
  try {
    const tasks = await loadTasks();
    return tasks.filter(task => task.userId === userId);
  } catch (error) {
    console.error('Error getting user tasks:', error);
    return [];
  }
};

export const getTaskStats = (tasks: Task[]): TaskStats => {
  const now = new Date();
  
  const stats: TaskStats = {
    total: tasks.length,
    completed: 0,
    pending: 0,
    overdue: 0,
    byPriority: {
      low: 0,
      medium: 0,
      high: 0,
    },
  };

  tasks.forEach(task => {
    if (task.completed) {
      stats.completed++;
    } else {
      stats.pending++;
      
      // Check if overdue
      const dueDate = new Date(task.dueDate);
      if (dueDate < now) {
        stats.overdue++;
      }
    }

    // Count by priority
    switch (task.priority.toLowerCase()) {
      case 'low':
        stats.byPriority.low++;
        break;
      case 'medium':
        stats.byPriority.medium++;
        break;
      case 'high':
        stats.byPriority.high++;
        break;
    }
  });

  return stats;
};