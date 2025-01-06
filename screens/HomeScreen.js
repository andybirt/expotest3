import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flappy Cova</Text>
      <Ionicons name="bird" size={64} color="#FFD700" />
      <TouchableOpacity 
        style={styles.startButton}
        onPress={() => navigation.navigate('Game')}
      >
        <Text style={styles.startText}>Start Game</Text>
      </TouchableOpacity>
      
      <View style={styles.highScore}>
        <Text style={styles.scoreText}>High Score: 0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4AC6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  startButton: {
    backgroundColor: '#2ECC71',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 40,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  startText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  highScore: {
    position: 'absolute',
    bottom: 50,
  },
  scoreText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
}); 