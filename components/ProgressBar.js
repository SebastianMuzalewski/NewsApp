import { Animated, Easing } from 'react-native';
import { useEffect, useState, useRef } from 'react';

import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as Progress from 'react-native-progress';
import Constants from 'expo-constants';

function ProgressBar() {
  // declare a new animation for spring, paralell, and sequence
  const springValue = useRef(new Animated.Value(0)).current;
  const paralellValue = useRef(new Animated.Value(0)).current;
  const sequenceValue = useRef(new Animated.Value(0)).current;

  const [color, setColor] = useState('red');
  const [text, setText] = useState('');
  const counter = text.length;

  useEffect(() => {
    if (counter > 10) {
      setColor('green');
    } else {
      setColor('red');
    }
  }, [counter]);

  useEffect(() => {
    Animated.spring(springValue, {
      toValue: 1,
      friction: 1,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(paralellValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(paralellValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(sequenceValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(sequenceValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    // make the counter with the text input using progress bar and animated
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to our App </Text>
      <TextInput
        style={styles.input}
        placeholder="Type here to translate!"
        onChangeText={setText}
        defaultValue={text}
      />
      <Progress.Bar progress={counter / 10} width={200} color={color} />
      <Animated.View
        style={{
          transform: [
            {
              scale: springValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, 1, 0],
              }),
            },
          ],
        }}
      >
        <Text style={styles.text}>Spring</Text>
      </Animated.View>
      <Animated.View
        style={{
          transform: [
            {
              scale: paralellValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, 1, 0],
              }),
            },
          ],
        }}
      >
        <Text style={styles.text}>Paralell</Text>
      </Animated.View>
      <Animated.View
        style={{
          transform: [
            {
              scale: sequenceValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, 1, 0],
              }),
            },
          ],
        }}
      >
        <Text style={styles.text}>Sequence</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default ProgressBar;
