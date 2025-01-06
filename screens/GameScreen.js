import { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, Keyboard, TouchableWithoutFeedback } from 'react-native';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;
const BIRD_SIZE = 50;
const PIPE_WIDTH = 70;
const PIPE_GAP = 200;
const MOVEMENT_SPEED = 15;

export default function GameScreen({ navigation }) {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [birdX, setBirdX] = useState(50);
  const [birdY, setBirdY] = useState(WINDOW_HEIGHT / 2);
  
  const pipeX = useRef(new Animated.Value(WINDOW_WIDTH)).current;
  const [topPipeHeight, setTopPipeHeight] = useState(WINDOW_HEIGHT / 4);
  const pipeAnimation = useRef();

  const moveUp = () => {
    if (birdY > BIRD_SIZE) {
      setBirdY(y => y - MOVEMENT_SPEED);
    }
  };

  const moveDown = () => {
    if (birdY < WINDOW_HEIGHT - BIRD_SIZE) {
      setBirdY(y => y + MOVEMENT_SPEED);
    }
  };

  const moveLeft = () => {
    if (birdX > BIRD_SIZE) {
      setBirdX(x => x - MOVEMENT_SPEED);
    }
  };

  const moveRight = () => {
    if (birdX < WINDOW_WIDTH - BIRD_SIZE) {
      setBirdX(x => x + MOVEMENT_SPEED);
    }
  };

  const startGame = () => {
    setBirdX(50);
    setBirdY(WINDOW_HEIGHT / 2);
    setScore(0);
    setGameOver(false);
    animatePipe();
  };

  const animatePipe = () => {
    setTopPipeHeight(Math.random() * (WINDOW_HEIGHT - PIPE_GAP - 100) + 100);
    pipeX.setValue(WINDOW_WIDTH);
    
    Animated.timing(pipeX, {
      toValue: -PIPE_WIDTH,
      duration: 2500,
      useNativeDriver: true,
    }).start(() => {
      if (!gameOver) {
        setScore(score + 1);
        animatePipe();
      }
    });
  };

  const checkCollision = () => {
    const pipeXPos = pipeX._value;

    if (birdY < 0 || birdY > WINDOW_HEIGHT) {
      gameOverHandler();
      return;
    }

    if (
      pipeXPos < birdX + BIRD_SIZE && 
      pipeXPos > -PIPE_WIDTH &&
      (birdY < topPipeHeight || birdY > topPipeHeight + PIPE_GAP)
    ) {
      gameOverHandler();
    }
  };

  const gameOverHandler = () => {
    pipeX.stopAnimation();
    setGameOver(true);
  };

  useEffect(() => {
    startGame();
    const collisionInterval = setInterval(checkCollision, 16);

    return () => {
      clearInterval(collisionInterval);
      pipeX.stopAnimation();
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Controls */}
      <View style={styles.controls}>
        <TouchableWithoutFeedback onPress={moveUp}>
          <View style={styles.controlButton}>
            <Text style={styles.controlText}>↑</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.horizontalControls}>
          <TouchableWithoutFeedback onPress={moveLeft}>
            <View style={styles.controlButton}>
              <Text style={styles.controlText}>←</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={moveRight}>
            <View style={styles.controlButton}>
              <Text style={styles.controlText}>→</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <TouchableWithoutFeedback onPress={moveDown}>
          <View style={styles.controlButton}>
            <Text style={styles.controlText}>↓</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      {/* Bird */}
      <View
        style={[
          styles.bird,
          {
            left: birdX,
            top: birdY,
          },
        ]}
      />
      
      {/* Pipes */}
      <Animated.View
        style={[
          styles.pipe,
          styles.topPipe,
          {
            height: topPipeHeight,
            transform: [{ translateX: pipeX }],
          },
        ]}
      />
      
      <Animated.View
        style={[
          styles.pipe,
          styles.bottomPipe,
          {
            height: WINDOW_HEIGHT - topPipeHeight - PIPE_GAP,
            transform: [{ translateX: pipeX }],
          },
        ]}
      />

      <Text style={styles.score}>{score}</Text>
      
      {gameOver && (
        <View style={styles.gameOverContainer}>
          <Text style={styles.gameOverText}>Game Over!</Text>
          <Text style={styles.finalScore}>Score: {score}</Text>
          <TouchableWithoutFeedback onPress={startGame}>
            <View style={styles.restartButton}>
              <Text style={styles.restartText}>Tap to Restart</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4AC6FF',
  },
  bird: {
    position: 'absolute',
    width: BIRD_SIZE,
    height: BIRD_SIZE,
    borderRadius: BIRD_SIZE / 2,
    backgroundColor: '#FFD700',
  },
  pipe: {
    position: 'absolute',
    width: PIPE_WIDTH,
    backgroundColor: '#2ECC71',
  },
  topPipe: {
    top: 0,
  },
  bottomPipe: {
    bottom: 0,
  },
  score: {
    position: 'absolute',
    top: 50,
    width: WINDOW_WIDTH,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  gameOverContainer: {
    position: 'absolute',
    top: WINDOW_HEIGHT / 2 - 100,
    width: WINDOW_WIDTH,
    alignItems: 'center',
  },
  gameOverText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  finalScore: {
    fontSize: 30,
    color: '#fff',
    marginTop: 10,
  },
  restartButton: {
    backgroundColor: '#2ECC71',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  restartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  controls: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    zIndex: 1,
    alignItems: 'center',
  },
  horizontalControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
    marginVertical: 10,
  },
  controlButton: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
}); 