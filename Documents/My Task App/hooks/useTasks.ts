import { useState, useEffect } from 'react';
import { Task, TaskStats } from '../types';
import { getUserTasks, getTaskStats } from '../services/taskService';
import { useAuth } from '../context/AuthContext';

interface UseTasksReturn {
  tasks: Task[];
  loading: boolean;
  filteredTasks: Task[];
  stats: TaskStats;
  filters: {
    priority: string;
    status: string;
  };
  setFilters: (filters: { priority: string; status: string }) => void;
  refreshTasks: () => Promise<void>;
}

export const useTasks = (): UseTasksReturn => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    priority: 'All',
    status: 'All',
  });

  const loadUserTasks = async () => {
    if (!user) {
      setTasks([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const userTasks = await getUserTasks(user.id);
      setTasks(userTasks);
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUserTasks();
  }, [user]);

  const filteredTasks = tasks.filter((task) => {
    const priorityMatch = filters.priority === 'All' || task.priority === filters.priority;
    const statusMatch = 
      filters.status === 'All' ||
      (filters.status === 'Completed' && task.completed) ||
      (filters.status === 'Incomplete' && !task.completed);
    
    return priorityMatch && statusMatch;
  });

  const stats = getTaskStats(tasks);

  const refreshTasks = async () => {
    await loadUserTasks();
  };

  return {
    tasks,
    loading,
    filteredTasks,
    stats,
    filters,
    setFilters,
    refreshTasks,
  };
};