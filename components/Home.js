/* @Page: 1 | Home Page
 * Breifing: Component is used to render home page of the application.
 * Animation02: Falling title text | Status : Complete | Purpose: When the app runs for the first
 * time text will fall down from the top of the screen
 * Animation04: Stagger "Navbar" | Status : Complete | Purpose: For show mainly, I think it looks cool


  This home page will focus on our ability to demonstrate navigation between pages, and using 
  the Modal component, Pressable component will also be incorporated into this section. 

 */

import FinancialNews from './FinancialNews';
import ViewLatest from './ViewLatest';

import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { StyleSheet, Text, View, Easing, Button, Modal, Animated } from 'react-native';
// our components imported above.
import { Alert } from 'react-native';
import { Pressable } from 'react-native';
// pressable imported for modal to be interactive.
import { useState } from 'react';
// import useState to track our modal state.

import { MaterialIcons } from '@expo/vector-icons';
// Just a package that was founded which has icons we can use, if needed.

import { useRef, useEffect } from 'react';
// Used for animationss

function Home({ navigation }) {
  // a state will need to be tracking our modal.
  const [modalOpen, setModalOpen] = useState(false);

  const ddS = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    Animated.timing(ddS, {easing: Easing.bounce,toValue: 100,duration: 2000,}).start();
  });

  const leftSide01 = useRef(
    new Animated.ValueXY({ x: -100, y: 0 })
  ).current;

  const rightSide01 = useRef(
    new Animated.ValueXY({ x: 100, y: 0 })
  ).current;
  const leftSide02 = useRef(
    new Animated.ValueXY({ x: -100, y: 0 })
  ).current;

  const rightSide02 = useRef(
    new Animated.ValueXY({ x: 100, y: 0 })
  ).current;
  
    useEffect(() => {
      Animated.stagger(1000, [
        Animated.spring(leftSide01.x, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.spring(rightSide01.x, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.spring(leftSide02.x, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.spring(rightSide02.x, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }, []);
  

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          position: 'absolute',
          top: ddS.x,
          backgroundColor: 'greyy',
          margin: 15
        }}>
      <Text style={styles.text}>Welcome to the News App</Text>
      </Animated.View>
      <Modal
        visible={modalOpen}
        animationType="fade"
        style={styles.modalSection}
      >
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={styles.modalToggle}
            onPress={() => setModalOpen(false)}
          />

          <Text style={styles.modalText}>
            This is a react native application that will be used to demonstrate
            Jonathan and Sebastian's abilities to create a mobile application.
          </Text>
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <Animated.View style={{transform: [
        { translateX: leftSide01.x },
        { translateY: leftSide01.y }],}}>
      <Button
        title="View Latest"
        onPress={() => navigation.navigate('ViewLatest')}
        styles={styles.button}
      ></Button>
      </Animated.View>

      <Animated.View style={{transform: [
        { translateX: rightSide01.x },
        { translateY: rightSide01.y }],}}>
      <Button
        title="View Financial"
        onPress={() => navigation.navigate('FinancialNews')}
        styles={styles.button}
      ></Button>
      </Animated.View>

      <Animated.View style={{transform: [
        { translateX: leftSide02.x },
        { translateY: leftSide02.y }],}}>
      <Button
        title="View About"
        onPress={() => navigation.navigate('About')}
        styles={styles.button}
      >
      </Button>
      </Animated.View>

      <Animated.View style={{transform: [
        { translateX: rightSide02.x },
        { translateY: rightSide02.y }],}}>
      <Button
        title="View progress bar"
        onPress={() => navigation.navigate('ProgressBar')}
        styles={styles.button}>
      </Button>
      </Animated.View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CF1D4',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 40,
    position: 'relative',
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    margin: 10,

    padding: 8,
    color: 'black',
    borderRadius: 14,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 40,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'blue',
    backgroundColor: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 20,
    padding: 35,
    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalSection: {
    flex: 13,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
