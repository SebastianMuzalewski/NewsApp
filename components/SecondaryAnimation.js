

import React from 'react';

// Necessary react native components
import { StyleSheet, Text, View, Button, Animated, Easing } from 'react-native';
import { FlatList, ActivityIndicator } from 'react-native';
import { useState, useEffect, useRef } from 'react';

// Function below to fetch data from the financial news api to return market news
// Where the search bar will be imported
import Search from './Search';
StyleSheet;



function SecondaryAnimation({ navigation }) {
  // Search bar animation
  const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  useEffect(() => {
    Animated.sequence([
      Animated.spring(translation.x, {
        toValue: -100,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.spring(translation.x, {
          toValue: -100,
          useNativeDriver: true,
        }),
        Animated.spring(translation.x, {
          toValue: 100,
          useNativeDriver: true,
        }),
      ]),
      Animated.spring(translation.x, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  /*
 
*/

  return (
    <View style={styles.container}>
      <Animated.View >
        <Search />
      </Animated.View>

    </View>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CF1D4',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SecondaryAnimation;
