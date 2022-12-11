/* @Page: 4 | Financial News
 * Breifing: Component is used to render financialNews api page of the application.
 * API01: View news from api | Status: Not Implemented | Purpose: To show a list of news apis
 * Animation03: 
 */

import React from 'react'
import { StyleSheet, Text, View, Button, Animated, Easing, useNativeDriver} from 'react-native';
import {FlatList, ActivityIndicator} from 'react-native'; 
import {useState, useEffect, useRef} from 'react';

import Search from "./Search" 

function FinancialNews({navigation}) {
  const translation = useRef(
    new Animated.ValueXY({ x: 0, y: 0 })
  ).current;
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
 
  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{translateX: translation.x }]}}>
          <Search/>
      </Animated.View>
    </View>

  )
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#CF1D4',
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
  }})

export default FinancialNews
