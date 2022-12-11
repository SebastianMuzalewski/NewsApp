/* @Page: 5 | Animations Page
 * Breifing: This component is used to render animations page of the application.
 * Animation01: Spinning Logo | Status: Complete | Purpose: To show our offical logo
 * Animation03: 
 */


import React from 'react'

import { StyleSheet, Text, View, TextInput, Animated, Easing, Image} from 'react-native';
import { useRef, useEffect } from 'react';

function SpinningLogo() {
  const spinValue = new Animated.Value(0);

useEffect(()=>{ spin(); },[])

const rotate = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg']
})

const spin = () => {
  spinValue.setValue(0)
   Animated.timing(spinValue, {
    toValue: 1,
    duration: 1500,
    easing: Easing.linear,
    useNativeDriver: true
    }).start(() => spin())
}

return (
  <View>
     <Animated.View
         style={{
         transform: [{rotate}]
         }}>
           <Image source={require('../assets/logo.png')} style={{ alignSelf: "center"}}/>
       </Animated.View>
  </View>
 )
}

function Animations() {
  
  return (
   <View>
      <Text>Animations page to render animations.</Text>
      <Animated.View>
        <SpinningLogo/>
      </Animated.View>
   </View>
  )
}

export default Animations
