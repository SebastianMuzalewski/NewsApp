/* @Page: 2 | Search
 * Briefing: Component is used to render search page of the application.
 * 
 * 
 */

import ViewLatest from './ViewLatest';

import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Animated, Easing} from 'react-native';
import { useRef, useEffect } from 'react';

function DelayedOutro(){
  const delayedA = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const delayedB = useRef(new Animated.ValueXY({ x: 50, y: 50 })).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(delayedA, {
        easing: Easing.bounce,
        toValue: 400,
        duration: 5000,
    }),
      Animated.delay(1500),
      Animated.timing(delayedB, {
        toValue: 400,
        duration: 5000,
    })
    ]).start()
  });

  return(
    <Animated.View style={{
      top: delayedA.x,
      position: 'absolute',
      alignItems: 'center', justifyContent: 'center'}}>
      <Text>I am Delayed!</Text>
    </Animated.View>
  )
}

function Search({navigation}) {
  return (
      <View>
        <Text>Search page to render search bar.</Text>
        <Animated.View>
          <DelayedOutro/>
        </Animated.View>
        <Button title="Next Page" onPress={() => navigation.navigate("ViewLatest")}></Button>
      </View>
  )

}

export default Search
