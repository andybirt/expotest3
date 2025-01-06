import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Welcome Section */}
        <View style={styles.headerSection}>
          <View>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.nameText}>John Broker</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Ionicons name="person-circle" size={32} color="#0A66C2" />
          </TouchableOpacity>
        </View>

        {/* Quick Stats Row */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.statsScrollView}
        >
          <View style={styles.statsContainer}>
            <View style={[styles.statCard, { borderLeftColor: '#0A66C2' }]}>
              <View style={styles.statHeader}>
                <Ionicons name="people" size={20} color="#0A66C2" />
                <Text style={styles.statLabel}>Active Clients</Text>
              </View>
              <Text style={styles.statNumber}>124</Text>
              <Text style={styles.statGrowth}>+12% this month</Text>
            </View>

            <View style={[styles.statCard, { borderLeftColor: '#16A34A' }]}>
              <View style={styles.statHeader}>
                <Ionicons name="document-text" size={20} color="#16A34A" />
                <Text style={styles.statLabel}>Active Policies</Text>
              </View>
              <Text style={styles.statNumber}>287</Text>
              <Text style={styles.statGrowth}>+8% this month</Text>
            </View>

            <View style={[styles.statCard, { borderLeftColor: '#EA580C' }]}>
              <View style={styles.statHeader}>
                <Ionicons name="time" size={20} color="#EA580C" />
                <Text style={styles.statLabel}>Pending Renewals</Text>
              </View>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statGrowth}>Action needed</Text>
            </View>
          </View>
        </ScrollView>

        {/* Tasks Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's Tasks</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllButton}>See All</Text>
            </TouchableOpacity>
          </View>
          
          {[1, 2, 3].map((item) => (
            <TouchableOpacity key={item} style={styles.taskCard}>
              <View style={styles.taskPriority} />
              <View style={styles.taskContent}>
                <Text style={styles.taskTitle}>Follow up with Sarah Johnson</Text>
                <Text style={styles.taskSubtitle}>Policy renewal discussion</Text>
                <View style={styles.taskMeta}>
                  <Ionicons name="time-outline" size={14} color="#64748B" />
                  <Text style={styles.taskTime}>2:00 PM</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionGrid}>
            {[
              { icon: 'add-circle', title: 'New Client', color: '#0A66C2' },
              { icon: 'document-text', title: 'New Policy', color: '#16A34A' },
              { icon: 'calendar', title: 'Schedule', color: '#EA580C' },
              { icon: 'analytics', title: 'Reports', color: '#7C3AED' },
            ].map((action, index) => (
              <TouchableOpacity key={index} style={styles.actionButton}>
                <View style={[styles.actionIcon, { backgroundColor: `${action.color}15` }]}>
                  <Ionicons name={action.icon} size={24} color={action.color} />
                </View>
                <Text style={styles.actionText}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  welcomeText: {
    fontSize: 14,
    color: '#64748B',
  },
  nameText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0F172A',
  },
  profileButton: {
    padding: 4,
  },
  statsScrollView: {
    paddingVertical: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginRight: 12,
    width: Dimensions.get('window').width * 0.7,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  statLabel: {
    fontSize: 14,
    color: '#64748B',
    marginLeft: 8,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '600',
    color: '#0F172A',
  },
  statGrowth: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 4,
  },
  sectionContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
  },
  seeAllButton: {
    color: '#0A66C2',
    fontSize: 14,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  taskPriority: {
    width: 4,
    height: 40,
    backgroundColor: '#0A66C2',
    borderRadius: 2,
    marginRight: 12,
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0F172A',
  },
  taskSubtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 2,
  },
  taskMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  taskTime: {
    fontSize: 12,
    color: '#64748B',
    marginLeft: 4,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginHorizontal: -8,
  },
  actionButton: {
    width: '50%',
    padding: 8,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '500',
  },
}); 