import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>COVA</Text>
          </View>
        </View>

        {/* AI Assistants Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AI Assistants</Text>
          
          {/* Cova CPD Card */}
          <TouchableOpacity style={styles.mainCard}>
            <View style={styles.iconContainer}>
              <Ionicons name="bulb" size={24} color="#fff" />
            </View>
            <Text style={styles.cardTitle}>Cova CPD</Text>
            <Text style={styles.cardDescription}>
              Simply talk to your friendly AI chatbot to build knowledge, run scenarios, and collect CPD points.
            </Text>
          </TouchableOpacity>

          {/* Feature Cards Row */}
          <View style={styles.featureRow}>
            <TouchableOpacity style={styles.featureCard}>
              <Ionicons name="ribbon" size={24} color="#fff" />
              <Text style={styles.featureTitle}>Badges</Text>
              <Text style={styles.featureDescription}>
                Collect AI badges for each point earned.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.featureCard}>
              <Ionicons name="language" size={24} color="#fff" />
              <Text style={styles.featureTitle}>Any language</Text>
              <Text style={styles.featureDescription}>
                If English is your second language we've got you.
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Suggestions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Suggestions</Text>
          
          {/* Filter Pills */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.pillsContainer}>
            <TouchableOpacity style={[styles.pill, styles.pillActive]}>
              <Text style={styles.pillTextActive}>Scenarios</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pill}>
              <Text style={styles.pillText}>Content</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pill}>
              <Text style={styles.pillText}>Multiple Choice</Text>
            </TouchableOpacity>
          </ScrollView>

          {/* Suggestion Cards */}
          <View style={styles.suggestionsList}>
            {[
              "Run through scenarios, that poses a business that needs cover and how you'll solve.",
              "You've stepped in to a new leadership position how do you train your more junior brokers.",
              "A historic example of a major claim, how could this have been handled differently."
            ].map((suggestion, index) => (
              <TouchableOpacity key={index} style={styles.suggestionCard}>
                <Text style={styles.suggestionText}>{suggestion}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Chat Input */}
        <View style={styles.chatInputContainer}>
          <TouchableOpacity style={styles.chatInput}>
            <Text style={styles.chatInputText}>Let's talk!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.micButton}>
            <Ionicons name="mic" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  mainCard: {
    backgroundColor: '#6B46C1',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardDescription: {
    color: '#fff',
    opacity: 0.8,
    lineHeight: 20,
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featureCard: {
    backgroundColor: '#1C1C1E',
    borderRadius: 15,
    padding: 15,
    width: '48%',
  },
  featureTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
  },
  featureDescription: {
    color: '#8E8E93',
    fontSize: 14,
    lineHeight: 18,
  },
  pillsContainer: {
    marginBottom: 20,
  },
  pill: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#1C1C1E',
  },
  pillActive: {
    backgroundColor: '#fff',
  },
  pillText: {
    color: '#fff',
  },
  pillTextActive: {
    color: '#000',
  },
  suggestionsList: {
    gap: 10,
  },
  suggestionCard: {
    backgroundColor: '#1C1C1E',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  suggestionText: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 22,
  },
  chatInputContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  chatInput: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    borderRadius: 25,
    padding: 15,
  },
  chatInputText: {
    color: '#8E8E93',
  },
  micButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 