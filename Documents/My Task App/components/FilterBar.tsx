import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronDown } from 'lucide-react-native';

interface FilterBarProps {
  filters: {
    priority: string;
    status: string;
  };
  onFiltersChange: (filters: { priority: string; status: string }) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filters, onFiltersChange }) => {
  const [showPriorityDropdown, setShowPriorityDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  const priorities = ['All', 'Low', 'Medium', 'High'];
  const statuses = ['All', 'Incomplete', 'Completed'];

  const handlePriorityChange = (priority: string) => {
    onFiltersChange({ ...filters, priority });
    setShowPriorityDropdown(false);
  };

  const handleStatusChange = (status: string) => {
    onFiltersChange({ ...filters, status });
    setShowStatusDropdown(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterGroup}>
        <Text style={styles.filterLabel}>Priority</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => {
            setShowPriorityDropdown(!showPriorityDropdown);
            setShowStatusDropdown(false);
          }}
        >
          <Text style={styles.dropdownText}>{filters.priority}</Text>
          <ChevronDown size={16} color="#6B7280" />
        </TouchableOpacity>
        
        {showPriorityDropdown && (
          <View style={styles.dropdownOptions}>
            {priorities.map((priority) => (
              <TouchableOpacity
                key={priority}
                style={[
                  styles.option,
                  filters.priority === priority && styles.selectedOption,
                ]}
                onPress={() => handlePriorityChange(priority)}
              >
                <Text
                  style={[
                    styles.optionText,
                    filters.priority === priority && styles.selectedOptionText,
                  ]}
                >
                  {priority}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      <View style={styles.filterGroup}>
        <Text style={styles.filterLabel}>Status</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => {
            setShowStatusDropdown(!showStatusDropdown);
            setShowPriorityDropdown(false);
          }}
        >
          <Text style={styles.dropdownText}>{filters.status}</Text>
          <ChevronDown size={16} color="#6B7280" />
        </TouchableOpacity>
        
        {showStatusDropdown && (
          <View style={styles.dropdownOptions}>
            {statuses.map((status) => (
              <TouchableOpacity
                key={status}
                style={[
                  styles.option,
                  filters.status === status && styles.selectedOption,
                ]}
                onPress={() => handleStatusChange(status)}
              >
                <Text
                  style={[
                    styles.optionText,
                    filters.status === status && styles.selectedOptionText,
                  ]}
                >
                  {status}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    gap: 16,
  },
  filterGroup: {
    flex: 1,
    position: 'relative',
  },
  filterLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 4,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#F9FAFB',
  },
  dropdownText: {
    fontSize: 14,
    color: '#1F2937',
  },
  dropdownOptions: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 6,
    marginTop: 4,
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  option: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  selectedOption: {
    backgroundColor: '#EEF2FF',
  },
  optionText: {
    fontSize: 14,
    color: '#1F2937',
  },
  selectedOptionText: {
    color: '#6366F1',
    fontWeight: '600',
  },
});