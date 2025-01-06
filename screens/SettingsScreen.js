import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const settingsOptions = [
    { icon: 'person-circle', title: 'Account Settings', subtitle: 'Manage your profile and preferences' },
    { icon: 'notifications', title: 'Notifications', subtitle: 'Configure your notification settings' },
    { icon: 'shield-checkmark', title: 'Privacy & Security', subtitle: 'Manage your security preferences' },
    { icon: 'help-circle', title: 'Help & Support', subtitle: 'Get help and contact support' },
    { icon: 'information-circle', title: 'About', subtitle: 'App version and information' },
  ];

  return (
    <ScrollView style={styles.container}>
      {settingsOptions.map((option, index) => (
        <TouchableOpacity key={index} style={styles.settingCard}>
          <View style={styles.iconContainer}>
            <Ionicons name={option.icon} size={24} color="#2563EB" />
          </View>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>{option.title}</Text>
            <Text style={styles.settingSubtitle}>{option.subtitle}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  settingCard: {
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EBF5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
}); 