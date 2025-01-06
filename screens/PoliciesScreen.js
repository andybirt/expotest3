import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DUMMY_POLICIES = [
  { id: '1', client: 'Sarah Johnson', type: 'Business Insurance', expiryDate: '2024-12-20' },
  { id: '2', client: 'Michael Smith', type: 'Life Insurance', expiryDate: '2025-01-15' },
  { id: '3', client: 'Tech Solutions Inc.', type: 'Liability Insurance', expiryDate: '2024-08-30' },
];

export default function PoliciesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DUMMY_POLICIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.policyCard}>
            <View style={styles.policyInfo}>
              <Text style={styles.policyType}>{item.type}</Text>
              <Text style={styles.clientName}>{item.client}</Text>
              <Text style={styles.expiryDate}>Expires: {item.expiryDate}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#6B7280" />
          </TouchableOpacity>
        )}
      />
      
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  policyCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  policyInfo: {
    flex: 1,
  },
  policyType: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
  },
  clientName: {
    color: '#6B7280',
    marginTop: 4,
  },
  expiryDate: {
    color: '#2563EB',
    fontSize: 12,
    marginTop: 4,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#2563EB',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
}); 