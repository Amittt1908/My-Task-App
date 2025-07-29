import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TaskStats } from '../types';
import { CircleCheck as CheckCircle, Clock, TriangleAlert as AlertTriangle, Target } from 'lucide-react-native';

interface StatsCardProps {
  stats: TaskStats;
}

export const StatsCard: React.FC<StatsCardProps> = ({ stats }) => {
  const completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Statistics</Text>
      
      <View style={styles.statsGrid}>
        <View style={styles.statItem}>
          <View style={[styles.statIcon, { backgroundColor: '#EEF2FF' }]}>
            <Target size={20} color="#6366F1" />
          </View>
          <Text style={styles.statNumber}>{stats.total}</Text>
          <Text style={styles.statLabel}>Total Tasks</Text>
        </View>

        <View style={styles.statItem}>
          <View style={[styles.statIcon, { backgroundColor: '#F0FDF4' }]}>
            <CheckCircle size={20} color="#10B981" />
          </View>
          <Text style={styles.statNumber}>{stats.completed}</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>

        <View style={styles.statItem}>
          <View style={[styles.statIcon, { backgroundColor: '#FEF3C7' }]}>
            <Clock size={20} color="#F59E0B" />
          </View>
          <Text style={styles.statNumber}>{stats.pending}</Text>
          <Text style={styles.statLabel}>Pending</Text>
        </View>

        <View style={styles.statItem}>
          <View style={[styles.statIcon, { backgroundColor: '#FEE2E2' }]}>
            <AlertTriangle size={20} color="#EF4444" />
          </View>
          <Text style={styles.statNumber}>{stats.overdue}</Text>
          <Text style={styles.statLabel}>Overdue</Text>
        </View>
      </View>

      <View style={styles.progressSection}>
        <Text style={styles.progressTitle}>Completion Rate</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${completionRate}%` }]} />
        </View>
        <Text style={styles.progressText}>{completionRate}% Complete</Text>
      </View>

      <View style={styles.prioritySection}>
        <Text style={styles.sectionTitle}>By Priority</Text>
        <View style={styles.priorityStats}>
          <View style={styles.priorityItem}>
            <View style={[styles.priorityDot, { backgroundColor: '#10B981' }]} />
            <Text style={styles.priorityLabel}>Low: {stats.byPriority.low}</Text>
          </View>
          <View style={styles.priorityItem}>
            <View style={[styles.priorityDot, { backgroundColor: '#F97316' }]} />
            <Text style={styles.priorityLabel}>Medium: {stats.byPriority.medium}</Text>
          </View>
          <View style={styles.priorityItem}>
            <View style={[styles.priorityDot, { backgroundColor: '#EF4444' }]} />
            <Text style={styles.priorityLabel}>High: {stats.byPriority.high}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 20,
  },
  statItem: {
    flex: 1,
    minWidth: '45%',
    alignItems: 'center',
    padding: 12,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  progressSection: {
    marginBottom: 20,
  },
  progressTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#6366F1',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  prioritySection: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 12,
  },
  priorityStats: {
    gap: 8,
  },
  priorityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  priorityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  priorityLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
});