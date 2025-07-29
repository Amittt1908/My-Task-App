import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatsCard } from '../../components/StatsCard';
import { useTasks } from '../../hooks/useTasks';

export default function StatsScreen() {
  const { stats, loading, refreshTasks } = useTasks();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#6366F1', '#8B5CF6']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.headerTitle}>Statistics</Text>
      </LinearGradient>

      <ScrollView 
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refreshTasks} />
        }
      >
        <StatsCard stats={stats} />
        
        <View style={styles.insightsCard}>
          <Text style={styles.insightsTitle}>Insights</Text>
          
          {stats.total === 0 ? (
            <Text style={styles.insightText}>
              Start adding tasks to see your productivity insights!
            </Text>
          ) : (
            <View style={styles.insightsList}>
              {stats.overdue > 0 && (
                <Text style={styles.insightText}>
                  📅 You have {stats.overdue} overdue task{stats.overdue > 1 ? 's' : ''}
                </Text>
              )}
              
              {stats.pending > 0 && (
                <Text style={styles.insightText}>
                  ⏰ {stats.pending} task{stats.pending > 1 ? 's' : ''} remaining to complete
                </Text>
              )}
              
              {stats.completed > 0 && (
                <Text style={styles.insightText}>
                  ✅ Great job! You've completed {stats.completed} task{stats.completed > 1 ? 's' : ''}
                </Text>
              )}
              
              {stats.byPriority.high > 0 && (
                <Text style={styles.insightText}>
                  🔥 Focus on {stats.byPriority.high} high priority task{stats.byPriority.high > 1 ? 's' : ''}
                </Text>
              )}
            </View>
          )}
        </View>
      </ScrollView>
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  insightsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  insightsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  insightsList: {
    gap: 12,
  },
  insightText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
});