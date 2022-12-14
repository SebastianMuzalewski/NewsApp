/*
This page will contain  a function for a user to search for 
Stock prices using the api provided by aplhavantage

*/
import React from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Animated } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { Modal, Pressable, Alert } from 'react-native';

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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stock Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a stock symbol"
        onChangeText={(val) => setTicker(val)}
      />
      <Button title="Search" onPress={fetchData} />
      <Text style={styles.text}>Stock Price: {response}</Text>
    </View>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default GetStockPrice;
