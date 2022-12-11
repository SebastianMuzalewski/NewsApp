/* @Page: 5 | About us page
 * Breifing: This component is used to render the about us page of the application.
 * Animation01: Spinning Logo | Status: Complete | Purpose: To show our offical logo
 * Animation05: 
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
     <Animated.View style={{ transform: [{rotate}]}}>
        <Image source={require('../assets/logo.png')} style={{width: 200, height: 200, alignSelf: "center"}}/>
       </Animated.View>
  </View>
 )
}

function Box(props){
  return <Animated.View style={[styles.cube,{
    top:props.Top,backgroundColor:props.Color,left:props.Left,width:100}]}>
   <Text style={{color:props.TextColor}}>{props.Text}</Text>
  </Animated.View>
}

function About() {
  
  const leader = useRef( new Animated.Value(0)).current;
  const follower = useRef( new Animated.Value(0)).current; 
  //Here the follower object is a spring that follows the leader within the toValue where
  //it's mass is dependent on how fast it moves and the velocity determining the speed
  //of the object
  Animated.spring(follower, { toValue: leader}).start();
  //here timining is used to move the leader object to it's final poistion
  Animated.spring(leader, { toValue: 250}).start();
  
  //Leader and follower objects
  return (
    <View >
      <SpinningLogo/>
      <Box Top={leader} Text="Leader" Color="#1c9c33" TextColor="white" Left={250}/>
      <Box Top={follower} Text="Follower" Color="#601c9c" TextColor="white" Left={50}/>
    </View>
  );
}

const styles = StyleSheet.create({
  cube: {    
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,},
 });


export default About
