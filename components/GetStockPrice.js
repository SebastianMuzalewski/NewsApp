/*
This page will contain  a function for a user to search for 
Stock prices using the api provided by aplhavantage

*/
import React from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Animated } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

// API key - C03B42T0K5V84OSM

function GetStockPrice() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [response, setResponse] = useState();
  const [symbol, setSymbol] = useState('');

  // key for access to api

  const [ticker, setTicker] = useState('');
  const API_KEY = 'C03B42T0K5V84OSM';

  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${API_KEY}`;

  // define an animation for the overall page to do a fade in effect as soon as the page loads

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 7,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  // make an animation for the textinput to do a bounce effect as soon as the page loads

  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(bounceAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [bounceAnim]);

  //  make an animation for the stock price text to do a rotating effect as soon as user clicks the button to search for the stock price

  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [rotateAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.text}>Enter a stock ticker to get the price!</Text>
      <Animated.View
        style={{
          transform: [
            {
              scale: bounceAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0.8, 1.2, 1],
              }),
            },
          ],
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Enter a stock ticker"
          onChangeText={(text) => setTicker(text)}
        />
      </Animated.View>

      <Button title="Get Stock Price" onPress={fetchData} />
      <Animated.Text
        style={{
          transform: [
            {
              rotate: rotateAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ['0deg', '360deg', '0deg'],
              }),
            },
          ],
        }}
      >
        {response}
      </Animated.Text>
    </Animated.View>
  );
  async function fetchData() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setResponse(json['Global Quote']['05. price']);
    } catch (error) {
      console.error(error);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0D0D2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontStyle: 'italic',
    fontFamily: 'sans-serif',
    fontWeight: '800',
    color: '#000',
    padding: 40,
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});

export default GetStockPrice;
