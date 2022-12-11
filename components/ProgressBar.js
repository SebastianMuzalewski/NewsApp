import React from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native';

import { useState } from 'react';
import * as Progress from 'react-native-progress';
import Constants from 'expo-constants';




function ProgressBar() {
  const [color , setColor] = useState('red')
  const [text,setText] = useState('')
  const counter = text.length; 

  const handleTextChange = (text) => {
    setText(text)
    if (counter > 0 && counter < 10) {
      setColor('red')
    } else if (counter >= 10 && counter < 20) {
      setColor('orange')
    } else if (counter >= 20 && counter < 30) {
      setColor('yellow')
    } else if (counter >= 30 && counter < 40) {
      setColor('green')
    } else if (counter >= 40 && counter < 50) {
      setColor('blue')
    } else if (counter >= 50 && counter < 60) {
      setColor('purple')
    } else if (counter >= 60 && counter < 70) {
      setColor('pink')
    } else if (counter >= 70 && counter < 80) {
      setColor('black')
    } else if (counter >= 80 && counter < 90) {
      setColor('grey')
    } else if (counter >= 90 && counter < 100) {
      setColor('white')
    } else if (counter >= 100) {
      setColor('brown')
    }
  }





  return (
    //make a view with text input and a prorgess bar, and make the progress bar change color based on the length of the text input
    <View style={styles.container}>
      <Text style={styles.text}>Enter some text to see the progress bar change color!</Text>
      <TextInput

        style={styles.input}
        placeholder="Enter your text here"
        placeholderTextColor="black"
        onChangeText={handleTextChange}
      />
      <Progress.Bar progress={counter/100} width={300} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 40,
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
    fontSize: 18,
    fontWeight: '500',
    borderColor: 'black',
    borderWidth: 1,
  },
});



export default ProgressBar
