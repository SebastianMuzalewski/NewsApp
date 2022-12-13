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
          style={{ width: 200, height: 200, alignSelf: 'center', borderRadius: 200/2, borderColor: 'black', borderWidth: 3 }}
        />
      </Animated.View>
    </View>
  );
}

// Temporary Function for functionality of our two images displaying
function BoxExplination(props) {
  return (
    <Animated.View
      style={[
        styles.portrait,
        {
          top: props.Top,
          backgroundColor: props.Color,
          left: props.Left,
          width: 100,
          borderColor: 'black',
          borderWidth: 3,
          width: 175
        },
      ]}
    >
      <Image source={props.source} style={{ width: 150, height: 150, alignSelf: 'center', borderColor: 'black', borderWidth: 3}}/>
      <Text style={{ color: props.TextColor }}>{props.Text}</Text>
    </Animated.View>
  );
}

function About() {
  const dev01 = useRef(new Animated.Value(0)).current;
  const dev02 = useRef(new Animated.Value(0)).current;

 
  Animated.spring(dev02, { toValue: dev01 }).start();
  Animated.spring(dev01, { toValue: 350 }).start();

  return (
    <View>
      <Text style = {{
        marginTop: 25,
        marginBottom: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20}}
        >Dispatch Times Logo!</Text>
      <SpinningLogo />
      <Text style = {{
        marginTop: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,}}
        >The Developers who made this application!</Text>
      <BoxExplination
        Top={dev01}
        Text="Sebastain Muzalewski"
        Color="#94AC02"
        TextColor="black"
        Left={210}
        source={require('../assets/dev01.png')}   
      />
      <BoxExplination
        Top={dev02}
        Text="Jonathan Mohabir"
        Color="#70D1F4"
        TextColor="black"
        Left={10}
        source={require('../assets/dev02.png')}  
      />
    </View>
  );
}

// Styling
const styles = StyleSheet.create({
  portrait: {
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
