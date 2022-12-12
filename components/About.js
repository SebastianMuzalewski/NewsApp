/* @Navbar Page: 3 | About
 * Breifing: This is responsible for showing the users who developed the page and the logo
 * of our application.
 * Animation01: Spinning Logo | Status: Almost Complete | Purpose: To show our offical logo
 * Animation05: Double Image | Status: Incomplete | Purpose: To show off two handson developers
 * that created this app.
 */

import React from 'react';

// Necessary react native components
import { StyleSheet, Text, View, Animated, Easing, Image } from 'react-native';
import { useRef, useEffect } from 'react';

// Spinning logo function
function SpinningLogo() {
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    spin();
  }, []);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,

      useNativeDriver:true,
    // use native driver supposed to get rid of this error? 
    
    }).start(() => spin());
  };

  return (
    <View>
      <Animated.View style={{ transform: [{ rotate }] }}>
        <Image
          source={require('../assets/Logo.png')}
          style={{ width: 200, height: 200, alignSelf: 'center' }}
        />
      </Animated.View>
    </View>
  );
}

// Temporary Function for functionality of our two images displaying
function Box(props) {
  return (
    <Animated.View
      style={[
        styles.cube,
        {
          top: props.Top,
          backgroundColor: props.Color,
          left: props.Left,
          width: 100,
        },
      ]}
    >
      <Text style={{ color: props.TextColor }}>{props.Text}</Text>
    </Animated.View>
  );
}

function About() {
  const leader = useRef(new Animated.Value(0)).current;
  const follower = useRef(new Animated.Value(0)).current;

  Animated.spring(follower, { toValue: leader }).start();

  Animated.spring(leader, { toValue: 250 }).start();

  return (
    <View>
      <SpinningLogo />
      <Box
        Top={leader}
        Text="Leader"
        Color="#1c9c33"
        TextColor="white"
        Left={250}
      />
      <Box
        Top={follower}
        Text="Follower"
        Color="#601c9c"
        TextColor="white"
        Left={50}
      />
    </View>
  );
}

// Styling
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
    shadowRadius: 3,
  },
});

export default About;
