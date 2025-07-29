import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Plus, Search } from 'lucide-react-native';
import { TaskCard } from '../../components/TaskCard';
import { TaskForm } from '../../components/TaskForm';
import { FilterBar } from '../../components/FilterBar';
import { useTasks } from '../../hooks/useTasks';
import { useAuth } from '../../context/AuthContext';
import { Task } from '../../types';

export default function TaskListScreen() {
  const { user } = useAuth();
  const { filteredTasks, loading, filters, setFilters, refreshTasks } = useTasks();
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleAddTask = () => {
    setEditingTask(null);
    setShowTaskForm(true);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setShowTaskForm(true);
  };

  const handleCloseForm = () => {
    setShowTaskForm(false);
    setEditingTask(null);
  };

  const handleTaskUpdate = async () => {
    await refreshTasks();
  };

  const groupTasksByDate = (tasks: Task[]) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const thisWeek = new Date(today);
    thisWeek.setDate(thisWeek.getDate() + 7);

    const groups = {
      today: [] as Task[],
      tomorrow: [] as Task[],
      thisWeek: [] as Task[],
      later: [] as Task[],
    };

    tasks.forEach((task) => {
      const taskDate = new Date(task.dueDate);
      
      if (taskDate.toDateString() === today.toDateString()) {
        groups.today.push(task);
      } else if (taskDate.toDateString() === tomorrow.toDateString()) {
        groups.tomorrow.push(task);
      } else if (taskDate <= thisWeek) {
        groups.thisWeek.push(task);
      } else {
        groups.later.push(task);
      }
    });

    return groups;
  };

  const taskGroups = groupTasksByDate(filteredTasks);

  const renderTaskGroup = (title: string, tasks: Task[]) => {
    if (tasks.length === 0) return null;

    return (
      <View key={title} style={styles.taskGroup}>
        <Text style={styles.groupTitle}>{title}</Text>
        {tasks.map((task) => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onEdit={handleEditTask}
            onUpdate={handleTaskUpdate}
          />
        ))}
      </View>
    );
  };

  const formatDate = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    };
    return today.toLocaleDateString('en-US', options);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#6366F1', '#8B5CF6']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>{formatDate()}</Text>
            <Text style={styles.headerTitle}>My Tasks</Text>
          </View>
          <TouchableOpacity style={styles.searchButton}>
            <Search size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <FilterBar filters={filters} onFiltersChange={setFilters} />

      <FlatList
        style={styles.taskList}
        contentContainerStyle={styles.taskListContent}
        data={[1]} // Dummy data to render our custom content
        renderItem={() => (
          <View>
            {renderTaskGroup('Today', taskGroups.today)}
            {renderTaskGroup('Tomorrow', taskGroups.tomorrow)}
            {renderTaskGroup('This Week', taskGroups.thisWeek)}
            {renderTaskGroup('Later', taskGroups.later)}
            
            {filteredTasks.length === 0 && !loading && (
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateText}>No tasks found</Text>
                <Text style={styles.emptyStateSubtext}>
                  Tap the + button to create your first task
                </Text>
              </View>
            )}
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refreshTasks} />
        }
      />

      <TouchableOpacity style={styles.fab} onPress={handleAddTask}>
        <Plus size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <TaskForm
        visible={showTaskForm}
        onClose={handleCloseForm}
        editingTask={editingTask}
        onUpdate={handleTaskUpdate}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 14,
    color: '#E0E7FF',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  searchButton: {
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
  },
  taskList: {
    flex: 1,
  },
  taskListContent: {
    padding: 20,
    paddingBottom: 100,
  },
  taskGroup: {
    marginBottom: 24,
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});